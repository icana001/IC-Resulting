<template>
  <div>
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50"></div>
      <div class="absolute inset-0 bg-hero-pattern opacity-30"></div>

      <div class="container-custom relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <div class="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="heroicons:chat-bubble-left-right" class="w-4 h-4" />
            Kontakt
          </div>
          
          <h1 class="section-title mb-6">
            Kontakt zu IC-RESULTING – Ihr direkter Draht zu IT-Experten
          </h1>
          
          <p class="section-subtitle mx-auto">
            Haben Sie ein konkretes Projekt oder eine Frage? 
            Wir antworten in der Regel innerhalb von 24 Stunden.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-24 bg-white -mt-10">
      <div class="container-custom">
        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Contact Info Cards -->
          <div class="space-y-6">
            <!-- Address Card -->
            <div class="card-hover">
              <div class="flex items-start gap-4">
                <div class="icon-box flex-shrink-0">
                  <Icon name="heroicons:map-pin" class="w-6 h-6" />
                </div>
                <div>
                  <h3 class="font-display font-bold text-lg text-dark-800 mb-2">Hauptsitz</h3>
                  <p class="text-dark-500">
                    IC-RESULTING<br>
                    Obere Webergasse 58<br>
                    65183 Wiesbaden<br>
                    Deutschland
                  </p>
                </div>
              </div>
            </div>

            <!-- Phone Card -->
            <div class="card-hover">
              <div class="flex items-start gap-4">
                <div class="icon-box flex-shrink-0">
                  <Icon name="heroicons:phone" class="w-6 h-6" />
                </div>
                <div>
                  <h3 class="font-display font-bold text-lg text-dark-800 mb-2">Telefon</h3>
                  <a href="tel:+4917661865980" class="text-dark-500 hover:text-primary-600 transition-colors block">
                    +49 (0) 176 618 659 80
                  </a>
                </div>
              </div>
            </div>

            <!-- Email Card -->
            <div class="card-hover">
              <div class="flex items-start gap-4">
                <div class="icon-box flex-shrink-0">
                  <Icon name="heroicons:envelope" class="w-6 h-6" />
                </div>
                <div>
                  <h3 class="font-display font-bold text-lg text-dark-800 mb-2">E-Mail</h3>
                  <a href="mailto:info@ic-resulting.de" class="text-primary-600 hover:text-primary-700 transition-colors font-medium">
                    info@ic-resulting.de
                  </a>
                </div>
              </div>
            </div>

            <!-- Hours Card -->
            <div class="card-hover">
              <div class="flex items-start gap-4">
                <div class="icon-box flex-shrink-0">
                  <Icon name="heroicons:clock" class="w-6 h-6" />
                </div>
                <div>
                  <h3 class="font-display font-bold text-lg text-dark-800 mb-2">Erreichbarkeit</h3>
                  <p class="text-dark-500">
                    Mo - Fr: 09:00 - 18:00 Uhr<br>
                    Sa - So: Geschlossen
                  </p>
                </div>
              </div>
            </div>

            <!-- Additional Locations -->
            <div class="card-hover bg-dark-50">
              <h3 class="font-display font-bold text-lg text-dark-800 mb-3">Weitere Standorte</h3>
              <div class="space-y-2 text-sm text-dark-500">
                <div class="flex items-center gap-2">
                  <Icon name="heroicons:map-pin" class="w-4 h-4 text-primary-600" />
                  <span>Berlin (Delivery)</span>
                </div>
                <div class="flex items-center gap-2">
                  <Icon name="heroicons:map-pin" class="w-4 h-4 text-primary-600" />
                  <span>Köln (Partner: makroh GmbH)</span>
                </div>
                <div class="flex items-center gap-2">
                  <Icon name="heroicons:academic-cap" class="w-4 h-4 text-accent-600" />
                  <span>Istanbul (R&D)</span>
                </div>
              </div>
            </div>

            <!-- Ihr erster Schritt Absatz -->
            <div class="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-6 border border-primary-100">
              <h4 class="font-display font-bold text-dark-800 mb-3 flex items-center gap-2">
                <Icon name="heroicons:light-bulb" class="w-5 h-5 text-primary-600" />
                Ihr erster Schritt
              </h4>
              <p class="text-dark-600 leading-relaxed text-sm">
                Ein kurzes Gespräch reicht oft, um festzustellen, ob wir der richtige Partner für Ihr 
                Vorhaben sind. Erzählen Sie uns von Ihrer Situation – wir hören zu und geben Ihnen 
                eine ehrliche Einschätzung. Unverbindlich und ohne Verkaufsdruck.
              </p>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="lg:col-span-2">
            <div class="bg-white rounded-3xl shadow-soft border border-dark-100 p-8 md:p-10">
              <h2 class="text-2xl font-display font-bold text-dark-800 mb-2">
                Ihre Nachricht an uns
              </h2>
              <p class="text-dark-500 mb-6">
                Beschreiben Sie kurz Ihr Anliegen – wir melden uns. Alle mit * gekennzeichneten Felder sind Pflichtfelder.
              </p>

              <form @submit.prevent="submitForm" class="space-y-6 relative">
                <div class="grid md:grid-cols-2 gap-6">
                  <!-- Name -->
                  <div>
                    <label for="name" class="block text-sm font-medium text-dark-700 mb-2">
                      Vorname, Name *
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      v-model="form.name"
                      required
                      class="w-full px-4 py-3 rounded-xl border border-dark-200 
                             focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 
                             transition-all duration-200 outline-none"
                      placeholder="Max Mustermann"
                    >
                  </div>

                  <!-- Company -->
                  <div>
                    <label for="company" class="block text-sm font-medium text-dark-700 mb-2">
                      Unternehmen
                    </label>
                    <input 
                      type="text" 
                      id="company" 
                      v-model="form.company"
                      class="w-full px-4 py-3 rounded-xl border border-dark-200 
                             focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 
                             transition-all duration-200 outline-none"
                      placeholder="Firma GmbH"
                    >
                  </div>
                </div>

                <div class="grid md:grid-cols-2 gap-6">
                  <!-- Email -->
                  <div>
                    <label for="email" class="block text-sm font-medium text-dark-700 mb-2">
                      E-Mail Adresse *
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      v-model="form.email"
                      required
                      class="w-full px-4 py-3 rounded-xl border border-dark-200 
                             focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 
                             transition-all duration-200 outline-none"
                      placeholder="max@beispiel.de"
                    >
                  </div>

                  <!-- Phone -->
                  <div>
                    <label for="phone" class="block text-sm font-medium text-dark-700 mb-2">
                      Telefon
                    </label>
                    <input 
                      type="tel" 
                      id="phone" 
                      v-model="form.phone"
                      class="w-full px-4 py-3 rounded-xl border border-dark-200 
                             focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 
                             transition-all duration-200 outline-none"
                      placeholder="+49 123 456789"
                    >
                  </div>
                </div>

                <!-- Subject -->
                <div>
                  <label for="subject" class="block text-sm font-medium text-dark-700 mb-2">
                    Thema
                  </label>
                  <select 
                    id="subject" 
                    v-model="form.subject"
                    class="w-full px-4 py-3 rounded-xl border border-dark-200 
                           focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 
                           transition-all duration-200 outline-none bg-white"
                  >
                    <option value="">Bitte wählen...</option>
                    <option value="it-verantwortung">IT-Verantwortung übergeben</option>
                    <option value="projektleitung">IT-Projektleitung</option>
                    <option value="softwareentwicklung">Softwareentwicklung</option>
                    <option value="ki-automatisierung">KI & Automatisierung</option>
                    <option value="devops-cloud">DevOps & Cloud</option>
                    <option value="webseiten">Webseiten & CMS</option>
                    <option value="schulungen">Schulungen</option>
                    <option value="karriere">Karriere / Bewerbung</option>
                    <option value="sonstiges">Sonstiges</option>
                  </select>
                </div>

                <!-- Message -->
                <div>
                  <label for="message" class="block text-sm font-medium text-dark-700 mb-2">
                    Ihre Nachricht *
                  </label>
                  <textarea 
                    id="message" 
                    v-model="form.message"
                    required
                    rows="5"
                    class="w-full px-4 py-3 rounded-xl border border-dark-200 
                           focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 
                           transition-all duration-200 outline-none resize-none"
                    placeholder="Wie können wir Ihnen helfen?"
                  ></textarea>
                </div>

                <!-- Honeypot-Feld (unsichtbar für echte User, Bots füllen es aus) -->
                <div class="absolute -left-[9999px] opacity-0 h-0 w-0 overflow-hidden" aria-hidden="true">
                  <label for="website">Website (Nicht ausfüllen)</label>
                  <input 
                    type="text" 
                    id="website" 
                    name="website"
                    v-model="form.website"
                    tabindex="-1"
                    autocomplete="off"
                  >
                </div>

                <!-- Cloudflare Turnstile Widget -->
                <div class="my-4">
                  <div id="turnstile-container"></div>
                  <p v-if="!turnstileToken && !isSubmitting" class="text-sm text-dark-400 mt-2">
                    <Icon name="heroicons:shield-check" class="w-4 h-4 inline mr-1" />
                    Geschützt durch Cloudflare Turnstile
                  </p>
                </div>

                <!-- DSGVO Consent Checkbox -->
                <div class="p-4 bg-dark-50 rounded-xl">
                  <div class="flex items-start gap-3">
                    <input 
                      type="checkbox" 
                      id="privacy" 
                      v-model="form.privacy"
                      required
                      class="mt-1 w-5 h-5 rounded border-dark-300 text-primary-600 
                             focus:ring-primary-500 cursor-pointer"
                    >
                    <label for="privacy" class="text-sm text-dark-600 cursor-pointer">
                      <strong>Einwilligung zur Datenverarbeitung (DSGVO) *</strong><br>
                      Ich willige ein, dass meine Angaben zur Kontaktaufnahme und Bearbeitung 
                      meiner Anfrage elektronisch erhoben und gespeichert werden. Die Daten 
                      werden nicht an Dritte weitergegeben, außer es ist zur Bearbeitung der 
                      Anfrage erforderlich. Ich kann meine Einwilligung jederzeit mit Wirkung 
                      für die Zukunft per E-Mail an 
                      <a href="mailto:info@ic-resulting.de" class="text-primary-600 hover:underline">info@ic-resulting.de</a> 
                      widerrufen. Weitere Informationen finden Sie in unserer 
                      <NuxtLink to="/datenschutz" class="text-primary-600 hover:underline">
                        Datenschutzerklärung</NuxtLink>.
                    </label>
                  </div>
                </div>

                <!-- Submit Button -->
                <div class="flex flex-col sm:flex-row sm:items-center gap-4">
                  <button 
                    type="submit" 
                    class="btn-primary"
                    :disabled="isSubmitting"
                  >
                    <Icon v-if="isSubmitting" name="heroicons:arrow-path" class="w-5 h-5 mr-2 animate-spin" />
                    <Icon v-else name="heroicons:paper-airplane" class="w-5 h-5 mr-2" />
                    {{ isSubmitting ? 'Wird gesendet...' : 'Absenden' }}
                  </button>
                  <span class="text-sm text-dark-400">
                    Antwort werktags innerhalb von 24 Stunden
                  </span>
                </div>
              </form>

              <!-- Error Message -->
              <Transition
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 translate-y-4"
                enter-to-class="opacity-100 translate-y-0"
              >
                <div v-if="errorMessage" class="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <div class="flex items-center gap-3">
                    <Icon name="heroicons:exclamation-circle" class="w-6 h-6 text-red-600" />
                    <div>
                      <p class="text-red-700 font-medium">
                        {{ errorMessage }}
                      </p>
                    </div>
                  </div>
                </div>
              </Transition>

              <!-- Success Message -->
              <Transition
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 translate-y-4"
                enter-to-class="opacity-100 translate-y-0"
              >
                <div v-if="showSuccess" class="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                  <div class="flex items-center gap-3">
                    <Icon name="heroicons:check-circle" class="w-6 h-6 text-green-600" />
                    <div>
                      <p class="text-green-700 font-medium">
                        Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.
                      </p>
                      <p class="text-green-600 text-sm mt-1">
                        Wir melden uns schnellstmöglich bei Ihnen. Eine Bestätigung wurde an Ihre E-Mail-Adresse gesendet.
                      </p>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="py-24 bg-dark-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="section-title mb-4">So finden Sie uns</h2>
          <p class="section-subtitle mx-auto">
            Unser Hauptsitz in Wiesbaden
          </p>
        </div>

        <div class="bg-white rounded-3xl shadow-soft overflow-hidden">
          <!-- Google Maps Embed (nur wenn Consent gegeben) -->
          <div v-if="mapsConsent" class="relative h-96 group cursor-pointer">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2558.8736087669743!2d8.244388877029096!3d50.08182117152453!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bdbf939feae045%3A0x9dff4c8f39e1bb95!2sIC-RESULTING!5e0!3m2!1sde!2sde!4v1737453600000!5m2!1sde!2sde"
              width="100%" 
              height="100%" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
              class="absolute inset-0 pointer-events-none"
              title="IC-RESULTING Standort auf Google Maps"
            ></iframe>
            <!-- Klickbarer Overlay über die gesamte Karte -->
            <a 
              href="https://maps.app.goo.gl/VjSwQbav4LYxgv8P6" 
              target="_blank" 
              rel="noopener noreferrer"
              class="absolute inset-0 z-10 flex items-center justify-center bg-transparent hover:bg-dark-900/20 transition-colors duration-300"
              title="In Google Maps öffnen"
            >
              <span class="opacity-0 group-hover:opacity-100 bg-white px-6 py-3 rounded-xl shadow-xl text-primary-600 font-semibold flex items-center gap-2 transition-opacity duration-300">
                <Icon name="heroicons:arrow-top-right-on-square" class="w-5 h-5" />
                In Google Maps öffnen
              </span>
            </a>
          </div>
          
          <!-- Placeholder wenn kein Consent -->
          <div v-else class="relative h-96 bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
            <div class="text-center max-w-md px-6">
              <div class="w-20 h-20 rounded-full bg-primary-600 flex items-center justify-center mx-auto mb-4 shadow-glow">
                <Icon name="heroicons:map-pin" class="w-10 h-10 text-white" />
              </div>
              <h3 class="font-display font-bold text-xl text-dark-800 mb-2">IC-RESULTING</h3>
              <p class="text-dark-500 mb-4">Obere Webergasse 58, 65183 Wiesbaden</p>
              
              <div class="bg-white/80 backdrop-blur-sm rounded-xl p-4 mb-4">
                <p class="text-sm text-dark-600 mb-3">
                  <Icon name="heroicons:shield-check" class="w-4 h-4 inline mr-1 text-primary-600" />
                  Um die interaktive Karte zu sehen, aktivieren Sie bitte Google Maps in den Cookie-Einstellungen.
                </p>
                <button 
                  @click="enableGoogleMaps"
                  class="btn-primary text-sm !py-2"
                >
                  Google Maps aktivieren
                </button>
              </div>
              
              <a 
                href="https://maps.app.goo.gl/VjSwQbav4LYxgv8P6" 
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
              >
                <Icon name="heroicons:arrow-top-right-on-square" class="w-4 h-4" />
                In Google Maps öffnen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const siteUrl = 'https://ic-resulting.de'
