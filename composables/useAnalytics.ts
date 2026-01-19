// Composable für clientseitiges Analytics-Tracking
export function useAnalytics() {
  const sessionId = useState<string>('analytics-session', () => '')

  // Session-ID generieren oder aus localStorage laden
  const initSession = () => {
    if (import.meta.client) {
      let storedSession = localStorage.getItem('ic_analytics_session')
      
      if (!storedSession) {
        storedSession = generateSessionId()
        localStorage.setItem('ic_analytics_session', storedSession)
      }
      
      sessionId.value = storedSession
    }
  }

  // Page View tracken
  const trackPageView = async (path?: string) => {
    if (import.meta.server) return
    
    // Nicht tracken wenn DNT aktiviert
    if (navigator.doNotTrack === '1') return
    
    // Session initialisieren falls noch nicht geschehen
    if (!sessionId.value) {
      initSession()
    }

    try {
      await $fetch('/api/analytics/track', {
        method: 'POST',
        body: {
          path: path || window.location.pathname,
          referrer: document.referrer || '',
          sessionId: sessionId.value
        }
      })
    } catch (error) {
      // Fehler still ignorieren - Analytics soll die UX nicht beeinträchtigen
      console.debug('Analytics tracking failed:', error)
    }
  }

  // Event tracken (für zukünftige Erweiterungen)
  const trackEvent = async (eventName: string, eventData?: Record<string, any>) => {
    if (import.meta.server) return
    if (navigator.doNotTrack === '1') return

    // Kann später implementiert werden
    console.debug('Event tracked:', eventName, eventData)
  }

  return {
    sessionId: readonly(sessionId),
    initSession,
    trackPageView,
    trackEvent
  }
}

// Session-ID Generator
function generateSessionId(): string {
  const timestamp = Date.now().toString(36)
  const randomPart = Math.random().toString(36).substring(2, 15)
  return `${timestamp}_${randomPart}`
}
