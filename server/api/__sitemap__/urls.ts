// Sitemap URL Generator für IC-RESULTING
// Generiert nur öffentliche Seiten mit korrekten Prioritäten

export default defineSitemapEventHandler(() => {
  const baseUrl = 'https://ic-resulting.de'
  const now = new Date().toISOString()
  
  return [
    // Startseite - höchste Priorität
    {
      loc: '/',
      lastmod: now,
      changefreq: 'weekly',
      priority: 1.0
    },
    // Hauptseiten - hohe Priorität
    {
      loc: '/loesungen',
      lastmod: now,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      loc: '/referenzen',
      lastmod: now,
      changefreq: 'monthly',
      priority: 0.9
    },
    {
      loc: '/kontakt',
      lastmod: now,
      changefreq: 'monthly',
      priority: 0.9
    },
    {
      loc: '/ueber-uns',
      lastmod: now,
      changefreq: 'monthly',
      priority: 0.8
    },
    // Sekundäre Seiten - mittlere Priorität
    {
      loc: '/karriere',
      lastmod: now,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      loc: '/it-solutions',
      lastmod: now,
      changefreq: 'monthly',
      priority: 0.7
    },
    // Rechtliche Seiten - niedrige Priorität
    {
      loc: '/impressum',
      lastmod: now,
      changefreq: 'yearly',
      priority: 0.3
    },
    {
      loc: '/datenschutz',
      lastmod: now,
      changefreq: 'yearly',
      priority: 0.3
    }
  ]
})
