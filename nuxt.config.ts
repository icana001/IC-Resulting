// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/google-fonts',
    '@nuxtjs/sitemap'
  ],

  // Sitemap Configuration
  // @ts-ignore - sitemap module adds this config
  sitemap: {
    hostname: 'https://ic-resulting.de',
    gzip: true,
    exclude: ['/api/**'],
    defaults: {
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString()
    }
  },

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
      htmlAttrs: {
        lang: 'de'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'IC-RESULTING: IT-Verantwortung abgeben, Ergebnisse erhalten. IT-Projektleitung, Softwareentwicklung, KI & Automatisierung. PRINCE2, ITIL, SÜ2.' 
        },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'author', content: 'IC-RESULTING - Dipl.-Inf. Ibrahim Canakci' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'de_DE' },
        { property: 'og:site_name', content: 'IC-RESULTING' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://ic-resulting.de' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2026-01-16'
})
