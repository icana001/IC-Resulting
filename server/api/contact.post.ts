import nodemailer from 'nodemailer'

// =============================================================================
// TYPEN
// =============================================================================
interface ContactForm {
  name: string
  company?: string
  email: string
  phone?: string
  subject?: string
  message: string
  turnstileToken: string
  // Honeypot-Feld (muss leer sein)
  website?: string
}

interface TurnstileResponse {
  success: boolean
  'error-codes'?: string[]
  challenge_ts?: string
  hostname?: string
}

// =============================================================================
// RATE LIMITING (In-Memory für Nitro)
// =============================================================================
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT_MAX = 5 // Max Requests
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000 // 10 Minuten

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  // Alte Einträge bereinigen (alle 100 Requests)
  if (rateLimitMap.size > 1000) {
    for (const [key, value] of rateLimitMap.entries()) {
      if (now > value.resetTime) {
        rateLimitMap.delete(key)
      }
    }
  }

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS })
    return true
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false
  }

  record.count++
  return true
}

// =============================================================================
// HILFSFUNKTIONEN
// =============================================================================

// XSS-Schutz: HTML-Entities escapen
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }
  return text.replace(/[&<>"']/g, (char) => map[char])
}

// Header-Injection-Schutz: Newlines und gefährliche Zeichen entfernen
function sanitizeHeaderValue(value: string): string {
  return value.replace(/[\r\n\t]/g, ' ').trim()
}

// Input-Validierung
function validateInput(body: ContactForm): string | null {
  // Pflichtfelder prüfen
  if (!body.name?.trim() || !body.email?.trim() || !body.message?.trim()) {
    return 'Bitte füllen Sie alle Pflichtfelder aus.'
  }

  // Name: 2-100 Zeichen, keine Sonderzeichen die auf Injection hindeuten
  if (body.name.length < 2 || body.name.length > 100) {
    return 'Der Name muss zwischen 2 und 100 Zeichen lang sein.'
  }
  if (/[<>{}]/.test(body.name)) {
    return 'Der Name enthält ungültige Zeichen.'
  }

  // E-Mail: Striktere Validierung
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  if (!emailRegex.test(body.email) || body.email.length > 254) {
    return 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
  }

  // Nachricht: 10-5000 Zeichen
  if (body.message.length < 10 || body.message.length > 5000) {
    return 'Die Nachricht muss zwischen 10 und 5000 Zeichen lang sein.'
  }

  // Optionale Felder
  if (body.company && body.company.length > 200) {
    return 'Der Unternehmensname ist zu lang.'
  }

  if (body.phone && (body.phone.length > 30 || !/^[\d\s\-+()]*$/.test(body.phone))) {
    return 'Bitte geben Sie eine gültige Telefonnummer ein.'
  }

  // Turnstile Token prüfen
  if (!body.turnstileToken?.trim()) {
    return 'Bitte bestätigen Sie, dass Sie kein Roboter sind.'
  }

  return null
}

// Client-IP ermitteln
function getClientIP(event: Parameters<typeof defineEventHandler>[0] extends (e: infer E) => any ? E : never): string {
  const forwarded = getHeader(event, 'x-forwarded-for')
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  const realIp = getHeader(event, 'x-real-ip')
  if (realIp) {
    return realIp
  }
  return event.node.req.socket.remoteAddress || 'unknown'
}

// =============================================================================
// HAUPTHANDLER
// =============================================================================
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  
  // IP-Adresse für Rate Limiting
  const clientIP = getClientIP(event)

  // 1) RATE LIMITING
  if (!checkRateLimit(clientIP)) {
    throw createError({
      statusCode: 429,
      statusMessage: 'Zu viele Anfragen. Bitte versuchen Sie es in einigen Minuten erneut.'
    })
  }

  // 2) BODY PARSEN
  const body = await readBody<ContactForm>(event)

  // 3) HONEYPOT-CHECK (Bot-Falle)
  // Das Feld "website" ist im Frontend unsichtbar - wenn es ausgefüllt ist, ist es ein Bot
  if (body.website && body.website.trim() !== '') {
    // Leise ablehnen (kein Hinweis für den Bot)
    return {
      success: true,
      message: 'Ihre Nachricht wurde erfolgreich gesendet.'
    }
  }

  // 4) INPUT-VALIDIERUNG
  const validationError = validateInput(body)
  if (validationError) {
    throw createError({
      statusCode: 400,
      statusMessage: validationError
    })
  }

  // 5) TURNSTILE TOKEN VERIFIZIEREN (serverseitig!)
  try {
    const turnstileResponse = await $fetch<TurnstileResponse>(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        body: new URLSearchParams({
          secret: config.turnstileSecret,
          response: body.turnstileToken,
          remoteip: clientIP
        })
      }
    )

    if (!turnstileResponse.success) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Sicherheitsprüfung fehlgeschlagen. Bitte laden Sie die Seite neu und versuchen Sie es erneut.'
      })
    }
  } catch (error: unknown) {
    // Turnstile-Fehler generisch behandeln
    if (error && typeof error === 'object' && 'statusCode' in error) {
      throw error
    }
    throw createError({
      statusCode: 400,
      statusMessage: 'Sicherheitsprüfung fehlgeschlagen. Bitte versuchen Sie es erneut.'
    })
  }

  // 6) DATEN SANITIEREN
  const sanitizedData = {
    name: sanitizeHeaderValue(body.name.trim()),
    company: body.company ? sanitizeHeaderValue(body.company.trim()) : '',
    email: sanitizeHeaderValue(body.email.trim().toLowerCase()),
    phone: body.phone ? sanitizeHeaderValue(body.phone.trim()) : '',
    subject: body.subject ? sanitizeHeaderValue(body.subject.trim()) : '',
    message: body.message.trim()
  }

  // 7) SMTP TRANSPORTER (Credentials nur aus runtimeConfig, NICHT aus Client!)
  const transporter = nodemailer.createTransport({
    host: config.smtp.host,
    port: config.smtp.port,
    secure: true,
    auth: {
      user: config.smtp.user,
      pass: config.smtp.pass
    }
  })

  // 8) E-MAIL INHALTE ERSTELLEN
  const subjectMap: Record<string, string> = {
    'it-verantwortung': 'IT-Verantwortung übergeben',
    'projektleitung': 'IT-Projektleitung',
    'softwareentwicklung': 'Softwareentwicklung',
    'ki-automatisierung': 'KI & Automatisierung',
    'devops-cloud': 'DevOps & Cloud',
    'webseiten': 'Webseiten & CMS',
    'schulungen': 'Schulungen',
    'karriere': 'Karriere / Bewerbung',
    'sonstiges': 'Sonstiges'
  }

  const subjectText = sanitizedData.subject 
    ? subjectMap[sanitizedData.subject] || 'Allgemeine Anfrage' 
    : 'Allgemeine Anfrage'

  // HTML-Content mit escaped Werten (XSS-Schutz)
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #2563eb, #7c3aed); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f8fafc; padding: 20px; border: 1px solid #e2e8f0; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #64748b; font-size: 12px; text-transform: uppercase; }
        .value { margin-top: 4px; }
        .message-box { background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #2563eb; }
        .footer { background: #1e293b; color: #94a3b8; padding: 15px; text-align: center; font-size: 12px; border-radius: 0 0 8px 8px; }
        .meta { font-size: 11px; color: #94a3b8; margin-top: 10px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin: 0; font-size: 20px;">Neue Kontaktanfrage</h1>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">über ic-resulting.de</p>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Name</div>
            <div class="value">${escapeHtml(sanitizedData.name)}</div>
          </div>
          ${sanitizedData.company ? `
          <div class="field">
            <div class="label">Unternehmen</div>
            <div class="value">${escapeHtml(sanitizedData.company)}</div>
          </div>
          ` : ''}
          <div class="field">
            <div class="label">E-Mail</div>
            <div class="value"><a href="mailto:${escapeHtml(sanitizedData.email)}">${escapeHtml(sanitizedData.email)}</a></div>
          </div>
          ${sanitizedData.phone ? `
          <div class="field">
            <div class="label">Telefon</div>
            <div class="value"><a href="tel:${escapeHtml(sanitizedData.phone)}">${escapeHtml(sanitizedData.phone)}</a></div>
          </div>
          ` : ''}
          <div class="field">
            <div class="label">Thema</div>
            <div class="value">${escapeHtml(subjectText)}</div>
          </div>
          <div class="field">
            <div class="label">Nachricht</div>
            <div class="message-box">${escapeHtml(sanitizedData.message).replace(/\n/g, '<br>')}</div>
          </div>
          <div class="meta">
            IP: ${escapeHtml(clientIP)} | Gesendet: ${new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })}
          </div>
        </div>
        <div class="footer">
          Diese E-Mail wurde automatisch über das Kontaktformular auf ic-resulting.de gesendet.<br>
          Turnstile-Verifizierung: ✓ Bestanden
        </div>
      </div>
    </body>
    </html>
  `

  const textContent = `
Neue Kontaktanfrage über ic-resulting.de
=========================================

Name: ${sanitizedData.name}
${sanitizedData.company ? `Unternehmen: ${sanitizedData.company}\n` : ''}E-Mail: ${sanitizedData.email}
${sanitizedData.phone ? `Telefon: ${sanitizedData.phone}\n` : ''}Thema: ${subjectText}

Nachricht:
${sanitizedData.message}

---
IP: ${clientIP}
Gesendet: ${new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })}
Turnstile-Verifizierung: Bestanden
  `

  // 9) E-MAILS SENDEN
  try {
    // Hauptmail an IC-RESULTING
    await transporter.sendMail({
      from: `"IC-RESULTING Website" <${config.smtp.from}>`,
      to: config.smtp.to,
      replyTo: sanitizedData.email,
      subject: `[Kontaktanfrage] ${subjectText} - ${sanitizedData.name}`,
      text: textContent,
      html: htmlContent
    })

    // Bestätigungsmail an Absender
    try {
      await transporter.sendMail({
        from: `"IC-RESULTING" <${config.smtp.from}>`,
        to: sanitizedData.email,
        subject: `Ihre Anfrage bei IC-RESULTING`,
        text: `
