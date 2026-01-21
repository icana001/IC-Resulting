// GET /api/blog - Öffentliche API für Blog-Beiträge
import { getPublishedPosts, getPostsByTag, getAllTags } from '~/server/utils/blog'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const tag = query.tag as string | undefined
  
  if (tag) {
    return {
      posts: getPostsByTag(tag),
      tag,
      tags: getAllTags()
    }
  }
  
  return {
    posts: getPublishedPosts(),
    tags: getAllTags()
  }
})
