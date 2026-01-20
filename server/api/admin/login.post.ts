import { createSession } from '../../utils/session'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { password } = body

  // Admin-Passwort aus Runtime Config
  const config = useRuntimeConfig()
  const adminPassword = config.adminPassword

  if (password !== adminPassword) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Falsches Passwort'
    })
  }

  // Session erstellen
  const sessionToken = createSession()

  // Cookie setzen (httpOnly für Sicherheit)
  setCookie(event, 'admin_session', sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24, // 24 Stunden
    path: '/'
  })

  return {
    success: true,
    message: 'Erfolgreich angemeldet'
  }
})
