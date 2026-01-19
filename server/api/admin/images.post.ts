import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { addImage, deleteImage, generateImageId } from '../../utils/images'
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
  const { action, id, data } = body

  switch (action) {
    case 'upload':
      if (!data || !data.base64 || !data.filename) {
        throw createError({
          statusCode: 400,
          statusMessage: 'base64 und filename erforderlich'
        })
      }

      try {
        // Base64 dekodieren
        const base64Data = data.base64.replace(/^data:image\/\w+;base64,/, '')
        const buffer = Buffer.from(base64Data, 'base64')

        // Eindeutige ID und Dateiname
        const imageId = generateImageId()
        const ext = data.filename.split('.').pop() || 'png'
        const filename = `${imageId}.${ext}`

        // Verzeichnis erstellen falls nicht vorhanden
        const uploadDir = join(process.cwd(), 'public', 'images', 'uploads')
        await mkdir(uploadDir, { recursive: true })

        // Datei speichern
        const filePath = join(uploadDir, filename)
        await writeFile(filePath, buffer)

        // Mime-Type ermitteln
        const mimeTypes: Record<string, string> = {
          'jpg': 'image/jpeg',
          'jpeg': 'image/jpeg',
          'png': 'image/png',
          'gif': 'image/gif',
          'webp': 'image/webp',
          'svg': 'image/svg+xml'
        }

        const image = addImage({
          id: imageId,
          filename,
          originalName: data.filename,
          mimeType: mimeTypes[ext] || 'image/png',
          size: buffer.length,
          url: `/images/uploads/${filename}`,
          alt: data.alt || data.filename.replace(/\.[^/.]+$/, '')
        })

        return { success: true, image }
      } catch (error) {
        console.error('Upload error:', error)
        throw createError({
          statusCode: 500,
          statusMessage: 'Fehler beim Hochladen'
        })
      }

    case 'delete':
      if (!id) {
        throw createError({
          statusCode: 400,
          statusMessage: 'id erforderlich'
        })
      }

      const deleted = deleteImage(id)
      if (!deleted) {
        throw createError({
          statusCode: 404,
          statusMessage: 'Bild nicht gefunden'
        })
      }

      return { success: true, message: 'Bild gelöscht' }

    default:
      throw createError({
        statusCode: 400,
        statusMessage: 'Ungültige Aktion'
      })
  }
})
