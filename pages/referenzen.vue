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
            Referenzen
          </div>
          
          <h1 class="section-title mb-6">
            IT-Projekte & Referenzen – Nachweisbare Ergebnisse für Unternehmen
          </h1>
          
          <p class="section-subtitle mx-auto">
            Behörden, Luftfahrt, Industrie, Finance: Wir haben in unterschiedlichsten 
            Branchen nachweisbare Ergebnisse geliefert.
          </p>
        </div>
      </div>
    </section>

    <!-- Intro Section -->
    <section class="py-12 bg-white border-b border-dark-100">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center">
          <p class="text-lg text-dark-600 leading-relaxed mb-6">
            IC-RESULTING hat in den vergangenen Jahren zahlreiche IT-Projekte in verschiedenen 
            Branchen erfolgreich umgesetzt. Wir arbeiten nicht mit Konzeptpapieren, die in Schubladen 
            verstauben – unsere Projekte werden umgesetzt, stabilisiert und in den Betrieb überführt.
          </p>
          <div class="bg-primary-50 border border-primary-200 rounded-xl p-4 inline-block">
            <p class="text-primary-800 font-medium">
              <Icon name="heroicons:shield-check" class="w-5 h-5 inline mr-2" />
              Aus Gründen der Vertraulichkeit nennen wir konkrete Referenzen und Projektdetails gern auf Anfrage.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Projekterfahrung Section -->
    <section class="py-24 bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <span class="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-4 block">
            Branchenerfahrung
          </span>
          <h2 class="section-title mb-4">
            Ausgewählte Projekte
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <!-- Behördenprojekt -->
          <div class="card-hover group">
            <div class="flex items-start gap-4 mb-4">
              <div class="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0 
                          group-hover:scale-110 transition-transform">
                <Icon name="heroicons:building-library" class="w-7 h-7 text-primary-600" />
              </div>
              <div>
                <span class="text-xs text-primary-600 font-semibold uppercase tracking-wide">Öffentliche Verwaltung</span>
                <h3 class="text-xl font-display font-bold text-dark-800">IT-Großprojekt im Behördenumfeld</h3>
              </div>
            </div>
            <p class="text-dark-500 leading-relaxed">
              IT-Projektleitung und Dienstekonsolidierung im Behördenumfeld unter erhöhten Sicherheitsanforderungen. 
              Komplexe Digitalisierungsprojekte für den zentralen IT-Dienstleister des Bundes.
            </p>
            <div class="mt-4 rounded-xl overflow-hidden h-32">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80" 
                alt="Modernes Verwaltungsgebäude – IT-Projekte für Behörden und öffentliche Verwaltung"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <!-- Aviation & Travel -->
          <div class="card-hover group">
            <div class="flex items-start gap-4 mb-4">
              <div class="w-14 h-14 rounded-xl bg-accent-100 flex items-center justify-center flex-shrink-0 
                          group-hover:scale-110 transition-transform">
                <Icon name="heroicons:paper-airplane" class="w-7 h-7 text-accent-600" />
              </div>
              <div>
                <span class="text-xs text-accent-600 font-semibold uppercase tracking-wide">Luftfahrt & Reise</span>
                <h3 class="text-xl font-display font-bold text-dark-800">Namhafte Airlines & Reiseveranstalter</h3>
              </div>
            </div>
            <p class="text-dark-500 leading-relaxed">
              Buchungssysteme und Backend-Integrationen für international tätige Airlines und Reiseveranstalter. 
              Entwicklung und Integration von Kundenportalen für führende Unternehmen der Branche.
            </p>
            <div class="mt-4 rounded-xl overflow-hidden h-32">
              <img 
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&q=80" 
                alt="Flugzeug am Himmel – IT-Lösungen für die Luftfahrtbranche"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <!-- Industrie -->
          <div class="card-hover group">
            <div class="flex items-start gap-4 mb-4">
              <div class="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0 
                          group-hover:scale-110 transition-transform">
                <Icon name="heroicons:building-office-2" class="w-7 h-7 text-primary-600" />
              </div>
              <div>
                <span class="text-xs text-primary-600 font-semibold uppercase tracking-wide">Industrie & Mittelstand</span>
                <h3 class="text-xl font-display font-bold text-dark-800">Führender Technologiekonzern</h3>
              </div>
            </div>
            <p class="text-dark-500 leading-relaxed">
              IT-Projektleitung und Softwareentwicklung für einen führenden Hersteller 
              im Bereich Heizungs- und Klimatechnik. Integration von Systemen und Prozessoptimierung 
              im industriellen Umfeld.
            </p>
            <div class="mt-4 rounded-xl overflow-hidden h-32">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80" 
                alt="Industrielle Fertigung – IT-Lösungen für Industrie und Mittelstand"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <!-- Versicherung -->
          <div class="card-hover group">
            <div class="flex items-start gap-4 mb-4">
              <div class="w-14 h-14 rounded-xl bg-accent-100 flex items-center justify-center flex-shrink-0 
                          group-hover:scale-110 transition-transform">
                <Icon name="heroicons:shield-check" class="w-7 h-7 text-accent-600" />
              </div>
              <div>
                <span class="text-xs text-accent-600 font-semibold uppercase tracking-wide">Versicherungs- & Rückversicherungsumfeld</span>
                <h3 class="text-xl font-display font-bold text-dark-800">Internationale Rückversicherung</h3>
              </div>
            </div>
            <p class="text-dark-500 leading-relaxed">
              Implementierung eines feingliedrigen Freigabeprozesses für Projekte, Change Management 
              während Freigabeprozess und Projektarbeit. Überwachung von Timing und Kosten auf 
              Projekt-, Portfolio- und Unternehmensebene.
            </p>
            <div class="mt-4 rounded-xl overflow-hidden h-32">
              <img 
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&q=80" 
                alt="Finanzdistrikt bei Nacht – IT-Projekte für Versicherungen und Finance"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <!-- Automotive -->
          <div class="card-hover group">
            <div class="flex items-start gap-4 mb-4">
              <div class="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0 
                          group-hover:scale-110 transition-transform">
                <Icon name="heroicons:truck" class="w-7 h-7 text-primary-600" />
              </div>
              <div>
                <span class="text-xs text-primary-600 font-semibold uppercase tracking-wide">Automobil & Logistik</span>
                <h3 class="text-xl font-display font-bold text-dark-800">Global tätiger Automobilkonzern</h3>
              </div>
            </div>
            <p class="text-dark-500 leading-relaxed">
              Integration von PM-Verfahren in den Hoshin Kanri Prozess zur kontinuierlichen 
              Prozessverbesserung. Prozess- und technische Beratung, Datenmodell-Erstellung, 
              Customizing der Dialoge und Berichte, Coaching in der Anwendung.
            </p>
            <div class="mt-4 rounded-xl overflow-hidden h-32">
              <img 
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&q=80" 
                alt="Moderne Fahrzeugproduktion – IT-Lösungen für die Automobilindustrie"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <!-- NGO -->
          <div class="card-hover group">
            <div class="flex items-start gap-4 mb-4">
              <div class="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0 
                          group-hover:scale-110 transition-transform">
                <Icon name="heroicons:globe-europe-africa" class="w-7 h-7 text-green-600" />
              </div>
              <div>
                <span class="text-xs text-green-600 font-semibold uppercase tracking-wide">Hilfsorganisation</span>
                <h3 class="text-xl font-display font-bold text-dark-800">Internationale Umweltorganisation</h3>
              </div>
            </div>
            <p class="text-dark-500 leading-relaxed">
              PM-Lösung zum Monitoring weltweit laufender Projekte. Entwurf und Implementierung 
              von Projektfreigabe-Prozessen und Cockpit zur Überwachung von Terminen und Budgets.
            </p>
            <div class="mt-4 rounded-xl overflow-hidden h-32">
              <img 
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80" 
                alt="Naturschutz und Umwelt – IT-Projekte für internationale NGOs"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <p class="text-dark-500 text-lg">
            <Icon name="heroicons:information-circle" class="w-5 h-5 inline mr-2 text-primary-600" />
            Weitere Referenzen und detaillierte Projektbeschreibungen erhalten Sie auf Anfrage.
          </p>
        </div>
      </div>
    </section>

    <!-- Weitere PM-Projekte (Auszug) Section -->
    <section class="py-24 bg-dark-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <span class="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-4 block">
            Projektmanagement-Erfahrung
          </span>
          <h2 class="section-title mb-4">
            Weitere PM-Projekte (Auszug)
          </h2>
          <p class="section-subtitle mx-auto">
            Implementierung und Customizing von PM-Lösungen für namhafte Unternehmen verschiedener Branchen.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <!-- Industrieautomation -->
          <div class="bg-white rounded-xl p-6 shadow-soft border border-dark-100 hover:shadow-md transition-shadow">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                <Icon name="heroicons:cog-6-tooth" class="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <span class="font-semibold text-dark-800">Industrieautomation (Mittelstand)</span>
                <p class="text-xs text-dark-400">Industrie / Automatisierung</p>
              </div>
            </div>
            <p class="text-dark-500 text-sm mb-3">Einsatz als Multiprojektmanagementsystem. Customizing und Implementierung des Datenmodells, der Oberflächen, Abläufe und Schnittstellen.</p>
            <div class="flex flex-wrap gap-2">
              <span class="text-xs bg-dark-100 text-dark-600 px-2 py-1 rounded">Multiprojektmanagement</span>
              <span class="text-xs bg-dark-100 text-dark-600 px-2 py-1 rounded">Customizing</span>
            </div>
          </div>

          <!-- Medizintechnik -->
          <div class="bg-white rounded-xl p-6 shadow-soft border border-dark-100 hover:shadow-md transition-shadow">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 rounded-lg bg-accent-100 flex items-center justify-center">
                <Icon name="heroicons:heart" class="w-5 h-5 text-accent-600" />
              </div>
              <div>
                <span class="font-semibold text-dark-800">Medizintechnik-Unternehmen</span>
                <p class="text-xs text-dark-400">Medizintechnik</p>
              </div>
            </div>
            <p class="text-dark-500 text-sm mb-3">Langjähriger Einsatz der PM-Lösung. Im Rahmen eines Upgrades: Fehlerdiagnose und -behebung komplexer technischer Probleme.</p>
            <div class="flex flex-wrap gap-2">
              <span class="text-xs bg-dark-100 text-dark-600 px-2 py-1 rounded">Fehlerdiagnose</span>
              <span class="text-xs bg-dark-100 text-dark-600 px-2 py-1 rounded">Upgrade</span>
            </div>
          </div>

          <!-- Telekommunikation -->
          <div class="bg-white rounded-xl p-6 shadow-soft border border-dark-100 hover:shadow-md transition-shadow">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                <Icon name="heroicons:signal" class="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <span class="font-semibold text-dark-800">Großer Telekommunikationsanbieter</span>
                <p class="text-xs text-dark-400">Telekommunikation / Internet</p>
              </div>
            </div>
            <p class="text-dark-500 text-sm mb-3">PM-Lösung für Planung und Kontrolle von Einzelprojekten. Customizing von Dialogen und Abläufen, Entwurf und Implementierung der SAP-Schnittstelle.</p>
            <div class="flex flex-wrap gap-2">
              <span class="text-xs bg-dark-100 text-dark-600 px-2 py-1 rounded">SAP-Schnittstelle</span>
              <span class="text-xs bg-dark-100 text-dark-600 px-2 py-1 rounded">Customizing</span>
            </div>
          </div>

          <!-- Mess- & Regeltechnik -->
          <div class="bg-white rounded-xl p-6 shadow-soft border border-dark-100 hover:shadow-md transition-shadow">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 rounded-lg bg-accent-100 flex items-center justify-center">
                <Icon name="heroicons:chart-bar" class="w-5 h-5 text-accent-600" />
              </div>
              <div>
                <span class="font-semibold text-dark-800">Mess- & Regeltechnik (Frankfurt)</span>
                <p class="text-xs text-dark-400">Mess- & Regeltechnik</p>
              </div>
            </div>
            <p class="text-dark-500 text-sm mb-3">Modernste integrierte Automatisierungssysteme – von Heiz- und Klimatechnik bis Großchemie. Customizing, Fehlerdiagnose und Support.</p>
            <div class="flex flex-wrap gap-2">
              <span class="text-xs bg-dark-100 text-dark-600 px-2 py-1 rounded">Automatisierungssysteme</span>
              <span class="text-xs bg-dark-100 text-dark-600 px-2 py-1 rounded">Support</span>
            </div>
          </div>

          <!-- Energieversorger -->
          <div class="bg-white rounded-xl p-6 shadow-soft border border-dark-100 hover:shadow-md transition-shadow">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                <Icon name="heroicons:bolt" class="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <span class="font-semibold text-dark-800">Kommunaler Energieversorger</span>
                <p class="text-xs text-dark-400">Energieversorgung</p>
              </div>
            </div>
            <p class="text-dark-500 text-sm mb-3">PM-Software für einen der größten kommunalen Energieversorger. Fehlerdiagnose und -behebung von technischen Störungen.</p>
            <div class="flex flex-wrap gap-2">
              <span class="text-xs bg-dark-100 text-dark-600 px-2 py-1 rounded">Fehlerdiagnose</span>
              <span class="text-xs bg-dark-100 text-dark-600 px-2 py-1 rounded">Support</span>
            </div>
          </div>

          <!-- Weitere Projekte -->
          <div class="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6 shadow-soft border border-primary-200 hover:shadow-md transition-shadow">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                <Icon name="heroicons:plus-circle" class="w-5 h-5 text-primary-600" />
              </div>
              <span class="font-semibold text-dark-800">Weitere Projekte</span>
            </div>
            <p class="text-dark-500 text-sm mb-4">Detaillierte Projektbeschreibungen auf Anfrage verfügbar.</p>
            <NuxtLink to="/kontakt" class="text-primary-600 font-medium text-sm hover:text-primary-700 inline-flex items-center gap-1">
              Kontakt aufnehmen →
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== WEBSEITEN-REFERENZEN SECTION ========== -->
    <section class="py-24 bg-dark-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <span class="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-4 block">
            Webseiten-Portfolio
          </span>
          <h2 class="section-title mb-4">
            Webseiten-Referenzen
          </h2>
          <p class="section-subtitle mx-auto">
            Professionelle Webseiten, E-Commerce-Lösungen und Portale aus unserem Portfolio – 
            schnell, performant und DSGVO-konform.
          </p>
        </div>

        <!-- Websites (Corporate) -->
        <div class="mb-16">
          <h3 class="text-2xl font-display font-bold text-dark-800 mb-8 text-center">
            <Icon name="heroicons:building-office" class="w-6 h-6 inline mr-2 text-primary-600" />
            Websites (Corporate)
          </h3>
          <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <WebReferenceCard 
              v-for="ref in corporateWebsites" 
              :key="ref.slug"
              v-bind="ref"
            />
          </div>
        </div>

        <!-- E-Commerce / Shop-Systeme -->
        <div class="mb-16">
          <h3 class="text-2xl font-display font-bold text-dark-800 mb-8 text-center">
            <Icon name="heroicons:shopping-cart" class="w-6 h-6 inline mr-2 text-primary-600" />
            E-Commerce / Shop-Systeme
          </h3>
          <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <WebReferenceCard 
              v-for="ref in ecommerceShops" 
              :key="ref.slug"
              v-bind="ref"
            />
          </div>
        </div>

        <!-- Portale / QR Ordering / Partner -->
        <div>
          <h3 class="text-2xl font-display font-bold text-dark-800 mb-8 text-center">
            <Icon name="heroicons:qr-code" class="w-6 h-6 inline mr-2 text-primary-600" />
            Portale / QR Ordering / Partner
          </h3>
          <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <WebReferenceCard 
              v-for="ref in portals" 
              :key="ref.slug"
              v-bind="ref"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Trust Elements -->
    <section class="py-24 bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <span class="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-4 block">
            Qualifikationen
          </span>
          <h2 class="section-title mb-4">
            Qualifikationen, die Vertrauen schaffen
          </h2>
        </div>

        <div class="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div class="card text-center">
            <div class="w-16 h-16 rounded-xl bg-primary-600 flex items-center justify-center mx-auto mb-4">
              <Icon name="heroicons:academic-cap" class="w-8 h-8 text-white" />
            </div>
            <h3 class="font-display font-bold text-dark-800 mb-2">Dipl.-Inf. (FH)</h3>
            <p class="text-dark-500 text-sm">RheinMain University of Applied Sciences</p>
          </div>

          <div class="card text-center">
            <div class="w-16 h-16 rounded-xl bg-accent-600 flex items-center justify-center mx-auto mb-4">
              <Icon name="heroicons:clipboard-document-check" class="w-8 h-8 text-white" />
            </div>
            <h3 class="font-display font-bold text-dark-800 mb-2">PRINCE2</h3>
            <p class="text-dark-500 text-sm">Zertifiziertes Projektmanagement</p>
          </div>

          <div class="card text-center">
            <div class="w-16 h-16 rounded-xl bg-primary-600 flex items-center justify-center mx-auto mb-4">
              <Icon name="heroicons:cog-6-tooth" class="w-8 h-8 text-white" />
            </div>
            <h3 class="font-display font-bold text-dark-800 mb-2">ITIL</h3>
            <p class="text-dark-500 text-sm">IT Service Management Best Practices</p>
          </div>

          <div class="card text-center">
            <div class="w-16 h-16 rounded-xl bg-accent-600 flex items-center justify-center mx-auto mb-4">
              <Icon name="heroicons:shield-check" class="w-8 h-8 text-white" />
            </div>
            <h3 class="font-display font-bold text-dark-800 mb-2">SÜ2</h3>
            <p class="text-dark-500 text-sm">Sicherheitsüberprüfung</p>
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
            Ihr nächstes Projekt – in guten Händen
          </h2>
          <p class="text-xl text-white/80 mb-10">
            Lassen Sie uns über Ihre Anforderungen sprechen. 
            Kontaktieren Sie uns für ein unverbindliches Gespräch.
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

