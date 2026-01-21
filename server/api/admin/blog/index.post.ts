// POST /api/admin/blog - Neuen Beitrag erstellen
import { createPost, generateSlug, slugExists } from '~/server/utils/blog'
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
  
  const body = await readBody(event)
  
  // Validierung
  if (!body.title || !body.content) {
    throw createError({
      statusCode: 400,
      message: 'Titel und Inhalt sind erforderlich'
    })
  }
  
  // Slug generieren oder verwenden
  let slug = body.slug || generateSlug(body.title)
  
  // Prüfen ob Slug eindeutig ist
  if (slugExists(slug)) {
    slug = `${slug}-${Date.now()}`
  }
  
  const post = createPost({
    slug,
    title: body.title,
    excerpt: body.excerpt || '',
    content: body.content,
    image: body.image || undefined,
    imageAlt: body.imageAlt || undefined,
    tags: body.tags || [],
    author: body.author || 'Ibrahim Canakci',
    status: body.status || 'draft',
    publishedAt: body.status === 'published' ? new Date().toISOString() : undefined,
    metaTitle: body.metaTitle || body.title,
    metaDescription: body.metaDescription || body.excerpt
  })
  
  return {
    success: true,
    post
  }
})
