// GET /api/blog/[slug] - Einzelnen Beitrag abrufen
import { getPostBySlug, getPublishedPosts } from '~/server/utils/blog'

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')
  
  if (!slug) {
    throw createError({
      statusCode: 400,
      message: 'Slug erforderlich'
    })
  }
  
  const post = getPostBySlug(slug)
  
  if (!post || post.status !== 'published') {
    throw createError({
      statusCode: 404,
      message: 'Beitrag nicht gefunden'
    })
  }
  
  // Verwandte Beiträge (gleiche Tags)
  const relatedPosts = getPublishedPosts()
    .filter(p => p.id !== post.id && p.tags.some(t => post.tags.includes(t)))
    .slice(0, 3)
  
  return {
    post,
    relatedPosts
  }
})
