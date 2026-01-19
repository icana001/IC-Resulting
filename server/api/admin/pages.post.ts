import { validateSession } from '../../utils/session'

// In-Memory Storage für bearbeitete Inhalte (für lokales Testen)
const pageContent = new Map<string, any>()

export default defineEventHandler(async (event) => {
  // Session prüfen
  const sessionToken = getCookie(event, 'admin_session')
  if (!sessionToken || !(await validateSession(sessionToken))) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Nicht autorisiert'
    })
  }

  const body = await readBody(event)
  const { pageId, sectionId, fields } = body

  if (!pageId || !sectionId || !fields) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Fehlende Parameter: pageId, sectionId oder fields'
    })
  }

  // Änderungen speichern
  const key = `${pageId}_${sectionId}`
  pageContent.set(key, {
    ...fields,
    updatedAt: new Date().toISOString()
  })

  return {
    success: true,
    message: 'Inhalt gespeichert',
    data: pageContent.get(key)
  }
})

// Export für GET-Endpunkt
export function getStoredContent(pageId: string, sectionId: string) {
  return pageContent.get(`${pageId}_${sectionId}`)
}
