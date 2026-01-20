<template>
  <div class="card-hover group">
    <!-- Header: Title, Description, Note -->
    <div class="mb-4">
      <div class="flex items-start justify-between gap-4 mb-2">
        <h3 class="text-xl font-display font-bold text-dark-800 group-hover:text-primary-600 transition-colors">
          {{ title }}
        </h3>
        <span 
          v-if="note" 
          class="flex-shrink-0 text-xs px-2 py-1 bg-accent-100 text-accent-700 rounded-full font-medium"
        >
          {{ note }}
        </span>
      </div>
      <p class="text-dark-500 leading-relaxed">
        {{ description }}
      </p>
    </div>

    <!-- Tags -->
    <div class="flex flex-wrap gap-2 mb-4">
      <span 
        v-for="tag in tags" 
        :key="tag"
        class="text-xs px-3 py-1 bg-primary-100 text-primary-700 rounded-full font-medium"
      >
        {{ tag }}
      </span>
    </div>

    <!-- Button -->
    <a 
      :href="url" 
      target="_blank" 
      rel="noopener noreferrer"
      class="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg 
             text-sm font-semibold hover:bg-primary-700 transition-colors mb-6"
    >
      <Icon name="heroicons:globe-alt" class="w-4 h-4" />
      Website ansehen
      <Icon name="heroicons:arrow-top-right-on-square" class="w-3.5 h-3.5" />
    </a>

    <!-- Screenshots -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <!-- Screenshot 1 -->
      <div class="relative rounded-xl overflow-hidden bg-dark-100 aspect-video">
        <img 
          :src="screenshot1Src"
          :alt="`${title} – Startseite Screenshot`"
          class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          @error="handleImage1Error"
        />
        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark-900/70 to-transparent p-3">
          <span class="text-white text-xs font-medium">Startseite</span>
        </div>
      </div>

      <!-- Screenshot 2 -->
      <div class="relative rounded-xl overflow-hidden bg-dark-100 aspect-video">
        <img 
          :src="screenshot2Src"
          :alt="`${title} – Detail/Listing Screenshot`"
          class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          @error="handleImage2Error"
        />
        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark-900/70 to-transparent p-3">
          <span class="text-white text-xs font-medium">Detail / Listing</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  url: string
  tags: string[]
  slug: string
  note?: string
  group?: string
}

const props = defineProps<Props>()

// Fallback image paths - try PNG first, then SVG
const placeholderPng = '/images/placeholder.png'
const placeholderSvg = '/images/placeholder.svg'

// Track fallback state
const image1FallbackTried = ref(false)
const image2FallbackTried = ref(false)

// Reactive sources for images with fallback support
const screenshot1Src = ref(`/images/${props.slug}01.png`)
const screenshot2Src = ref(`/images/${props.slug}02.png`)

// Error handlers for fallback - tries PNG placeholder first, then SVG
const handleImage1Error = () => {
  if (!image1FallbackTried.value) {
    image1FallbackTried.value = true
    screenshot1Src.value = placeholderPng
  } else if (screenshot1Src.value === placeholderPng) {
    screenshot1Src.value = placeholderSvg
  }
}

const handleImage2Error = () => {
  if (!image2FallbackTried.value) {
    image2FallbackTried.value = true
    screenshot2Src.value = placeholderPng
  } else if (screenshot2Src.value === placeholderPng) {
    screenshot2Src.value = placeholderSvg
  }
}
</script>