<script setup lang="ts">
// Types
interface WebReference {
  title: string
  description: string
  url: string
  tags: string[]
  slug: string
  note?: string
  group?: string
}

// SEO
const siteUrl = 'https://ic-resulting.de'
const pageUrl = `${siteUrl}/referenzen`
const pageTitle = 'IT-Projekte & Webseiten-Referenzen Wiesbaden | Portfolio – IC-RESULTING'
const pageDescription = 'IT-Projekte, Webseiten & E-Commerce-Referenzen aus Wiesbaden: Behörden, Industrie, Luftfahrt. Professionelle IT-Lösungen für den DACH-Raum.'

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

// References Data
const corporateWebsites: WebReference[] = [
  {
    title: 'BahnMotors (Automotive)',
    description: 'Moderne Automotive-Website mit schnell ladenden, großformatigen Bildern und strukturierter Bestands-/Fahrzeugdarstellung. Fokus auf UX, Performance und pflegbare Inhalte.',
    url: 'https://bahnmotors.be/',
    slug: 'bahnmotors',
    tags: ['Website', 'Performance', 'UX', 'Automotive'],
    group: 'corporate'
  },
  {
    title: 'Avanorth (Construction)',
    description: 'Corporate Website für ein Bauunternehmen (FR/EN) mit imposanter Startseite, klarer Informationsarchitektur und wartbaren Inhaltsseiten für Projekte/Referenzen. Fokus auf Performance und Struktur.',
    url: 'https://avanorth.ca/fr',
    slug: 'avanorth',
    tags: ['Corporate', 'i18n', 'Performance', 'Bau/Industrie'],
    group: 'corporate'
  }
]

