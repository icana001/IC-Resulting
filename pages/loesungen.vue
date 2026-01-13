<template>
  <div>
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900"></div>
      <div class="absolute inset-0 bg-hero-pattern opacity-10"></div>
      
      <div class="container-custom relative z-10">
        <div class="max-w-4xl">
          <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="heroicons:squares-2x2" class="w-4 h-4" />
            Unsere Lösungen
          </div>
          
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            IT-Lösungen für <br class="hidden md:block" />
            <span class="text-accent-400">messbare Ergebnisse</span>
          </h1>
          
          <p class="text-xl text-white/80 max-w-2xl mb-8">
            Modular oder als Komplettlösung – wir übernehmen Verantwortung für Ihre IT 
            und liefern Ergebnisse. Mit klarer Verantwortung und einem Single Point of Accountability.
          </p>

          <div class="flex flex-wrap gap-4">
            <NuxtLink to="/kontakt" class="btn-white">
              Beratung anfragen
              <Icon name="heroicons:arrow-right" class="w-5 h-5 ml-2" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Intro Section -->
    <section class="py-16 bg-white border-b border-dark-100">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center">
          <p class="text-lg text-dark-600 leading-relaxed">
            IC-RESULTING bietet Ihnen IT-Komplettlösungen für Unternehmen, die ihre IT-Verantwortung 
            extern abgeben möchten, um sich auf Ihre Kernprozesse zu konzentrieren. 
            <strong class="text-dark-800">Resulting statt Beratung</strong> – wir übernehmen Verantwortung 
            und liefern messbare Ergebnisse.
          </p>
        </div>
      </div>
    </section>

    <!-- IT-Verantwortung / Managed IT -->
    <section id="it-verantwortung" class="py-24 bg-white scroll-mt-24">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span class="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-4 block">
              IT-Verantwortung
            </span>
            <h2 class="section-title mb-6">
              Managed IT & Operating Model
            </h2>
            <p class="text-dark-500 text-lg mb-6 leading-relaxed">
              Übertragen Sie die Verantwortung für Ihre IT an uns. Wir etablieren ein passendes 
              Operating Model und Service Management nach ITIL Best Practices – mit klarer 
              Verantwortung und verlässlicher Kommunikation.
            </p>
            
            <div class="space-y-4 mb-8">
              <div v-for="item in managedItItems" :key="item" 
                   class="flex items-center gap-3 p-3 bg-dark-50 rounded-xl">
                <Icon name="heroicons:check-circle" class="w-5 h-5 text-primary-600 flex-shrink-0" />
                <span class="text-dark-700">{{ item }}</span>
              </div>
            </div>

            <p class="text-dark-800 font-medium">
              <strong>Ergebnis:</strong> Sie konzentrieren sich auf Ihr Kerngeschäft – wir sorgen für eine stabile, sichere IT.
            </p>
          </div>

          <!-- IT-Verantwortung Bild -->
          <div class="relative">
            <div class="rounded-3xl overflow-hidden aspect-square shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80" 
                alt="IT-Operations Dashboard mit Monitoring und Analytics – Überblick über IT-Systeme"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- IT-Projektleitung -->
    <section id="projektleitung" class="py-24 bg-dark-50 scroll-mt-24">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Projektleitung Bild -->
          <div class="relative order-2 lg:order-1">
            <div class="rounded-3xl overflow-hidden aspect-square shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80" 
                alt="Business-Meeting mit Projektteam – Professionelles IT-Projektmanagement"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div class="order-1 lg:order-2">
            <span class="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-4 block">
              IT-Projektleitung
            </span>
            <h2 class="section-title mb-6">
              Professionelles Projektmanagement (PRINCE2)
            </h2>
            <p class="text-dark-500 text-lg mb-6 leading-relaxed">
              Strukturierte Projektsteuerung nach PRINCE2-Methodik – von der Initiierung bis zum 
              erfolgreichen Abschluss. Mit klarer Verantwortung, transparenter Kommunikation 
              und messbaren Ergebnissen.
            </p>
            
            <div class="space-y-4 mb-8">
              <div v-for="item in projectItems" :key="item" 
                   class="flex items-center gap-3 p-3 bg-white rounded-xl shadow-soft">
                <Icon name="heroicons:check-circle" class="w-5 h-5 text-primary-600 flex-shrink-0" />
                <span class="text-dark-700">{{ item }}</span>
              </div>
            </div>

            <p class="text-dark-800 font-medium">
              <strong>Ergebnis:</strong> Ihr Projekt wird termingerecht und im Budget abgeschlossen.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Softwareentwicklung -->
    <section id="softwareentwicklung" class="py-24 bg-white scroll-mt-24">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span class="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-4 block">
              Softwareentwicklung
            </span>
            <h2 class="section-title mb-6">
              Web, APIs & cloud-fähige Architekturen
            </h2>
            <p class="text-dark-500 text-lg mb-6 leading-relaxed">
              Maßgeschneiderte Softwarelösungen – von Web-Anwendungen über APIs bis hin zu 
              komplexen Integrationen und cloud-fähigen Architekturen. Mit modernsten Technologien 
              und bewährten Entwicklungsprozessen.
            </p>
            
            <div class="space-y-4 mb-8">
              <div v-for="item in devItems" :key="item" 
                   class="flex items-center gap-3 p-3 bg-dark-50 rounded-xl">
                <Icon name="heroicons:check-circle" class="w-5 h-5 text-primary-600 flex-shrink-0" />
                <span class="text-dark-700">{{ item }}</span>
              </div>
            </div>

            <p class="text-dark-800 font-medium">
              <strong>Ergebnis:</strong> Robuste, skalierbare Software, die Ihre Geschäftsprozesse optimal unterstützt.
            </p>
          </div>

          <!-- Softwareentwicklung Bild -->
          <div class="relative">
            <div class="rounded-3xl overflow-hidden aspect-square shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80" 
                alt="Programmcode auf Bildschirm – Professionelle Softwareentwicklung und Clean Code"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- KI & Automatisierung -->
    <section id="ki-automatisierung" class="py-24 bg-gradient-to-br from-dark-800 to-dark-900 text-white scroll-mt-24">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- KI & Automatisierung Bild -->
          <div class="relative order-2 lg:order-1">
            <div class="rounded-3xl overflow-hidden aspect-square border border-dark-600">
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80" 
                alt="Künstliche Intelligenz Visualisierung – KI-gestützte Automatisierung und Machine Learning"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div class="order-1 lg:order-2">
            <span class="text-accent-400 font-semibold text-sm tracking-wide uppercase mb-4 block">
              KI & Automatisierung
            </span>
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Workflows, Agenten & Prozessautomatisierung
            </h2>
            <p class="text-dark-300 text-lg mb-6 leading-relaxed">
              KI-gestützte Automatisierung für effiziente Workflows – von intelligenten Agenten 
              über Chatbots bis hin zu komplexer Prozessautomatisierung. Wir machen Ihre Prozesse 
              schneller und effizienter.
            </p>
            
            <div class="space-y-4 mb-8">
              <div v-for="item in aiItems" :key="item" 
                   class="flex items-center gap-3 p-3 bg-dark-700/50 rounded-xl border border-dark-600">
                <Icon name="heroicons:check-circle" class="w-5 h-5 text-accent-400 flex-shrink-0" />
                <span class="text-dark-200">{{ item }}</span>
              </div>
            </div>

            <p class="text-white font-medium">
              <strong>Ergebnis:</strong> Automatisierte Prozesse, die Zeit und Kosten sparen.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- DevOps & Cloud -->
    <section id="devops" class="py-24 bg-white scroll-mt-24">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span class="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-4 block">
              DevOps & Cloud
            </span>
            <h2 class="section-title mb-6">
              Plattform & Betrieb
            </h2>
            <p class="text-dark-500 text-lg mb-6 leading-relaxed">
              Aufbau und Betrieb moderner Cloud-Infrastruktur – von CI/CD-Pipelines über 
              Container-Orchestrierung bis hin zu vollständigem Platform Engineering. 
              Zuverlässig, skalierbar, sicher.
            </p>
            
            <div class="space-y-4 mb-8">
              <div v-for="item in devopsItems" :key="item" 
                   class="flex items-center gap-3 p-3 bg-dark-50 rounded-xl">
                <Icon name="heroicons:check-circle" class="w-5 h-5 text-primary-600 flex-shrink-0" />
                <span class="text-dark-700">{{ item }}</span>
              </div>
            </div>

            <p class="text-dark-800 font-medium">
              <strong>Ergebnis:</strong> Stabile Infrastruktur mit schnellen Deployment-Zyklen.
            </p>
          </div>

          <!-- DevOps & Cloud Bild -->
          <div class="relative">
            <div class="rounded-3xl overflow-hidden aspect-square shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&q=80" 
                alt="Cloud-Infrastruktur Serverraum – moderne DevOps und Cloud-Lösungen"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- DSGVO & IT-Security -->
    <section id="security" class="py-24 bg-dark-50 scroll-mt-24">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Security & Compliance Bild -->
          <div class="relative order-2 lg:order-1">
            <div class="rounded-3xl overflow-hidden aspect-square shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80" 
                alt="Cybersecurity Konzept mit Schloss-Symbol – IT-Sicherheit und DSGVO-Compliance"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div class="order-1 lg:order-2">
            <span class="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-4 block">
              DSGVO & IT-Security
            </span>
            <h2 class="section-title mb-6">
              Compliance & Sicherheit für den deutschen Markt
            </h2>
            <p class="text-dark-500 text-lg mb-6 leading-relaxed">
              DSGVO-konforme Lösungen und IT-Security auf höchstem Niveau. Mit der zunehmenden 
              Bedeutung von KI wird Security immer wichtiger – wir unterstützen Sie bei 
              Compliance und Sicherheitskonzepten.
            </p>
            
            <div class="space-y-4 mb-8">
              <div v-for="item in securityItems" :key="item" 
                   class="flex items-center gap-3 p-3 bg-white rounded-xl shadow-soft">
                <Icon name="heroicons:check-circle" class="w-5 h-5 text-primary-600 flex-shrink-0" />
                <span class="text-dark-700">{{ item }}</span>
              </div>
            </div>

            <p class="text-dark-800 font-medium">
              <strong>Ergebnis:</strong> Rechtssichere, geschützte IT-Systeme und Prozesse.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Webseiten & CMS -->
    <section id="webseiten" class="py-24 bg-white scroll-mt-24">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span class="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-4 block">
              Webseiten & CMS
            </span>
            <h2 class="section-title mb-6">
              Schnell live, dauerhaft wartbar
            </h2>
            <p class="text-dark-500 text-lg mb-6 leading-relaxed">
              Professionelle Webseiten mit schnellen CMS-Systemen – von der Konzeption 
              bis zum Launch. Mit Performance-Optimierung, SEO-Basics und DSGVO-konformer 
              Umsetzung. Schnell online, langfristig erfolgreich.
            </p>
            
            <div class="space-y-4 mb-8">
              <div v-for="item in websiteItems" :key="item" 
                   class="flex items-center gap-3 p-3 bg-dark-50 rounded-xl">
                <Icon name="heroicons:check-circle" class="w-5 h-5 text-primary-600 flex-shrink-0" />
                <span class="text-dark-700">{{ item }}</span>
              </div>
            </div>

            <p class="text-dark-800 font-medium">
              <strong>Ergebnis:</strong> Eine schnelle, wartbare Website, die bei Ihren Kunden ankommt.
            </p>
          </div>

          <!-- Website Showcase -->
          <div class="relative">
            <div class="bg-white rounded-3xl shadow-2xl p-6">
              <div class="flex items-center gap-2 mb-4">
                <div class="w-3 h-3 rounded-full bg-red-400"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div class="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div class="aspect-video rounded-xl overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80" 
                  alt="Moderne responsive Website auf verschiedenen Geräten – professionelles Webdesign"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h4 class="font-display font-bold text-dark-800 mb-3">Referenz-Webseiten</h4>
              <div class="flex flex-wrap gap-2">
                <a 
                  v-for="site in websiteShowcase" 
                  :key="site.url"
                  :href="site.url" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="px-3 py-1.5 bg-primary-50 rounded-lg text-xs text-primary-600 hover:bg-primary-100 transition-colors"
                >
                  {{ site.name }}
                  <Icon name="heroicons:arrow-top-right-on-square" class="w-3 h-3 inline ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Schulungen -->
    <section id="schulungen" class="py-24 bg-dark-50 scroll-mt-24">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Schulungen Workshop Bild -->
          <div class="relative order-2 lg:order-1">
            <div class="rounded-3xl overflow-hidden aspect-square shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80" 
                alt="Schulung im modernen Seminarraum – Mitarbeiterweiterbildung und Workshops"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div class="order-1 lg:order-2">
            <span class="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-4 block">
              Schulungen
            </span>
            <h2 class="section-title mb-6">
              Workshops & Security Awareness
            </h2>
            <p class="text-dark-500 text-lg mb-6 leading-relaxed">
              Interne Mitarbeiterschulungen, Workshops und Security Awareness-Programme. 
              Wir befähigen Ihre Teams mit dem Wissen und den Fähigkeiten, die sie für 
              sichere und effiziente Arbeit benötigen.
            </p>
            
            <div class="space-y-4 mb-8">
              <div v-for="item in trainingItems" :key="item" 
                   class="flex items-center gap-3 p-3 bg-white rounded-xl shadow-soft">
                <Icon name="heroicons:check-circle" class="w-5 h-5 text-primary-600 flex-shrink-0" />
                <span class="text-dark-700">{{ item }}</span>
              </div>
            </div>

            <p class="text-dark-800 font-medium">
              <strong>Ergebnis:</strong> Kompetente, sicherheitsbewusste Mitarbeiter.
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
            Wir freuen uns auf ein Gespräch mit Ihnen. 
            Kontaktieren Sie uns für eine unverbindliche Beratung.
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
  title: 'IT-Lösungen - IC-RESULTING | Managed IT, Projektleitung, Entwicklung',
  description: 'Modular oder Komplettlösung: IT-Verantwortung, Projektleitung (PRINCE2), Softwareentwicklung, KI-Automatisierung, DevOps, DSGVO & Security, Webseiten, Schulungen.'
})

