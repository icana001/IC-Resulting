<template>
  <div>
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900"></div>
      <div class="absolute inset-0 bg-hero-pattern opacity-10"></div>
      <!-- Hero Background Image -->
      <div class="absolute inset-0 opacity-15">
        <img 
          src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&q=80" 
          alt="" 
          aria-hidden="true"
          class="w-full h-full object-cover"
        />
      </div>
      
      <!-- Floating Elements -->
      <div class="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
      <div class="absolute bottom-20 left-20 w-48 h-48 bg-accent-500/20 rounded-full blur-3xl"></div>

      <div class="container-custom relative z-10">
        <div class="max-w-4xl">
          <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="heroicons:cpu-chip" class="w-4 h-4" />
            IT Solutions
          </div>
          
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            IT Solutions & Managed Services für Unternehmen – Ihr Digitalisierungspartner
          </h1>
          
          <p class="text-xl text-white/80 max-w-2xl mb-8">
            Resulting statt Beratung: Wir übernehmen Verantwortung für Ihre IT 
            und liefern messbare Ergebnisse – mit klarer Verantwortung und einem Single Point of Accountability.
          </p>

          <div class="flex flex-wrap gap-4">
            <NuxtLink to="/kontakt" class="btn-white">
              Projekt besprechen
              <Icon name="heroicons:arrow-right" class="w-5 h-5 ml-2" />
            </NuxtLink>
            <NuxtLink to="/loesungen" class="inline-flex items-center px-6 py-3 text-white border border-white/30 rounded-xl hover:bg-white/10 transition-all">
              Alle Lösungen
              <Icon name="heroicons:arrow-right" class="w-5 h-5 ml-2" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="py-24 bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <span class="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-4 block">
            Unsere IT-Leistungen
          </span>
          <h2 class="section-title mb-4">
            Konzentrieren Sie sich auf Ihre Kernprozesse
          </h2>
          <p class="section-subtitle mx-auto">
            Wir kümmern uns um Ihre IT-Projekte mit erfahrenen Projektleitern 
            und einem effizienten Delivery-Modell.
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

    <!-- Process Section -->
    <section class="py-24 bg-dark-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <span class="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-4 block">
            Unser Prozess
          </span>
          <h2 class="section-title mb-4">
            Von der Analyse bis zum Betrieb
          </h2>
          <p class="section-subtitle mx-auto">
            Wir begleiten Sie durch den gesamten Prozess Ihres IT-Projekts.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(step, index) in processSteps" :key="step.title" class="relative">
            <!-- Connector Line -->
            <div v-if="index < processSteps.length - 1" 
                 class="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-primary-200"></div>
            
            <div class="card text-center relative z-10">
              <div class="w-12 h-12 rounded-full bg-primary-600 text-white font-bold text-lg 
                          flex items-center justify-center mx-auto mb-4">
                {{ index + 1 }}
              </div>
              <h3 class="text-lg font-display font-bold text-dark-800 mb-2">
                {{ step.title }}
              </h3>
              <p class="text-dark-500 text-sm">
                {{ step.description }}
              </p>
            </div>
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
              Delivery-Modell
            </span>
            <h2 class="section-title mb-6">
              Projektleitung in Deutschland, effizientes Delivery
            </h2>
            <p class="text-dark-500 text-lg mb-8 leading-relaxed">
              Unser Delivery-Modell kombiniert deutsche Projektleitung mit einem 
              internationalen Entwicklerteam – unter strengen DSGVO- und Security-Leitplanken.
            </p>

            <div class="grid sm:grid-cols-2 gap-6">
              <!-- Deutschland -->
              <div class="p-6 rounded-2xl bg-primary-50 border border-primary-100">
                <div class="w-12 h-12 rounded-xl bg-primary-600 flex items-center justify-center mb-4">
                  <Icon name="heroicons:building-office" class="w-6 h-6 text-white" />
                </div>
                <h4 class="font-display font-bold text-lg text-dark-800 mb-2">
                  Deutschland
                </h4>
                <p class="text-sm text-dark-500 mb-3">Wiesbaden, Berlin, Köln</p>
                <ul class="space-y-1 text-sm text-dark-600">
                  <li>• Projektleitung</li>
                  <li>• Kundenverantwortung</li>
                  <li>• Consulting</li>
                  <li>• Delivery</li>
                </ul>
              </div>

              <!-- Istanbul -->
              <div class="p-6 rounded-2xl bg-accent-50 border border-accent-100">
                <div class="w-12 h-12 rounded-xl bg-accent-600 flex items-center justify-center mb-4">
                  <Icon name="heroicons:academic-cap" class="w-6 h-6 text-white" />
                </div>
                <h4 class="font-display font-bold text-lg text-dark-800 mb-2">
                  Türkei
                </h4>
                <p class="text-sm text-dark-500 mb-3">Istanbul (R&D)</p>
                <ul class="space-y-1 text-sm text-dark-600">
                  <li>• Entwicklung</li>
                  <li>• Academy</li>
                  <li>• Research</li>
                  <li>• Uni-Kooperationen</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Qualifikationen -->
          <div class="bg-gradient-to-br from-dark-800 to-dark-900 rounded-3xl p-8 md:p-10 text-white">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-14 h-14 rounded-2xl bg-primary-500 flex items-center justify-center">
                <Icon name="heroicons:shield-check" class="w-7 h-7" />
              </div>
              <h3 class="text-2xl font-display font-bold">Qualifikationen</h3>
            </div>
            <p class="text-dark-300 leading-relaxed mb-6">
              Mit fundierten Zertifizierungen und einer Sicherheitsüberprüfung 
              durch das Bundesamt für Verfassungsschutz bieten wir Ihnen 
              höchste Qualitäts- und Sicherheitsstandards.
            </p>
            <div class="grid grid-cols-2 gap-4">
              <div class="p-4 bg-dark-700/50 rounded-xl">
                <div class="text-2xl font-bold text-primary-400 mb-1">SÜ2</div>
                <div class="text-sm text-dark-400">Sicherheitsüberprüfung</div>
              </div>
              <div class="p-4 bg-dark-700/50 rounded-xl">
                <div class="text-2xl font-bold text-accent-400 mb-1">PRINCE2</div>
                <div class="text-sm text-dark-400">Project Management</div>
              </div>
              <div class="p-4 bg-dark-700/50 rounded-xl">
                <div class="text-2xl font-bold text-primary-400 mb-1">ITIL</div>
                <div class="text-sm text-dark-400">Service Management</div>
              </div>
              <div class="p-4 bg-dark-700/50 rounded-xl">
                <div class="text-2xl font-bold text-accent-400 mb-1">Dipl.-Inf.</div>
                <div class="text-sm text-dark-400">RheinMain (FH)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technologies -->
    <section class="py-24 bg-dark-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <span class="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-4 block">
            Technologien
          </span>
          <h2 class="section-title mb-4">
            Moderne Tech-Stacks
          </h2>
          <p class="section-subtitle mx-auto">
            Wir setzen auf bewährte und moderne Technologien für Ihre Projekte.
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div v-for="tech in technologies" :key="tech" 
               class="p-4 bg-white rounded-xl border border-dark-100 text-center 
                      hover:border-primary-300 hover:shadow-soft transition-all">
            <span class="font-medium text-dark-700">{{ tech }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Quality Section -->
    <section class="py-24 bg-white">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span class="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-4 block">
              Qualitätssicherung
            </span>
            <h2 class="section-title mb-6">
              Umsetzung auf höchstem Niveau
            </h2>
            <p class="text-dark-500 text-lg mb-8 leading-relaxed">
              Transparenz zu unseren Kunden und die Dokumentation stehen im Fokus. 
              Professionelle Projektleiter erleichtern es, Ihren Zielen näher zu kommen 
              und bieten mit unseren Werkzeugen die notwendige Transparenz für alle Eskalationsstufen.
            </p>
            
            <div class="space-y-4">
              <div v-for="item in qualityItems" :key="item" 
                   class="flex items-center gap-3 p-4 bg-dark-50 rounded-xl">
                <Icon name="heroicons:shield-check" class="w-6 h-6 text-primary-600 flex-shrink-0" />
                <span class="font-medium text-dark-700">{{ item }}</span>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div v-for="cert in certifications" :key="cert.name" 
                 class="card text-center hover:shadow-lg transition-shadow">
              <Icon :name="cert.icon" class="w-12 h-12 text-primary-600 mx-auto mb-3" />
              <h4 class="font-semibold text-dark-800">{{ cert.name }}</h4>
            </div>
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
            Ihr IT-Projekt in guten Händen
          </h2>
          <p class="text-xl text-white/80 mb-10">
            Lassen Sie uns gemeinsam Ihre IT-Herausforderungen meistern. 
            Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/kontakt" class="btn-white">
              <Icon name="heroicons:chat-bubble-left-right" class="w-5 h-5 mr-2" />
              Kontakt aufnehmen
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const siteUrl = 'https://ic-resulting.de'
const pageUrl = `${siteUrl}/it-solutions`
const pageTitle = 'IT-Lösungen, Cloud & Managed Services | Deutschland – IC-RESULTING'
const pageDescription = 'IT-Projektleitung, Managed Services, DevOps, Cloud-Lösungen & KI-Automatisierung für Unternehmen. Ihr Partner für digitale Transformation.'

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogUrl: pageUrl,
  ogType: 'website',
  ogImage: `${siteUrl}/images/og-image.png`,
  ogLocale: 'de_DE',
  ogSiteName: 'IC-RESULTING',
  twitterCard: 'summary_large_image',
  twitterTitle: pageTitle,
  twitterDescription: pageDescription
})

