// Composable für Live-Editing auf der Seite
// Ermöglicht Admin-Benutzern, Inhalte direkt auf der Seite zu bearbeiten

interface EditableContent {
  id: string
  content: string
  type: 'text' | 'heading' | 'paragraph'
}

export function useLiveEdit() {
  const isEditMode = useState<boolean>('liveEditMode', () => false)
  const isAdmin = useState<boolean>('isAdmin', () => false)
  const pendingChanges = useState<Map<string, string>>('pendingChanges', () => new Map())
  const isSaving = useState<boolean>('isSaving', () => false)

  // Prüft ob User Admin ist
  async function checkAdminStatus() {
    try {
      const response = await $fetch<{ authenticated: boolean }>('/api/admin/session')
      isAdmin.value = response.authenticated
    } catch {
      isAdmin.value = false
    }
  }

  // Edit-Modus ein/ausschalten
  function toggleEditMode() {
    if (!isAdmin.value) return
    isEditMode.value = !isEditMode.value
    
    if (!isEditMode.value) {
      // Beim Verlassen: Änderungen verwerfen
      pendingChanges.value.clear()
    }
  }

  // Änderung registrieren
  function registerChange(id: string, content: string) {
    pendingChanges.value.set(id, content)
  }

  // Alle Änderungen speichern
  async function saveAllChanges() {
    if (pendingChanges.value.size === 0) return

    isSaving.value = true
    const route = useRoute()
    const pageId = getPageIdFromPath(route.path)

    try {
      for (const [blockId, content] of pendingChanges.value) {
        await $fetch('/api/admin/content', {
          method: 'POST',
          body: {
            action: 'updateBlock',
            pageId,
            blockId,
            data: { content }
          }
        })
      }
      pendingChanges.value.clear()
      return true
    } catch (error) {
      console.error('Fehler beim Speichern:', error)
      return false
    } finally {
      isSaving.value = false
    }
  }

  // Einzelne Änderung speichern
  async function saveChange(id: string, content: string) {
    const route = useRoute()
    const pageId = getPageIdFromPath(route.path)

    try {
      await $fetch('/api/admin/content', {
        method: 'POST',
        body: {
          action: 'updateBlock',
          pageId,
          blockId: id,
          data: { content }
        }
      })
      pendingChanges.value.delete(id)
      return true
    } catch (error) {
      console.error('Fehler beim Speichern:', error)
      return false
    }
  }

  return {
    isEditMode: readonly(isEditMode),
    isAdmin: readonly(isAdmin),
    pendingChanges: readonly(pendingChanges),
    isSaving: readonly(isSaving),
    hasChanges: computed(() => pendingChanges.value.size > 0),
    checkAdminStatus,
    toggleEditMode,
    registerChange,
    saveAllChanges,
    saveChange
  }
}

// Hilfsfunktion: Pfad zu PageId
function getPageIdFromPath(path: string): string {
  const pathMap: Record<string, string> = {
    '/': 'home',
    '/ueber-uns': 'about',
    '/kontakt': 'contact',
    '/loesungen': 'solutions',
    '/referenzen': 'references',
    '/karriere': 'career',
    '/it-solutions': 'it-solutions',
    '/datenschutz': 'datenschutz',
    '/impressum': 'impressum'
  }
  return pathMap[path] || 'home'
}
