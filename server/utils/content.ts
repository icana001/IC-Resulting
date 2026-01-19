// Content Storage - Speichert bearbeitete Inhalte
// In Produktion würde man hier eine Datenbank verwenden

export interface ContentBlock {
  id: string
  type: 'text' | 'heading' | 'paragraph' | 'image' | 'button' | 'list'
  content: string
  metadata?: Record<string, any>
  updatedAt: string
}

export interface PageContent {
  pageId: string
  title: string
  path: string
  blocks: ContentBlock[]
  updatedAt: string
}

// In-Memory Storage
const contentStore = new Map<string, PageContent>()

// Standard-Inhalte für die Seiten
const defaultContent: Record<string, PageContent> = {
  home: {
    pageId: 'home',
    title: 'Startseite',
    path: '/',
    updatedAt: new Date().toISOString(),
    blocks: [
      {
        id: 'hero-tagline',
        type: 'text',
        content: 'Resulting statt Beratung',
        updatedAt: new Date().toISOString()
      },
      {
        id: 'hero-headline',
        type: 'heading',
        content: 'IT-Beratung & Projektleitung für Unternehmen – Verantwortung abgeben, Ergebnisse erhalten',
        updatedAt: new Date().toISOString()
      },
      {
        id: 'hero-description',
        type: 'paragraph',
        content: 'Wir übernehmen Ihre komplette IT-Verantwortung: Von der Projektleitung über Softwareentwicklung bis zu KI-gestützter Automatisierung. Mit klarer Verantwortung, messbaren Ergebnissen und einem Single Point of Accountability.',
        updatedAt: new Date().toISOString()
      },
      {
        id: 'hero-cta-primary',
        type: 'button',
        content: 'Reden Sie mit uns',
        metadata: { link: '/kontakt' },
        updatedAt: new Date().toISOString()
      },
      {
        id: 'hero-cta-secondary',
        type: 'button',
        content: 'Lösungen ansehen',
        metadata: { link: '/loesungen' },
        updatedAt: new Date().toISOString()
      },
      {
        id: 'services-title',
        type: 'text',
        content: 'Unsere IT-Leistungen',
        updatedAt: new Date().toISOString()
      },
      {
        id: 'services-headline',
        type: 'heading',
        content: 'Konzentrieren Sie sich auf Ihr Kerngeschäft – wir übernehmen den Rest',
        updatedAt: new Date().toISOString()
      },
      {
        id: 'services-description',
        type: 'paragraph',
        content: 'Wir übernehmen Ihre IT-Verantwortung – modular buchbar oder als Komplettlösung. Jede Lösung einzeln buchbar – oder als Komplettpaket mit einem Ansprechpartner.',
        updatedAt: new Date().toISOString()
      }
    ]
  },
  about: {
    pageId: 'about',
    title: 'Über uns',
    path: '/ueber-uns',
    updatedAt: new Date().toISOString(),
    blocks: [
      {
        id: 'about-headline',
        type: 'heading',
        content: 'Über IC-RESULTING',
        updatedAt: new Date().toISOString()
      },
      {
        id: 'about-intro',
        type: 'paragraph',
        content: 'IC-RESULTING steht für "Resulting statt Beratung". Wir liefern nicht nur Konzepte, sondern übernehmen die Umsetzungsverantwortung.',
        updatedAt: new Date().toISOString()
      },
      {
        id: 'founder-name',
        type: 'text',
        content: 'Ibrahim Canakci',
        updatedAt: new Date().toISOString()
      },
      {
        id: 'founder-title',
        type: 'text',
        content: 'Dipl.-Inf. (FH) – IT-Projektleiter & Software-Unternehmer',
        updatedAt: new Date().toISOString()
      },
      {
        id: 'founder-bio',
        type: 'paragraph',
        content: 'Dipl.-Inf.(FH) Ibrahim Canakci ist IT-Projektleiter und IT-Architekt mit Schwerpunkt auf der Planung, Steuerung und Umsetzung komplexer IT-Vorhaben. Er verbindet Management-Verantwortung mit technischer Umsetzung – von Architekturentscheidungen über Teamaufbau bis zur Stabilisierung von Betrieb und Services.',
        updatedAt: new Date().toISOString()
      }
    ]
  },
  contact: {
    pageId: 'contact',
    title: 'Kontakt',
    path: '/kontakt',
    updatedAt: new Date().toISOString(),
    blocks: [
      {
        id: 'contact-headline',
        type: 'heading',
        content: 'Kontaktieren Sie uns',
        updatedAt: new Date().toISOString()
      },
      {
        id: 'contact-description',
        type: 'paragraph',
        content: 'Haben Sie ein konkretes Projekt? Lassen Sie uns darüber sprechen – unverbindlich und ohne Verkaufsdruck.',
        updatedAt: new Date().toISOString()
      },
      {
        id: 'contact-phone',
        type: 'text',
        content: '+49 (0) 176 618 659 80',
        updatedAt: new Date().toISOString()
      },
      {
        id: 'contact-email',
        type: 'text',
        content: 'info@ic-resulting.de',
        updatedAt: new Date().toISOString()
      }
    ]
  },
  solutions: {
    pageId: 'solutions',
    title: 'Lösungen',
    path: '/loesungen',
    updatedAt: new Date().toISOString(),
    blocks: [
      {
        id: 'solutions-headline',
        type: 'heading',
        content: 'Unsere Lösungen',
        updatedAt: new Date().toISOString()
      },
      {
        id: 'solutions-description',
        type: 'paragraph',
        content: 'Maßgeschneiderte IT-Lösungen für Ihr Unternehmen – von der Projektleitung bis zur KI-Automatisierung.',
        updatedAt: new Date().toISOString()
      }
    ]
  },
  references: {
    pageId: 'references',
    title: 'Referenzen',
    path: '/referenzen',
    updatedAt: new Date().toISOString(),
    blocks: [
      {
        id: 'references-headline',
        type: 'heading',
        content: 'Unsere Referenzen',
        updatedAt: new Date().toISOString()
      },
      {
        id: 'references-description',
        type: 'paragraph',
        content: 'Erfolgreiche Projekte aus verschiedenen Branchen: Behörden, Luftfahrt, Industrie, Versicherung.',
        updatedAt: new Date().toISOString()
      }
    ]
  },
  career: {
    pageId: 'career',
    title: 'Karriere',
    path: '/karriere',
    updatedAt: new Date().toISOString(),
    blocks: [
      {
        id: 'career-headline',
        type: 'heading',
        content: 'Karriere bei IC-RESULTING',
        updatedAt: new Date().toISOString()
      },
      {
        id: 'career-description',
        type: 'paragraph',
        content: 'Werde Teil unseres Teams und arbeite an spannenden IT-Projekten.',
        updatedAt: new Date().toISOString()
      }
    ]
  }
}