const managedItItems = [
  'Operating Model nach Ihren Anforderungen',
  'Service Management nach ITIL Best Practices',
  'Single Point of Accountability',
  'Transparente Reporting & Kommunikation'
]

const projectItems = [
  'PRINCE2-zertifizierte Projektmethodik',
  'Klare Meilensteine und Deliverables',
  'Risikomanagement & Eskalationsprozesse',
  'Stakeholder-Kommunikation'
]

const devItems = [
  'Web-Anwendungen & Progressive Web Apps',
  'API-Entwicklung & System-Integrationen',
  'Cloud-native & microservice-basierte Architekturen',
  'Code-Reviews & Qualitätssicherung'
]

const aiItems = [
  'Workflow-Automatisierung',
  'KI-Agenten & Chatbots',
  'Prozessoptimierung mit Machine Learning',
  'Datenanalyse & Reporting'
]

const devopsItems = [
  'CI/CD-Pipelines & Automatisierung',
  'Container-Orchestrierung (Kubernetes)',
  'Cloud-Infrastruktur (AWS, Azure, GCP)',
  'Monitoring, Logging & Alerting'
]

const securityItems = [
  'DSGVO-Compliance & Datenschutz',
  'Security-Konzepte & Audits',
  'Penetrationstests & Vulnerability Scans',
  'Security Awareness Schulungen'
]

const websiteItems = [
  'Schnelle Umsetzung – schnell live',
  'Wartbare CMS-Systeme',
  'Performance & SEO-Optimierung',
  'DSGVO-konforme Umsetzung'
]

const trainingItems = [
  'Security Awareness Training',
  'Entwickler-Workshops',
  'Best Practices & Standards',
  'Individuelle Schulungsprogramme'
]

const websiteShowcase = [
  { name: 'bahnmotors.be', url: 'https://bahnmotors.be/' },
  { name: 'avanorth.ca', url: 'https://avanorth.ca/fr' },
  { name: 'quattroshopping.com', url: 'https://quattroshopping.com/en' }
]
</script>