const ecommerceShops: WebReference[] = [
  {
    title: 'QuattroShopping',
    description: 'E-Commerce Website mit Produktkatalog, klarer Navigation und responsivem Layout. Fokus auf Performance, UX und skalierbare Weiterentwicklung.',
    url: 'https://quattroshopping.com/en',
    slug: 'quattroshopping',
    tags: ['E-Commerce', 'UX', 'Performance', 'Shop'],
    group: 'ecommerce'
  },
  {
    title: 'UPSHOP',
    description: 'Modulares Shop- und Warenwirtschaftssystem: Produktkatalog, Kategorien, Kundenbereiche und Bestandsverwaltung. Von der Artikelpflege bis zur Shop-Ausspielung – inklusive Branchen-Use-Cases (z. B. Textil) und optional KI-gestützter Produktdarstellung.',
    url: 'https://shop.emanet.in/',
    slug: 'shopemanet',
    tags: ['E-Commerce', 'Shop-System', 'Warenwirtschaft', 'KI-Content'],
    group: 'ecommerce'
  }
]

const portals: WebReference[] = [
  {
    title: 'QR-Menü & Bestellportal (Restaurant)',
    description: 'QR-Menü & Bestellportal: Restaurants können nach Registrierung/Login direkt per Tablet starten; Gäste scannen den QR-Code, sehen das Menü mobil und bestellen direkt. Pflege von Menü/Kategorien/Artikeln/Preisen/Verfügbarkeit erfolgt im Portal (ohne Admin-Screenshots).',
    url: 'https://qr.emanet.in/kahve-yolu',
    slug: 'qremanet',
    tags: ['Portal', 'QR Ordering', 'Gastro', 'UX'],
    group: 'portal'
  },
  {
    title: 'Upcreate (Partner)',
    description: 'Creative Partner für Grafikdesign, Websites/Software, Digital Content und Advertisement Films. Gemeinsam arbeiten wir außerdem an KI-Portalen (SaaS) für Bildverarbeitung (high-level).',
    url: 'https://upcreate.art/en',
    slug: 'upcreate',
    tags: ['Partner', 'Design', 'Content', 'Film', 'SaaS'],
    group: 'portal'
  }
]
</script>