// Initialisiere mit Standard-Inhalten
Object.entries(defaultContent).forEach(([key, value]) => {
  if (!contentStore.has(key)) {
    contentStore.set(key, value)
  }
})

// API Funktionen
export function getAllPages(): { pageId: string; title: string; path: string }[] {
  return Array.from(contentStore.values()).map(p => ({
    pageId: p.pageId,
    title: p.title,
    path: p.path
  }))
}

export function getPageContent(pageId: string): PageContent | null {
  // Falls nicht im Store, initialisiere mit Default
  if (!contentStore.has(pageId) && defaultContent[pageId]) {
    contentStore.set(pageId, defaultContent[pageId])
  }
  return contentStore.get(pageId) || null
}

export function updateBlock(pageId: string, blockId: string, data: { content?: string; metadata?: Record<string, any>; type?: ContentBlock['type'] }): boolean {
  const page = contentStore.get(pageId)
  if (!page) return false

  const block = page.blocks.find(b => b.id === blockId)
  if (!block) return false

  if (data.content !== undefined) block.content = data.content
  if (data.metadata !== undefined) block.metadata = data.metadata
  if (data.type !== undefined) block.type = data.type
  block.updatedAt = new Date().toISOString()
  page.updatedAt = new Date().toISOString()

  return true
}

export function addBlock(pageId: string, data: { id?: string; type: ContentBlock['type']; content: string; metadata?: Record<string, any> }): ContentBlock {
  const page = contentStore.get(pageId)
  if (!page) {
    throw new Error('Page not found')
  }

  const newBlock: ContentBlock = {
    id: data.id || `block-${Date.now()}`,
    type: data.type,
    content: data.content,
    metadata: data.metadata,
    updatedAt: new Date().toISOString()
  }

  page.blocks.push(newBlock)
  page.updatedAt = new Date().toISOString()

  return newBlock
}

export function updatePageMeta(pageId: string, data: { title?: string }): boolean {
  const page = contentStore.get(pageId)
  if (!page) return false

  if (data.title) page.title = data.title
  page.updatedAt = new Date().toISOString()

  return true
}

export function deleteBlock(pageId: string, blockId: string): boolean {
  const page = contentStore.get(pageId)
  if (!page) return false

  const index = page.blocks.findIndex(b => b.id === blockId)
  if (index === -1) return false

  page.blocks.splice(index, 1)
  page.updatedAt = new Date().toISOString()

  return true
}
