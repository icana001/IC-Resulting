<template>
  <div>
    <!-- Page Header -->
    <div class="flex items-center justify-between mb-8">
      <div>
        <h1 class="text-2xl font-display font-bold text-slate-900">Blog-Beiträge</h1>
        <p class="text-slate-500 mt-1">Verwalten Sie Ihre Blog-Beiträge und Inhalte</p>
      </div>
      <button @click="openEditor()" class="btn-primary flex items-center gap-2">
        <Icon name="heroicons:plus" class="w-5 h-5" />
        Neuer Beitrag
      </button>
    </div>

    <!-- Loading State -->
    <div v-if="pending" class="flex items-center justify-center py-20">
      <div class="text-center">
        <Icon name="heroicons:arrow-path" class="w-8 h-8 text-primary-500 animate-spin mx-auto mb-4" />
        <p class="text-slate-500">Lade Beiträge...</p>
      </div>
    </div>

    <!-- Posts List -->
    <div v-else class="bg-white rounded-xl border border-slate-200 overflow-hidden">
      <!-- Empty State -->
      <div v-if="!data?.posts?.length" class="text-center py-20">
        <Icon name="heroicons:document-text" class="w-16 h-16 text-slate-300 mx-auto mb-6" />
        <h3 class="text-xl font-semibold text-slate-900 mb-2">Keine Beiträge</h3>
        <p class="text-slate-500 mb-6">Erstellen Sie Ihren ersten Blog-Beitrag.</p>
        <button @click="openEditor()" class="btn-primary">
          Ersten Beitrag erstellen
        </button>
      </div>

      <!-- Posts Table -->
      <table v-else class="w-full">
        <thead class="bg-slate-50 border-b border-slate-200">
          <tr>
            <th class="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-4">Beitrag</th>
            <th class="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-4">Status</th>
            <th class="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-4">Tags</th>
            <th class="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-4">Aktualisiert</th>
            <th class="text-right text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-4">Aktionen</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100">
          <tr v-for="post in data.posts" :key="post.id" class="hover:bg-slate-50">
            <td class="px-6 py-4">
              <div class="flex items-center gap-4">
                <div v-if="post.image" class="w-16 h-12 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0">
                  <img :src="post.image" :alt="post.title" class="w-full h-full object-cover" />
                </div>
                <div v-else class="w-16 h-12 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <Icon name="heroicons:photo" class="w-6 h-6 text-slate-400" />
                </div>
                <div>
                  <h3 class="font-medium text-slate-900 line-clamp-1">{{ post.title }}</h3>
                  <p class="text-sm text-slate-500 line-clamp-1">{{ post.excerpt }}</p>
                </div>
              </div>
            </td>
            <td class="px-6 py-4">
              <span :class="[
                'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
                post.status === 'published' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-amber-100 text-amber-800'
              ]">
                {{ post.status === 'published' ? 'Veröffentlicht' : 'Entwurf' }}
              </span>
            </td>
            <td class="px-6 py-4">
              <div class="flex flex-wrap gap-1">
                <span 
                  v-for="tag in post.tags.slice(0, 2)" 
                  :key="tag"
                  class="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded"
                >
                  {{ tag }}
                </span>
                <span v-if="post.tags.length > 2" class="text-xs text-slate-400">
                  +{{ post.tags.length - 2 }}
                </span>
              </div>
            </td>
            <td class="px-6 py-4 text-sm text-slate-500">
              {{ formatDate(post.updatedAt) }}
            </td>
            <td class="px-6 py-4 text-right">
              <div class="flex items-center justify-end gap-2">
                <a 
                  v-if="post.status === 'published'"
                  :href="`/blog/${post.slug}`" 
                  target="_blank"
                  class="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                  title="Vorschau"
                >
                  <Icon name="heroicons:eye" class="w-5 h-5" />
                </a>
                <button 
                  @click="openEditor(post)"
                  class="p-2 text-slate-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                  title="Bearbeiten"
                >
                  <Icon name="heroicons:pencil" class="w-5 h-5" />
                </button>
                <button 
                  @click="confirmDelete(post)"
                  class="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  title="Löschen"
                >
                  <Icon name="heroicons:trash" class="w-5 h-5" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Editor Modal -->
    <Teleport to="body">
      <div v-if="showEditor" class="fixed inset-0 z-50 overflow-y-auto">
        <div class="fixed inset-0 bg-slate-900/50 backdrop-blur-sm" @click="closeEditor"></div>
        <div class="relative min-h-screen flex items-start justify-center p-4 pt-20">
          <div class="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden flex flex-col">
            <!-- Modal Header -->
            <div class="flex items-center justify-between p-6 border-b border-slate-200">
              <h2 class="text-xl font-display font-bold text-slate-900">
                {{ editingPost ? 'Beitrag bearbeiten' : 'Neuer Beitrag' }}
              </h2>
              <button @click="closeEditor" class="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg">
                <Icon name="heroicons:x-mark" class="w-6 h-6" />
              </button>
            </div>

            <!-- Modal Body -->
            <div class="flex-1 overflow-y-auto p-6">
              <form @submit.prevent="savePost" class="space-y-6">
                <!-- Title -->
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-2">Titel *</label>
                  <input 
                    v-model="form.title" 
                    type="text" 
                    required
                    class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Beitragstitel eingeben..."
                  />
                </div>

                <!-- Excerpt -->
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-2">Kurzbeschreibung *</label>
                  <textarea 
                    v-model="form.excerpt" 
                    rows="2"
                    required
                    class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Kurze Beschreibung für die Übersicht..."
                  ></textarea>
                </div>

                <!-- Image URL -->
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-2">Beitragsbild URL</label>
                  <input 
                    v-model="form.image" 
                    type="text" 
                    class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="/images/uploads/blog-bild.jpg"
                  />
                  <p class="text-xs text-slate-500 mt-1">Laden Sie Bilder über Medien hoch und fügen Sie hier den Pfad ein.</p>
                </div>

                <!-- Content -->
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-2">Inhalt * (HTML)</label>
                  <textarea 
                    v-model="form.content" 
                    rows="12"
                    required
                    class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 font-mono text-sm"
                    placeholder="<h2>Überschrift</h2>
