<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50"></div>
      <div class="absolute inset-0 bg-hero-pattern opacity-30"></div>
      
      <!-- Animated Shapes -->
      <div class="absolute top-20 right-10 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div class="absolute bottom-20 left-10 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl animate-pulse-slow" style="animation-delay: 2s;"></div>
      
      <!-- Floating Elements -->
      <div class="absolute top-1/4 right-1/4 w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl rotate-12 animate-float opacity-20"></div>
      <div class="absolute bottom-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-accent-400 to-accent-500 rounded-xl -rotate-12 animate-float opacity-20" style="animation-delay: 3s;"></div>

      <div class="container-custom relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Content -->
          <div class="text-center lg:text-left">
            <div class="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="heroicons:sparkles" class="w-4 h-4" />
              35+ Jahre Erfahrung
            </div>
            
            <h1 class="section-title mb-6 text-balance">
              Wir bringen Ihre
              <span class="gradient-text"> IT voran</span>
            </h1>
            
            <p class="section-subtitle mx-auto lg:mx-0 mb-8">
              Resulting statt Beratung – Wir begleiten IT-Projekte bis zum Ergebnis. 
              IT-Projektleitung, Softwareentwicklung & KI-gestützte Digitale Transformation.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <NuxtLink to="/kontakt" class="btn-primary">
                <Icon name="heroicons:arrow-right" class="w-5 h-5 mr-2" />
                Jetzt starten
              </NuxtLink>
              <NuxtLink to="/it-solutions" class="btn-secondary">
                Mehr erfahren
              </NuxtLink>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-dark-200">
              <div v-for="stat in stats" :key="stat.label" class="text-center lg:text-left">
                <div class="text-3xl md:text-4xl font-display font-bold gradient-text">
                  {{ stat.value }}
                </div>
                <div class="text-sm text-dark-500 mt-1">{{ stat.label }}</div>
              </div>
            </div>
          </div>

          <!-- Hero Image / Illustration -->
          <div class="relative hidden lg:block">
            <div class="relative">
              <!-- Main Card -->
              <div class="bg-white rounded-3xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div class="flex items-center gap-4 mb-6">
                  <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                    <Icon name="heroicons:cpu-chip" class="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 class="font-semibold text-dark-800">IT Solutions</h3>
                    <p class="text-sm text-dark-400">Digitale Transformation</p>
                  </div>
                </div>
                <div class="space-y-3">
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 rounded-full bg-green-500"></div>
                    <span class="text-sm text-dark-600">Projektmanagement</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 rounded-full bg-green-500"></div>
                    <span class="text-sm text-dark-600">Software-Entwicklung</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 rounded-full bg-green-500"></div>
                    <span class="text-sm text-dark-600">Service Desk</span>
                  </div>
                </div>
              </div>

              <!-- Floating Cards -->
              <div class="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 animate-float">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-lg bg-accent-100 flex items-center justify-center">
                    <Icon name="heroicons:globe-alt" class="w-5 h-5 text-accent-600" />
                  </div>
                  <div>
                    <div class="font-semibold text-dark-800">Frankfurt</div>
                    <div class="text-xs text-dark-400">Hauptsitz</div>
                  </div>
                </div>
              </div>

              <div class="absolute -bottom-4 -left-6 bg-white rounded-2xl shadow-xl p-4 animate-float" style="animation-delay: 2s;">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                    <Icon name="heroicons:building-office-2" class="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <div class="font-semibold text-dark-800">Istanbul</div>
                    <div class="text-xs text-dark-400">Development Hub</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div class="w-8 h-12 border-2 border-dark-300 rounded-full flex justify-center pt-2">
          <div class="w-1.5 h-3 bg-dark-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-24 bg-white relative overflow-hidden">
      <div class="container-custom">
        <div class="text-center mb-16">
          <span class="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-4 block">
            Unsere Leistungen
          </span>
          <h2 class="section-title mb-4">
            Zwei starke Säulen für Ihren Erfolg
          </h2>
          <p class="section-subtitle mx-auto">
            Von IT-Projektmanagement bis hin zu spezialisierten Travel-Lösungen – 
            wir bieten maßgeschneiderte Services für Ihre Branche.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <!-- IT Solutions Card -->
          <NuxtLink to="/it-solutions" class="group">
            <div class="relative bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-8 md:p-10 
                        text-white overflow-hidden transition-all duration-500 
                        hover:shadow-glow-lg hover:-translate-y-2">
              <!-- Background Pattern -->
              <div class="absolute inset-0 opacity-10">
                <div class="absolute top-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/2 -translate-y-1/2"></div>
                <div class="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full -translate-x-1/2 translate-y-1/2"></div>
              </div>

              <div class="relative z-10">
                <div class="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 
                            group-hover:scale-110 transition-transform duration-300">
                  <Icon name="heroicons:cpu-chip" class="w-8 h-8" />
                </div>
                
                <h3 class="text-2xl md:text-3xl font-display font-bold mb-4">
                  IT Solutions
                </h3>
                
                <p class="text-white/80 mb-6 leading-relaxed">
                  Wir kümmern uns um Ihre IT-Projekte. Konzentrieren Sie sich auf 
                  Ihre Kernprozesse während wir mit erfahrenen Teams Ihre 
                  Digitalisierung vorantreiben.
                </p>

                <ul class="space-y-3 mb-8">
                  <li v-for="item in itServices" :key="item" class="flex items-center gap-3">
                    <Icon name="heroicons:check-circle" class="w-5 h-5 text-accent-400 flex-shrink-0" />
                    <span>{{ item }}</span>
                  </li>
                </ul>

                <div class="flex items-center gap-2 text-white font-semibold 
                            group-hover:gap-4 transition-all duration-300">
                  Mehr erfahren
                  <Icon name="heroicons:arrow-right" class="w-5 h-5" />
                </div>
              </div>
            </div>
          </NuxtLink>

          <!-- Travel Solutions Card -->
          <NuxtLink to="/travel-solutions" class="group">
            <div class="relative bg-gradient-to-br from-accent-600 to-accent-800 rounded-3xl p-8 md:p-10 
                        text-white overflow-hidden transition-all duration-500 
                        hover:shadow-xl hover:-translate-y-2">
              <!-- Background Pattern -->
              <div class="absolute inset-0 opacity-10">
                <div class="absolute top-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/2 -translate-y-1/2"></div>
                <div class="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full -translate-x-1/2 translate-y-1/2"></div>
              </div>

              <div class="relative z-10">
                <div class="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 
                            group-hover:scale-110 transition-transform duration-300">
                  <Icon name="heroicons:globe-alt" class="w-8 h-8" />
                </div>
                
                <h3 class="text-2xl md:text-3xl font-display font-bold mb-4">
                  Travel Solutions
                </h3>
                
                <p class="text-white/80 mb-6 leading-relaxed">
                  Spezialisierte Lösungen für Reiseveranstalter und Airlines. 
                  Wir bringen Reiseveranstalter mit innovativen digitalen 
                  Services voran.
                </p>

                <ul class="space-y-3 mb-8">
                  <li v-for="item in travelServices" :key="item" class="flex items-center gap-3">
                    <Icon name="heroicons:check-circle" class="w-5 h-5 text-primary-300 flex-shrink-0" />
                    <span>{{ item }}</span>
                  </li>
                </ul>

                <div class="flex items-center gap-2 text-white font-semibold 
                            group-hover:gap-4 transition-all duration-300">
                  Mehr erfahren
                  <Icon name="heroicons:arrow-right" class="w-5 h-5" />
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Why IC-RESULTING Section -->
    <section class="py-24 bg-dark-50 relative">
      <div class="container-custom">
        <div class="text-center mb-16">
          <span class="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-4 block">
            Warum IC-RESULTING?
          </span>
          <h2 class="section-title mb-4">
            Ihr Vorteil mit uns
          </h2>
          <p class="section-subtitle mx-auto">
            Profitieren Sie von unserer langjährigen Erfahrung und 
            unserem internationalen Team.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(feature, index) in features" :key="feature.title" 
               class="card-hover group"
               :style="{ animationDelay: `${index * 100}ms` }">
            <div class="icon-box mb-5 group-hover:scale-110 transition-transform duration-300">
              <Icon :name="feature.icon" class="w-6 h-6" />
            </div>
            <h3 class="text-xl font-display font-bold text-dark-800 mb-3">
              {{ feature.title }}
            </h3>
            <p class="text-dark-500 leading-relaxed">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Locations Section -->
    <section class="py-24 bg-white">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span class="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-4 block">
              Unsere Standorte
            </span>
            <h2 class="section-title mb-6">
              Global denken, lokal handeln
            </h2>
            <p class="text-dark-500 text-lg mb-8 leading-relaxed">
              Mit unseren Standorten in Frankfurt und Istanbul bieten wir Ihnen 
              das Beste aus beiden Welten: Deutsche Qualitätsstandards kombiniert 
              mit kosteneffizienten Entwicklerteams.
            </p>

            <div class="space-y-6">
              <!-- Frankfurt -->
              <div class="flex gap-4 p-5 rounded-2xl bg-dark-50 hover:bg-primary-50 transition-colors group">
                <div class="w-14 h-14 rounded-xl bg-primary-600 flex items-center justify-center flex-shrink-0
                            group-hover:scale-110 transition-transform">
                  <Icon name="heroicons:building-office" class="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 class="font-display font-bold text-lg text-dark-800 mb-1">
                    Frankfurt am Main
                  </h4>
                  <p class="text-dark-500 text-sm mb-2">
                    Consulting • Projektmanagement • Service Desk • Service
                  </p>
                  <p class="text-primary-600 font-medium text-sm">25 Mitarbeiter</p>
                </div>
              </div>

              <!-- Istanbul -->
              <div class="flex gap-4 p-5 rounded-2xl bg-dark-50 hover:bg-accent-50 transition-colors group">
                <div class="w-14 h-14 rounded-xl bg-accent-600 flex items-center justify-center flex-shrink-0
                            group-hover:scale-110 transition-transform">
                  <Icon name="heroicons:code-bracket" class="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 class="font-display font-bold text-lg text-dark-800 mb-1">
                    Istanbul
                  </h4>
                  <p class="text-dark-500 text-sm mb-2">
                    Entwicklung • Academy • Research & Development
                  </p>
                  <p class="text-accent-600 font-medium text-sm">30 Mitarbeiter</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Map Illustration -->
          <div class="relative">
            <div class="bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl p-8 aspect-square 
                        flex items-center justify-center">
              <div class="relative w-full h-full">
                <!-- Abstract Globe -->
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="w-64 h-64 rounded-full border-4 border-dashed border-primary-300 animate-spin" 
                       style="animation-duration: 30s;"></div>
                </div>
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="w-48 h-48 rounded-full border-2 border-primary-200"></div>
                </div>
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="w-32 h-32 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 
                              shadow-glow flex items-center justify-center">
                    <Icon name="heroicons:globe-europe-africa" class="w-16 h-16 text-white" />
                  </div>
                </div>
                
                <!-- Location Markers -->
                <div class="absolute top-1/4 left-1/3 w-4 h-4 bg-primary-600 rounded-full animate-pulse shadow-lg"></div>
                <div class="absolute top-1/2 right-1/4 w-4 h-4 bg-accent-500 rounded-full animate-pulse shadow-lg" 
                     style="animation-delay: 1s;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Clients Section -->
    <section class="py-24 bg-dark-900 text-white overflow-hidden">
      <div class="container-custom">
        <div class="text-center mb-16">
          <span class="text-primary-400 font-semibold text-sm tracking-wide uppercase mb-4 block">
            Unsere Kunden
          </span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Langjährige Partnerschaften
          </h2>
          <p class="text-xl text-dark-300 max-w-2xl mx-auto">
            Führende Unternehmen aus der Reise- und IT-Branche vertrauen auf unsere Expertise.
          </p>
        </div>

        <!-- Client Logos Marquee -->
        <div class="relative">
          <div class="flex gap-12 items-center justify-center flex-wrap">
            <div v-for="client in clients" :key="client" 
                 class="px-8 py-4 bg-dark-800 rounded-xl text-dark-300 font-semibold 
                        hover:bg-dark-700 hover:text-white transition-all duration-300">
              {{ client }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0">
        <div class="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div class="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div class="container-custom relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Bereit für den nächsten Schritt?
          </h2>
          <p class="text-xl text-white/80 mb-10">
            Lassen Sie uns gemeinsam Ihre digitalen Projekte zum Erfolg führen. 
            Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/kontakt" class="btn-white">
              <Icon name="heroicons:chat-bubble-left-right" class="w-5 h-5 mr-2" />
              Kontakt aufnehmen
            </NuxtLink>
            <a href="tel:+4917661865980" class="btn-secondary !bg-transparent !border-white !text-white hover:!bg-white/10">
              <Icon name="heroicons:phone" class="w-5 h-5 mr-2" />
              +49 (0) 176 618 659 80
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'IC-RESULTING | IT-Projektleitung & Softwareentwicklung | Wiesbaden',
  description: 'Resulting statt Beratung – Wir begleiten IT-Projekte bis zum Ergebnis. IT-Projektleitung, Softwareentwicklung, KI-gestützte Prozessautomatisierung & Digitale Transformation.'
})