const pageUrl = `${siteUrl}/kontakt`
const pageTitle = 'Kontakt zu IC-RESULTING – IT-Projekt anfragen | Wiesbaden'
const pageDescription = 'Kontaktieren Sie IC-RESULTING für IT-Projekte, Webseiten, KI-Automatisierung und Cloud-Lösungen. Schnelle Antwort, persönlicher Kontakt.'

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogUrl: pageUrl,
  ogType: 'website',
  ogImage: `${siteUrl}/images/og-image.png`,
  ogLocale: 'de_DE',
  ogSiteName: 'IC-RESULTING',
  twitterCard: 'summary_large_image',
  twitterTitle: pageTitle,
  twitterDescription: pageDescription
})

useHead({
  link: [{ rel: 'canonical', href: pageUrl }]
})

// Turnstile Site Key aus runtimeConfig.public
const config = useRuntimeConfig()
const turnstileSiteKey = config.public.turnstileSiteKey

const form = reactive({
  name: '',
  company: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  privacy: false,
  // Honeypot-Feld (unsichtbar für User, Bots füllen es aus)
  website: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)
const errorMessage = ref('')
const turnstileToken = ref('')
const turnstileWidgetId = ref(null)

// Google Maps Consent
const mapsConsent = ref(false)

// Turnstile Widget laden
onMounted(() => {
  // Check Google Maps consent
  checkMapsConsent()
  
  // Turnstile Script laden falls noch nicht vorhanden
  if (!document.getElementById('turnstile-script')) {
    const script = document.createElement('script')
    script.id = 'turnstile-script'
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad'
    script.async = true
    script.defer = true
    document.head.appendChild(script)
  }
  
  // Callback für Turnstile
  window.onTurnstileLoad = () => {
    if (window.turnstile && document.getElementById('turnstile-container')) {
      turnstileWidgetId.value = window.turnstile.render('#turnstile-container', {
        sitekey: turnstileSiteKey,
        callback: (token) => {
          turnstileToken.value = token
        },
        'expired-callback': () => {
          turnstileToken.value = ''
        },
        'error-callback': () => {
          turnstileToken.value = ''
        },
        theme: 'light',
        language: 'de'
      })
    }
  }
  
  // Falls Turnstile bereits geladen
  if (window.turnstile) {
    window.onTurnstileLoad()
  }
})

// Turnstile zurücksetzen nach Submit
function resetTurnstile() {
  if (window.turnstile && turnstileWidgetId.value !== null) {
    window.turnstile.reset(turnstileWidgetId.value)
    turnstileToken.value = ''
  }
}

// Check Google Maps consent from localStorage
function checkMapsConsent() {
  const consent = localStorage.getItem('cookie-consent')
  if (consent) {
    const settings = JSON.parse(consent)
    mapsConsent.value = settings.googleMaps === true
  }
}

// Enable Google Maps consent
function enableGoogleMaps() {
  const consent = localStorage.getItem('cookie-consent')
  let settings = { necessary: true, googleMaps: true, analytics: false, marketing: false }
  
  if (consent) {
    settings = JSON.parse(consent)
    settings.googleMaps = true
  }
  
  localStorage.setItem('cookie-consent', JSON.stringify(settings))
  mapsConsent.value = true
}

async function submitForm() {
  // Validierung vor Submit
  if (!turnstileToken.value) {
    errorMessage.value = 'Bitte bestätigen Sie, dass Sie kein Roboter sind.'
    return
  }
  
  if (!form.privacy) {
    errorMessage.value = 'Bitte akzeptieren Sie die Datenschutzbestimmungen.'
    return
  }

  isSubmitting.value = true
  errorMessage.value = ''
  
  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: form.name,
        company: form.company,
        email: form.email,
        phone: form.phone,
        subject: form.subject,
        message: form.message,
        turnstileToken: turnstileToken.value,
        // Honeypot-Feld mitsenden
        website: form.website
      }
    })
    
    showSuccess.value = true
    
    // Reset form
    Object.assign(form, {
      name: '',
      company: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      privacy: false,
      website: ''
    })
    
    // Turnstile zurücksetzen
    resetTurnstile()
    
    // Hide success message after 8 seconds
    setTimeout(() => {
      showSuccess.value = false
    }, 8000)
  } catch (error) {
    errorMessage.value = error?.data?.statusMessage || 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.'
    // Turnstile bei Fehler zurücksetzen
    resetTurnstile()
  } finally {
    isSubmitting.value = false
  }
}
</script>
