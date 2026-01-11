<template>
  <div>
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-accent-600 via-accent-700 to-accent-900"></div>
      <div class="absolute inset-0 bg-hero-pattern opacity-10"></div>
      
      <!-- Floating Elements -->
      <div class="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
      <div class="absolute bottom-20 left-20 w-48 h-48 bg-primary-500/20 rounded-full blur-3xl"></div>

      <div class="container-custom relative z-10">
        <div class="max-w-4xl">
          <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="heroicons:globe-alt" class="w-4 h-4" />
            Travel Solutions
          </div>
          
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Wir bringen <br class="hidden md:block" />
            <span class="text-primary-300">Reiseveranstalter</span> voran
          </h1>
          
          <p class="text-xl text-white/80 max-w-2xl mb-8">
            Spezialisierte digitale Lösungen für die Reisebranche. 
            Langjähriges Branchen-Know-how macht uns zum erfolgreichen Partner auf Augenhöhe.
          </p>

          <div class="flex flex-wrap gap-4">
            <NuxtLink to="/kontakt" class="btn-white">
              Projekt besprechen
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
          <span class="text-accent-600 font-semibold text-sm tracking-wide uppercase mb-4 block">
            Unsere Lösungen
          </span>
          <h2 class="section-title mb-4">
            Digitale Services für die Reisebranche
          </h2>
          <p class="section-subtitle mx-auto">
            Von Reisebestätigungen bis zum CRM – wir bieten umfassende 
            Lösungen für alle Bereiche des Reisegeschäfts.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="solution in solutions" :key="solution.title" class="card-hover group">
            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 
                        flex items-center justify-center mb-6 shadow-lg shadow-accent-500/30
                        group-hover:scale-110 transition-transform duration-300">
              <Icon :name="solution.icon" class="w-7 h-7 text-white" />
            </div>
            <h3 class="text-xl font-display font-bold text-dark-800 mb-3">
              {{ solution.title }}
            </h3>
            <p class="text-dark-500 leading-relaxed">
              {{ solution.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Grid -->
    <section class="py-24 bg-dark-50">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span class="text-accent-600 font-semibold text-sm tracking-wide uppercase mb-4 block">
              Online Kunden Center
            </span>
            <h2 class="section-title mb-6">
              Alles im Blick für Ihre Kunden
            </h2>
            <p class="text-dark-500 text-lg mb-8 leading-relaxed">
              Bieten Sie Ihren Kunden ein modernes Online-Portal mit allen 
              wichtigen Funktionen für die Reisebuchung und -verwaltung.
            </p>

            <div class="space-y-4">
              <div v-for="feature in onlineFeatures" :key="feature" 
                   class="flex items-center gap-3 p-4 bg-white rounded-xl shadow-soft">
                <div class="w-10 h-10 rounded-lg bg-accent-100 flex items-center justify-center flex-shrink-0">
                  <Icon name="heroicons:check" class="w-5 h-5 text-accent-600" />
                </div>
                <span class="font-medium text-dark-700">{{ feature }}</span>
              </div>
            </div>
          </div>

          <!-- Preview Card -->
          <div class="relative">
            <div class="bg-white rounded-3xl shadow-2xl p-6 md:p-8">
              <div class="flex items-center gap-2 mb-6">
                <div class="w-3 h-3 rounded-full bg-red-400"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div class="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              
              <div class="space-y-4">
                <div class="h-8 bg-gradient-to-r from-accent-500 to-accent-600 rounded-lg w-3/4"></div>
                <div class="h-4 bg-dark-100 rounded w-full"></div>
                <div class="h-4 bg-dark-100 rounded w-5/6"></div>
                
                <div class="grid grid-cols-2 gap-4 pt-4">
                  <div class="p-4 bg-dark-50 rounded-xl">
                    <div class="h-3 bg-dark-200 rounded w-1/2 mb-2"></div>
                    <div class="h-6 bg-accent-100 rounded"></div>
                  </div>
                  <div class="p-4 bg-dark-50 rounded-xl">
                    <div class="h-3 bg-dark-200 rounded w-1/2 mb-2"></div>
                    <div class="h-6 bg-primary-100 rounded"></div>
                  </div>
                </div>

                <div class="pt-4 flex gap-3">
                  <div class="h-10 bg-accent-500 rounded-lg flex-1"></div>
                  <div class="h-10 bg-dark-200 rounded-lg w-24"></div>
                </div>
              </div>
            </div>

            <!-- Floating Badge -->
            <div class="absolute -top-4 -right-4 bg-primary-600 text-white px-4 py-2 rounded-xl shadow-lg">
              <span class="font-semibold">Mobile Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mobile Services -->
    <section class="py-24 bg-white">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Phone Mockup -->
          <div class="order-2 lg:order-1 flex justify-center">
            <div class="relative">
              <div class="w-64 h-[500px] bg-dark-900 rounded-[3rem] p-3 shadow-2xl">
                <div class="w-full h-full bg-gradient-to-br from-accent-500 to-accent-700 rounded-[2.5rem] 
                            flex flex-col items-center justify-center text-white p-6">
                  <Icon name="heroicons:device-phone-mobile" class="w-16 h-16 mb-4 opacity-50" />
                  <h4 class="font-bold text-lg text-center mb-2">Mobile Services</h4>
                  <p class="text-sm text-white/70 text-center">Ihre App für unterwegs</p>
                </div>
              </div>
              
              <!-- Floating Elements -->
              <div class="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-xl">
                <Icon name="heroicons:bell-alert" class="w-8 h-8 text-accent-500" />
              </div>
              <div class="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-xl">
                <Icon name="heroicons:qr-code" class="w-8 h-8 text-primary-500" />
              </div>
            </div>
          </div>

          <div class="order-1 lg:order-2">
            <span class="text-accent-600 font-semibold text-sm tracking-wide uppercase mb-4 block">
              Mobile Services
            </span>
            <h2 class="section-title mb-6">
              Immer und überall erreichbar
            </h2>
            <p class="text-dark-500 text-lg mb-8 leading-relaxed">
              Mit unseren Mobile Services bieten Sie Ihren Kunden den 
              perfekten Begleiter für ihre Reise – von der Buchung bis zur Rückkehr.
            </p>

            <div class="grid sm:grid-cols-2 gap-4">
              <div v-for="feature in mobileFeatures" :key="feature.title" 
                   class="p-4 bg-dark-50 rounded-xl">
                <Icon :name="feature.icon" class="w-6 h-6 text-accent-600 mb-2" />
                <h4 class="font-semibold text-dark-800 mb-1">{{ feature.title }}</h4>
                <p class="text-sm text-dark-500">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Back Office -->
    <section class="py-24 bg-gradient-to-br from-dark-800 to-dark-900 text-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <span class="text-accent-400 font-semibold text-sm tracking-wide uppercase mb-4 block">
            Back Office Lösungen
          </span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Effiziente Prozesse im Hintergrund
          </h2>
          <p class="text-xl text-dark-300 max-w-2xl mx-auto">
            Automatisieren Sie Ihre Geschäftsprozesse und sparen Sie Zeit und Ressourcen.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="office in backOfficeFeatures" :key="office.title" 
               class="p-6 bg-dark-700/50 rounded-2xl backdrop-blur-sm border border-dark-600 
                      hover:border-accent-500/50 transition-colors">
            <Icon :name="office.icon" class="w-10 h-10 text-accent-400 mb-4" />
            <h3 class="font-display font-bold text-lg mb-2">{{ office.title }}</h3>
            <p class="text-dark-400 text-sm">{{ office.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Clients -->
    <section class="py-24 bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <span class="text-accent-600 font-semibold text-sm tracking-wide uppercase mb-4 block">
            Unsere Kunden
          </span>
          <h2 class="section-title mb-4">
            Vertrauen führender Reiseunternehmen
          </h2>
          <p class="section-subtitle mx-auto">
            Wir arbeiten erfolgreich mit führenden Airlines und Reiseveranstaltern zusammen.
          </p>
        </div>

        <div class="flex flex-wrap justify-center gap-6">
          <div v-for="client in clients" :key="client" 
               class="px-8 py-4 bg-dark-50 rounded-xl text-dark-600 font-semibold 
                      hover:bg-accent-50 hover:text-accent-700 transition-all duration-300">
            {{ client }}
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-gradient-to-r from-accent-600 to-accent-800 relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div class="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div class="container-custom relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Digitalisieren Sie Ihr Reisegeschäft
          </h2>
          <p class="text-xl text-white/80 mb-10">
            Lassen Sie uns gemeinsam die perfekte Lösung für Ihre Anforderungen entwickeln.
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
useSeoMeta({
  title: 'Digitale Transformation - IC-RESULTING | KI & Automatisierung',
  description: 'KI-gestützte Prozessautomatisierung, Digitale Transformation, DSGVO-konforme IT-Infrastruktur, Mitarbeiterschulung & IT-Sicherheit.'
})

const solutions = [
  {
    icon: 'heroicons:document-check',
    title: 'Reisebestätigungen',
    description: 'Automatisierte Erstellung und Versand von Buchungsbestätigungen an Ihre Kunden.'
  },
  {
    icon: 'heroicons:banknotes',
    title: 'Rechnungen',
    description: 'Professionelles Rechnungsmanagement mit automatischer Erstellung und Versand.'
  },
  {
    icon: 'heroicons:bell-alert',
    title: 'Mahnungen',
    description: 'Automatisiertes Mahnwesen für ausstehende Zahlungen Ihrer Kunden.'
  },
  {
    icon: 'heroicons:document-text',
    title: 'Reiseunterlagen',
    description: 'Digitale Bereitstellung aller wichtigen Reisedokumente für Ihre Kunden.'
  },
  {
    icon: 'heroicons:shopping-cart',
    title: 'Upsell / Aftersales',
    description: 'Maximieren Sie Ihren Umsatz durch gezielte Zusatzangebote nach der Buchung.'
  },
  {
    icon: 'heroicons:chart-bar',
    title: 'Reporting',
    description: 'Umfassende Analysen und Reports für datengetriebene Entscheidungen.'
  }
]

const onlineFeatures = [
  'Buchungsübersicht in Echtzeit',
  'Sichere Online-Zahlung',
  'Dokumenten-Download',
  'Persönliches Kundenkonto',
  'Chat-Support Integration'
]

const mobileFeatures = [
  {
    icon: 'heroicons:bell',
    title: 'Push-Nachrichten',
    description: 'Echtzeit-Updates zur Reise'
  },
  {
    icon: 'heroicons:ticket',
    title: 'Mobile Tickets',
    description: 'Digitale Bordkarten & Voucher'
  },
  {
    icon: 'heroicons:map',
    title: 'Offline-Karten',
    description: 'Reiseführer ohne Internet'
  },
  {
    icon: 'heroicons:clock',
    title: 'Live-Tracking',
    description: 'Flugstatus & Verspätungen'
  }
]

const backOfficeFeatures = [
  {
    icon: 'heroicons:users',
    title: 'CRM System',
    description: 'Zentrale Kundenverwaltung und Kommunikation'
  },
  {
    icon: 'heroicons:cog-6-tooth',
    title: 'Automatisierung',
    description: 'Workflow-Automatisierung für repetitive Aufgaben'
  },
  {
    icon: 'heroicons:arrow-path',
    title: 'Schnittstellen',
    description: 'Integration mit bestehenden Systemen'
  },
  {
    icon: 'heroicons:document-chart-bar',
    title: 'Reporting',
    description: 'Detaillierte Geschäftsanalysen'
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
