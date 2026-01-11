<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'glass shadow-soft py-3' : 'bg-transparent py-5'"
  >
    <div class="container-custom">
      <nav class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <div class="relative">
            <img 
              src="/logo/logo.jpeg" 
              alt="IC-RESULTING Logo" 
              class="h-12 w-auto rounded-lg shadow-lg group-hover:shadow-primary-500/30 transition-shadow duration-300"
            />
          </div>
          <div class="flex flex-col">
            <span class="font-display font-bold text-xl text-dark-900 
                         group-hover:text-primary-600 transition-colors">
              IC-RESULTING
            </span>
            <span class="text-xs text-dark-400 tracking-wide">Resulting statt Beratung</span>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center gap-8">
          <NuxtLink 
            v-for="link in navLinks" 
            :key="link.path" 
            :to="link.path"
            class="nav-link"
            :class="{ 'text-primary-600': route.path === link.path }"
          >
            {{ link.name }}
          </NuxtLink>
        </div>

        <!-- CTA Button -->
        <div class="hidden lg:flex items-center gap-4">
          <NuxtLink to="/kontakt" class="btn-primary">
            <Icon name="heroicons:chat-bubble-left-right" class="w-4 h-4 mr-2" />
            Kontakt
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="lg:hidden p-2 rounded-lg hover:bg-dark-100 transition-colors"
          aria-label="Toggle menu"
        >
          <Icon 
            :name="mobileMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" 
            class="w-6 h-6 text-dark-700" 
          />
        </button>
      </nav>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div 
        v-if="mobileMenuOpen" 
        class="lg:hidden absolute top-full left-0 right-0 glass shadow-lg border-t border-dark-100"
      >
        <div class="container-custom py-6 space-y-4">
          <NuxtLink 
            v-for="link in navLinks" 
            :key="link.path" 
            :to="link.path"
            @click="mobileMenuOpen = false"
            class="block py-3 px-4 rounded-xl font-medium text-dark-700 
                   hover:bg-primary-50 hover:text-primary-600 transition-all"
          >
            {{ link.name }}
          </NuxtLink>
          <NuxtLink 
            to="/kontakt" 
            @click="mobileMenuOpen = false"
            class="btn-primary w-full mt-4"
          >
            Kontakt aufnehmen
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
const route = useRoute()
const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const navLinks = [
  { name: 'Start', path: '/' },
  { name: 'IT Solutions', path: '/it-solutions' },
  { name: 'Travel Solutions', path: '/travel-solutions' },
  { name: 'Karriere', path: '/karriere' },
  { name: 'Über uns', path: '/ueber-uns' }
]

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

function handleScroll() {
  scrolled.value = window.scrollY > 50
}

// Close mobile menu on route change
watch(() => route.path, () => {
  mobileMenuOpen.value = false
})
</script>
