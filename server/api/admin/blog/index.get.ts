// GET /api/admin/blog - Alle Beiträge für Admin abrufen
import { getAllPosts, getAllTags } from '~/server/utils/blog'
import { validateSession } from '~/server/utils/session'

export default defineEventHandler(async (event) => {
  // Auth prüfen
  const sessionToken = getCookie(event, 'admin_session')
  if (!sessionToken || !validateSession(sessionToken)) {
    throw createError({
      statusCode: 401,
      message: 'Nicht autorisiert'
    })
  }
  
  return {
    posts: getAllPosts(),
    tags: getAllTags()
  }
})
