<template>
  <div class="min-h-screen bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Header -->
      <div class="mb-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-3xl font-bold text-gray-900">Content Editor</h1>
            <p class="mt-1 text-sm text-gray-500">
              Bearbeiten Sie die Inhalte Ihrer Webseiten
            </p>
          </div>
          <div class="flex items-center space-x-4">
            <button
              v-if="hasChanges"
              @click="saveAllChanges"
              class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
            >
              <Icon name="heroicons:check" class="w-5 h-5 mr-2" />
              Alle Änderungen speichern
            </button>
          </div>
        </div>
      </div>

      <!-- Seiten-Auswahl -->
      <div class="mb-6">
        <div class="border-b border-gray-200">
          <nav class="-mb-px flex space-x-8 overflow-x-auto">
            <button
              v-for="page in pages"
              :key="page.pageId"
              @click="selectPage(page.pageId)"
              :class="[
                selectedPageId === page.pageId
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors'
              ]"
            >
              {{ page.title }}
            </button>
          </nav>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="flex items-center justify-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>

      <!-- Editor Bereich -->
      <div v-else-if="currentPage" class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Content Blöcke -->
        <div class="lg:col-span-2 space-y-4">
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-lg font-semibold text-gray-900">
                {{ currentPage.title }}
                <span class="text-sm font-normal text-gray-500 ml-2">{{ currentPage.path }}</span>
              </h2>
              <button
                @click="showAddBlockModal = true"
                class="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <Icon name="heroicons:plus" class="w-4 h-4 mr-1" />
                Block hinzufügen
              </button>
            </div>

            <!-- Content Blöcke Liste -->
            <div class="space-y-4">
              <div
                v-for="(block, index) in currentPage.blocks"
                :key="block.id"
                class="group relative bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-blue-300 transition-colors"
              >
                <!-- Block Header -->
                <div class="flex items-center justify-between mb-3">
                  <div class="flex items-center space-x-3">
                    <span :class="getBlockTypeClass(block.type)">
                      {{ getBlockTypeLabel(block.type) }}
                    </span>
                    <span class="text-xs text-gray-400 font-mono">{{ block.id }}</span>
                  </div>
                  <div class="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      @click="deleteBlock(block.id)"
                      class="p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded"
                      title="Block löschen"
                    >
                      <Icon name="heroicons:trash" class="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <!-- Block Content Editor -->
                <div v-if="block.type === 'heading' || block.type === 'text'">
                  <input
                    v-model="block.content"
                    @input="markChanged(block)"
                    :class="[
                      block.type === 'heading' ? 'text-xl font-bold' : 'text-base',
                      'w-full bg-white border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                    ]"
                    :placeholder="block.type === 'heading' ? 'Überschrift eingeben...' : 'Text eingeben...'"
                  />
                </div>

                <div v-else-if="block.type === 'paragraph'">
                  <textarea
                    v-model="block.content"
                    @input="markChanged(block)"
                    rows="4"
                    class="w-full bg-white border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-y"
                    placeholder="Absatz eingeben..."
                  ></textarea>
                </div>

                <div v-else-if="block.type === 'button'">
                  <div class="space-y-3">
                    <input
                      v-model="block.content"
                      @input="markChanged(block)"
                      class="w-full bg-white border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Button-Text..."
                    />
                    <div class="flex items-center space-x-2">
                      <span class="text-sm text-gray-500">Link:</span>
                      <input
                        v-model="block.metadata!.link"
                        @input="markChanged(block)"
                        class="flex-1 bg-white border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="/kontakt"
                      />
                    </div>
                  </div>
                </div>

                <div v-else-if="block.type === 'image'">
                  <div class="space-y-3">
                    <div
                      v-if="block.content"
                      class="relative aspect-video bg-gray-100 rounded-lg overflow-hidden"
                    >
                      <img
                        :src="block.content"
                        :alt="block.metadata?.alt || ''"
                        class="w-full h-full object-cover"
                      />
                      <button
                        @click="openImageSelector(block)"
                        class="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity"
                      >
                        <span class="text-white font-medium">Bild ändern</span>
                      </button>
                    </div>
                    <button
                      v-else
                      @click="openImageSelector(block)"
                      class="w-full aspect-video bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center hover:border-blue-400 hover:bg-blue-50 transition-colors"
                    >
                      <Icon name="heroicons:photo" class="w-12 h-12 text-gray-400" />
                      <span class="mt-2 text-sm text-gray-500">Bild auswählen</span>
                    </button>
                    <input
                      v-model="block.metadata!.alt"
                      @input="markChanged(block)"
                      class="w-full bg-white border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Alt-Text für das Bild..."
                    />
                  </div>
                </div>

                <div v-else-if="block.type === 'list'">
                  <div class="space-y-2">
                    <div
                      v-for="(item, i) in parseListItems(block.content)"
                      :key="i"
                      class="flex items-center space-x-2"
                    >
                      <span class="text-gray-400">•</span>
                      <input
                        :value="item"
                        @input="updateListItem(block, i, ($event.target as HTMLInputElement).value)"
                        class="flex-1 bg-white border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <button
                        @click="removeListItem(block, i)"
                        class="p-1 text-red-400 hover:text-red-600"
                      >
                        <Icon name="heroicons:x-mark" class="w-4 h-4" />
                      </button>
                    </div>
                    <button
                      @click="addListItem(block)"
                      class="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
                    >
                      <Icon name="heroicons:plus" class="w-4 h-4 mr-1" />
                      Punkt hinzufügen
                    </button>
                  </div>
                </div>

                <!-- Speicher-Button pro Block -->
                <div v-if="changedBlocks.has(block.id)" class="mt-3 flex justify-end">
                  <button
                    @click="saveBlock(block)"
                    class="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700"
                  >
                    <Icon name="heroicons:check" class="w-4 h-4 mr-1" />
                    Speichern
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar: Bilder & Info -->
        <div class="space-y-6">
          <!-- Seiten-Info -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Seiten-Informationen
            </h3>
            <dl class="space-y-3 text-sm">
              <div>
                <dt class="text-gray-500">Seiten-ID</dt>
                <dd class="font-mono text-gray-900">{{ currentPage.pageId }}</dd>
              </div>
              <div>
                <dt class="text-gray-500">Pfad</dt>
                <dd class="font-mono text-gray-900">{{ currentPage.path }}</dd>
              </div>
              <div>
                <dt class="text-gray-500">Letzte Änderung</dt>
                <dd class="text-gray-900">{{ formatDate(currentPage.updatedAt) }}</dd>
              </div>
              <div>
                <dt class="text-gray-500">Anzahl Blöcke</dt>
                <dd class="text-gray-900">{{ currentPage.blocks.length }}</dd>
              </div>
            </dl>
          </div>

          <!-- Bilder-Galerie -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Bilder-Bibliothek
              </h3>
              <button
                @click="showUploadModal = true"
                class="text-blue-600 hover:text-blue-800"
              >
                <Icon name="heroicons:plus-circle" class="w-5 h-5" />
              </button>
            </div>
            <div class="grid grid-cols-2 gap-2">
              <div
                v-for="image in images"
                :key="image.id"
                class="relative aspect-square bg-gray-100 rounded-lg overflow-hidden group cursor-pointer"
                @click="copyImageUrl(image.url)"
              >
                <img
                  :src="image.url"
                  :alt="image.alt"
                  class="w-full h-full object-cover"
                />
                <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span class="text-white text-xs">URL kopieren</span>
                </div>
              </div>
              <div
                v-if="images.length === 0"
                class="col-span-2 text-center py-8 text-gray-400 text-sm"
              >
                Keine Bilder vorhanden
              </div>
            </div>
          </div>

          <!-- Schnellaktionen -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Schnellaktionen
            </h3>
            <div class="space-y-2">
              <a
                :href="currentPage.path"
                target="_blank"
                class="flex items-center justify-between w-full px-3 py-2 text-sm text-gray-700 bg-gray-50 rounded-md hover:bg-gray-100"
              >
                <span>Seite ansehen</span>
                <Icon name="heroicons:arrow-top-right-on-square" class="w-4 h-4" />
              </a>
              <button
                @click="reloadContent"
                class="flex items-center justify-between w-full px-3 py-2 text-sm text-gray-700 bg-gray-50 rounded-md hover:bg-gray-100"
              >
                <span>Inhalte neu laden</span>
                <Icon name="heroicons:arrow-path" class="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Block hinzufügen Modal -->
      <div
        v-if="showAddBlockModal"
        class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        @click.self="showAddBlockModal = false"
      >
        <div class="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
          <h3 class="text-lg font-semibold mb-4">Neuen Block hinzufügen</h3>
          <div class="space-y-3">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Block-Typ</label>
              <select
                v-model="newBlock.type"
                class="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
              >
                <option value="heading">Überschrift</option>
                <option value="paragraph">Absatz</option>
                <option value="text">Kurzer Text</option>
                <option value="button">Button</option>
                <option value="image">Bild</option>
                <option value="list">Liste</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Block-ID</label>
              <input
                v-model="newBlock.id"
                class="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
                placeholder="z.B. hero-title"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Inhalt</label>
              <textarea
                v-model="newBlock.content"
                rows="3"
                class="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
                placeholder="Block-Inhalt..."
              ></textarea>
            </div>
          </div>
          <div class="mt-6 flex justify-end space-x-3">
            <button
              @click="showAddBlockModal = false"
              class="px-4 py-2 text-sm text-gray-700 hover:text-gray-900"
            >
              Abbrechen
            </button>
            <button
              @click="addNewBlock"
              class="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700"
            >
              Hinzufügen
            </button>
          </div>
        </div>
      </div>

      <!-- Bild Upload Modal -->
      <div
        v-if="showUploadModal"
        class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        @click.self="showUploadModal = false"
      >
        <div class="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
          <h3 class="text-lg font-semibold mb-4">Bild hochladen</h3>
          <div class="space-y-4">
            <div
              class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center"
              @dragover.prevent
              @drop.prevent="handleDrop"
            >
              <input
                type="file"
                ref="fileInput"
                @change="handleFileSelect"
                accept="image/*"
                class="hidden"
              />
              <Icon name="heroicons:cloud-arrow-up" class="w-12 h-12 text-gray-400 mx-auto" />
              <p class="mt-2 text-sm text-gray-500">
                Bild hier ablegen oder
                <button
                  @click="($refs.fileInput as HTMLInputElement).click()"
                  class="text-blue-600 hover:text-blue-800"
                >
                  durchsuchen
                </button>
              </p>
              <p v-if="selectedFile" class="mt-2 text-sm font-medium text-gray-900">
                {{ selectedFile.name }}
              </p>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Alt-Text</label>
              <input
                v-model="uploadAlt"
                class="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
                placeholder="Bildbeschreibung..."
              />
            </div>
          </div>
          <div class="mt-6 flex justify-end space-x-3">
            <button
              @click="showUploadModal = false; selectedFile = null"
              class="px-4 py-2 text-sm text-gray-700 hover:text-gray-900"
            >
              Abbrechen
            </button>
            <button
              @click="uploadImage"
              :disabled="!selectedFile || uploading"
              class="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              {{ uploading ? 'Lädt...' : 'Hochladen' }}
            </button>
          </div>
        </div>
      </div>

      <!-- Bild Auswahl Modal -->
      <div
        v-if="showImageSelectorModal"
        class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        @click.self="showImageSelectorModal = false"
      >
        <div class="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl">
          <h3 class="text-lg font-semibold mb-4">Bild auswählen</h3>
          <div class="grid grid-cols-4 gap-3 max-h-96 overflow-y-auto">
            <div
              v-for="image in images"
              :key="image.id"
              @click="selectImage(image)"
              class="relative aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-500"
            >
              <img
                :src="image.url"
                :alt="image.alt"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
          <div class="mt-4 p-4 bg-gray-50 rounded-lg">
            <p class="text-sm text-gray-500 mb-2">Oder URL direkt eingeben:</p>
            <div class="flex space-x-2">
              <input
                v-model="customImageUrl"
                class="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
                placeholder="https://..."
              />
              <button
                @click="selectCustomImage"
                class="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700"
              >
                Verwenden
              </button>
            </div>
          </div>
          <div class="mt-6 flex justify-end">
            <button
              @click="showImageSelectorModal = false"
              class="px-4 py-2 text-sm text-gray-700 hover:text-gray-900"
            >
              Schließen
            </button>
          </div>
        </div>
      </div>

      <!-- Toast Notification -->
      <div
        v-if="toast.show"
        :class="[
          'fixed bottom-4 right-4 px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 z-50 transition-all',
          toast.type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
        ]"
      >
        <Icon
          :name="toast.type === 'success' ? 'heroicons:check-circle' : 'heroicons:x-circle'"
          class="w-5 h-5"
        />
        <span>{{ toast.message }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin',
  middleware: ['admin-auth']
})

