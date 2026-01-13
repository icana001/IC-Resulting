<template>
  <div>
    <!-- Cookie Banner -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-4"
    >
      <div 
        v-if="showBanner && !showSettings" 
        class="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
      >
        <div class="container-custom">
          <div class="bg-white rounded-2xl shadow-2xl border border-dark-200 p-6 md:p-8 max-w-4xl mx-auto">
            <div class="flex items-start gap-4 mb-6">
              <div class="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                <Icon name="heroicons:shield-check" class="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 class="text-xl font-display font-bold text-dark-800 mb-2">
                  Wir respektieren Ihre Privatsphäre
                </h3>
                <p class="text-dark-500 text-sm leading-relaxed">
                  Wir verwenden Cookies und ähnliche Technologien, um Ihnen die bestmögliche Nutzererfahrung zu bieten. 
                  Einige Cookies sind technisch notwendig, andere helfen uns, unsere Website zu verbessern und Ihnen 
                  personalisierte Inhalte anzuzeigen. Sie können Ihre Einstellungen jederzeit anpassen.
                </p>
              </div>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-3 justify-end">
              <button 
                @click="openSettings"
                class="px-5 py-2.5 rounded-xl border border-dark-200 text-dark-600 font-medium text-sm
                       hover:bg-dark-50 transition-colors"
              >
                Einstellungen
              </button>
              <button 
                @click="rejectAll"
                class="px-5 py-2.5 rounded-xl border border-dark-200 text-dark-600 font-medium text-sm
                       hover:bg-dark-50 transition-colors"
              >
                Nur erforderliche
              </button>
              <button 
                @click="acceptAll"
                class="btn-primary !py-2.5"
              >
                Alle akzeptieren
              </button>
            </div>

            <div class="mt-4 pt-4 border-t border-dark-100 flex flex-wrap gap-4 text-xs text-dark-400">
              <NuxtLink to="/datenschutz" class="hover:text-primary-600 transition-colors">
                Datenschutzerklärung
              </NuxtLink>
              <NuxtLink to="/impressum" class="hover:text-primary-600 transition-colors">
                Impressum
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Settings Modal -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div 
        v-if="showSettings" 
        class="fixed inset-0 z-[100] flex items-center justify-center p-4"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-dark-900/50 backdrop-blur-sm" @click="closeSettings"></div>
        
        <!-- Modal -->
        <div class="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div class="sticky top-0 bg-white border-b border-dark-100 p-6 rounded-t-2xl">
            <div class="flex items-center justify-between">
              <h2 class="text-2xl font-display font-bold text-dark-800">
                Cookie-Einstellungen
              </h2>
              <button 
                @click="closeSettings"
                class="w-10 h-10 rounded-xl hover:bg-dark-100 flex items-center justify-center transition-colors"
              >
                <Icon name="heroicons:x-mark" class="w-5 h-5 text-dark-500" />
              </button>
            </div>
            <p class="text-dark-500 text-sm mt-2">
              Hier können Sie festlegen, welche Cookies Sie zulassen möchten. Technisch erforderliche 
              Cookies sind für den Betrieb der Website notwendig und können nicht deaktiviert werden.
            </p>
          </div>

          <div class="p-6 space-y-4">
            <!-- Technisch erforderlich -->
            <div class="p-4 bg-dark-50 rounded-xl">
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center gap-3">
                  <Icon name="heroicons:cog-6-tooth" class="w-5 h-5 text-primary-600" />
                  <h4 class="font-semibold text-dark-800">Technisch erforderlich</h4>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-xs text-dark-400">Immer aktiv</span>
                  <div class="w-12 h-6 bg-primary-600 rounded-full relative">
                    <div class="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              <p class="text-dark-500 text-sm">
                Diese Cookies sind für den Betrieb der Website unbedingt erforderlich und ermöglichen 
                grundlegende Funktionen wie Seitennavigation und Zugriff auf sichere Bereiche.
              </p>
            </div>

            <!-- Statistik/Analyse -->
            <div class="p-4 border border-dark-200 rounded-xl">
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center gap-3">
                  <Icon name="heroicons:chart-bar" class="w-5 h-5 text-accent-600" />
                  <h4 class="font-semibold text-dark-800">Statistik & Analyse</h4>
                </div>
                <button 
                  @click="toggleCategory('analytics')"
                  class="w-12 h-6 rounded-full relative transition-colors"
                  :class="settings.analytics ? 'bg-primary-600' : 'bg-dark-300'"
                >
                  <div 
                    class="absolute top-1 w-4 h-4 bg-white rounded-full transition-all"
                    :class="settings.analytics ? 'right-1' : 'left-1'"
                  ></div>
                </button>
              </div>
              <p class="text-dark-500 text-sm">
                Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, 
                indem sie Informationen anonym sammeln und melden.
              </p>
            </div>

            <!-- Marketing -->
            <div class="p-4 border border-dark-200 rounded-xl">
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center gap-3">
                  <Icon name="heroicons:megaphone" class="w-5 h-5 text-accent-600" />
                  <h4 class="font-semibold text-dark-800">Marketing</h4>
                </div>
                <button 
                  @click="toggleCategory('marketing')"
                  class="w-12 h-6 rounded-full relative transition-colors"
                  :class="settings.marketing ? 'bg-primary-600' : 'bg-dark-300'"
                >
                  <div 
                    class="absolute top-1 w-4 h-4 bg-white rounded-full transition-all"
                    :class="settings.marketing ? 'right-1' : 'left-1'"
                  ></div>
                </button>
              </div>
              <p class="text-dark-500 text-sm">
                Diese Cookies werden verwendet, um Werbung relevanter für Sie und Ihre Interessen zu gestalten. 
                Sie können auch verwendet werden, um die Häufigkeit zu begrenzen, mit der Sie eine Anzeige sehen.
              </p>
            </div>

            <!-- Externe Medien -->
            <div class="p-4 border border-dark-200 rounded-xl">
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center gap-3">
                  <Icon name="heroicons:play-circle" class="w-5 h-5 text-accent-600" />
                  <h4 class="font-semibold text-dark-800">Externe Medien</h4>
                </div>
                <button 
                  @click="toggleCategory('externalMedia')"
                  class="w-12 h-6 rounded-full relative transition-colors"
                  :class="settings.externalMedia ? 'bg-primary-600' : 'bg-dark-300'"
                >
                  <div 
                    class="absolute top-1 w-4 h-4 bg-white rounded-full transition-all"
                    :class="settings.externalMedia ? 'right-1' : 'left-1'"
                  ></div>
                </button>
              </div>
              <p class="text-dark-500 text-sm">
                Inhalte von externen Plattformen wie YouTube, Vimeo oder Google Maps werden standardmäßig blockiert. 
                Wenn Sie diese Inhalte laden möchten, aktivieren Sie diese Option.
              </p>
            </div>
          </div>

          <div class="sticky bottom-0 bg-white border-t border-dark-100 p-6 rounded-b-2xl">
            <div class="flex flex-col sm:flex-row gap-3 justify-end">
              <button 
                @click="rejectAll"
                class="px-5 py-2.5 rounded-xl border border-dark-200 text-dark-600 font-medium text-sm
                       hover:bg-dark-50 transition-colors"
              >
                Alle ablehnen
              </button>
              <button 
                @click="saveSettings"
                class="px-5 py-2.5 rounded-xl border border-primary-600 text-primary-600 font-medium text-sm
                       hover:bg-primary-50 transition-colors"
              >
                Auswahl speichern
              </button>
              <button 
                @click="acceptAll"
                class="btn-primary !py-2.5"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
