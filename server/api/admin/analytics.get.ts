import { getAnalyticsStats, getRecentPageViews, generateDemoData } from '../../utils/analytics'
import { validateSession } from '../../utils/session'

export default defineEventHandler(async (event) => {
  // Session prüfen
  const sessionToken = getCookie(event, 'admin_session')
  if (!sessionToken || !(await validateSession(sessionToken))) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Nicht autorisiert'
    })
  }

  const query = getQuery(event)
  const days = parseInt(query.days as string) || 30
  const includeDemo = query.demo === 'true'

  // Demo-Daten generieren wenn gewünscht
  if (includeDemo) {
    generateDemoData()
  }

  const stats = getAnalyticsStats(days)
  const recentViews = getRecentPageViews(20)

  return {
    stats,
    recentViews
  }
})