interface ContentBlock {
  id: string
  type: 'text' | 'heading' | 'paragraph' | 'image' | 'button' | 'list'
  content: string
  metadata?: Record<string, any>
  updatedAt: string
}

interface PageContent {
  pageId: string
  title: string
  path: string
  blocks: ContentBlock[]
  updatedAt: string
}

interface PageInfo {
  pageId: string
  title: string
  path: string
}

interface ImageInfo {
  id: string
  filename: string
  originalName: string
  mimeType: string
  size: number
  url: string
  alt: string
  uploadedAt: string
}

const loading = ref(true)
const pages = ref<PageInfo[]>([])
const selectedPageId = ref('home')
const currentPage = ref<PageContent | null>(null)
const changedBlocks = ref(new Set<string>())
const images = ref<ImageInfo[]>([])

// Modals
const showAddBlockModal = ref(false)
const showUploadModal = ref(false)
const showImageSelectorModal = ref(false)

// Neuer Block
const newBlock = ref({
  type: 'paragraph' as ContentBlock['type'],
  id: '',
  content: ''
})

// Upload
const selectedFile = ref<File | null>(null)
const uploadAlt = ref('')
const uploading = ref(false)

// Bild Auswahl
const selectedImageBlock = ref<ContentBlock | null>(null)
const customImageUrl = ref('')