const stats = [
  { value: '35+', label: 'Jahre Erfahrung' },
  { value: '55+', label: 'Mitarbeiter' },
  { value: '2', label: 'Standorte' }
]

const itServices = [
  'IT-Projektleitung & Servicemanagement',
  'Softwareentwicklung & technische Umsetzung',
  'KI-gestützte Prozessautomatisierung',
  'Aufbau von Entwickler- & DevOps-Teams'
]

const travelServices = [
  'Digitale Transformation',
  'DSGVO-konforme IT-Infrastruktur',
  'Mitarbeiterschulung & IT-Sicherheit',
  'Cloud & DevOps Lösungen'
]

const features = [
  {
    icon: 'heroicons:shield-check',
    title: 'SÜ2 Sicherheitsüberprüfung',
    description: 'Sicherheitsüberprüfung durch das Bundesamt für Verfassungsschutz.'
  },
  {
    icon: 'heroicons:clipboard-document-check',
    title: 'PRINCE2® Zertifiziert',
    description: 'Zertifiziertes Projektmanagement nach PRINCE2® Standard (AXELOS).'
  },
  {
    icon: 'heroicons:cog-6-tooth',
    title: 'ITIL V3® Zertifiziert',
    description: 'IT Service Management nach ITIL V3® Best Practices (AXELOS).'
  },
  {
    icon: 'heroicons:cpu-chip',
    title: 'KI & Automatisierung',
    description: 'KI-gestützte Prozessautomatisierung für effiziente Workflows.'
  }
]

const clients = [
  'Lufthansa',
  'Iberia',
  'Luxair Tours',
  'Berge & Meer',
  'ETI',
  'Vtours',
  'LMX',
  'Tourvital',
  'nicko cruises',
  '1 Avista'
]
</script>
