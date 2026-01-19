import { getAllImages, addImage, deleteImage, generateImageId } from '../../utils/images'
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

  return getAllImages()
})
