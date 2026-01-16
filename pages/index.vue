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
              <Icon name="heroicons:shield-check" class="w-4 h-4" />
              Resulting statt Beratung
            </div>
            
            <h1 class="section-title mb-6 text-balance">
              IT-Verantwortung
              <span class="gradient-text"> abgeben – Ergebnisse</span> erhalten.
            </h1>
            
            <p class="section-subtitle mx-auto lg:mx-0 mb-8">
              Wir übernehmen Ihre komplette IT-Verantwortung: Von der Projektleitung über Softwareentwicklung 
              bis zu KI-gestützter Automatisierung. Mit klarer Verantwortung, messbaren Ergebnissen und 
              einem Single Point of Accountability.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <NuxtLink to="/kontakt" class="btn-primary">
                <Icon name="heroicons:chat-bubble-left-right" class="w-5 h-5 mr-2" />
                Reden Sie mit uns
              </NuxtLink>
              <NuxtLink to="/loesungen" class="btn-secondary">
                Lösungen ansehen
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
                <div class="aspect-video rounded-2xl overflow-hidden mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80" 
                    alt="IT-Team bei der Arbeit"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div class="flex items-center gap-4 mb-4">
                  <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                    <Icon name="heroicons:cpu-chip" class="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 class="font-semibold text-dark-800">IT-Komplettlösungen</h3>
                    <p class="text-sm text-dark-400">Verantwortung & Ergebnisse</p>
                  </div>
                </div>
                <div class="space-y-3">
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 rounded-full bg-green-500"></div>
                    <span class="text-sm text-dark-600">IT-Projektleitung (PRINCE2)</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 rounded-full bg-green-500"></div>
                    <span class="text-sm text-dark-600">Softwareentwicklung & DevOps</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 rounded-full bg-green-500"></div>
                    <span class="text-sm text-dark-600">KI & Automatisierung</span>
                  </div>
                </div>
              </div>

              <!-- Floating Cards -->
              <div class="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 animate-float">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                    <Icon name="heroicons:building-office" class="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <div class="font-semibold text-dark-800">Wiesbaden</div>
                    <div class="text-xs text-dark-400">Hauptsitz</div>
                  </div>
                </div>
              </div>

              <div class="absolute -bottom-4 -left-6 bg-white rounded-2xl shadow-xl p-4 animate-float" style="animation-delay: 2s;">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-lg bg-accent-100 flex items-center justify-center">
                    <Icon name="heroicons:academic-cap" class="w-5 h-5 text-accent-600" />
                  </div>
                  <div>
                    <div class="font-semibold text-dark-800">R&D Istanbul</div>
                    <div class="text-xs text-dark-400">Uni-Kooperationen</div>
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

    <!-- Trust Strip -->
    <section class="py-8 bg-white border-y border-dark-100">
      <div class="container-custom">
        <div class="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          <div v-for="trust in trustItems" :key="trust.label" class="flex items-center gap-2 text-dark-500">
            <Icon :name="trust.icon" class="w-5 h-5 text-primary-600" />
            <span class="text-sm font-medium">{{ trust.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-24 bg-white relative overflow-hidden">
      <div class="container-custom">
        <div class="text-center mb-16">
          <span class="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-4 block">
            Unsere IT-Leistungen
          </span>
          <h2 class="section-title mb-4">
            Konzentrieren Sie sich auf Ihr Kerngeschäft – wir übernehmen den Rest
          </h2>
          <p class="section-subtitle mx-auto">
            Wir übernehmen Ihre IT-Verantwortung – modular buchbar oder als Komplettlösung. 
            Jede Lösung einzeln buchbar – oder als Komplettpaket mit einem Ansprechpartner.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="service in services" :key="service.title" class="card-hover group">
            <div class="icon-box mb-6 group-hover:scale-110 transition-transform duration-300">
              <Icon :name="service.icon" class="w-6 h-6" />
            </div>
            <h3 class="text-xl font-display font-bold text-dark-800 mb-3">
              {{ service.title }}
            </h3>
            <p class="text-dark-500 leading-relaxed mb-4">
              {{ service.description }}
            </p>
            <ul class="space-y-2">
              <li v-for="item in service.items" :key="item" class="flex items-center gap-2 text-sm text-dark-600">
                <Icon name="heroicons:check" class="w-4 h-4 text-primary-500" />
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Webseiten & CMS Section -->
    <section class="py-24 bg-dark-50 relative">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span class="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-4 block">
              Webseiten & CMS
            </span>
            <h2 class="section-title mb-6">
              Schnell online, dauerhaft erfolgreich
            </h2>
            <p class="text-dark-500 text-lg mb-8 leading-relaxed">
              Schnelle, performante Webseiten mit wartbaren CMS-Systemen – von der Konzeption bis zum Launch. 
              Mit Performance-Optimierung, SEO-Basics und DSGVO-konformer Umsetzung.
            </p>

            <div class="space-y-4 mb-8">
              <div v-for="item in websiteFeatures" :key="item" 
                   class="flex items-center gap-3 p-4 bg-white rounded-xl shadow-soft">
                <Icon name="heroicons:check-circle" class="w-6 h-6 text-primary-600 flex-shrink-0" />
                <span class="font-medium text-dark-700">{{ item }}</span>
              </div>
            </div>

            <h4 class="font-display font-bold text-lg text-dark-800 mb-4">Webseiten-Referenzen</h4>
            <div class="flex flex-wrap gap-3">
              <a 
                v-for="site in websiteShowcase" 
                :key="site.url"
                :href="site.url" 
                target="_blank" 
                rel="noopener noreferrer"
                class="px-4 py-2 bg-white rounded-lg text-sm text-primary-600 hover:bg-primary-50 
                       transition-colors border border-primary-200"
              >
                {{ site.name }}
                <Icon name="heroicons:arrow-top-right-on-square" class="w-3 h-3 inline ml-1" />
              </a>
            </div>
          </div>

          <!-- Website Mockup -->
          <div class="relative">
            <div class="bg-white rounded-3xl shadow-2xl p-6">
              <div class="flex items-center gap-2 mb-4">
                <div class="w-3 h-3 rounded-full bg-red-400"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div class="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div class="aspect-video rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" 
                  alt="Moderne Webseite auf Laptop-Bildschirm mit Analytics-Dashboard"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div class="absolute -bottom-4 -right-4 bg-primary-600 text-white px-4 py-2 rounded-xl shadow-lg">
              <span class="font-semibold text-sm">Schnell live</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Founder Kurzprofil -->
    <section class="py-24 bg-dark-50">
      <div class="container-custom">
        <div class="max-w-5xl mx-auto">
          <div class="bg-white rounded-3xl shadow-soft p-8 md:p-12">
            <div class="grid md:grid-cols-3 gap-8 items-center">
              <!-- Portrait -->
              <div class="md:col-span-1">
                <div class="relative">
                  <div class="rounded-2xl overflow-hidden aspect-square shadow-lg max-w-[280px] mx-auto">
                    <!-- HINWEIS: Bild später durch /images/ibrahim-canakci-portrait.webp ersetzen -->
                    <img 
                      :src="founderImage" 
                      alt="Dipl.-Inf.(FH) Ibrahim Canakci – IT-Projektleiter und Software-Unternehmer"
                      class="w-full h-full object-cover object-top"
                      loading="lazy"
                      width="280"
                      height="280"
                      @error="handleImageError"
                    />
                  </div>
                  <div class="absolute -bottom-3 -right-3 bg-primary-600 text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-lg">
                    Dipl.-Inf. (FH)
                  </div>
                </div>
              </div>

              <!-- Bio Short -->
              <div class="md:col-span-2">
                <span class="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-2 block">
                  Gründer & Geschäftsführer
                </span>
                <h3 class="text-2xl md:text-3xl font-display font-bold text-dark-800 mb-2">
                  Ibrahim Canakci
                </h3>
                <p class="text-primary-600 font-medium mb-4">IT-Projektleiter & Software-Unternehmer</p>
                
                <p class="text-dark-500 leading-relaxed mb-6">
                  Dipl.-Inf.(FH) Ibrahim Canakci ist IT-Projektleiter und IT-Architekt mit Schwerpunkt auf 
                  der Planung, Steuerung und Umsetzung komplexer IT-Vorhaben. Er verbindet Management-Verantwortung 
                  mit technischer Umsetzung – von Architekturentscheidungen über Teamaufbau bis zur Stabilisierung 
                  von Betrieb und Services. Ein besonderer Fokus liegt auf DSGVO-konformer Umsetzung, 
                  Security-by-Design und KI-gestützter Prozessautomatisierung.
                </p>

                <div class="flex flex-wrap gap-3 mb-6">
                  <span class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">PRINCE2</span>
                  <span class="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium">ITIL</span>
                  <span class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">DevSecOps</span>
                  <span class="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium">KI & Automatisierung</span>
                  <span class="px-3 py-1 bg-dark-100 text-dark-700 rounded-full text-sm font-medium">SÜ2</span>
                </div>

                <NuxtLink to="/ueber-uns" class="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                  Mehr erfahren
                  <Icon name="heroicons:arrow-right" class="w-5 h-5 ml-2" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why IC-RESULTING Section -->
    <section class="py-24 bg-white relative">
      <div class="container-custom">
        <div class="text-center mb-16">
          <span class="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-4 block">
            Warum IC-RESULTING?
          </span>
          <h2 class="section-title mb-4">
            Warum Unternehmen uns vertrauen
          </h2>
          <p class="section-subtitle mx-auto">
            Profitieren Sie von klarer Verantwortung, deutschem Projektmanagement 
            und einem skalierbaren internationalen Team.
          </p>
        </div>

        <!-- Differenzierung Absatz -->
        <div class="max-w-4xl mx-auto mb-16">
          <div class="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 border border-primary-100">
            <h3 class="text-xl font-display font-bold text-dark-800 mb-4">
              Was unterscheidet IC-RESULTING von klassischen Beratungen?
            </h3>
            <p class="text-dark-600 leading-relaxed">
              Wir liefern nicht nur Konzepte, sondern übernehmen die Umsetzungsverantwortung. 
              Mit PRINCE2-zertifizierter Projektleitung, einem eingespielten Entwicklerteam und 
              ITIL-konformen Betriebsprozessen begleiten wir Ihr Projekt von der ersten Anforderung 
              bis zum stabilen Betrieb. Die Steuerung erfolgt aus Deutschland – mit einem 
              Single Point of Accountability, der für Ergebnisse einsteht.
            </p>
          </div>
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

    <!-- Delivery Model Section -->
    <section class="py-24 bg-dark-900 text-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <span class="text-primary-400 font-semibold text-sm tracking-wide uppercase mb-4 block">
            Unser Delivery-Modell
          </span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Deutsche Steuerung, internationales Delivery
          </h2>
          <p class="text-xl text-dark-300 max-w-3xl mx-auto">
            Projektleitung und Kundenverantwortung in Deutschland – effiziente Umsetzung 
            durch unser internationales Team unter strengen DSGVO- und Security-Leitplanken.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="p-6 bg-dark-800/50 rounded-2xl border border-dark-700">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-12 h-12 rounded-xl bg-primary-600 flex items-center justify-center">
                <Icon name="heroicons:building-office" class="w-6 h-6" />
              </div>
              <h3 class="text-xl font-display font-bold">Wiesbaden</h3>
            </div>
            <p class="text-dark-300 text-sm mb-3">Hauptsitz & Projektleitung</p>
            <ul class="space-y-2 text-sm text-dark-400">
              <li>• Single Point of Accountability</li>
              <li>• DACH-Kundenverantwortung</li>
              <li>• Projektmanagement</li>
            </ul>
          </div>

          <div class="p-6 bg-dark-800/50 rounded-2xl border border-dark-700">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-12 h-12 rounded-xl bg-primary-600 flex items-center justify-center">
                <Icon name="heroicons:map-pin" class="w-6 h-6" />
              </div>
              <h3 class="text-xl font-display font-bold">Berlin & Köln</h3>
            </div>
            <p class="text-dark-300 text-sm mb-3">Umsetzung & Delivery</p>
            <ul class="space-y-2 text-sm text-dark-400">
              <li>• Softwareentwicklung</li>
              <li>• DevOps & Cloud</li>
              <li>• Kundenworkshops</li>
            </ul>
          </div>

          <div class="p-6 bg-dark-800/50 rounded-2xl border border-dark-700">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-12 h-12 rounded-xl bg-accent-600 flex items-center justify-center">
                <Icon name="heroicons:academic-cap" class="w-6 h-6" />
              </div>
              <h3 class="text-xl font-display font-bold">Istanbul (R&D)</h3>
            </div>
            <p class="text-dark-300 text-sm mb-3">Forschung & Entwicklung</p>
            <ul class="space-y-2 text-sm text-dark-400">
              <li>• Uni-Kooperationen</li>
              <li>• KI-Forschung</li>
              <li>• Academy & Schulungen</li>
            </ul>
          </div>
        </div>

        <div class="mt-12 pt-12 border-t border-dark-700">
          <h4 class="text-center text-dark-400 text-sm uppercase tracking-wide mb-6">Unsere Partner</h4>
          <div class="flex flex-wrap justify-center gap-8">
            <div class="flex items-center gap-3 px-6 py-3 bg-dark-800 rounded-xl">
              <Icon name="heroicons:building-office-2" class="w-6 h-6 text-primary-400" />
              <div>
                <span class="font-semibold text-white">makroh GmbH</span>
                <span class="text-dark-400 text-sm block">Köln, Deutschland</span>
              </div>
            </div>
            <div class="flex items-center gap-3 px-6 py-3 bg-dark-800 rounded-xl">
              <Icon name="heroicons:building-office-2" class="w-6 h-6 text-accent-400" />
              <div>
                <span class="font-semibold text-white">AyDeep Ltd.</span>
                <span class="text-dark-400 text-sm block">Istanbul, Türkei</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projekterfahrung Teaser -->
    <section class="py-24 bg-dark-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <span class="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-4 block">
            Projekterfahrung
          </span>
          <h2 class="section-title mb-4">
            Vertrauen führender Unternehmen
          </h2>
          <p class="section-subtitle mx-auto">
            Behörden, Luftfahrt, Industrie, Finance – wir liefern nachweisbare Ergebnisse.
          </p>
        </div>

        <div class="flex flex-wrap justify-center gap-6 mb-8">
          <div v-for="client in clients" :key="client" 
               class="px-8 py-4 bg-white rounded-xl text-dark-600 font-semibold 
                      border border-dark-100 hover:border-primary-200 hover:shadow-soft transition-all">
            {{ client }}
          </div>
        </div>

        <div class="text-center">
          <NuxtLink to="/referenzen" class="btn-secondary">
            Alle Referenzen ansehen
            <Icon name="heroicons:arrow-right" class="w-4 h-4 ml-2" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div class="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div class="container-custom relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Lassen Sie uns sprechen
          </h2>
          <p class="text-xl text-white/80 mb-10">
            Haben Sie ein konkretes Projekt? Lassen Sie uns darüber sprechen – 
            unverbindlich und ohne Verkaufsdruck.
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
  title: 'IT-Verantwortung abgeben – IC-RESULTING | Wiesbaden',
  description: 'IT-Projektleitung, Softwareentwicklung, KI-Automatisierung: IC-RESULTING übernimmt Ihre IT-Verantwortung. PRINCE2-zertifiziert. Messbare Ergebnisse.'
})

