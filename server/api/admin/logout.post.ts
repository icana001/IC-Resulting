import { destroySession } from '../../utils/session'

export default defineEventHandler(async (event) => {
  const sessionToken = getCookie(event, 'admin_session')
  
  if (sessionToken) {
    destroySession(sessionToken)
  }

  // Cookie löschen
  deleteCookie(event, 'admin_session', {
    path: '/'
  })

  return {
    success: true,
    message: 'Erfolgreich abgemeldet'
  }
})