// Toast
const toast = ref({
  show: false,
  message: '',
  type: 'success' as 'success' | 'error'
})

const hasChanges = computed(() => changedBlocks.value.size > 0)

// Daten laden
async function loadData() {
  loading.value = true
  try {
    // Seiten-Liste laden
    const pagesData = await $fetch<PageInfo[]>('/api/admin/content')
    pages.value = pagesData

    // Erste Seite laden
    if (pagesData.length > 0 && !selectedPageId.value) {
      selectedPageId.value = pagesData[0].pageId
    }

    // Aktuelle Seite laden
    await loadPage(selectedPageId.value)

    // Bilder laden
    const imagesData = await $fetch<ImageInfo[]>('/api/admin/images')
    images.value = imagesData
  } catch (error) {
    showToast('Fehler beim Laden der Daten', 'error')
  } finally {
    loading.value = false
  }
}

async function loadPage(pageId: string) {
  try {
    const pageData = await $fetch<PageContent>('/api/admin/content', {
      query: { pageId }
    })
    currentPage.value = pageData
    // Stelle sicher, dass metadata für Buttons und Bilder existiert
    currentPage.value.blocks.forEach(block => {
      if ((block.type === 'button' || block.type === 'image') && !block.metadata) {
        block.metadata = {}
      }
    })
  } catch (error) {
    showToast('Fehler beim Laden der Seite', 'error')
  }
}

