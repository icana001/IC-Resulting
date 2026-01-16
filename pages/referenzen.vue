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
            Projekterfahrung – ausgewählte Referenzen
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
          <p class="text-lg text-dark-600 leading-relaxed">
            IC-RESULTING hat in den vergangenen Jahren zahlreiche IT-Projekte in verschiedenen 
            Branchen erfolgreich umgesetzt. Wir arbeiten nicht mit Konzeptpapieren, die in Schubladen 
            verstauben – unsere Projekte werden umgesetzt, stabilisiert und in den Betrieb überführt. 
            <strong class="text-dark-800">Detaillierte Projektbeschreibungen und weitere Referenzen erhalten Sie auf Anfrage.</strong>
          </p>
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
          <!-- ITZBund -->
          <div class="card-hover group">
            <div class="flex items-start gap-4 mb-4">
              <div class="w-14 h-14 rounded-xl bg-white border border-dark-200 flex items-center justify-center flex-shrink-0 
                          group-hover:scale-110 transition-transform overflow-hidden p-2">
                <img 
                  src="https://logo.clearbit.com/itzbund.de" 
                  alt="ITZBund Logo"
                  class="w-full h-full object-contain"
                  onerror="this.onerror=null; this.parentElement.innerHTML='<span class=\'text-xs font-bold text-primary-600\'>ITZ</span>';"
                />
              </div>
              <div>
                <span class="text-xs text-primary-600 font-semibold uppercase tracking-wide">Behördenumfeld</span>
                <h3 class="text-xl font-display font-bold text-dark-800">ITZBund – Projekt G2X</h3>
              </div>
            </div>
            <p class="text-dark-500 leading-relaxed">
              IT-Projektleitung und Dienstekonsolidierung im Behördenumfeld (SÜ2-zertifiziert). 
              Komplexe Digitalisierungsprojekte für die 
              öffentliche Verwaltung.
            </p>
            <!-- Referenz Bild -->
            <div class="mt-4 rounded-xl overflow-hidden h-32">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80" 
                alt="Modernes Verwaltungsgebäude – IT-Projekte für Behörden und öffentliche Verwaltung"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <!-- Lufthansa / LuxairTours -->
          <div class="card-hover group">
            <div class="flex items-start gap-4 mb-4">
              <div class="w-14 h-14 rounded-xl bg-white border border-dark-200 flex items-center justify-center flex-shrink-0 
                          group-hover:scale-110 transition-transform overflow-hidden p-2">
                <img 
                  src="https://logo.clearbit.com/luxairtours.lu" 
                  alt="LuxairTours Logo"
                  class="w-full h-full object-contain"
                  onerror="this.onerror=null; this.parentElement.innerHTML='<span class=\'text-xs font-bold text-accent-600\'>LXT</span>';"
                />
              </div>
              <div>
                <span class="text-xs text-accent-600 font-semibold uppercase tracking-wide">Luftfahrt & Reise</span>
                <h3 class="text-xl font-display font-bold text-dark-800">Lufthansa, LuxairTours</h3>
              </div>
            </div>
            <p class="text-dark-500 leading-relaxed">
              Buchungssysteme und Backend-Integrationen für Airlines und Reiseveranstalter. Entwicklung und 
              Integration von Kundenportalen für 
              führende Unternehmen der Branche.
            </p>
            <!-- Referenz Bild -->
            <div class="mt-4 rounded-xl overflow-hidden h-32">
              <img 
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&q=80" 
                alt="Flugzeug am Himmel – IT-Lösungen für die Luftfahrtbranche"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <!-- Bosch Thermotechnik -->
          <div class="card-hover group">
            <div class="flex items-start gap-4 mb-4">
              <div class="w-14 h-14 rounded-xl bg-white border border-dark-200 flex items-center justify-center flex-shrink-0 
                          group-hover:scale-110 transition-transform overflow-hidden p-2">
                <img 
                  src="https://logo.clearbit.com/bosch.com" 
                  alt="Bosch Logo"
                  class="w-full h-full object-contain"
                  onerror="this.onerror=null; this.parentElement.innerHTML='<span class=\'text-xs font-bold text-primary-600\'>BOSCH</span>';"
                />
              </div>
              <div>
                <span class="text-xs text-primary-600 font-semibold uppercase tracking-wide">Industrie & Mittelstand</span>
                <h3 class="text-xl font-display font-bold text-dark-800">Bosch Thermotechnik</h3>
              </div>
            </div>
            <p class="text-dark-500 leading-relaxed">
              IT-Projektleitung und Softwareentwicklung für einen der führenden Hersteller 
              in der Heizungs- und Klimatechnik. Integration von Systemen und Prozessoptimierung 
              im industriellen Umfeld.
            </p>
            <!-- Referenz Bild -->
            <div class="mt-4 rounded-xl overflow-hidden h-32">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80" 
                alt="Industrielle Fertigung – IT-Lösungen für Industrie und Mittelstand"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <!-- Hannover RE -->
          <div class="card-hover group">
            <div class="flex items-start gap-4 mb-4">
              <div class="w-14 h-14 rounded-xl bg-white border border-dark-200 flex items-center justify-center flex-shrink-0 
                          group-hover:scale-110 transition-transform overflow-hidden p-2">
                <img 
                  src="https://logo.clearbit.com/hannover-re.com" 
                  alt="Hannover RE Logo"
                  class="w-full h-full object-contain"
                  onerror="this.onerror=null; this.parentElement.innerHTML='<span class=\'text-xs font-bold text-accent-600\'>H RE</span>';"
                />
              </div>
              <div>
                <span class="text-xs text-accent-600 font-semibold uppercase tracking-wide">Versicherung & Finance</span>
                <h3 class="text-xl font-display font-bold text-dark-800">Hannover RE</h3>
              </div>
            </div>
            <p class="text-dark-500 leading-relaxed">
              Implementierung eines feingliedrigen Freigabeprozesses für Projekte, Change Management 
              während Freigabeprozess und Projektarbeit. Überwachung von Timing und Kosten auf 
              Projekt-, Portfolio- und Unternehmensebene. Technische Konfiguration nach höchsten 
              internen IT-Anforderungen.
            </p>
            <!-- Referenz Bild -->
            <div class="mt-4 rounded-xl overflow-hidden h-32">
              <img 
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&q=80" 
                alt="Finanzdistrikt bei Nacht – IT-Projekte für Versicherungen und Finance"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <!-- Toyota Material Handling -->
          <div class="card-hover group">
            <div class="flex items-start gap-4 mb-4">
              <div class="w-14 h-14 rounded-xl bg-white border border-dark-200 flex items-center justify-center flex-shrink-0 
                          group-hover:scale-110 transition-transform overflow-hidden p-2">
                <img 
                  src="https://logo.clearbit.com/toyota-forklifts.eu" 
                  alt="Toyota Material Handling Logo"
                  class="w-full h-full object-contain"
                  onerror="this.onerror=null; this.parentElement.innerHTML='<span class=\'text-xs font-bold text-primary-600\'>TMH</span>';"
                />
              </div>
              <div>
                <span class="text-xs text-primary-600 font-semibold uppercase tracking-wide">Automotive & Industrie</span>
                <h3 class="text-xl font-display font-bold text-dark-800">Toyota Material Handling, Brüssel</h3>
              </div>
            </div>
            <p class="text-dark-500 leading-relaxed">
              Integration von PM-Verfahren in den Hoshin Kanri Prozess zur kontinuierlichen 
              Prozessverbesserung. Prozess- und technische Beratung, Datenmodell-Erstellung, 
              Customizing der Dialoge und Berichte, Coaching in der Anwendung.
            </p>
            <!-- Referenz Bild -->
            <div class="mt-4 rounded-xl overflow-hidden h-32">
              <img 
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&q=80" 
                alt="Moderne Fahrzeugproduktion – IT-Lösungen für die Automobilindustrie"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <!-- WWF -->
          <div class="card-hover group">
            <div class="flex items-start gap-4 mb-4">
              <div class="w-14 h-14 rounded-xl bg-white border border-dark-200 flex items-center justify-center flex-shrink-0 
                          group-hover:scale-110 transition-transform overflow-hidden p-2">
                <img 
                  src="https://logo.clearbit.com/wwf.de" 
                  alt="WWF Logo"
                  class="w-full h-full object-contain"
                  onerror="this.onerror=null; this.parentElement.innerHTML='<span class=\'text-xs font-bold text-green-600\'>WWF</span>';"
                />
              </div>
              <div>
                <span class="text-xs text-green-600 font-semibold uppercase tracking-wide">NGO / International</span>
                <h3 class="text-xl font-display font-bold text-dark-800">WWF Deutschland / Schweiz</h3>
              </div>
            </div>
            <p class="text-dark-500 leading-relaxed">
              PM-Lösung zum Monitoring weltweit laufender Projekte. Entwurf und Implementierung 
              von Projektfreigabe-Prozessen und Cockpit zur Überwachung von Terminen und Budgets. 
              Herausforderungen durch Internationalität, sprachliche und methodische Anforderungen.
            </p>
            <!-- Referenz Bild -->
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

        <!-- Weitere Referenzen Hinweis -->
        <div class="text-center mt-12">
          <p class="text-dark-500 text-lg">
            <Icon name="heroicons:information-circle" class="w-5 h-5 inline mr-2 text-primary-600" />
            Weitere Referenzen und detaillierte Projektbeschreibungen erhalten Sie auf Anfrage.
          </p>
        </div>
      </div>
    </section>

    <!-- Weitere PM-Projekte Section -->
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
            Implementierung und Customizing von PM-Lösungen für namhafte Unternehmen 
            verschiedener Branchen.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <!-- Bürkert -->
          <div class="bg-white rounded-2xl p-6 shadow-soft">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                <Icon name="heroicons:cog-6-tooth" class="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 class="font-display font-bold text-dark-800">Bürkert GmbH & Co. KG</h3>
                <span class="text-xs text-dark-400">Industrie / Automatisierung</span>
              </div>
            </div>
            <p class="text-dark-500 text-sm leading-relaxed mb-4">
              Einsatz als Multiprojektmanagementsystem. Customizing und Implementierung des 
              Datenmodells, der Oberflächen, Abläufe und Schnittstellen.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="text-xs px-2 py-1 bg-dark-100 text-dark-600 rounded">Multiprojektmanagement</span>
              <span class="text-xs px-2 py-1 bg-dark-100 text-dark-600 rounded">Customizing</span>
            </div>
          </div>

          <!-- Biotronik -->
          <div class="bg-white rounded-2xl p-6 shadow-soft">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center">
                <Icon name="heroicons:heart" class="w-6 h-6 text-accent-600" />
              </div>
              <div>
                <h3 class="font-display font-bold text-dark-800">Biotronik SE</h3>
                <span class="text-xs text-dark-400">Medizintechnik</span>
              </div>
            </div>
            <p class="text-dark-500 text-sm leading-relaxed mb-4">
              Langjähriger Einsatz der PM-Lösung. Im Rahmen eines Upgrades: Fehlerdiagnose 
              und -behebung komplexer technischer Probleme.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="text-xs px-2 py-1 bg-dark-100 text-dark-600 rounded">Fehlerdiagnose</span>
              <span class="text-xs px-2 py-1 bg-dark-100 text-dark-600 rounded">Upgrade</span>
            </div>
          </div>

          <!-- 1&1 -->
          <div class="bg-white rounded-2xl p-6 shadow-soft">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                <Icon name="heroicons:globe-alt" class="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 class="font-display font-bold text-dark-800">1&1 Internet AG</h3>
                <span class="text-xs text-dark-400">Telekommunikation / Internet</span>
              </div>
            </div>
            <p class="text-dark-500 text-sm leading-relaxed mb-4">
              PM-Lösung für Planung und Kontrolle von Einzelprojekten. Customizing von 
              Dialogen und Abläufen, Entwurf und Implementierung der SAP-Schnittstelle.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="text-xs px-2 py-1 bg-dark-100 text-dark-600 rounded">SAP-Schnittstelle</span>
              <span class="text-xs px-2 py-1 bg-dark-100 text-dark-600 rounded">Customizing</span>
            </div>
          </div>

          <!-- Samson AG -->
          <div class="bg-white rounded-2xl p-6 shadow-soft">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center">
                <Icon name="heroicons:wrench-screwdriver" class="w-6 h-6 text-accent-600" />
              </div>
              <div>
                <h3 class="font-display font-bold text-dark-800">Samson AG</h3>
                <span class="text-xs text-dark-400">Mess- & Regeltechnik, Frankfurt</span>
              </div>
            </div>
            <p class="text-dark-500 text-sm leading-relaxed mb-4">
              Modernste integrierte Automationssysteme – von Heiz- und Klimatechnik bis 
              Großchemie. Customizing, Fehlerdiagnose und Support.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="text-xs px-2 py-1 bg-dark-100 text-dark-600 rounded">Automationssysteme</span>
              <span class="text-xs px-2 py-1 bg-dark-100 text-dark-600 rounded">Support</span>
            </div>
          </div>

          <!-- SWM Stadtwerke München -->
          <div class="bg-white rounded-2xl p-6 shadow-soft">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                <Icon name="heroicons:bolt" class="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 class="font-display font-bold text-dark-800">SWM Stadtwerke München</h3>
                <span class="text-xs text-dark-400">Energieversorger</span>
              </div>
            </div>
            <p class="text-dark-500 text-sm leading-relaxed mb-4">
              PM-Software für einen der größten kommunalen Energieversorger. Fehlerdiagnose 
              und -behebung von technischen Störungen.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="text-xs px-2 py-1 bg-dark-100 text-dark-600 rounded">Fehlerdiagnose</span>
              <span class="text-xs px-2 py-1 bg-dark-100 text-dark-600 rounded">Support</span>
            </div>
          </div>

          <!-- Weitere auf Anfrage -->
          <div class="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6 border border-primary-200 flex flex-col justify-center items-center text-center">
            <Icon name="heroicons:plus-circle" class="w-12 h-12 text-primary-600 mb-4" />
            <h3 class="font-display font-bold text-dark-800 mb-2">Weitere Projekte</h3>
            <p class="text-dark-500 text-sm mb-4">
              Detaillierte Projektbeschreibungen auf Anfrage verfügbar.
            </p>
            <NuxtLink to="/kontakt" class="text-primary-600 font-semibold text-sm hover:text-primary-700">
              Kontakt aufnehmen →
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Webseiten Showcase -->
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
            Professionelle Webseiten, die wir für unsere Kunden entwickelt haben – 
            schnell, performant und DSGVO-konform.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <!-- bahnmotors.be -->
          <a 
            href="https://bahnmotors.be/" 
            target="_blank" 
            rel="noopener noreferrer"
            class="card-hover group block"
          >
            <div class="aspect-video rounded-xl mb-4 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&q=80" 
                alt="Automotive Webseite bahnmotors.be – Fahrzeug- und Motorenhandel in Belgien"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <h3 class="font-display font-bold text-lg text-dark-800 mb-2 group-hover:text-primary-600 transition-colors">
              bahnmotors.be
              <Icon name="heroicons:arrow-top-right-on-square" class="w-4 h-4 inline ml-1" />
            </h3>
            <p class="text-dark-500 text-sm">
              Automotive-Webseite für den belgischen Markt
            </p>
          </a>

          <!-- avanorth.ca -->
          <a 
            href="https://avanorth.ca/fr" 
            target="_blank" 
            rel="noopener noreferrer"
            class="card-hover group block"
          >
            <div class="aspect-video rounded-xl mb-4 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80" 
                alt="Unternehmenswebseite avanorth.ca – Kanadisches Unternehmen mit Berglandschaft"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <h3 class="font-display font-bold text-lg text-dark-800 mb-2 group-hover:text-primary-600 transition-colors">
              avanorth.ca
              <Icon name="heroicons:arrow-top-right-on-square" class="w-4 h-4 inline ml-1" />
            </h3>
            <p class="text-dark-500 text-sm">
              Mehrsprachige Unternehmenswebseite für Kanada
            </p>
          </a>

          <!-- quattroshopping.com -->
          <a 
            href="https://quattroshopping.com/en" 
            target="_blank" 
            rel="noopener noreferrer"
            class="card-hover group block"
          >
            <div class="aspect-video rounded-xl mb-4 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&q=80" 
                alt="E-Commerce Webseite quattroshopping.com – Online-Shopping Plattform"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <h3 class="font-display font-bold text-lg text-dark-800 mb-2 group-hover:text-primary-600 transition-colors">
              quattroshopping.com
              <Icon name="heroicons:arrow-top-right-on-square" class="w-4 h-4 inline ml-1" />
            </h3>
            <p class="text-dark-500 text-sm">
              E-Commerce Plattform mit mehrsprachigem Content
            </p>
          </a>
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
  title: 'Projekterfahrung: ITZBund, Hannover RE, Bosch – IC-RESULTING',
  description: 'IT-Projekte für Behörden, Luftfahrt, Industrie und Finance. Referenzen: ITZBund G2X, Lufthansa, Toyota, WWF. Weitere auf Anfrage.'
})
</script>
