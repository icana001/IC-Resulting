// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/google-fonts'
  ],

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
      title: 'Lamberth GmbH - IT & Travel Solutions',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Lamberth ist der erfahrene Partner für Travel- und IT Solutions. 35+ Jahre Erfahrung in der Digitalisierung.' 
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

  compatibilityDate: '2026-01-11'
})