useHead({
  link: [{ rel: 'canonical', href: pageUrl }]
})

const services = [
  {
    icon: 'heroicons:briefcase',
    title: 'IT-Projektleitung',
    description: 'Professionelle Leitung Ihrer IT-Projekte bis zum erfolgreichen Abschluss.',
    items: ['PRINCE2 Methodik', 'Ressourcenmanagement', 'Risikomanagement', 'Stakeholder-Kommunikation']
  },
  {
    icon: 'heroicons:code-bracket',
    title: 'Softwareentwicklung',
    description: 'Maßgeschneiderte Softwarelösungen für Ihre Anforderungen.',
    items: ['Web-Anwendungen', 'Mobile Apps', 'API-Entwicklung', 'Cloud-Lösungen']
  },
  {
    icon: 'heroicons:cpu-chip',
    title: 'KI & Automatisierung',
    description: 'KI-gestützte Prozessautomatisierung für mehr Effizienz.',
    items: ['Prozessoptimierung', 'Machine Learning', 'Workflow-Automatisierung', 'Intelligente Agenten']
  },
  {
    icon: 'heroicons:users',
    title: 'DevOps & Cloud',
    description: 'Aufbau und Betrieb moderner Cloud-Infrastruktur.',
    items: ['CI/CD Pipelines', 'Container & Kubernetes', 'Cloud Migration', 'Infrastructure as Code']
  },
  {
    icon: 'heroicons:shield-check',
    title: 'DSGVO & IT-Security',
    description: 'Datenschutz & DSGVO-konforme IT-Infrastruktur.',
    items: ['Datenschutz-Audits', 'Sicherheitskonzepte', 'Compliance', 'Penetrationstests']
  },
  {
    icon: 'heroicons:academic-cap',
    title: 'Schulungen',
    description: 'Mitarbeiterschulung & Security Awareness.',
    items: ['Security Awareness', 'Entwickler-Schulungen', 'Best Practices', 'Workshops']
  }
]

