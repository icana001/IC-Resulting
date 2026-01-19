import { validateSession } from '../../utils/session'

export default defineEventHandler(async (event) => {
  const sessionToken = getCookie(event, 'admin_session')
  
  if (!sessionToken) {
    return { authenticated: false }
  }

  const isValid = await validateSession(sessionToken)
  
  return {
    authenticated: isValid
  }
})
