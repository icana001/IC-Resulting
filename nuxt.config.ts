// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/google-fonts'
  ],

  // Runtime Config - SMTP und Secrets NUR serverseitig (NICHT in public!)
  runtimeConfig: {
    // Private keys - nur auf dem Server verfügbar
    smtp: {
      host: process.env.SMTP_HOST || 'smtp.strato.de',
      port: parseInt(process.env.SMTP_PORT || '465'),
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO
    },
    turnstileSecret: process.env.TURNSTILE_SECRET_KEY,
    // Public keys - im Client verfügbar (NUR nicht-sensible Daten!)
    public: {
      turnstileSiteKey: process.env.TURNSTILE_SITE_KEY || ''
    }
  },

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config',
  },

  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700, 800],
      'Plus Jakarta Sans': [400, 500, 600, 700, 800]
    },
    display: 'swap'
  },

  app: {
    head: {
      title: 'IC-RESULTING | Resulting statt Beratung',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'IC-RESULTING: IT-Verantwortung abgeben, Ergebnisse erhalten. IT-Projektleitung, Softwareentwicklung, KI & Automatisierung. PRINCE2, ITIL, SÜ2.' 
        },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  css: ['~/assets/css/main.css'],

  // @ts-expect-error compatibilityDate ist in neueren Nuxt-Versionen verfügbar
  compatibilityDate: '2026-01-14'
})
