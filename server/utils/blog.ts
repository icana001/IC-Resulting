// Blog Storage - Speichert Blog-Beiträge in JSON-Datei
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string // Kurzbeschreibung für Übersicht
  content: string // Hauptinhalt (HTML/Markdown)
  image?: string // Beitragsbild URL
  imageAlt?: string // Alt-Text für SEO
  tags: string[] // Schlagwörter
  author: string
  status: 'draft' | 'published'
  publishedAt?: string
  createdAt: string
  updatedAt: string
  metaTitle?: string // SEO Title
  metaDescription?: string // SEO Description
}

// Pfad zur JSON-Datei
const DATA_DIR = join(process.cwd(), 'data')
const BLOG_FILE = join(DATA_DIR, 'blog.json')

// In-Memory Cache
const blogStore = new Map<string, BlogPost>()

// Datei-Operationen
function ensureDataDir() {
  if (!existsSync(DATA_DIR)) {
    mkdirSync(DATA_DIR, { recursive: true })
  }
}

function loadFromFile(): void {
  ensureDataDir()
  if (existsSync(BLOG_FILE)) {
    try {
      const data = readFileSync(BLOG_FILE, 'utf-8')
      const posts: BlogPost[] = JSON.parse(data)
      blogStore.clear()
      posts.forEach(post => blogStore.set(post.id, post))
      console.log(`[Blog] ${posts.length} Beiträge aus ${BLOG_FILE} geladen`)
    } catch (error) {
      console.error('[Blog] Fehler beim Laden:', error)
    }
  }
}

function saveToFile(): void {
  ensureDataDir()
  try {
    const posts = Array.from(blogStore.values())
    writeFileSync(BLOG_FILE, JSON.stringify(posts, null, 2), 'utf-8')
    console.log(`[Blog] ${posts.length} Beiträge in ${BLOG_FILE} gespeichert`)
  } catch (error) {
    console.error('[Blog] Fehler beim Speichern:', error)
  }
}

// Demo-Beiträge für den ersten Start (wenn keine Datei existiert)
const demoPosts: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'ki-automatisierung-im-mittelstand',
    title: 'KI-Automatisierung im Mittelstand: So starten Sie richtig',
    excerpt: 'Erfahren Sie, wie mittelständische Unternehmen von KI-gestützter Automatisierung profitieren können – ohne große IT-Abteilung.',
    content: `
      <h2>Warum KI-Automatisierung gerade jetzt wichtig ist</h2>
      <p>Die Digitalisierung schreitet voran und KI-Technologien werden immer zugänglicher. Für den Mittelstand bietet sich jetzt die Chance, Prozesse zu optimieren und wettbewerbsfähig zu bleiben.</p>
      
      <h2>Die häufigsten Einsatzbereiche</h2>
      <ul>
        <li><strong>Dokumentenverarbeitung:</strong> Automatische Erfassung und Kategorisierung von Rechnungen, Verträgen und E-Mails</li>
        <li><strong>Kundenservice:</strong> Intelligente Chatbots für häufige Anfragen</li>
        <li><strong>Datenanalyse:</strong> Automatische Auswertung von Geschäftsdaten</li>
        <li><strong>Qualitätskontrolle:</strong> KI-gestützte Bildanalyse in der Produktion</li>
      </ul>
      
      <h2>Der richtige Einstieg</h2>
      <p>Starten Sie mit einem konkreten, überschaubaren Projekt. Identifizieren Sie einen Prozess, der viel Zeit kostet und sich wiederholt. Das ist oft der beste Kandidat für Automatisierung.</p>
      
      <blockquote>
        "Der Schlüssel zum Erfolg ist nicht die Technologie selbst, sondern die richtige Anwendung auf Ihre spezifischen Herausforderungen."
      </blockquote>
      
      <h2>Nächste Schritte</h2>
      <p>Kontaktieren Sie uns für eine unverbindliche Analyse Ihrer Automatisierungspotenziale. Wir zeigen Ihnen konkret, wo Sie Zeit und Kosten sparen können.</p>
    `,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop',
    imageAlt: 'KI-Automatisierung Visualisierung',
    tags: ['KI', 'Automatisierung', 'Mittelstand', 'Digitalisierung'],
    author: 'Ibrahim Canakci',
    status: 'published',
    publishedAt: '2026-01-15T10:00:00Z',
    createdAt: '2026-01-14T15:30:00Z',
    updatedAt: '2026-01-15T10:00:00Z',
    metaTitle: 'KI-Automatisierung im Mittelstand | IC-RESULTING',
    metaDescription: 'Erfahren Sie, wie KI-Automatisierung Ihrem mittelständischen Unternehmen helfen kann. Praxisnahe Tipps vom IT-Experten.'
  },
  {
    id: 'post-2',
    slug: 'it-projektleitung-erfolgsfaktoren',
    title: 'Die 5 wichtigsten Erfolgsfaktoren für IT-Projekte',
    excerpt: 'Warum scheitern so viele IT-Projekte? Wir zeigen die kritischen Erfolgsfaktoren aus über 20 Jahren Projekterfahrung.',
    content: `
      <h2>Warum IT-Projekte scheitern</h2>
      <p>Studien zeigen: Über 60% aller IT-Projekte überschreiten Budget oder Zeitplan deutlich. Die Ursachen sind oft dieselben – und vermeidbar.</p>
      
      <h2>Die 5 kritischen Erfolgsfaktoren</h2>
      
      <h3>1. Klare Zieldefinition</h3>
      <p>Bevor Sie starten: Was genau soll erreicht werden? Messbare Ziele verhindern Scope Creep und halten alle Beteiligten auf Kurs.</p>
      
      <h3>2. Stakeholder-Management</h3>
      <p>Identifizieren Sie alle Beteiligten frühzeitig. Kommunizieren Sie regelmäßig und transparent über Fortschritte und Herausforderungen.</p>
      
      <h3>3. Realistische Planung</h3>
      <p>Planen Sie Puffer ein. Unvorhergesehenes passiert immer. Eine realistische Planung schafft Vertrauen und reduziert Stress.</p>
      
      <h3>4. Technische Kompetenz</h3>
      <p>Die Projektleitung muss die Technologie verstehen. Nur so können realistische Einschätzungen getroffen und Risiken erkannt werden.</p>
      
      <h3>5. Single Point of Accountability</h3>
      <p>Eine Person trägt die Gesamtverantwortung. Keine Ausreden, keine Schuldzuweisungen – nur Ergebnisse.</p>
      
      <h2>Unser Ansatz: Resulting statt Beratung</h2>
      <p>Bei IC-RESULTING übernehmen wir nicht nur die Beratung, sondern die komplette Umsetzungsverantwortung. Das ist der Unterschied.</p>
    `,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=450&fit=crop',
    imageAlt: 'IT-Projektleitung Meeting',
    tags: ['Projektmanagement', 'IT-Projekte', 'Erfolgsfaktoren', 'Best Practices'],
    author: 'Ibrahim Canakci',
    status: 'published',
    publishedAt: '2026-01-10T09:00:00Z',
    createdAt: '2026-01-09T14:00:00Z',
    updatedAt: '2026-01-10T09:00:00Z',
    metaTitle: '5 Erfolgsfaktoren für IT-Projekte | IC-RESULTING',
    metaDescription: 'Warum scheitern IT-Projekte? Die 5 kritischen Erfolgsfaktoren aus über 20 Jahren Projekterfahrung.'
  }
]

