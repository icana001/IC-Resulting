<template>
  <div>
    <!-- Page Header -->
    <div class="mb-8">
      <h1 class="text-2xl font-display font-bold text-slate-900">Seiten verwalten</h1>
      <p class="text-slate-500 mt-1">Bearbeiten Sie die Inhalte Ihrer Website-Seiten</p>
    </div>

    <div class="grid lg:grid-cols-4 gap-6">
      <!-- Pages Sidebar -->
      <div class="lg:col-span-1">
        <div class="bg-white rounded-xl border border-slate-200 overflow-hidden sticky top-24">
          <div class="p-4 border-b border-slate-200">
            <h3 class="font-semibold text-slate-900">Seiten</h3>
          </div>
          <nav class="p-2">
            <button
              v-for="page in pages"
              :key="page.id"
              @click="selectPage(page.id)"
              :class="[
                'w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors text-left',
                selectedPageId === page.id
                  ? 'bg-primary-50 text-primary-700 font-medium'
                  : 'text-slate-600 hover:bg-slate-50'
              ]"
            >
              <Icon name="heroicons:document-text" class="w-4 h-4 flex-shrink-0" />
              <span class="truncate">{{ page.title }}</span>
            </button>
          </nav>
        </div>
      </div>

      <!-- Content Editor -->
      <div class="lg:col-span-3">
        <!-- Loading State -->
        <div v-if="loadingPage" class="flex items-center justify-center py-20 bg-white rounded-xl border border-slate-200">
          <div class="text-center">
            <Icon name="heroicons:arrow-path" class="w-8 h-8 text-primary-500 animate-spin mx-auto mb-4" />
            <p class="text-slate-500">Lade Seite...</p>
          </div>
        </div>

        <!-- Page Content -->
        <template v-else-if="currentPage">
          <div class="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <!-- Page Header -->
            <div class="p-6 border-b border-slate-200 flex items-center justify-between">
              <div>
                <h2 class="text-xl font-display font-bold text-slate-900">{{ currentPage.title }}</h2>
                <p class="text-sm text-slate-500 mt-1">
                  <Icon name="heroicons:link" class="w-4 h-4 inline mr-1" />
                  {{ currentPage.path }}
                </p>
              </div>
              <NuxtLink 
                :to="currentPage.path" 
                target="_blank"
                class="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg 
                       text-sm font-medium text-slate-700 transition-colors"
              >
                <Icon name="heroicons:eye" class="w-4 h-4" />
                Vorschau
              </NuxtLink>
            </div>

            <!-- Sections -->
            <div class="divide-y divide-slate-100">
              <div v-for="section in currentPage.sections" :key="section.id" class="p-6">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Icon name="heroicons:squares-2x2" class="w-4 h-4 text-primary-600" />
                  </div>
                  <h3 class="font-semibold text-slate-900">{{ section.name }}</h3>
                </div>

                <div class="space-y-4">
                  <div v-for="(value, fieldName) in section.fields" :key="fieldName" class="space-y-2">
                    <label :for="`${section.id}-${fieldName}`" class="block text-sm font-medium text-slate-700 capitalize">
                      {{ formatFieldName(fieldName as string) }}
                    </label>
                    
                    <!-- Textarea für lange Texte -->
                    <textarea
                      v-if="isLongText(value as string)"
                      :id="`${section.id}-${fieldName}`"
                      v-model="editedContent[`${section.id}_${fieldName}`]"
                      rows="4"
                      class="w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-900 
                             focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-y"
                    ></textarea>
                    
                    <!-- Input für kurze Texte -->
                    <input
                      v-else
                      type="text"
                      :id="`${section.id}-${fieldName}`"
                      v-model="editedContent[`${section.id}_${fieldName}`]"
                      class="w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-900 
                             focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    />
                  </div>
                </div>

                <!-- Save Button for Section -->
                <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span v-if="savedSections[section.id]" class="text-sm text-green-600 flex items-center gap-2">
                    <Icon name="heroicons:check-circle" class="w-4 h-4" />
                    Gespeichert
                  </span>
                  <span v-else></span>
                  
                  <button
                    @click="saveSection(section)"
                    :disabled="savingSection === section.id"
                    class="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 
                           text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50"
                  >
                    <Icon 
                      :name="savingSection === section.id ? 'heroicons:arrow-path' : 'heroicons:check'" 
                      :class="['w-4 h-4', savingSection === section.id && 'animate-spin']" 
                    />
                    {{ savingSection === section.id ? 'Speichern...' : 'Speichern' }}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Info Box -->
          <div class="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4">
            <div class="flex items-start gap-3">
              <Icon name="heroicons:information-circle" class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div class="text-sm text-blue-800">
                <p class="font-medium mb-1">Hinweis zur Content-Bearbeitung</p>
                <p class="text-blue-700">
                  Änderungen werden für lokales Testen im Speicher gespeichert. Für produktive Änderungen 
                  müssen die Vue-Dateien direkt bearbeitet werden. Ein vollständiges CMS kann bei Bedarf 
                  integriert werden (z.B. Nuxt Content, Strapi oder Directus).
                </p>
              </div>
            </div>
          </div>
        </template>

        <!-- No Page Selected -->
        <div v-else class="flex items-center justify-center py-20 bg-white rounded-xl border border-slate-200">
          <div class="text-center">
            <Icon name="heroicons:document-text" class="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <p class="text-slate-500">Wählen Sie eine Seite aus der Liste</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin',
  middleware: ['admin-auth']
})

