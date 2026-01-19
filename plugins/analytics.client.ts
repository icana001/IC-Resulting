// Analytics Plugin - Trackt automatisch alle Seitenaufrufe
export default defineNuxtPlugin((nuxtApp) => {
  // Nur auf Client-Seite ausführen
  if (!import.meta.client) return

  const router = useRouter()
  
  // Session-ID generieren oder laden
  let sessionId = ''
  try {
    sessionId = localStorage.getItem('ic_analytics_session') || ''
    if (!sessionId) {
      sessionId = Date.now().toString(36) + Math.random().toString(36).substr(2, 9)
      localStorage.setItem('ic_analytics_session', sessionId)
    }
  } catch (e) {
    sessionId = 'anonymous_' + Date.now()
  }

  // Page View tracken
  const trackPage = async (path: string) => {
    // Admin-Bereich nicht tracken
    if (path.startsWith('/admin')) return
    
    // DNT respektieren
    if (navigator.doNotTrack === '1') return

    try {
      await $fetch('/api/analytics/track', {
        method: 'POST',
        body: {
          path,
          referrer: document.referrer || '',
          sessionId
        }
      })
    } catch (e) {
      // Still ignorieren
    }
  }

  // Route-Wechsel tracken
  router.afterEach((to) => {
    setTimeout(() => trackPage(to.path), 100)
  })

  // Initiales Tracking nach App-Mount
  nuxtApp.hook('app:mounted', () => {
    trackPage(window.location.pathname)
  })
})
