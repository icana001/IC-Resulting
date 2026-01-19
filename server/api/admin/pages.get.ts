// Seiten-Inhalt API - Lesen
export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const pageId = query.page as string

  // Verfügbare Seiten
  const pages = {
    home: {
      id: 'home',
      title: 'Startseite',
      path: '/',
      sections: [
        {
          id: 'hero',
          name: 'Hero-Bereich',
          fields: {
            tagline: 'Resulting statt Beratung',
            headline: 'IT-Beratung & Projektleitung für Unternehmen – Verantwortung abgeben, Ergebnisse erhalten',
            subheadline: 'Wir übernehmen Ihre komplette IT-Verantwortung: Von der Projektleitung über Softwareentwicklung bis zu KI-gestützter Automatisierung. Mit klarer Verantwortung, messbaren Ergebnissen und einem Single Point of Accountability.',
            ctaPrimary: 'Reden Sie mit uns',
            ctaSecondary: 'Lösungen ansehen'
          }
        },
        {
          id: 'services',
          name: 'Leistungen',
          fields: {
            sectionTitle: 'Unsere IT-Leistungen',
            headline: 'Konzentrieren Sie sich auf Ihr Kerngeschäft – wir übernehmen den Rest',
            description: 'Wir übernehmen Ihre IT-Verantwortung – modular buchbar oder als Komplettlösung.'
          }
        }
      ]
    },
    about: {
      id: 'about',
      title: 'Über uns',
      path: '/ueber-uns',
      sections: [
        {
          id: 'intro',
          name: 'Einleitung',
          fields: {
            headline: 'Über IC-RESULTING',
            description: 'Resulting statt Beratung – das ist unser Versprechen.'
          }
        }
      ]
    },
    contact: {
      id: 'contact',
      title: 'Kontakt',
      path: '/kontakt',
      sections: [
        {
          id: 'header',
          name: 'Kopfbereich',
          fields: {
            headline: 'Kontaktieren Sie uns',
            description: 'Haben Sie ein konkretes Projekt? Lassen Sie uns darüber sprechen.'
          }
        }
      ]
    },
    solutions: {
      id: 'solutions',
      title: 'Lösungen',
      path: '/loesungen',
      sections: [
        {
          id: 'header',
          name: 'Kopfbereich',
          fields: {
            headline: 'Unsere Lösungen',
            description: 'Maßgeschneiderte IT-Lösungen für Ihr Unternehmen'
          }
        }
      ]
    },
    references: {
      id: 'references',
      title: 'Referenzen',
      path: '/referenzen',
      sections: [
        {
          id: 'header',
          name: 'Kopfbereich',
          fields: {
            headline: 'Unsere Referenzen',
            description: 'Erfolgreiche Projekte aus verschiedenen Branchen'
          }
        }
      ]
    },
    career: {
      id: 'career',
      title: 'Karriere',
      path: '/karriere',
      sections: [
        {
          id: 'header',
          name: 'Kopfbereich',
          fields: {
            headline: 'Karriere bei IC-RESULTING',
            description: 'Werde Teil unseres Teams'
          }
        }
      ]
    }
  }

  if (pageId) {
    return pages[pageId as keyof typeof pages] || null
  }

  // Alle Seiten als Liste zurückgeben
  return Object.values(pages).map(p => ({
    id: p.id,
    title: p.title,
    path: p.path
  }))
})
