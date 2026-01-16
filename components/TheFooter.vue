<template>
  <footer class="bg-dark-900 text-white pt-20 pb-8">
    <!-- Wave Decoration -->
    <div class="relative -mt-20 mb-12">
      <svg class="w-full h-20 text-dark-900" viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path 
          fill="currentColor" 
          d="M0,40 C480,80 960,0 1440,40 L1440,80 L0,80 Z"
        />
      </svg>
    </div>

    <div class="container-custom">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <!-- Company Info -->
        <div class="lg:col-span-1">
          <div class="flex items-center gap-3 mb-6">
            <img 
              src="/logo/logo.jpeg" 
              alt="IC-RESULTING Logo" 
              class="h-12 w-auto rounded-lg"
            />
            <div>
              <span class="font-display font-bold text-xl">IC-RESULTING</span>
              <p class="text-xs text-dark-400">Resulting statt Beratung</p>
            </div>
          </div>
          <p class="text-dark-300 mb-6 leading-relaxed">
            IT-Komplettlösungen für Unternehmen: Wir übernehmen Ihre IT-Verantwortung 
            mit klarer Verantwortung und messbaren Ergebnissen.
          </p>
          <div class="flex gap-3">
            <a 
              v-for="social in socials" 
              :key="social.name"
              :href="social.url" 
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-lg bg-dark-800 hover:bg-primary-600 
                     flex items-center justify-center transition-colors duration-300"
              :aria-label="social.name"
            >
              <Icon :name="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-display font-semibold text-lg mb-6">Unternehmen</h4>
          <ul class="space-y-4">
            <li v-for="link in companyLinks" :key="link.path">
              <NuxtLink 
                :to="link.path"
                class="text-dark-300 hover:text-primary-400 transition-colors duration-200 
                       flex items-center gap-2"
              >
                <Icon name="heroicons:chevron-right" class="w-4 h-4" />
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h4 class="font-display font-semibold text-lg mb-6">Lösungen</h4>
          <ul class="space-y-4">
            <li v-for="link in serviceLinks" :key="link.path">
              <NuxtLink 
                :to="link.path"
                class="text-dark-300 hover:text-primary-400 transition-colors duration-200 
                       flex items-center gap-2"
              >
                <Icon name="heroicons:chevron-right" class="w-4 h-4" />
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="font-display font-semibold text-lg mb-6">Kontakt</h4>
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <div class="w-10 h-10 rounded-lg bg-dark-800 flex items-center justify-center flex-shrink-0">
                <Icon name="heroicons:map-pin" class="w-5 h-5 text-primary-400" />
              </div>
              <div class="text-dark-300">
                <p>Obere Webergasse 58</p>
                <p>65183 Wiesbaden</p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-lg bg-dark-800 flex items-center justify-center flex-shrink-0">
                <Icon name="heroicons:phone" class="w-5 h-5 text-primary-400" />
              </div>
              <a href="tel:+4917661865980" class="text-dark-300 hover:text-primary-400 transition-colors">
                +49 (0) 176 618 659 80
              </a>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-lg bg-dark-800 flex items-center justify-center flex-shrink-0">
                <Icon name="heroicons:envelope" class="w-5 h-5 text-primary-400" />
              </div>
              <a href="mailto:info@ic-resulting.de" class="text-dark-300 hover:text-primary-400 transition-colors">
                info@ic-resulting.de
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-dark-800">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-dark-400 text-sm">
            © {{ new Date().getFullYear() }} IC-RESULTING. Alle Rechte vorbehalten.
          </p>
          <div class="flex flex-wrap justify-center gap-6">
            <NuxtLink to="/impressum" class="text-dark-400 hover:text-white text-sm transition-colors">
              Impressum
            </NuxtLink>
            <NuxtLink to="/datenschutz" class="text-dark-400 hover:text-white text-sm transition-colors">
              Datenschutz
            </NuxtLink>
            <button 
              @click="openCookieSettings"
              class="text-dark-400 hover:text-white text-sm transition-colors"
            >
              Cookie-Einstellungen
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const openCookieSettingsFunc = inject('openCookieSettings', null)

function openCookieSettings() {
  if (openCookieSettingsFunc) {
    openCookieSettingsFunc()
  }
}

const socials = [
  { name: 'LinkedIn', icon: 'mdi:linkedin', url: 'https://www.linkedin.com/in/ibrahim-canakci-5a68ab53' },
  { name: 'Xing', icon: 'mdi:xing', url: 'https://www.xing.com/profile/Ibrahim_Canakci/web_profiles' }
]

const companyLinks = [
  { name: 'Über uns', path: '/ueber-uns' },
  { name: 'Referenzen', path: '/referenzen' },
  { name: 'Karriere', path: '/karriere' },
  { name: 'Kontakt', path: '/kontakt' }
]

const serviceLinks = [
  { name: 'IT-Verantwortung', path: '/loesungen#it-verantwortung' },
  { name: 'IT-Projektleitung', path: '/loesungen#projektleitung' },
  { name: 'Softwareentwicklung', path: '/loesungen#softwareentwicklung' },
  { name: 'KI & Automatisierung', path: '/loesungen#ki-automatisierung' },
  { name: 'Webseiten & CMS', path: '/loesungen#webseiten' }
]
</script>
