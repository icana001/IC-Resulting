<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-slate-50 via-white to-primary-50/30 pt-32 pb-20">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center">
          <span class="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
            Wissen & Insights
          </span>
          <h1 class="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Blog & Beiträge
          </h1>
          <p class="text-xl text-slate-600">
            Praxiswissen aus IT-Projektleitung, Software-Entwicklung und KI-Automatisierung. 
            Erfahrungen und Best Practices aus über 20 Jahren IT-Projekten.
          </p>
        </div>
      </div>
    </section>

    <!-- Tags Filter -->
    <section class="py-8 border-b border-slate-200 bg-white sticky top-16 z-40">
      <div class="container">
        <div class="flex flex-wrap items-center gap-3 justify-center">
          <NuxtLink 
            to="/blog" 
            :class="[
              'px-4 py-2 rounded-full text-sm font-medium transition-colors',
              !selectedTag 
                ? 'bg-primary-600 text-white' 
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            ]"
          >
            Alle Beiträge
          </NuxtLink>
          <NuxtLink 
            v-for="tagInfo in data?.tags" 
            :key="tagInfo.tag"
            :to="`/blog?tag=${encodeURIComponent(tagInfo.tag)}`"
            :class="[
              'px-4 py-2 rounded-full text-sm font-medium transition-colors',
              selectedTag === tagInfo.tag 
                ? 'bg-primary-600 text-white' 
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            ]"
          >
            {{ tagInfo.tag }} ({{ tagInfo.count }})
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Blog Posts Grid -->
    <section class="py-20 bg-white">
      <div class="container">
        <!-- Loading State -->
        <div v-if="pending" class="flex items-center justify-center py-20">
          <div class="text-center">
            <Icon name="heroicons:arrow-path" class="w-8 h-8 text-primary-500 animate-spin mx-auto mb-4" />
            <p class="text-slate-500">Lade Beiträge...</p>
          </div>
        </div>

        <!-- Empty State -->
        <div v-else-if="!data?.posts?.length" class="text-center py-20">
          <Icon name="heroicons:document-text" class="w-16 h-16 text-slate-300 mx-auto mb-6" />
          <h3 class="text-xl font-semibold text-slate-900 mb-2">Keine Beiträge gefunden</h3>
          <p class="text-slate-500 mb-6">
            {{ selectedTag ? `Keine Beiträge mit dem Tag "${selectedTag}" gefunden.` : 'Es sind noch keine Beiträge vorhanden.' }}
          </p>
          <NuxtLink v-if="selectedTag" to="/blog" class="btn-primary">
            Alle Beiträge anzeigen
          </NuxtLink>
        </div>

        <!-- Posts Grid -->
        <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article 
            v-for="post in data.posts" 
            :key="post.id"
            class="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
          >
            <!-- Post Image -->
            <NuxtLink :to="`/blog/${post.slug}`" class="block aspect-video bg-slate-100 overflow-hidden">
              <img 
                v-if="post.image" 
                :src="post.image" 
                :alt="post.imageAlt || post.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div v-else class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-accent-100">
                <Icon name="heroicons:document-text" class="w-16 h-16 text-primary-300" />
              </div>
            </NuxtLink>

            <!-- Post Content -->
            <div class="p-6">
              <!-- Tags -->
              <div class="flex flex-wrap gap-2 mb-4">
                <NuxtLink 
                  v-for="tag in post.tags.slice(0, 3)" 
                  :key="tag"
                  :to="`/blog?tag=${encodeURIComponent(tag)}`"
                  class="text-xs font-medium px-2 py-1 bg-primary-50 text-primary-700 rounded-full hover:bg-primary-100 transition-colors"
                >
                  {{ tag }}
                </NuxtLink>
              </div>

              <!-- Title -->
              <h2 class="text-xl font-display font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
                <NuxtLink :to="`/blog/${post.slug}`">
                  {{ post.title }}
                </NuxtLink>
              </h2>

              <!-- Excerpt -->
              <p class="text-slate-600 mb-4 line-clamp-3">
                {{ post.excerpt }}
              </p>

              <!-- Meta -->
              <div class="flex items-center justify-between text-sm text-slate-500">
                <span>{{ post.author }}</span>
                <time :datetime="post.publishedAt">
                  {{ formatDate(post.publishedAt || post.createdAt) }}
                </time>
              </div>
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
            Sie haben ein konkretes Projekt?
          </h2>
          <p class="text-xl text-slate-300 mb-8">
            Lassen Sie uns darüber sprechen, wie wir Ihre IT-Herausforderungen lösen können.
          </p>
          <NuxtLink to="/kontakt" class="btn-primary inline-flex items-center gap-2">
            <span>Kontakt aufnehmen</span>
            <Icon name="heroicons:arrow-right" class="w-5 h-5" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { BlogPost } from '~/server/utils/blog'

// SEO Meta
useSeoMeta({
  title: 'Blog & Beiträge | IC-RESULTING',
  description: 'Praxiswissen aus IT-Projektleitung, Software-Entwicklung und KI-Automatisierung. Erfahrungen aus über 20 Jahren IT-Projekten.',
  ogTitle: 'Blog & Beiträge | IC-RESULTING',
  ogDescription: 'Praxiswissen aus IT-Projektleitung, Software-Entwicklung und KI-Automatisierung.',
  ogType: 'website'
})

// Get selected tag from route
const route = useRoute()
const selectedTag = computed(() => route.query.tag as string | undefined)

// Fetch blog posts
const { data, pending } = await useFetch<{ posts: BlogPost[]; tags: { tag: string; count: number }[] }>('/api/blog', {
  query: computed(() => selectedTag.value ? { tag: selectedTag.value } : {})
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

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