async function selectPage(pageId: string) {
  if (hasChanges.value) {
    if (!confirm('Sie haben ungespeicherte Änderungen. Möchten Sie fortfahren?')) {
      return
    }
  }
  selectedPageId.value = pageId
  changedBlocks.value.clear()
  await loadPage(pageId)
}

function markChanged(block: ContentBlock) {
  changedBlocks.value.add(block.id)
}

async function saveBlock(block: ContentBlock) {
  try {
    await $fetch('/api/admin/content', {
      method: 'POST',
      body: {
        action: 'updateBlock',
        pageId: selectedPageId.value,
        blockId: block.id,
        data: {
          content: block.content,
          metadata: block.metadata
        }
      }
    })
    changedBlocks.value.delete(block.id)
    showToast('Block gespeichert', 'success')
  } catch (error) {
    showToast('Fehler beim Speichern', 'error')
  }
}

async function saveAllChanges() {
  if (!currentPage.value) return

  for (const blockId of changedBlocks.value) {
    const block = currentPage.value.blocks.find(b => b.id === blockId)
    if (block) {
      await saveBlock(block)
    }
  }
}

async function deleteBlock(blockId: string) {
  if (!confirm('Block wirklich löschen?')) return

  try {
    await $fetch('/api/admin/content', {
      method: 'POST',
      body: {
        action: 'deleteBlock',
        pageId: selectedPageId.value,
        blockId
      }
    })
    await loadPage(selectedPageId.value)
    showToast('Block gelöscht', 'success')
  } catch (error) {
    showToast('Fehler beim Löschen', 'error')
  }
}