<p>Ihr Text hier...</p>"
                  ></textarea>
                  <p class="text-xs text-slate-500 mt-1">Verwenden Sie HTML-Tags: &lt;h2&gt;, &lt;h3&gt;, &lt;p&gt;, &lt;ul&gt;, &lt;li&gt;, &lt;strong&gt;, &lt;blockquote&gt;</p>
                </div>

                <!-- Tags -->
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-2">Schlagwörter (Tags)</label>
                  <div class="flex flex-wrap gap-2 mb-2">
                    <span 
                      v-for="(tag, index) in form.tags" 
                      :key="index"
                      class="inline-flex items-center gap-1 px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm"
                    >
                      {{ tag }}
                      <button type="button" @click="removeTag(index)" class="hover:text-primary-900">
                        <Icon name="heroicons:x-mark" class="w-4 h-4" />
                      </button>
                    </span>
                  </div>
                  <div class="flex gap-2">
                    <input 
                      v-model="newTag" 
                      type="text" 
                      class="flex-1 px-4 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Neues Schlagwort..."
                      @keydown.enter.prevent="addTag"
                    />
                    <button type="button" @click="addTag" class="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200">
                      Hinzufügen
                    </button>
                  </div>
                </div>

                <!-- SEO Section -->
                <div class="border-t border-slate-200 pt-6">
                  <h3 class="text-lg font-semibold text-slate-900 mb-4">SEO-Einstellungen</h3>
                  
                  <div class="space-y-4">
                    <div>
                      <label class="block text-sm font-medium text-slate-700 mb-2">Meta-Titel</label>
                      <input 
                        v-model="form.metaTitle" 
                        type="text" 
                        class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="SEO-Titel (falls anders als Haupttitel)"
                      />
                    </div>
                    
                    <div>
                      <label class="block text-sm font-medium text-slate-700 mb-2">Meta-Beschreibung</label>
                      <textarea 
                        v-model="form.metaDescription" 
                        rows="2"
                        class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Beschreibung für Suchmaschinen (150-160 Zeichen)"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <!-- Status -->
                <div class="flex items-center justify-between border-t border-slate-200 pt-6">
                  <div class="flex items-center gap-4">
                    <label class="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio" 
                        v-model="form.status" 
                        value="draft"
                        class="w-4 h-4 text-primary-600 border-slate-300 focus:ring-primary-500"
                      />
                      <span class="text-sm text-slate-700">Entwurf</span>
                    </label>
                    <label class="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio" 
                        v-model="form.status" 
                        value="published"
                        class="w-4 h-4 text-primary-600 border-slate-300 focus:ring-primary-500"
                      />
                      <span class="text-sm text-slate-700">Veröffentlichen</span>
                    </label>
                  </div>
                </div>
              </form>
            </div>

            <!-- Modal Footer -->
            <div class="flex items-center justify-end gap-4 p-6 border-t border-slate-200 bg-slate-50">
              <button @click="closeEditor" class="px-6 py-2 text-slate-700 hover:text-slate-900">
                Abbrechen
              </button>
              <button 
                @click="savePost" 
                :disabled="saving"
                class="btn-primary flex items-center gap-2"
              >
                <Icon v-if="saving" name="heroicons:arrow-path" class="w-5 h-5 animate-spin" />
                <span>{{ editingPost ? 'Speichern' : 'Erstellen' }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Teleport>

    <!-- Delete Confirmation Modal -->
    <Teleport to="body">
      <div v-if="showDeleteConfirm" class="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div class="fixed inset-0 bg-slate-900/50 backdrop-blur-sm" @click="showDeleteConfirm = false"></div>
        <div class="relative bg-white rounded-2xl shadow-2xl p-6 max-w-md w-full">
          <h3 class="text-lg font-semibold text-slate-900 mb-2">Beitrag löschen?</h3>
          <p class="text-slate-600 mb-6">
            Möchten Sie den Beitrag "{{ deletingPost?.title }}" wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden.
          </p>
          <div class="flex justify-end gap-4">
            <button @click="showDeleteConfirm = false" class="px-4 py-2 text-slate-700 hover:text-slate-900">
              Abbrechen
            </button>
            <button @click="deletePost" class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
              Löschen
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import type { BlogPost } from '~/server/utils/blog'

definePageMeta({
  layout: 'admin',
  middleware: ['admin-auth']
})

useSeoMeta({
  title: 'Blog verwalten | IC-RESULTING Admin',
  robots: 'noindex, nofollow'
})

// Fetch posts
const { data, pending, refresh } = await useFetch<{ posts: BlogPost[] }>('/api/admin/blog')

// Editor state
const showEditor = ref(false)
const editingPost = ref<BlogPost | null>(null)
const saving = ref(false)
const newTag = ref('')

// Form data
const form = reactive({
  title: '',
  excerpt: '',
  content: '',
  image: '',
  imageAlt: '',
  tags: [] as string[],
  status: 'draft' as 'draft' | 'published',
  metaTitle: '',
  metaDescription: ''
})

// Delete confirmation
const showDeleteConfirm = ref(false)
const deletingPost = ref<BlogPost | null>(null)

function openEditor(post?: BlogPost) {
  if (post) {
    editingPost.value = post
    form.title = post.title
    form.excerpt = post.excerpt
    form.content = post.content
    form.image = post.image || ''
    form.imageAlt = post.imageAlt || ''
    form.tags = [...post.tags]
    form.status = post.status
    form.metaTitle = post.metaTitle || ''
    form.metaDescription = post.metaDescription || ''
  } else {
    editingPost.value = null
    form.title = ''
    form.excerpt = ''
    form.content = ''
    form.image = ''
    form.imageAlt = ''
    form.tags = []
    form.status = 'draft'
    form.metaTitle = ''
    form.metaDescription = ''
  }
  showEditor.value = true
}

function closeEditor() {
  showEditor.value = false
  editingPost.value = null
}

function addTag() {
  const tag = newTag.value.trim()
  if (tag && !form.tags.includes(tag)) {
    form.tags.push(tag)
  }
  newTag.value = ''
}

function removeTag(index: number) {
  form.tags.splice(index, 1)
}

async function savePost() {
  saving.value = true
  
  try {
    if (editingPost.value) {
      // Update existing post
      await $fetch(`/api/admin/blog/${editingPost.value.id}`, {
        method: 'PUT',
        body: form
      })
    } else {
      // Create new post
      await $fetch('/api/admin/blog', {
        method: 'POST',
        body: form
      })
    }
    
    await refresh()
    closeEditor()
  } catch (error) {
    console.error('Error saving post:', error)
    alert('Fehler beim Speichern des Beitrags')
  } finally {
    saving.value = false
  }
}

function confirmDelete(post: BlogPost) {
  deletingPost.value = post
  showDeleteConfirm.value = true
}

async function deletePost() {
  if (!deletingPost.value) return
  
  try {
    await $fetch(`/api/admin/blog/${deletingPost.value.id}`, {
      method: 'DELETE'
    })
    
    await refresh()
    showDeleteConfirm.value = false
    deletingPost.value = null
  } catch (error) {
    console.error('Error deleting post:', error)
    alert('Fehler beim Löschen des Beitrags')
  }
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
}
</script>

<style scoped>
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
