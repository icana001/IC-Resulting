// Bild-Verwaltung für Admin-Bereich
// In Produktion würde man Cloud-Storage (S3, Cloudflare R2) verwenden

export interface ImageInfo {
  id: string
  filename: string
  originalName: string
  mimeType: string
  size: number
  url: string
  alt: string
  uploadedAt: string
}

// In-Memory Storage für Bilder-Metadaten
const imageStore = new Map<string, ImageInfo>()

// Standard-Bilder (bereits vorhandene)
const defaultImages: ImageInfo[] = [
  {
    id: 'founder-portrait',
    filename: 'Dipl-Inf_Ibrahim_Canakci.png',
    originalName: 'Dipl-Inf_Ibrahim_Canakci.png',
    mimeType: 'image/png',
    size: 0,
    url: '/images/Dipl-Inf_Ibrahim_Canakci.png',
    alt: 'Dipl.-Inf. Ibrahim Canakci - Gründer IC-RESULTING',
    uploadedAt: new Date().toISOString()
  }
]

// Initialisiere mit Standard-Bildern
defaultImages.forEach(img => {
  imageStore.set(img.id, img)
})

export function getAllImages(): ImageInfo[] {
  return Array.from(imageStore.values())
}

export function getImage(id: string): ImageInfo | null {
  return imageStore.get(id) || null
}

export function addImage(image: Omit<ImageInfo, 'uploadedAt'>): ImageInfo {
  const newImage: ImageInfo = {
    ...image,
    uploadedAt: new Date().toISOString()
  }
  imageStore.set(image.id, newImage)
  return newImage
}

export function updateImage(id: string, updates: Partial<ImageInfo>): boolean {
  const image = imageStore.get(id)
  if (!image) return false

  Object.assign(image, updates)
  return true
}

export function deleteImage(id: string): boolean {
  return imageStore.delete(id)
}

// Generiere eine eindeutige ID
export function generateImageId(): string {
  return `img_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}
