<template>
  <div>
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50"></div>
      <div class="absolute inset-0 bg-hero-pattern opacity-30"></div>

      <div class="container-custom relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <div class="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="heroicons:building-office-2" class="w-4 h-4" />
            Über uns
          </div>
          
          <h1 class="section-title mb-6">
            Resulting statt Beratung
          </h1>
          
          <p class="section-subtitle mx-auto">
            Wir begleiten IT-Projekte bis zum Ergebnis – 
            IT-Projektleitung, Softwareentwicklung & Digitale Transformation.
          </p>
        </div>
      </div>
    </section>

    <!-- Company Story -->
    <section class="py-24 bg-white">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span class="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-4 block">
              Über mich
            </span>
            <h2 class="section-title mb-6">
              Ihr Partner auf Augenhöhe
            </h2>
            <div class="space-y-4 text-dark-500 text-lg leading-relaxed">
              <p>
                IC-RESULTING steht für „Resulting statt Beratung" – wir begleiten 
                IT-Projekte bis zum Ergebnis. Als erfahrener IT-Projektleiter und 
                Software-Unternehmer bringe ich Ihre Digitalisierungsprojekte 
                erfolgreich zum Ziel.
              </p>
              <p>
                Mein Fokus liegt auf IT-Projektleitung & Servicemanagement, 
                Softwareentwicklung & technischer Umsetzung sowie KI-gestützter 
                Prozessautomatisierung & Digitaler Transformation.
              </p>
              <p>
                Mit fundierten Zertifizierungen (PRINCE2®, ITIL V3®) und einer 
                Sicherheitsüberprüfung (SÜ2) durch das Bundesamt für Verfassungsschutz 
                biete ich Ihnen höchste Qualitäts- und Sicherheitsstandards.
              </p>
            </div>
          </div>

          <div class="relative">
            <div class="bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl p-8 aspect-square 
                        flex items-center justify-center">
              <div class="text-center">
                <div class="w-32 h-32 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 
                            flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <Icon name="heroicons:check-badge" class="w-16 h-16 text-white" />
                </div>
                <div class="text-2xl font-display font-semibold text-dark-700">Zertifiziert & Geprüft</div>
              </div>
            </div>
            
            <!-- Floating Badge -->
            <div class="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6">
              <div class="text-xl font-bold text-primary-600 mb-1">PRINCE2® | ITIL V3®</div>
              <div class="text-sm text-dark-500">Zertifiziert</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="py-24 bg-dark-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <span class="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-4 block">
            Unsere Services
          </span>
          <h2 class="section-title mb-4">
            Was ich für Sie tun kann
          </h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="service in services" :key="service.title" class="card-hover group text-center">
            <div class="icon-box mb-5 mx-auto group-hover:scale-110 transition-transform duration-300">
              <Icon :name="service.icon" class="w-6 h-6" />
            </div>
            <h3 class="text-xl font-display font-bold text-dark-800 mb-3">
              {{ service.title }}
            </h3>
            <p class="text-dark-500">
              {{ service.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications -->
    <section class="py-24 bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <span class="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-4 block">
            Zertifikate
          </span>
          <h2 class="section-title mb-4">
            Qualifikationen & Sicherheit
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <!-- SÜ2 -->
          <div class="card-hover text-center">
            <div class="w-16 h-16 rounded-xl bg-primary-600 flex items-center justify-center mx-auto mb-4">
              <Icon name="heroicons:shield-check" class="w-8 h-8 text-white" />
            </div>
            <h3 class="font-display font-bold text-xl text-dark-800 mb-2">SÜ2</h3>
            <p class="text-dark-500 text-sm">
              Sicherheitsüberprüfung durch das Bundesamt für Verfassungsschutz
            </p>
          </div>

          <!-- PRINCE2 -->
          <div class="card-hover text-center">
            <div class="w-16 h-16 rounded-xl bg-accent-600 flex items-center justify-center mx-auto mb-4">
              <Icon name="heroicons:clipboard-document-check" class="w-8 h-8 text-white" />
            </div>
            <h3 class="font-display font-bold text-xl text-dark-800 mb-2">PRINCE2®</h3>
            <p class="text-dark-500 text-sm">
              Certificate in Project Management – AXELOS
            </p>
          </div>

          <!-- ITIL V3 -->
          <div class="card-hover text-center">
            <div class="w-16 h-16 rounded-xl bg-primary-600 flex items-center justify-center mx-auto mb-4">
              <Icon name="heroicons:cog-6-tooth" class="w-8 h-8 text-white" />
            </div>
            <h3 class="font-display font-bold text-xl text-dark-800 mb-2">ITIL V3®</h3>
            <p class="text-dark-500 text-sm">
              Certificate in IT Service Management – AXELOS
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-gradient-to-r from-primary-600 to-primary-800 relative overflow-hidden">
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
            Ich freue mich auf ein Gespräch mit Ihnen. 
            Kontaktieren Sie mich für eine unverbindliche Beratung.
          </p>
          <NuxtLink to="/kontakt" class="btn-white">
            <Icon name="heroicons:chat-bubble-left-right" class="w-5 h-5 mr-2" />
            Kontakt aufnehmen
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Über uns - IC-RESULTING | IT-Projektleitung & Softwareentwicklung',
  description: 'Resulting statt Beratung – Dipl.-Inf. Ibrahim Canakci. IT-Projektleitung, Softwareentwicklung, KI-Automatisierung. PRINCE2® & ITIL V3® zertifiziert.'
})

const services = [
  {
    icon: 'heroicons:briefcase',
    title: 'IT-Projektleitung',
    description: 'Professionelle Steuerung Ihrer IT-Projekte nach PRINCE2® Methodik.'
  },
  {
    icon: 'heroicons:code-bracket',
    title: 'Softwareentwicklung',
    description: 'Maßgeschneiderte Lösungen mit modernsten Technologien.'
  },
  {
    icon: 'heroicons:cpu-chip',
    title: 'KI-Automatisierung',
    description: 'KI-gestützte Prozessautomatisierung für mehr Effizienz.'
  },
  {
    icon: 'heroicons:users',
    title: 'DevOps-Teams',
    description: 'Aufbau und Leitung von Entwickler- & DevOps-Teams.'
  },
  {
    icon: 'heroicons:shield-check',
    title: 'DSGVO & IT-Sicherheit',
    description: 'Datenschutz & DSGVO-konforme IT-Infrastruktur.'
  },
  {
    icon: 'heroicons:academic-cap',
    title: 'Schulungen',
    description: 'Mitarbeiterschulung & Awareness in IT-Sicherheit.'
  }
]
</script>