// Founder Image mit Fallback (unterstützt .webp und .jpg)
const founderImage = ref('/images/Dipl-Inf_Ibrahim_Canakci.png')
const fallbackImage = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80'

const handleImageError = (e) => {
  e.target.src = fallbackImage
}

const stats = [
  { value: 'PRINCE2', label: 'Zertifiziert' },
  { value: 'ITIL', label: 'Best Practices' },
  { value: 'SÜ2', label: 'Sicherheitsgeprüft' }
]

const trustItems = [
  { icon: 'heroicons:clipboard-document-check', label: 'PRINCE2' },
  { icon: 'heroicons:cog-6-tooth', label: 'ITIL' },
  { icon: 'heroicons:shield-check', label: 'SÜ2' },
  { icon: 'heroicons:lock-closed', label: 'DSGVO' },
  { icon: 'heroicons:building-office', label: 'Wiesbaden • Berlin • Köln' },
  { icon: 'heroicons:academic-cap', label: 'R&D Istanbul' }
]

const services = [
  {
    icon: 'heroicons:briefcase',
    title: 'IT-Projektleitung',
    description: 'Professionelle Steuerung Ihrer IT-Projekte mit klarer Verantwortung und messbaren Ergebnissen.',
    items: ['PRINCE2-zertifizierte Methodik', 'Single Point of Accountability', 'Transparente Kommunikation', 'Risikomanagement']
  },
  {
    icon: 'heroicons:code-bracket',
    title: 'Softwareentwicklung',
    description: 'Maßgeschneiderte Lösungen – von Web-Anwendungen über APIs bis hin zu cloud-fähigen Architekturen.',
    items: ['Web- & API-Entwicklung', 'Cloud-native Architekturen', 'Integrationen & Schnittstellen', 'Code-Reviews & Qualitätssicherung']
  },
  {
    icon: 'heroicons:cpu-chip',
    title: 'KI & Automatisierung',
    description: 'KI-gestützte Prozessautomatisierung für effiziente Workflows und intelligente Agenten.',
    items: ['Workflow-Automatisierung', 'KI-Agenten & Chatbots', 'Prozessoptimierung', 'Datenanalyse & ML']
  },
  {
    icon: 'heroicons:cloud',
    title: 'DevOps & Cloud',
    description: 'Aufbau und Betrieb von Plattformen, CI/CD-Pipelines und cloud-basierter Infrastruktur.',
    items: ['CI/CD-Pipelines', 'Container & Kubernetes', 'Cloud-Infrastruktur', 'Monitoring & Betrieb']
  },
  {
    icon: 'heroicons:shield-check',
    title: 'DSGVO & IT-Security',
    description: 'DSGVO-konforme Lösungen für den deutschen Markt – Security wird mit KI immer wichtiger.',
    items: ['DSGVO-Compliance', 'Security-Konzepte', 'Penetrationstests', 'Security Awareness']
  },
  {
    icon: 'heroicons:academic-cap',
    title: 'Schulungen',
    description: 'Interne Mitarbeiterschulungen, Workshops und Security Awareness-Programme.',
    items: ['Security Awareness', 'Entwickler-Workshops', 'Best Practices', 'Individuelle Trainings']
  }
]

