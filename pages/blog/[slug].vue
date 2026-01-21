<template>
  <div>
    <!-- Loading State -->
    <div v-if="pending" class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <Icon name="heroicons:arrow-path" class="w-8 h-8 text-primary-500 animate-spin mx-auto mb-4" />
        <p class="text-slate-500">Lade Beitrag...</p>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <Icon name="heroicons:exclamation-triangle" class="w-16 h-16 text-slate-300 mx-auto mb-6" />
        <h1 class="text-2xl font-bold text-slate-900 mb-4">Beitrag nicht gefunden</h1>
        <p class="text-slate-500 mb-6">Der gesuchte Beitrag existiert nicht oder wurde entfernt.</p>
        <NuxtLink to="/blog" class="btn-primary">
          Zurück zum Blog
        </NuxtLink>
      </div>
    </div>

    <!-- Post Content -->
    <template v-else-if="data?.post">
      <!-- Article Header -->
      <article>
        <header class="bg-gradient-to-br from-slate-50 via-white to-primary-50/30 pt-32 pb-12">
          <div class="container">
            <div class="max-w-4xl mx-auto">
              <!-- Breadcrumb -->
              <nav class="flex items-center gap-2 text-sm text-slate-500 mb-8">
                <NuxtLink to="/" class="hover:text-primary-600">Startseite</NuxtLink>
                <Icon name="heroicons:chevron-right" class="w-4 h-4" />
                <NuxtLink to="/blog" class="hover:text-primary-600">Blog</NuxtLink>
                <Icon name="heroicons:chevron-right" class="w-4 h-4" />
                <span class="text-slate-900">{{ data.post.title }}</span>
              </nav>

              <!-- Tags -->
              <div class="flex flex-wrap gap-2 mb-6">
                <NuxtLink 
                  v-for="tag in data.post.tags" 
                  :key="tag"
                  :to="`/blog?tag=${encodeURIComponent(tag)}`"
                  class="text-sm font-medium px-3 py-1 bg-primary-100 text-primary-700 rounded-full hover:bg-primary-200 transition-colors"
                >
                  {{ tag }}
                </NuxtLink>
              </div>

              <!-- Title -->
              <h1 class="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
                {{ data.post.title }}
              </h1>

              <!-- Excerpt -->
              <p class="text-xl text-slate-600 mb-8">
                {{ data.post.excerpt }}
              </p>

              <!-- Meta -->
              <div class="flex flex-wrap items-center gap-6 text-slate-500">
                <div class="flex items-center gap-2">
                  <div class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <Icon name="heroicons:user" class="w-5 h-5 text-primary-600" />
                  </div>
                  <span class="font-medium text-slate-900">{{ data.post.author }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <Icon name="heroicons:calendar" class="w-5 h-5" />
                  <time :datetime="data.post.publishedAt">
                    {{ formatDate(data.post.publishedAt || data.post.createdAt) }}
                  </time>
                </div>
                <div class="flex items-center gap-2">
                  <Icon name="heroicons:clock" class="w-5 h-5" />
                  <span>{{ readingTime }} Min. Lesezeit</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <!-- Featured Image -->
        <div v-if="data.post.image" class="container py-8">
          <div class="max-w-4xl mx-auto">
            <img 
              :src="data.post.image" 
              :alt="data.post.imageAlt || data.post.title"
              class="w-full rounded-2xl shadow-lg"
            />
          </div>
        </div>

        <!-- Article Content -->
        <div class="container py-12">
          <div class="max-w-4xl mx-auto">
            <div class="lg:flex lg:gap-12">
              <!-- Main Content -->
              <div class="lg:flex-1">
                <div class="prose prose-lg prose-slate max-w-none" v-html="data.post.content"></div>

                <!-- Share Section -->
                <div class="mt-12 pt-8 border-t border-slate-200">
                  <h3 class="text-lg font-semibold text-slate-900 mb-4">Beitrag teilen</h3>
                  <div class="flex gap-3">
                    <a 
                      :href="`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`"
                      target="_blank"
                      rel="noopener"
                      class="w-10 h-10 bg-[#0077b5] text-white rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
                    >
                      <Icon name="mdi:linkedin" class="w-5 h-5" />
                    </a>
                    <a 
                      :href="`https://www.xing.com/spi/shares/new?url=${encodeURIComponent(currentUrl)}`"
                      target="_blank"
                      rel="noopener"
                      class="w-10 h-10 bg-[#006567] text-white rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
                    >
                      <Icon name="simple-icons:xing" class="w-5 h-5" />
                    </a>
                    <a 
                      :href="`mailto:?subject=${encodeURIComponent(data.post.title)}&body=${encodeURIComponent(currentUrl)}`"
                      class="w-10 h-10 bg-slate-600 text-white rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
                    >
                      <Icon name="heroicons:envelope" class="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <!-- Author Box -->
                <div class="mt-12 bg-slate-50 rounded-2xl p-8">
                  <div class="flex items-start gap-6">
                    <div class="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="heroicons:user" class="w-10 h-10 text-primary-600" />
                    </div>
                    <div>
                      <h3 class="text-lg font-semibold text-slate-900 mb-1">{{ data.post.author }}</h3>
                      <p class="text-sm text-primary-600 mb-3">IT-Projektleiter & Software-Unternehmer</p>
                      <p class="text-slate-600">
                        Über 20 Jahre Erfahrung in IT-Projektleitung und Software-Entwicklung. 
                        Spezialisiert auf komplexe IT-Vorhaben in Behörden, Luftfahrt und Industrie.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Sidebar (Desktop) -->
              <aside class="hidden lg:block lg:w-72 lg:flex-shrink-0">
                <div class="sticky top-32">
                  <!-- Table of Contents could go here -->
                  <div class="bg-slate-50 rounded-xl p-6 mb-6">
                    <h4 class="font-semibold text-slate-900 mb-4">Kategorien</h4>
                    <div class="space-y-2">
                      <NuxtLink 
                        v-for="tag in data.post.tags" 
                        :key="tag"
                        :to="`/blog?tag=${encodeURIComponent(tag)}`"
                        class="block text-sm text-slate-600 hover:text-primary-600 transition-colors"
                      >
                        → {{ tag }}
                      </NuxtLink>
                    </div>
                  </div>

                  <!-- CTA Box -->
                  <div class="bg-primary-600 text-white rounded-xl p-6">
                    <h4 class="font-semibold mb-3">Haben Sie Fragen?</h4>
                    <p class="text-sm text-primary-100 mb-4">
                      Lassen Sie uns über Ihr Projekt sprechen – unverbindlich und ohne Verkaufsdruck.
                    </p>
                    <NuxtLink 
                      to="/kontakt" 
                      class="inline-flex items-center gap-2 text-sm font-medium bg-white text-primary-600 px-4 py-2 rounded-lg hover:bg-primary-50 transition-colors"
                    >
                      Kontakt aufnehmen
                      <Icon name="heroicons:arrow-right" class="w-4 h-4" />
                    </NuxtLink>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </article>

      <!-- Related Posts -->
      <section v-if="data.relatedPosts?.length" class="py-20 bg-slate-50">
        <div class="container">
          <h2 class="text-2xl font-display font-bold text-slate-900 mb-8 text-center">
            Weitere Beiträge
          </h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <article 
              v-for="post in data.relatedPosts" 
              :key="post.id"
              class="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <NuxtLink :to="`/blog/${post.slug}`" class="block aspect-video bg-slate-100 overflow-hidden">
                <img 
                  v-if="post.image" 
                  :src="post.image" 
                  :alt="post.imageAlt || post.title"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div v-else class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-accent-100">
                  <Icon name="heroicons:document-text" class="w-12 h-12 text-primary-300" />
                </div>
              </NuxtLink>
              <div class="p-5">
                <h3 class="font-semibold text-slate-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                  <NuxtLink :to="`/blog/${post.slug}`">{{ post.title }}</NuxtLink>
                </h3>
                <p class="text-sm text-slate-500">
                  {{ formatDate(post.publishedAt || post.createdAt) }}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div class="container">
          <div class="max-w-3xl mx-auto text-center">
            <h2 class="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Bereit für Ihr nächstes IT-Projekt?
            </h2>
            <p class="text-xl text-slate-300 mb-8">
              Wir übernehmen die Verantwortung – Sie erhalten die Ergebnisse.
            </p>
            <NuxtLink to="/kontakt" class="btn-primary inline-flex items-center gap-2">
              <span>Jetzt Kontakt aufnehmen</span>
              <Icon name="heroicons:arrow-right" class="w-5 h-5" />
            </NuxtLink>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { BlogPost } from '~/server/utils/blog'

// Get slug from route
const route = useRoute()
const slug = route.params.slug as string

// Fetch post data
const { data, pending, error } = await useFetch<{ post: BlogPost; relatedPosts: BlogPost[] }>(`/api/blog/${slug}`)

// Current URL for sharing
const currentUrl = computed(() => {
  if (process.server) {
    return `https://ic-resulting.de/blog/${slug}`
  }
  return window.location.href
})

// Calculate reading time
const readingTime = computed(() => {
  if (!data.value?.post?.content) return 3
  const words = data.value.post.content.replace(/<[^>]*>/g, '').split(/\s+/).length
  return Math.ceil(words / 200) // ~200 words per minute
})

// SEO Meta
useSeoMeta({
  title: () => data.value?.post?.metaTitle || data.value?.post?.title || 'Blog | IC-RESULTING',
  description: () => data.value?.post?.metaDescription || data.value?.post?.excerpt || '',
  ogTitle: () => data.value?.post?.metaTitle || data.value?.post?.title,
  ogDescription: () => data.value?.post?.metaDescription || data.value?.post?.excerpt,
  ogType: 'article',
  ogImage: () => data.value?.post?.image || '/images/og-default.jpg',
  articlePublishedTime: () => data.value?.post?.publishedAt,
  articleModifiedTime: () => data.value?.post?.updatedAt
})

// Structured Data for Article
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: computed(() => JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: data.value?.post?.title,
        description: data.value?.post?.excerpt,
        image: data.value?.post?.image,
        author: {
          '@type': 'Person',
          name: data.value?.post?.author
        },
        publisher: {
          '@type': 'Organization',
          name: 'IC-RESULTING',
          logo: {
            '@type': 'ImageObject',
            url: 'https://ic-resulting.de/logo/icr-logo-rgb.svg'
          }
        },
        datePublished: data.value?.post?.publishedAt,
        dateModified: data.value?.post?.updatedAt,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': currentUrl.value
        }
      }))
    }
  ]
})

// Format date helper
function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('de-DE', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Prose Styles for Content */
:deep(.prose) {
  @apply text-slate-700;
}

:deep(.prose h2) {
  @apply text-2xl font-display font-bold text-slate-900 mt-12 mb-4;
}

:deep(.prose h3) {
  @apply text-xl font-display font-semibold text-slate-900 mt-8 mb-3;
}

:deep(.prose p) {
  @apply mb-4 leading-relaxed;
}

:deep(.prose ul) {
  @apply my-4 space-y-2;
}

:deep(.prose li) {
  @apply pl-2;
}

:deep(.prose blockquote) {
  @apply border-l-4 border-primary-500 pl-6 py-2 my-8 italic text-slate-600 bg-slate-50 rounded-r-lg;
}

:deep(.prose strong) {
  @apply font-semibold text-slate-900;
}

:deep(.prose a) {
  @apply text-primary-600 hover:text-primary-700 underline;
}
</style>
