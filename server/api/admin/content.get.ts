import { getAllPages, getPageContent, updateBlock, addBlock, deleteBlock } from '../../utils/content'
import { validateSession } from '../../utils/session'

export default defineEventHandler(async (event) => {
  // Session prüfen
  const sessionToken = getCookie(event, 'admin_session')
  if (!sessionToken || !validateSession(sessionToken)) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Nicht autorisiert'
    })
  }

  const query = getQuery(event)
  const pageId = query.pageId as string

  if (pageId) {
    // Einzelne Seite laden
    const content = getPageContent(pageId)
    if (!content) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Seite nicht gefunden'
      })
    }
    return content
  }

  // Alle Seiten als Liste
  return getAllPages()
})
