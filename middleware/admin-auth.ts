// Admin Auth Middleware
export default defineNuxtRouteMiddleware(async (to) => {
  // Skip für Login-Seite
  if (to.path === '/admin/login') {
    return
  }

  // Auf Client-Seite Session prüfen
  if (import.meta.client) {
    try {
      const { data } = await useFetch('/api/admin/session')
      
      if (!data.value?.authenticated) {
        return navigateTo('/admin/login')
      }
    } catch (error) {
      return navigateTo('/admin/login')
    }
  }
})