const processSteps = [
  {
    title: 'Analyse',
    description: 'Wir verstehen Ihre Anforderungen und analysieren die Ist-Situation.'
  },
  {
    title: 'Konzeption',
    description: 'Wir entwickeln eine maßgeschneiderte Lösungskonzeption.'
  },
  {
    title: 'Umsetzung',
    description: 'Unsere Teams setzen die Lösung professionell um.'
  },
  {
    title: 'Betrieb',
    description: 'Wir begleiten Sie auch nach dem Go-Live.'
  }
]

const technologies = [
  'Java', 'Python', 'JavaScript', 'TypeScript', 'React', 'Vue.js',
  'Node.js', '.NET', 'Spring', 'Docker', 'Kubernetes', 'AWS'
]

const qualityItems = [
  'Dokumentation aller Projektphasen',
  'Transparente Kommunikation',
  'Professionelle Projektmanagement-Werkzeuge',
  'Regelmäßige Status-Reports',
  'DSGVO-konforme Prozesse'
]

const certifications = [
  { name: 'ITIL', icon: 'heroicons:cog-6-tooth' },
  { name: 'DSGVO', icon: 'heroicons:shield-check' },
  { name: 'Agile/Scrum', icon: 'heroicons:arrow-path' },
  { name: 'DevOps', icon: 'heroicons:cloud' }
]
</script>