Guten Tag ${sanitizedData.name},

vielen Dank für Ihre Nachricht. Wir haben Ihre Anfrage erhalten und werden uns schnellstmöglich bei Ihnen melden.

Ihre Nachricht:
"${sanitizedData.message}"

Mit freundlichen Grüßen
Ihr IC-RESULTING Team

--
IC-RESULTING
Obere Webergasse 58
65183 Wiesbaden
Tel: +49 (0) 176 618 659 80
E-Mail: info@ic-resulting.de
Web: www.ic-resulting.de
        `,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #2563eb, #7c3aed); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center; }
              .content { background: #ffffff; padding: 30px; border: 1px solid #e2e8f0; }
              .message-box { background: #f8fafc; padding: 15px; border-radius: 8px; margin: 20px 0; }
              .footer { background: #1e293b; color: #94a3b8; padding: 20px; text-align: center; font-size: 12px; border-radius: 0 0 8px 8px; }
              .footer a { color: #60a5fa; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0; font-size: 24px;">Vielen Dank für Ihre Nachricht</h1>
              </div>
              <div class="content">
                <p>Guten Tag ${escapeHtml(sanitizedData.name)},</p>
                <p>vielen Dank für Ihre Nachricht. Wir haben Ihre Anfrage erhalten und werden uns schnellstmöglich bei Ihnen melden.</p>
                <div class="message-box">
                  <strong>Ihre Nachricht:</strong><br>
                  "${escapeHtml(sanitizedData.message)}"
                </div>
                <p>Mit freundlichen Grüßen<br><strong>Ihr IC-RESULTING Team</strong></p>
              </div>
              <div class="footer">
                <p><strong>IC-RESULTING</strong><br>
                Obere Webergasse 58 • 65183 Wiesbaden<br>
                Tel: +49 (0) 176 618 659 80<br>
                <a href="mailto:info@ic-resulting.de">info@ic-resulting.de</a> • 
                <a href="https://www.ic-resulting.de">www.ic-resulting.de</a></p>
              </div>
            </div>
          </body>
          </html>
        `
      })
    } catch {
      // Bestätigungsmail fehlgeschlagen - aber Hauptmail wurde gesendet
      // Kein Fehler werfen, da die wichtige Mail ankam
      console.warn('Bestätigungsmail konnte nicht gesendet werden')
    }

    return {
      success: true,
      message: 'Ihre Nachricht wurde erfolgreich gesendet.'
    }
  } catch (error: unknown) {
    // SMTP-Fehler analysieren für bessere Fehlermeldung
    let userMessage = 'Ihre Nachricht konnte leider nicht gesendet werden. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns telefonisch unter +49 (0) 176 618 659 80.'
    
    // Prüfen ob es ein bekannter SMTP-Fehler ist
    if (error && typeof error === 'object') {
      const smtpError = error as { code?: string; responseCode?: number; response?: string }
      
      // DMARC/SPF/DKIM Fehler (meist 550 oder 553)
      if (smtpError.responseCode === 550 || smtpError.responseCode === 553) {
        userMessage = 'Der E-Mail-Versand ist vorübergehend nicht möglich. Bitte kontaktieren Sie uns direkt unter +49 (0) 176 618 659 80 oder info@ic-resulting.de.'
      }
      // Authentifizierungsfehler
      else if (smtpError.code === 'EAUTH' || smtpError.responseCode === 535) {
        userMessage = 'Es liegt ein technisches Problem vor. Bitte kontaktieren Sie uns telefonisch unter +49 (0) 176 618 659 80.'
      }
      // Verbindungsfehler
      else if (smtpError.code === 'ECONNECTION' || smtpError.code === 'ETIMEDOUT') {
        userMessage = 'Der E-Mail-Server ist momentan nicht erreichbar. Bitte versuchen Sie es in einigen Minuten erneut.'
      }
    }
    
    throw createError({
      statusCode: 500,
      statusMessage: userMessage
    })
  }
})
