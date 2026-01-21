// PUT /api/admin/blog/[id] - Beitrag aktualisieren
import { updatePost, getPostById, generateSlug, slugExists } from '~/server/utils/blog'
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
  
  const existing = getPostById(id)
  if (!existing) {
    throw createError({
      statusCode: 404,
      message: 'Beitrag nicht gefunden'
    })
  }
  
  const body = await readBody(event)
  
  // Slug aktualisieren wenn Titel geändert
  let slug = body.slug
  if (body.title && body.title !== existing.title && !body.slug) {
    slug = generateSlug(body.title)
    if (slugExists(slug, id)) {
      slug = `${slug}-${Date.now()}`
    }
  }
  
  // PublishedAt setzen wenn zum ersten Mal veröffentlicht
  let publishedAt = existing.publishedAt
  if (body.status === 'published' && !existing.publishedAt) {
    publishedAt = new Date().toISOString()
  }
  
  const post = updatePost(id, {
    ...(body.title && { title: body.title }),
    ...(slug && { slug }),
    ...(body.excerpt !== undefined && { excerpt: body.excerpt }),
    ...(body.content !== undefined && { content: body.content }),
    ...(body.image !== undefined && { image: body.image || undefined }),
    ...(body.imageAlt !== undefined && { imageAlt: body.imageAlt || undefined }),
    ...(body.tags !== undefined && { tags: body.tags }),
    ...(body.author !== undefined && { author: body.author }),
    ...(body.status !== undefined && { status: body.status }),
    ...(publishedAt && { publishedAt }),
    ...(body.metaTitle !== undefined && { metaTitle: body.metaTitle }),
    ...(body.metaDescription !== undefined && { metaDescription: body.metaDescription })
  })
  
  return {
    success: true,
    post
  }
})