useSeoMeta({
  title: 'Seiten verwalten | IC-RESULTING Admin',
  robots: 'noindex, nofollow'
})

interface PageField {
  [key: string]: string
}

interface PageSection {
  id: string
  name: string
  fields: PageField
}

interface PageData {
  id: string
  title: string
  path: string
  sections: PageSection[]
}

// State
const pages = ref<{ id: string; title: string; path: string }[]>([])
const selectedPageId = ref<string | null>(null)
const currentPage = ref<PageData | null>(null)
const loadingPage = ref(false)
const editedContent = ref<Record<string, string>>({})
const savingSection = ref<string | null>(null)
const savedSections = ref<Record<string, boolean>>({})

// Load pages list on mount
onMounted(async () => {
  try {
    const data = await $fetch<{ id: string; title: string; path: string }[]>('/api/admin/pages')
    pages.value = data
    
    // Erste Seite automatisch auswählen
    if (data.length > 0) {
      selectPage(data[0].id)
    }
  } catch (error) {
    console.error('Failed to load pages:', error)
  }
})

// Load page content
async function selectPage(pageId: string) {
  selectedPageId.value = pageId
  loadingPage.value = true
  savedSections.value = {}
  
  try {
    const data = await $fetch<PageData>('/api/admin/pages', {
      query: { page: pageId }
    })
    currentPage.value = data
    
    // Initialize edited content with current values
    editedContent.value = {}
    if (data?.sections) {
      data.sections.forEach(section => {
        Object.entries(section.fields).forEach(([key, value]) => {
          editedContent.value[`${section.id}_${key}`] = value
        })
      })
    }
  } catch (error) {
    console.error('Failed to load page:', error)
    currentPage.value = null
  } finally {
    loadingPage.value = false
  }
}

// Save section
async function saveSection(section: PageSection) {
  if (!currentPage.value) return
  
  savingSection.value = section.id
  savedSections.value[section.id] = false
  
  // Build fields object from edited content
  const fields: Record<string, string> = {}
  Object.keys(section.fields).forEach(key => {
    fields[key] = editedContent.value[`${section.id}_${key}`]
  })
  
  try {
    await $fetch('/api/admin/pages', {
      method: 'POST',
      body: {
        pageId: currentPage.value.id,
        sectionId: section.id,
        fields
      }
    })
    
    savedSections.value[section.id] = true
    
    // Auto-hide success message after 3 seconds
    setTimeout(() => {
      savedSections.value[section.id] = false
    }, 3000)
  } catch (error) {
    console.error('Failed to save section:', error)
    alert('Fehler beim Speichern')
  } finally {
    savingSection.value = null
  }
}

// Helper functions
function formatFieldName(name: string): string {
  const translations: Record<string, string> = {
    headline: 'Überschrift',
    subheadline: 'Unterüberschrift',
    tagline: 'Tagline',
    description: 'Beschreibung',
    ctaPrimary: 'Primärer Button',
    ctaSecondary: 'Sekundärer Button',
    sectionTitle: 'Abschnittstitel'
  }
  return translations[name] || name.replace(/([A-Z])/g, ' $1').trim()
}

function isLongText(value: string): boolean {
  return value.length > 80
}
</script>
