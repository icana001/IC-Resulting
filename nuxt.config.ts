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
  site: {
    url: 'https://ic-resulting.de'
  },

  sitemap: {
    // Nur manuell definierte URLs verwenden - keine automatische Erkennung
    autoLastmod: true,
    urls: [
      { loc: '/', changefreq: 'weekly', priority: 1.0 },
      { loc: '/loesungen', changefreq: 'weekly', priority: 0.9 },
      { loc: '/referenzen', changefreq: 'monthly', priority: 0.9 },
      { loc: '/kontakt', changefreq: 'monthly', priority: 0.9 },
      { loc: '/ueber-uns', changefreq: 'monthly', priority: 0.8 },
      { loc: '/karriere', changefreq: 'monthly', priority: 0.7 },
      { loc: '/it-solutions', changefreq: 'monthly', priority: 0.7 },
      { loc: '/impressum', changefreq: 'yearly', priority: 0.3 },
      { loc: '/datenschutz', changefreq: 'yearly', priority: 0.3 }
    ],
    // Automatische App-Quellen deaktivieren
    excludeAppSources: true
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
    // Admin-Konfiguration (Passwort MUSS via Environment gesetzt werden!)
    adminPassword: process.env.ADMIN_PASSWORD || '',
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
      title: 'IC-RESULTING | IT-Lösungen & Ergebnisse',
      htmlAttrs: {
        lang: 'de'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'IC-RESULTING Wiesbaden: IT-Projektleitung, Softwareentwicklung, Webseiten & KI für Unternehmen in Wiesbaden, Mainz, Frankfurt und Rhein-Main. PRINCE2, ITIL, SÜ2.' 
        },
        { name: 'geo.region', content: 'DE-HE' },
        { name: 'geo.placename', content: 'Wiesbaden' },
        { name: 'geo.position', content: '50.0782;8.2398' },
        { name: 'ICBM', content: '50.0782, 8.2398' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'author', content: 'IC-RESULTING - Dipl.-Inf. Ibrahim Canakci' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'de_DE' },
        { property: 'og:site_name', content: 'IC-RESULTING' },
        { property: 'og:see_also', content: 'https://www.linkedin.com/in/ibrahim-canakci-ic-resulting/' },
        { property: 'og:see_also', content: 'https://www.xing.com/profile/Ibrahim_Canakci/web_profiles?nwt_nav=profile_icon' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': 'https://ic-resulting.de',
            name: 'IC-RESULTING',
            alternateName: 'IC-RESULTING - Dipl.-Inf. Ibrahim Canakci',
            description: 'Resulting statt Beratung – IT-Projektleitung, Softwareentwicklung, Webseiten, KI-Automatisierung und Cloud-Lösungen für Unternehmen in Wiesbaden, Mainz, Frankfurt und Rhein-Main. PRINCE2, ITIL, SÜ2-zertifiziert.',
            url: 'https://ic-resulting.de',
            telephone: '+49-176-61865980',
            email: 'info@ic-resulting.de',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Obere Webergasse 58',
              addressLocality: 'Wiesbaden',
              postalCode: '65183',
              addressRegion: 'Hessen',
              addressCountry: 'DE'
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 50.0782,
              longitude: 8.2398
            },
            areaServed: [
              { '@type': 'City', name: 'Wiesbaden' },
              { '@type': 'City', name: 'Mainz' },
              { '@type': 'City', name: 'Frankfurt am Main' },
              { '@type': 'City', name: 'Darmstadt' },
              { '@type': 'Place', name: 'Rhein-Main-Gebiet' }
            ],
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '09:00',
              closes: '18:00'
            },
            priceRange: '€€€',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'IT-Dienstleistungen',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'IT-Projektleitung' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Softwareentwicklung' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Webseiten & CMS' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'KI-Automatisierung' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cloud-Lösungen' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'DevOps' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'DSGVO & IT-Security' } }
              ]
            },
            sameAs: [
              'https://www.linkedin.com/in/ibrahim-canakci-ic-resulting/',
              'https://www.xing.com/profile/Ibrahim_Canakci'
            ],
            founder: {
              '@type': 'Person',
              name: 'Ibrahim Canakci',
              honorificPrefix: 'Dipl.-Inf.',
              jobTitle: 'IT-Projektleiter & Software-Unternehmer',
              sameAs: [
                'https://www.linkedin.com/in/ibrahim-canakci-ic-resulting/',
                'https://www.xing.com/profile/Ibrahim_Canakci'
              ]
            }
          })
        }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  css: ['~/assets/css/main.css'],

  // Route Rules für Admin-Bereich
  routeRules: {
    '/admin/**': { prerender: false }, // Admin-Bereich nicht pre-rendern
  },

  compatibilityDate: '2026-01-16'
})