async function addNewBlock() {
  if (!newBlock.value.id || !newBlock.value.content) {
    showToast('ID und Inhalt erforderlich', 'error')
    return
  }

  try {
    await $fetch('/api/admin/content', {
      method: 'POST',
      body: {
        action: 'addBlock',
        pageId: selectedPageId.value,
        data: {
          id: newBlock.value.id,
          type: newBlock.value.type,
          content: newBlock.value.content,
          metadata: newBlock.value.type === 'button' ? { link: '/' } : undefined
        }
      }
    })
    await loadPage(selectedPageId.value)
    showAddBlockModal.value = false
    newBlock.value = { type: 'paragraph', id: '', content: '' }
    showToast('Block hinzugefügt', 'success')
  } catch (error) {
    showToast('Fehler beim Hinzufügen', 'error')
  }
}

// Listen-Funktionen
function parseListItems(content: string): string[] {
  return content.split('\n').filter(Boolean)
}

function updateListItem(block: ContentBlock, index: number, value: string) {
  const items = parseListItems(block.content)
  items[index] = value
  block.content = items.join('\n')
  markChanged(block)
}

function addListItem(block: ContentBlock) {
  block.content = block.content ? block.content + '\n' : ''
  markChanged(block)
}

function removeListItem(block: ContentBlock, index: number) {
  const items = parseListItems(block.content)
  items.splice(index, 1)
  block.content = items.join('\n')
  markChanged(block)
}

// Bild-Funktionen
function openImageSelector(block: ContentBlock) {
  selectedImageBlock.value = block
  customImageUrl.value = block.content || ''
  showImageSelectorModal.value = true
}

function selectImage(image: ImageInfo) {
  if (selectedImageBlock.value) {
    selectedImageBlock.value.content = image.url
    if (!selectedImageBlock.value.metadata) selectedImageBlock.value.metadata = {}
    selectedImageBlock.value.metadata.alt = image.alt
    markChanged(selectedImageBlock.value)
  }
  showImageSelectorModal.value = false
}

function selectCustomImage() {
  if (selectedImageBlock.value && customImageUrl.value) {
    selectedImageBlock.value.content = customImageUrl.value
    markChanged(selectedImageBlock.value)
  }
  showImageSelectorModal.value = false
}

async function handleFileSelect(event: Event) {
  const input = event.target as HTMLInputElement
  if (input.files && input.files[0]) {
    selectedFile.value = input.files[0]
  }
}

function handleDrop(event: DragEvent) {
  if (event.dataTransfer?.files && event.dataTransfer.files[0]) {
    selectedFile.value = event.dataTransfer.files[0]
  }
}

async function uploadImage() {
  if (!selectedFile.value) return

  uploading.value = true
  try {
    const reader = new FileReader()
    reader.onload = async (e) => {
      const base64 = e.target?.result as string

      const response = await $fetch<{ success: boolean; image: ImageInfo }>('/api/admin/images', {
        method: 'POST',
        body: {
          action: 'upload',
          data: {
            base64,
            filename: selectedFile.value!.name,
            alt: uploadAlt.value || selectedFile.value!.name
          }
        }
      })

      if (response.success) {
        images.value.push(response.image)
        showToast('Bild hochgeladen', 'success')
      }

      showUploadModal.value = false
      selectedFile.value = null
      uploadAlt.value = ''
    }
    reader.readAsDataURL(selectedFile.value)
  } catch (error) {
    showToast('Fehler beim Hochladen', 'error')
  } finally {
    uploading.value = false
  }
}

function copyImageUrl(url: string) {
  navigator.clipboard.writeText(url)
  showToast('URL kopiert', 'success')
}

async function reloadContent() {
  changedBlocks.value.clear()
  await loadPage(selectedPageId.value)
  showToast('Inhalte neu geladen', 'success')
}

// Hilfsfunktionen
function getBlockTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    heading: 'Überschrift',
    paragraph: 'Absatz',
    text: 'Text',
    button: 'Button',
    image: 'Bild',
    list: 'Liste'
  }
  return labels[type] || type
}

function getBlockTypeClass(type: string): string {
  const classes: Record<string, string> = {
    heading: 'px-2 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded',
    paragraph: 'px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded',
    text: 'px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded',
    button: 'px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded',
    image: 'px-2 py-1 text-xs font-medium bg-orange-100 text-orange-700 rounded',
    list: 'px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-700 rounded'
  }
  return classes[type] || 'px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded'
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

function showToast(message: string, type: 'success' | 'error') {
  toast.value = { show: true, message, type }
  setTimeout(() => {
    toast.value.show = false
  }, 3000)
}

// Initialisierung
onMounted(() => {
  loadData()
})
</script>