const websiteFeatures = [
  'Schnelle Umsetzung – schnell live',
  'Wartbare CMS-Systeme',
  'Performance & SEO-Optimierung',
  'DSGVO-konforme Umsetzung'
]

const websiteShowcase = [
  { name: 'bahnmotors.be', url: 'https://bahnmotors.be/' },
  { name: 'avanorth.ca', url: 'https://avanorth.ca/fr' },
  { name: 'quattroshopping.com', url: 'https://quattroshopping.com/en' }
]

const features = [
  {
    icon: 'heroicons:shield-check',
    title: 'SÜ2 Sicherheitsüberprüfung',
    description: 'Sicherheitsüberprüfung durch das Bundesamt für Verfassungsschutz für sensible Projekte.'
  },
  {
    icon: 'heroicons:clipboard-document-check',
    title: 'PRINCE2 Zertifiziert',
    description: 'Zertifiziertes Projektmanagement nach PRINCE2-Standard für strukturierte Projektabwicklung.'
  },
  {
    icon: 'heroicons:cog-6-tooth',
    title: 'ITIL Best Practices',
    description: 'IT Service Management nach ITIL Best Practices für nachhaltige IT-Prozesse.'
  },
  {
    icon: 'heroicons:user-group',
    title: 'Single Point of Accountability',
    description: 'Ein Ansprechpartner in Deutschland – klare Verantwortung, verlässliche Kommunikation.'
  }
]

const clients = [
  'ITZBund (G2X)',
  'Lufthansa',
  'LuxairTours',
  'Bosch Thermotechnik',
  'Hannover RE'
]
</script>
