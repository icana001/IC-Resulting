import { trackPageView } from '../../utils/analytics'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const headers = getHeaders(event)
  
  const pageView = trackPageView({
    path: body.path || '/',
    userAgent: headers['user-agent'] || '',
    referrer: body.referrer || headers['referer'] || '',
    sessionId: body.sessionId || 'unknown'
  })

  return {
    success: true,
    id: pageView.id
  }
})
