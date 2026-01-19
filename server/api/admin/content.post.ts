import { updateBlock, addBlock, deleteBlock, updatePageMeta } from '../../utils/content'
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

  const body = await readBody(event)
  const { action, pageId, blockId, data } = body

  if (!pageId) {
    throw createError({
      statusCode: 400,
      statusMessage: 'pageId erforderlich'
    })
  }

  switch (action) {
    case 'updateBlock':
      if (!blockId || !data) {
        throw createError({
          statusCode: 400,
          statusMessage: 'blockId und data erforderlich'
        })
      }
      const updated = updateBlock(pageId, blockId, data)
      if (!updated) {
        throw createError({
          statusCode: 404,
          statusMessage: 'Block nicht gefunden'
        })
      }
      return { success: true, message: 'Block aktualisiert' }

    case 'addBlock':
      if (!data) {
        throw createError({
          statusCode: 400,
          statusMessage: 'data erforderlich'
        })
      }
      const newBlock = addBlock(pageId, data)
      return { success: true, block: newBlock }

    case 'deleteBlock':
      if (!blockId) {
        throw createError({
          statusCode: 400,
          statusMessage: 'blockId erforderlich'
        })
      }
      const deleted = deleteBlock(pageId, blockId)
      if (!deleted) {
        throw createError({
          statusCode: 404,
          statusMessage: 'Block nicht gefunden'
        })
      }
      return { success: true, message: 'Block gelöscht' }

    case 'updateMeta':
      if (!data) {
        throw createError({
          statusCode: 400,
          statusMessage: 'data erforderlich'
        })
      }
      const metaUpdated = updatePageMeta(pageId, data)
      if (!metaUpdated) {
        throw createError({
          statusCode: 404,
          statusMessage: 'Seite nicht gefunden'
        })
      }
      return { success: true, message: 'Meta-Daten aktualisiert' }

    default:
      throw createError({
        statusCode: 400,
        statusMessage: 'Ungültige Aktion'
      })
  }
})
