<template>
  <div>
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900"></div>
      <div class="absolute inset-0 bg-hero-pattern opacity-10"></div>
      <!-- Hero Background Image -->
      <div class="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80" 
          alt="" 
          aria-hidden="true"
          class="w-full h-full object-cover"
        />
      </div>

      <div class="container-custom relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="heroicons:briefcase" class="w-4 h-4" />
            Karriere
          </div>
          
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Karriere bei IC-RESULTING – IT-Jobs mit Zukunft & Entwicklung
          </h1>
          
          <p class="text-xl text-white/80">
            Wir suchen erfahrene IT-Profis und motivierte Nachwuchstalente, die gemeinsam mit uns die 
            Digitalisierung vorantreiben möchten – an unseren Standorten in 
            Deutschland und Istanbul.
          </p>
        </div>
      </div>
    </section>

    <!-- Why IC-RESULTING -->
    <section class="py-24 bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <span class="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-4 block">
            Warum IC-RESULTING?
          </span>
          <h2 class="section-title mb-4">
            Was Sie bei uns erwartet
          </h2>
          <p class="section-subtitle mx-auto">
            Bei IC-RESULTING erwartet Sie ein dynamisches Arbeitsumfeld 
            mit spannenden Projekten und einem internationalen Team.
          </p>
        </div>

        <!-- Projekte statt Präsentationen Absatz -->
        <div class="max-w-3xl mx-auto mb-16">
          <div class="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 border border-primary-100">
            <h3 class="text-xl font-display font-bold text-dark-800 mb-4">
              Projekte statt Präsentationen
            </h3>
            <p class="text-dark-600 leading-relaxed">
              Bei IC-RESULTING arbeiten Sie an echten IT-Projekten: Behördendigitalisierung, 
              Airline-Systeme, Industrielösungen. Wir liefern Ergebnisse – und erwarten von unseren 
              Teammitgliedern dieselbe Haltung. Dafür bieten wir Ihnen Verantwortung, Weiterentwicklung 
              und ein Team, das zusammenarbeitet statt konkurriert.
            </p>
          </div>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="benefit in benefits" :key="benefit.title" class="card-hover group">
            <div class="icon-box mb-6 group-hover:scale-110 transition-transform duration-300">
              <Icon :name="benefit.icon" class="w-6 h-6" />
            </div>
            <h3 class="text-xl font-display font-bold text-dark-800 mb-3">
              {{ benefit.title }}
            </h3>
            <p class="text-dark-500 leading-relaxed">
              {{ benefit.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Open Positions -->
    <section class="py-24 bg-dark-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <span class="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-4 block">
            Offene Stellen
          </span>
          <h2 class="section-title mb-4">
            Aktuelle Stellenangebote
          </h2>
          <p class="section-subtitle mx-auto">
            Finden Sie die passende Position für Ihre Karriere.
          </p>
        </div>

        <div class="max-w-4xl mx-auto space-y-4">
          <div v-for="job in jobs" :key="job.title" 
               class="bg-white rounded-2xl p-6 shadow-soft border border-dark-100 
                      hover:border-primary-200 hover:shadow-lg transition-all group">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 class="text-xl font-display font-bold text-dark-800 mb-2 
                           group-hover:text-primary-600 transition-colors">
                  {{ job.title }}
                </h3>
                <div class="flex flex-wrap items-center gap-3 text-sm text-dark-500">
                  <span class="flex items-center gap-1">
                    <Icon name="heroicons:map-pin" class="w-4 h-4" />
                    {{ job.location }}
                  </span>
                  <span class="flex items-center gap-1">
                    <Icon name="heroicons:clock" class="w-4 h-4" />
                    {{ job.type }}
                  </span>
                  <span class="flex items-center gap-1">
                    <Icon name="heroicons:building-office" class="w-4 h-4" />
                    {{ job.department }}
                  </span>
                </div>
              </div>
              <NuxtLink to="/kontakt" class="btn-primary flex-shrink-0">
                Jetzt bewerben
              </NuxtLink>
            </div>
          </div>

          <!-- No Jobs Available -->
          <div v-if="jobs.length === 0" 
               class="bg-white rounded-2xl p-8 text-center shadow-soft border border-dark-100">
            <Icon name="heroicons:briefcase" class="w-12 h-12 text-dark-300 mx-auto mb-4" />
            <h3 class="text-xl font-display font-bold text-dark-800 mb-2">
              Keine offenen Stellen
            </h3>
            <p class="text-dark-500 mb-4">
              Aktuell haben wir keine offenen Stellen. Bewerben Sie sich 
              trotzdem initiativ – wir freuen uns auf Ihre Unterlagen!
            </p>
            <NuxtLink to="/kontakt" class="btn-primary">
              Initiativbewerbung
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Standorte -->
    <section class="py-24 bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <span class="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-4 block">
            Standorte
          </span>
          <h2 class="section-title mb-4">
            Wo wir arbeiten
          </h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div class="p-6 bg-dark-50 rounded-2xl text-center">
            <div class="w-12 h-12 rounded-xl bg-primary-600 flex items-center justify-center mx-auto mb-4">
              <Icon name="heroicons:building-office" class="w-6 h-6 text-white" />
            </div>
            <h3 class="font-display font-bold text-dark-800 mb-1">Wiesbaden</h3>
            <p class="text-dark-500 text-sm">Hauptsitz & Projektleitung</p>
          </div>
          <div class="p-6 bg-dark-50 rounded-2xl text-center">
            <div class="w-12 h-12 rounded-xl bg-primary-600 flex items-center justify-center mx-auto mb-4">
              <Icon name="heroicons:map-pin" class="w-6 h-6 text-white" />
            </div>
            <h3 class="font-display font-bold text-dark-800 mb-1">Berlin</h3>
            <p class="text-dark-500 text-sm">Delivery & Entwicklung</p>
          </div>
          <div class="p-6 bg-dark-50 rounded-2xl text-center">
            <div class="w-12 h-12 rounded-xl bg-primary-600 flex items-center justify-center mx-auto mb-4">
              <Icon name="heroicons:map-pin" class="w-6 h-6 text-white" />
            </div>
            <h3 class="font-display font-bold text-dark-800 mb-1">Köln</h3>
            <p class="text-dark-500 text-sm">Partner-Standort</p>
          </div>
          <div class="p-6 bg-dark-50 rounded-2xl text-center">
            <div class="w-12 h-12 rounded-xl bg-accent-600 flex items-center justify-center mx-auto mb-4">
              <Icon name="heroicons:academic-cap" class="w-6 h-6 text-white" />
            </div>
            <h3 class="font-display font-bold text-dark-800 mb-1">Istanbul</h3>
            <p class="text-dark-500 text-sm">R&D & Academy</p>
          </div>
        </div>
      </div>
    </section>

    <!-- IC-RESULTING Academy -->
    <section class="py-24 bg-gradient-to-br from-dark-800 to-dark-900 text-white">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div class="flex items-center gap-4 mb-6">
              <div class="w-14 h-14 rounded-2xl bg-primary-500 flex items-center justify-center">
                <Icon name="heroicons:academic-cap" class="w-7 h-7" />
              </div>
              <h2 class="text-3xl md:text-4xl font-display font-bold">IC-RESULTING Academy</h2>
            </div>
            <p class="text-dark-300 text-lg leading-relaxed mb-4">
              Unsere Academy in Istanbul bietet jungen und motivierten Talenten die Möglichkeit, 
              von erfahrenen Experten zu lernen. Mit europäischen Standards und 
              modernsten Methoden bereiten wir Sie optimal auf Ihre Karriere vor.
            </p>
            <p class="text-dark-300 text-lg leading-relaxed mb-8">
              In Kooperation mit türkischen Universitäten fördern wir den Nachwuchs 
              und verbinden akademische Ausbildung mit praxisnaher Projekterfahrung.
            </p>

            <div class="space-y-4">
              <div v-for="item in academyFeatures" :key="item" 
                   class="flex items-center gap-3 p-4 bg-dark-700/50 rounded-xl">
                <Icon name="heroicons:check-circle" class="w-6 h-6 text-primary-400 flex-shrink-0" />
                <span class="text-dark-200">{{ item }}</span>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="p-6 bg-dark-700/50 rounded-2xl text-center">
              <div class="text-4xl font-bold text-primary-400 mb-2">TDD</div>
              <div class="text-dark-400">Test Driven Development</div>
            </div>
            <div class="p-6 bg-dark-700/50 rounded-2xl text-center">
              <div class="text-4xl font-bold text-accent-400 mb-2">DevOps</div>
              <div class="text-dark-400">CI/CD Best Practices</div>
            </div>
            <div class="p-6 bg-dark-700/50 rounded-2xl text-center">
              <div class="text-4xl font-bold text-primary-400 mb-2">Agile</div>
              <div class="text-dark-400">Scrum & Kanban</div>
            </div>
            <div class="p-6 bg-dark-700/50 rounded-2xl text-center">
              <div class="text-4xl font-bold text-accent-400 mb-2">KI</div>
              <div class="text-dark-400">AI & Machine Learning</div>
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
            Bereit für echte IT-Projekte?
          </h2>
          <p class="text-xl text-white/80 mb-10">
            Schreiben Sie uns – mit oder ohne klassische Bewerbungsmappe. 
            Wir freuen uns darauf, Sie kennenzulernen.
          </p>
          <NuxtLink to="/kontakt" class="btn-white">
            <Icon name="heroicons:envelope" class="w-5 h-5 mr-2" />
            Jetzt bewerben
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const siteUrl = 'https://ic-resulting.de'
const pageUrl = `${siteUrl}/karriere`
const pageTitle = 'Karriere bei IC-RESULTING – IT-Jobs & Entwicklung'
const pageDescription = 'IT-Jobs, Karriere & Weiterbildung bei IC-RESULTING. Werden Sie Teil unseres Teams in Wiesbaden, Berlin, Istanbul!'

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

const benefits = [
  {
    icon: 'heroicons:rocket-launch',
    title: 'Spannende Projekte',
    description: 'IT-Projekte für Behörden, Industrie und Mittelstand – keine PowerPoint-Schlachten, sondern echte Umsetzung.'
  },
  {
    icon: 'heroicons:academic-cap',
    title: 'Weiterbildung',
    description: 'Profitieren Sie von unserer Academy und kontinuierlicher Weiterentwicklung.'
  },
  {
    icon: 'heroicons:globe-alt',
    title: 'Internationales Team',
    description: 'Arbeiten Sie in einem multinationalen Team mit Kollegen in Deutschland und der Türkei.'
  },
  {
    icon: 'heroicons:home-modern',
    title: 'Modernes Arbeitsumfeld',
    description: 'Remote-Option, moderne Arbeitsmittel, flexible Zeiteinteilung.'
  },
  {
    icon: 'heroicons:heart',
    title: 'Work-Life-Balance',
    description: 'Flexible Arbeitsmodelle und Home-Office Möglichkeiten für eine gute Balance.'
  },
  {
    icon: 'heroicons:chart-bar',
    title: 'Karrierechancen',
    description: 'Vielfältige Entwicklungsmöglichkeiten in einem wachsenden Unternehmen.'
  }
]

const jobs = [
  {
    title: 'Senior Software Developer (m/w/d)',
    location: 'Wiesbaden / Remote',
    type: 'Vollzeit',
    department: 'Entwicklung'
  },
  {
    title: 'IT-Projektmanager (m/w/d)',
    location: 'Wiesbaden',
    type: 'Vollzeit',
    department: 'Projektleitung'
  },
  {
    title: 'Junior Developer (m/w/d)',
    location: 'Istanbul',
    type: 'Vollzeit',
    department: 'Entwicklung'
  },
  {
    title: 'DevOps Engineer (m/w/d)',
    location: 'Berlin / Remote',
    type: 'Vollzeit',
    department: 'Infrastruktur'
  }
]

const academyFeatures = [
  'Schulung nach europäischen Standards',
  'Praxisnahe Projekte von Anfang an',
  'Mentoring durch erfahrene Entwickler',
  'Moderne Technologien und Methoden',
  'Kooperationen mit türkischen Universitäten'
]
</script>