// Initialisierung: Laden aus Datei oder Demo-Daten verwenden
function initializeBlogStore() {
  loadFromFile()
  
  // Wenn keine Daten geladen wurden, Demo-Beiträge verwenden und speichern
  if (blogStore.size === 0) {
    console.log('[Blog] Keine Datei gefunden, erstelle Demo-Beiträge...')
    demoPosts.forEach(post => blogStore.set(post.id, post))
    saveToFile()
  }
}

// Beim Import initialisieren
initializeBlogStore()

// API Funktionen

/**
 * Alle veröffentlichten Beiträge abrufen (für Frontend)
 */
export function getPublishedPosts(): BlogPost[] {
  return Array.from(blogStore.values())
    .filter(post => post.status === 'published')
    .sort((a, b) => new Date(b.publishedAt || b.createdAt).getTime() - new Date(a.publishedAt || a.createdAt).getTime())
}

/**
 * Alle Beiträge abrufen (für Admin)
 */
export function getAllPosts(): BlogPost[] {
  return Array.from(blogStore.values())
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
}

/**
 * Einzelnen Beitrag nach Slug abrufen
 */
export function getPostBySlug(slug: string): BlogPost | null {
  return Array.from(blogStore.values()).find(post => post.slug === slug) || null
}

/**
 * Einzelnen Beitrag nach ID abrufen
 */
export function getPostById(id: string): BlogPost | null {
  return blogStore.get(id) || null
}

/**
 * Beiträge nach Tag filtern
 */
export function getPostsByTag(tag: string): BlogPost[] {
  return getPublishedPosts().filter(post => 
    post.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  )
}

/**
 * Alle verwendeten Tags abrufen
 */
export function getAllTags(): { tag: string; count: number }[] {
  const tagCounts = new Map<string, number>()
  
  getPublishedPosts().forEach(post => {
    post.tags.forEach(tag => {
      tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1)
    })
  })
  
  return Array.from(tagCounts.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count)
}

/**
 * Neuen Beitrag erstellen
 */
export function createPost(data: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'>): BlogPost {
  const id = `post-${Date.now()}`
  const now = new Date().toISOString()
  
  const newPost: BlogPost = {
    ...data,
    id,
    createdAt: now,
    updatedAt: now
  }
  
  blogStore.set(id, newPost)
  saveToFile() // Speichern nach Erstellung
  return newPost
}

/**
 * Beitrag aktualisieren
 */
export function updatePost(id: string, data: Partial<Omit<BlogPost, 'id' | 'createdAt'>>): BlogPost | null {
  const existing = blogStore.get(id)
  if (!existing) return null
  
  const updated: BlogPost = {
    ...existing,
    ...data,
    updatedAt: new Date().toISOString()
  }
  
  blogStore.set(id, updated)
  saveToFile() // Speichern nach Aktualisierung
  return updated
}

/**
 * Beitrag löschen
 */
export function deletePost(id: string): boolean {
  const result = blogStore.delete(id)
  if (result) {
    saveToFile() // Speichern nach Löschung
  }
  return result
}

/**
 * Slug aus Titel generieren
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

/**
 * Prüfen ob Slug bereits existiert
 */
export function slugExists(slug: string, excludeId?: string): boolean {
  return Array.from(blogStore.values()).some(
    post => post.slug === slug && post.id !== excludeId
  )
}