const showBanner = ref(false)
const showSettings = ref(false)

const settings = reactive({
  necessary: true, // Always true
  analytics: false,
  marketing: false,
  externalMedia: false
})

onMounted(() => {
  // Check if user has already made a choice
  const consent = localStorage.getItem('cookie-consent')
  if (!consent) {
    showBanner.value = true
  } else {
    const savedSettings = JSON.parse(consent)
    Object.assign(settings, savedSettings)
  }
})

function toggleCategory(category) {
  settings[category] = !settings[category]
}

function openSettings() {
  showSettings.value = true
}

function closeSettings() {
  showSettings.value = false
  if (!localStorage.getItem('cookie-consent')) {
    showBanner.value = true
  }
}

function saveSettings() {
  localStorage.setItem('cookie-consent', JSON.stringify(settings))
  showSettings.value = false
  showBanner.value = false
}

function acceptAll() {
  settings.analytics = true
  settings.marketing = true
  settings.externalMedia = true
  localStorage.setItem('cookie-consent', JSON.stringify(settings))
  showSettings.value = false
  showBanner.value = false
}

function rejectAll() {
  settings.analytics = false
  settings.marketing = false
  settings.externalMedia = false
  localStorage.setItem('cookie-consent', JSON.stringify(settings))
  showSettings.value = false
  showBanner.value = false
}

// Expose method to open settings from outside (e.g., footer link)
defineExpose({
  openSettings
})
</script>
