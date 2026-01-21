// Dynamische Sitemap für Google - mit Blog-Beiträgen
import { getPublishedPosts } from '~/server/utils/blog'

export default defineEventHandler((event) => {
  const baseUrl = 'https://ic-resulting.de'
  const lastmod = new Date().toISOString().split('T')[0]
  
  // Statische Seiten
  const staticUrls = [
    { loc: '/', changefreq: 'weekly', priority: '1.0' },
    { loc: '/loesungen', changefreq: 'weekly', priority: '0.9' },
    { loc: '/referenzen', changefreq: 'monthly', priority: '0.9' },
    { loc: '/kontakt', changefreq: 'monthly', priority: '0.9' },
    { loc: '/ueber-uns', changefreq: 'monthly', priority: '0.8' },
    { loc: '/karriere', changefreq: 'monthly', priority: '0.7' },
    { loc: '/it-solutions', changefreq: 'monthly', priority: '0.7' },
    { loc: '/blog', changefreq: 'weekly', priority: '0.8' },
    { loc: '/impressum', changefreq: 'yearly', priority: '0.3' },
    { loc: '/datenschutz', changefreq: 'yearly', priority: '0.3' }
  ]

  // Blog-Beiträge dynamisch hinzufügen
  const blogPosts = getPublishedPosts()
  const blogUrls = blogPosts.map(post => ({
    loc: `/blog/${post.slug}`,
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: post.updatedAt ? post.updatedAt.split('T')[0] : lastmod
  }))

  const allUrls = [...staticUrls, ...blogUrls]

  const xmlUrls = allUrls.map(url => `
  <url>
    <loc>${baseUrl}${url.loc}</loc>
    <lastmod>${url.lastmod || lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${xmlUrls}
</urlset>`

  setHeader(event, 'Content-Type', 'application/xml')
  return sitemap
})
