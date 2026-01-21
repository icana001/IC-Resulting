<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass shadow-soft py-3"
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
            <span class="font-display font-bold text-xl transition-colors text-slate-800 group-hover:text-blue-600">
              IC-RESULTING
            </span>
            <span class="text-xs tracking-wide transition-colors text-slate-600">
              Resulting statt Beratung
            </span>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center gap-8">
          <NuxtLink 
            to="/"
            :class="[navLinkClass, route.path === '/' ? navLinkActiveClass : '']"
          >
            Start
          </NuxtLink>

          <!-- Lösungen Dropdown -->
          <div class="relative" @mouseenter="showDropdown = true" @mouseleave="showDropdown = false">
            <button 
              :class="[navLinkClass, 'flex items-center gap-1', (route.path.includes('/loesungen') || route.path === '/it-solutions') ? navLinkActiveClass : '']"
            >
              Lösungen
              <Icon name="heroicons:chevron-down" class="w-4 h-4 transition-transform" :class="{ 'rotate-180': showDropdown }" />
            </button>
            
            <Transition
              enter-active-class="transition-all duration-200 ease-out"
              enter-from-class="opacity-0 -translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition-all duration-150 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-2"
            >
              <div 
                v-if="showDropdown"
                class="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-dark-100 py-2 z-50"
              >
                <NuxtLink 
                  v-for="solution in solutions" 
                  :key="solution.path"
                  :to="solution.path"
                  class="flex items-start gap-3 px-4 py-3 hover:bg-primary-50 transition-colors"
                >
                  <div class="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Icon :name="solution.icon" class="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <span class="font-medium text-dark-800 block">{{ solution.name }}</span>
                    <span class="text-xs text-dark-400">{{ solution.description }}</span>
                  </div>
                </NuxtLink>
                <div class="border-t border-dark-100 mt-2 pt-2">
                  <NuxtLink 
                    to="/loesungen"
                    class="flex items-center gap-2 px-4 py-2 text-primary-600 hover:bg-primary-50 transition-colors font-medium"
                  >
                    <Icon name="heroicons:squares-2x2" class="w-4 h-4" />
                    Alle Lösungen ansehen
                  </NuxtLink>
                </div>
              </div>
            </Transition>
          </div>

          <NuxtLink 
            to="/referenzen"
            :class="[navLinkClass, route.path === '/referenzen' ? navLinkActiveClass : '']"
          >
            Referenzen
          </NuxtLink>
          
          <NuxtLink 
            to="/ueber-uns"
            :class="[navLinkClass, route.path === '/ueber-uns' ? navLinkActiveClass : '']"
          >
            Über uns
          </NuxtLink>

          <NuxtLink 
            to="/karriere"
            :class="[navLinkClass, route.path === '/karriere' ? navLinkActiveClass : '']"
          >
            Karriere
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
          class="lg:hidden p-2 rounded-lg transition-colors hover:bg-dark-100"
          aria-label="Toggle menu"
        >
          <Icon 
            :name="mobileMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" 
            class="w-6 h-6 transition-colors text-dark-700"
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
        <div class="container-custom py-6 space-y-2">
          <NuxtLink 
            to="/"
            @click="mobileMenuOpen = false"
            class="block py-3 px-4 rounded-xl font-medium text-dark-700 
                   hover:bg-primary-50 hover:text-primary-600 transition-all"
          >
            Start
          </NuxtLink>

          <!-- Mobile Lösungen Submenu -->
          <div>
            <button 
              @click="mobileSubMenuOpen = !mobileSubMenuOpen"
              class="flex items-center justify-between w-full py-3 px-4 rounded-xl font-medium text-dark-700 
                     hover:bg-primary-50 hover:text-primary-600 transition-all"
            >
              Lösungen
              <Icon name="heroicons:chevron-down" class="w-4 h-4 transition-transform" :class="{ 'rotate-180': mobileSubMenuOpen }" />
            </button>
            <div v-if="mobileSubMenuOpen" class="ml-4 mt-1 space-y-1">
              <NuxtLink 
                v-for="solution in solutions"
                :key="solution.path"
                :to="solution.path"
                @click="mobileMenuOpen = false"
                class="block py-2 px-4 rounded-lg text-sm text-dark-600 
                       hover:bg-primary-50 hover:text-primary-600 transition-all"
              >
                {{ solution.name }}
              </NuxtLink>
              <NuxtLink 
                to="/loesungen"
                @click="mobileMenuOpen = false"
                class="block py-2 px-4 rounded-lg text-sm text-primary-600 font-medium
                       hover:bg-primary-50 transition-all"
              >
                Alle Lösungen
              </NuxtLink>
            </div>
          </div>
          
          <NuxtLink 
            to="/referenzen"
            @click="mobileMenuOpen = false"
            class="block py-3 px-4 rounded-xl font-medium text-dark-700 
                   hover:bg-primary-50 hover:text-primary-600 transition-all"
          >
            Referenzen
          </NuxtLink>

          <NuxtLink 
            to="/ueber-uns"
            @click="mobileMenuOpen = false"
            class="block py-3 px-4 rounded-xl font-medium text-dark-700 
                   hover:bg-primary-50 hover:text-primary-600 transition-all"
          >
            Über uns
          </NuxtLink>

          <NuxtLink 
            to="/karriere"
            @click="mobileMenuOpen = false"
            class="block py-3 px-4 rounded-xl font-medium text-dark-700 
                   hover:bg-primary-50 hover:text-primary-600 transition-all"
          >
            Karriere
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
const mobileSubMenuOpen = ref(false)
const showDropdown = ref(false)

// Navigation-Klassen - direkte Tailwind-Klassen für dunkle Schrift
const navLinkClass = 'relative font-medium transition-colors duration-200 text-slate-900 hover:text-blue-600'

const navLinkActiveClass = computed(() => 'text-blue-600')

const solutions = [
  { name: 'IT-Verantwortung', path: '/loesungen#it-verantwortung', icon: 'heroicons:cog-6-tooth', description: 'Managed IT & Operating Model' },
  { name: 'IT-Projektleitung', path: '/loesungen#projektleitung', icon: 'heroicons:briefcase', description: 'PRINCE2-zertifiziert' },
  { name: 'Softwareentwicklung', path: '/loesungen#softwareentwicklung', icon: 'heroicons:code-bracket', description: 'Web, APIs, Cloud' },
  { name: 'KI & Automatisierung', path: '/loesungen#ki-automatisierung', icon: 'heroicons:cpu-chip', description: 'Workflows & Agenten' },
  { name: 'DevOps & Cloud', path: '/loesungen#devops', icon: 'heroicons:cloud', description: 'Plattform & Betrieb' },
  { name: 'DSGVO & IT-Security', path: '/loesungen#security', icon: 'heroicons:shield-check', description: 'Compliance & Sicherheit' },
  { name: 'Webseiten & CMS', path: '/loesungen#webseiten', icon: 'heroicons:globe-alt', description: 'Schnell live & wartbar' },
  { name: 'Schulungen', path: '/loesungen#schulungen', icon: 'heroicons:academic-cap', description: 'Workshops & Awareness' }
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
  mobileSubMenuOpen.value = false
})
</script>
