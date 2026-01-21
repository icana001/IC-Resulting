// GET /api/admin/blog/[id] - Einzelnen Beitrag für Admin abrufen
import { getPostById } from '~/server/utils/blog'
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
  
  const id = getRouterParam(event, 'id')
  
  if (!id) {
    throw createError({
      statusCode: 400,
      message: 'ID erforderlich'
    })
  }
  
  const post = getPostById(id)
  
  if (!post) {
    throw createError({
      statusCode: 404,
      message: 'Beitrag nicht gefunden'
    })
  }
  
  return { post }
})
