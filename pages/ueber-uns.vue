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
            Resulting statt Beratung – Verantwortung übernehmen, Ergebnisse liefern
          </h1>
          
          <p class="section-subtitle mx-auto">
            Wir übernehmen Ihre IT-Verantwortung – mit klarer Zuständigkeit 
            und nachweisbaren Ergebnissen.
          </p>
        </div>
      </div>
    </section>

    <!-- Founder-Profil Section -->
    <section class="py-24 bg-white">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Profilbild -->
          <div class="relative order-2 lg:order-1">
            <div class="rounded-3xl overflow-hidden aspect-square shadow-xl max-w-md mx-auto">
              <!-- HINWEIS: Bild später durch /images/ibrahim-canakci-portrait.webp ersetzen -->
              <img 
                :src="founderImage" 
                alt="Dipl.-Inf.(FH) Ibrahim Canakci – IT-Projektleiter und Software-Unternehmer"
                class="w-full h-full object-cover object-top"
                loading="lazy"
                width="500"
                height="500"
                @error="handleImageError"
              />
            </div>
            
            <!-- Floating Badge -->
            <div class="absolute -bottom-6 -right-6 lg:-right-6 bg-white rounded-2xl shadow-xl p-6">
              <div class="text-xl font-bold text-primary-600 mb-1">Dipl.-Inf. (FH)</div>
              <div class="text-sm text-dark-500">RheinMain University</div>
            </div>

            <!-- Floating Certification Badge -->
            <div class="absolute -top-4 -left-4 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl shadow-xl p-4 text-white">
              <Icon name="heroicons:shield-check" class="w-8 h-8" />
            </div>
          </div>

          <!-- Bio Content -->
          <div class="order-1 lg:order-2">
            <span class="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-4 block">
              Gründer & Geschäftsführer
            </span>
            <h2 class="text-3xl md:text-4xl font-display font-bold text-dark-800 mb-2">
              Dipl.-Inf.(FH) Ibrahim Canakci
            </h2>
            <p class="text-lg text-primary-600 font-medium mb-6">
              IT-Projektleiter & Software-Unternehmer
            </p>
            
            <!-- Bio Medium -->
            <div class="space-y-4 text-dark-500 text-lg leading-relaxed mb-8">
              <p>
                <strong class="text-dark-800">„Resulting statt Beratung"</strong> – unter diesem Leitgedanken 
                verbindet Ibrahim Canakci strategische IT-Projektleitung mit technischer Umsetzung und 
                nachhaltigem Betrieb. Als Diplom-Informatiker (FH Wiesbaden, heute Hochschule RheinMain) 
                bringt er langjährige Erfahrung in der Planung, Steuerung und Umsetzung komplexer IT-Vorhaben mit.
              </p>
              <p>
                Sein Fokus liegt auf der Übernahme von IT-Verantwortung: Von Architekturentscheidungen über 
                Teamaufbau bis zur Stabilisierung von Betrieb und Services. Ein besonderer Schwerpunkt ist die 
                DSGVO-konforme Umsetzung, Security-by-Design und KI-gestützte Prozessautomatisierung.
              </p>
              <p>
                Neben der Projektarbeit engagiert sich Herr Canakci für Wissenstransfer und Enablement – 
                durch interne Schulungen und Mitarbeiterweiterbildung. Seine KI-Expertise unterstrich er 
                unter anderem durch einen Gastvortrag zu „AI & Creativity" an der Atatürk University in Erzurum.
              </p>
            </div>

            <!-- Bullet Highlights -->
            <div class="bg-dark-50 rounded-2xl p-6 mb-8">
              <h3 class="font-display font-bold text-dark-800 mb-4 flex items-center gap-2">
                <Icon name="heroicons:check-badge" class="w-6 h-6 text-primary-600" />
                Was Sie erwarten können
              </h3>
              <ul class="space-y-3">
                <li v-for="highlight in founderHighlights" :key="highlight" class="flex items-start gap-3">
                  <Icon name="heroicons:check-circle" class="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span class="text-dark-600">{{ highlight }}</span>
                </li>
              </ul>
            </div>

            <!-- Verantwortung Absatz -->
            <div class="bg-white rounded-2xl p-6 mb-8 border border-dark-100 shadow-soft">
              <h4 class="font-display font-bold text-dark-800 mb-3">Verantwortung statt Beratungshonorar</h4>
              <p class="text-dark-600 leading-relaxed">
                Bei IC-RESULTING zahlen Sie nicht für Konzeptpapiere oder Beraterstunden ohne Output. 
                Sie erhalten einen Partner, der Verantwortung übernimmt: Für Projekte, die termingerecht 
                abgeschlossen werden. Für Software, die stabil läuft. Für Prozesse, die funktionieren. 
                Ein Ansprechpartner – von der Anforderung bis zum Betrieb.
              </p>
            </div>

            <!-- CTA Microcopy -->
            <div class="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-6 border border-primary-100">
              <p class="text-dark-700 mb-4">
                <strong class="text-dark-800">Reden Sie mit uns – unverbindlich und konkret.</strong> 
                Wir freuen uns auf ein Gespräch mit Ihnen. Kontaktieren Sie uns für eine unverbindliche Beratung.
              </p>
              <NuxtLink to="/kontakt" class="btn-primary inline-flex">
                <Icon name="heroicons:chat-bubble-left-right" class="w-5 h-5 mr-2" />
                Kontakt aufnehmen
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Ausführliches Profil (Long Bio) -->
    <section class="py-24 bg-dark-50">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <span class="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-4 block">
              Ausführliches Profil
            </span>
            <h2 class="section-title mb-4">
              Erfahrung & Expertise
            </h2>
          </div>

          <div class="bg-white rounded-3xl shadow-soft p-8 md:p-12">
            <div class="prose prose-lg max-w-none text-dark-500">
              <p>
                <strong class="text-dark-800">Dipl.-Inf.(FH) Ibrahim Canakci</strong> ist IT-Projektleiter 
                und IT-Architekt mit Schwerpunkt auf der Planung, Steuerung und Umsetzung komplexer IT-Vorhaben. 
                Er verbindet Management-Verantwortung mit technischer Umsetzung – von Architekturentscheidungen 
                über Teamaufbau bis zur Stabilisierung von Betrieb und Services.
              </p>
              
              <p>
                Als Diplom-Informatiker mit Abschluss an der FH Wiesbaden (heute Hochschule RheinMain) verfügt 
                er über fundierte Kenntnisse in IT-Architektur und Systemintegration: REST/SOAP-Schnittstellen, 
                Datenbankdesign, N-Tier-Architekturen und Microservices. Seine Erfahrung erstreckt sich auf den 
                Aufbau und die Optimierung von IT-Service- und Geschäftsprozessen nach ITIL Best Practices, 
                einschließlich Transition, Betrieb, Monitoring und Release-Management.
              </p>

              <p>
                Ein besonderer Fokus liegt auf <strong class="text-dark-800">DevSecOps und Automatisierung</strong>: 
                CI/CD-Pipelines, Infrastructure as Code (IaC) und Security Gates sind feste Bestandteile seiner 
                Projektarbeit. Ergänzt wird dies durch DSGVO-konforme IT-Strukturen und Security-by-Design-Ansätze, 
                die von Beginn an in Architektur und Prozesse integriert werden.
              </p>

              <p>
                Im Bereich <strong class="text-dark-800">KI-gestützte Prozessautomatisierung</strong> unterstützt 
                er Unternehmen bei der Optimierung von Workflows und der Integration intelligenter Agenten. 
                Seine Expertise in diesem Bereich untermauerte er durch einen Gastvortrag zu „AI & Creativity" 
                an der Atatürk University in Erzurum (Türkei).
              </p>

              <p>
                Mit einem <strong class="text-dark-800">Single Point of Accountability</strong> in Deutschland 
                bietet er klare Verantwortungsstrukturen: Ein Ansprechpartner für Projektleitung, technische 
                Steuerung und Ergebnisverantwortung. Internationale Umsetzung erfolgt unter deutscher Steuerung 
                mit strengen DSGVO- und Security-Leitplanken.
              </p>
            </div>

            <!-- Erfahrungsfelder -->
            <div class="mt-10 pt-10 border-t border-dark-200">
              <h3 class="font-display font-bold text-dark-800 text-xl mb-6">Erfahrungsfelder</h3>
              <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div v-for="field in experienceFields" :key="field.title" 
                     class="flex items-center gap-3 p-4 bg-dark-50 rounded-xl">
                  <Icon :name="field.icon" class="w-6 h-6 text-primary-600 flex-shrink-0" />
                  <span class="font-medium text-dark-700">{{ field.title }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Karriere Timeline -->
    <section class="py-24 bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <span class="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-4 block">
            Werdegang
          </span>
          <h2 class="section-title mb-4">
            Berufliche Stationen
          </h2>
          <p class="section-subtitle mx-auto">
            Über 15 Jahre Erfahrung in IT-Projektleitung, Softwareentwicklung und Unternehmensführung.
          </p>
        </div>

        <!-- Timeline -->
        <div class="max-w-4xl mx-auto">
          <div class="relative">
            <!-- Timeline Line -->
            <div class="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary-200"></div>

            <!-- Timeline Items -->
            <div v-for="(item, index) in careerTimeline" :key="item.title" 
                 class="relative mb-12 last:mb-0">
              <div :class="[
                'md:w-1/2 pl-8 md:pl-0',
                index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'
              ]">
                <!-- Timeline Dot -->
                <div :class="[
                  'absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow',
                  item.current ? 'bg-primary-600' : 'bg-dark-300'
                ]"></div>

                <!-- Content Card -->
                <div class="card-hover">
                  <div :class="['flex items-center gap-3 mb-3', index % 2 === 0 ? 'md:justify-end' : '']">
                    <span class="text-xs font-semibold text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                      {{ item.period }}
                    </span>
                    <span v-if="item.current" class="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                      Aktuell
                    </span>
                  </div>
                  
                  <h3 class="text-lg font-display font-bold text-dark-800 mb-1">
                    {{ item.title }}
                  </h3>
                  <p class="text-primary-600 font-medium text-sm mb-2">
                    {{ item.company }}
                  </p>
                  <p class="text-dark-400 text-xs mb-3">
                    {{ item.location }}
                  </p>
                  <p class="text-dark-500 text-sm leading-relaxed">
                    {{ item.description }}
                  </p>
                  
                  <!-- Skills Tags -->
                  <div v-if="item.skills" :class="['flex flex-wrap gap-2 mt-4', index % 2 === 0 ? 'md:justify-end' : '']">
                    <span v-for="skill in item.skills" :key="skill" 
                          class="text-xs px-2 py-1 bg-dark-100 text-dark-600 rounded">
                      {{ skill }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Frühere Stationen (kompakt) -->
        <div class="mt-16 max-w-4xl mx-auto">
          <h3 class="text-xl font-display font-bold text-dark-800 mb-6 text-center">Frühere Stationen</h3>
          <div class="grid md:grid-cols-2 gap-4">
            <div v-for="item in earlierCareer" :key="item.company" 
                 class="p-4 bg-dark-50 rounded-xl flex items-start gap-4">
              <div class="w-10 h-10 rounded-lg bg-dark-200 flex items-center justify-center flex-shrink-0">
                <Icon :name="item.icon" class="w-5 h-5 text-dark-500" />
              </div>
              <div>
                <h4 class="font-semibold text-dark-800 text-sm">{{ item.title }}</h4>
                <p class="text-dark-500 text-xs">{{ item.company }} · {{ item.period }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Positionierung -->
    <section class="py-24 bg-dark-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <span class="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-4 block">
            Unsere Positionierung
          </span>
          <h2 class="section-title mb-6">
            Ihr Partner für IT-Verantwortung
          </h2>
          <p class="section-subtitle mx-auto">
            Unser Angebot richtet sich an Unternehmen, die ihre IT-Verantwortung extern abgeben 
            möchten, um sich auf ihre Kernprozesse zu konzentrieren – modular oder als Komplettlösung.
          </p>
        </div>
      </div>
    </section>

    <!-- Kurzprofil -->
    <section class="py-24 bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <span class="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-4 block">
            Kompetenzen
          </span>
          <h2 class="section-title mb-4">
            Fokusgebiete
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

    <!-- Partner & Delivery-Modell -->
    <section class="py-24 bg-dark-900 text-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <span class="text-primary-400 font-semibold text-sm tracking-wide uppercase mb-4 block">
            Delivery-Modell
          </span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Partner & Standorte
          </h2>
          <p class="text-xl text-dark-300 max-w-3xl mx-auto">
            Projektleitung in Deutschland, effizientes Delivery durch unser internationales Team – 
            unter strengen DSGVO- und Security-Leitplanken.
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-8 mb-12">
          <!-- Standorte -->
          <div class="space-y-6">
            <h3 class="text-xl font-display font-bold text-white mb-4">Standorte & Organisation</h3>
            
            <div class="p-6 bg-dark-800/50 rounded-2xl border border-dark-700">
              <div class="flex items-center gap-4 mb-3">
                <div class="w-12 h-12 rounded-xl bg-primary-600 flex items-center justify-center">
                  <Icon name="heroicons:building-office" class="w-6 h-6" />
                </div>
                <div>
                  <h4 class="font-bold text-white">Wiesbaden (Hauptsitz)</h4>
                  <p class="text-dark-400 text-sm">Projektleitung & DACH-Verantwortung</p>
                </div>
              </div>
              <p class="text-dark-300 text-sm">Single Point of Accountability, Kundenverantwortung, Projektmanagement</p>
            </div>

            <div class="p-6 bg-dark-800/50 rounded-2xl border border-dark-700">
              <div class="flex items-center gap-4 mb-3">
                <div class="w-12 h-12 rounded-xl bg-primary-600 flex items-center justify-center">
                  <Icon name="heroicons:map-pin" class="w-6 h-6" />
                </div>
                <div>
                  <h4 class="font-bold text-white">Berlin & Köln</h4>
                  <p class="text-dark-400 text-sm">Umsetzung & Delivery</p>
                </div>
              </div>
              <p class="text-dark-300 text-sm">Softwareentwicklung, DevOps, Cloud, Kundenworkshops</p>
            </div>

            <div class="p-6 bg-dark-800/50 rounded-2xl border border-dark-700">
              <div class="flex items-center gap-4 mb-3">
                <div class="w-12 h-12 rounded-xl bg-accent-600 flex items-center justify-center">
                  <Icon name="heroicons:academic-cap" class="w-6 h-6" />
                </div>
                <div>
                  <h4 class="font-bold text-white">Istanbul (R&D)</h4>
                  <p class="text-dark-400 text-sm">Forschung & Entwicklung</p>
                </div>
              </div>
              <p class="text-dark-300 text-sm">Uni-Kooperationen, KI-Forschung, Academy & Schulungen</p>
            </div>
          </div>

          <!-- Partner -->
          <div class="space-y-6">
            <h3 class="text-xl font-display font-bold text-white mb-4">Partner-Netzwerk</h3>
            
            <div class="p-6 bg-dark-800/50 rounded-2xl border border-dark-700">
              <div class="flex items-center gap-4 mb-3">
                <div class="w-12 h-12 rounded-xl bg-primary-600 flex items-center justify-center">
                  <Icon name="heroicons:building-office-2" class="w-6 h-6" />
                </div>
                <div>
                  <h4 class="font-bold text-white">makroh GmbH</h4>
                  <p class="text-dark-400 text-sm">Köln, Deutschland</p>
                </div>
              </div>
              <p class="text-dark-300 text-sm">Strategischer Partner für IT-Projekte im deutschsprachigen Raum</p>
            </div>

            <div class="p-6 bg-dark-800/50 rounded-2xl border border-dark-700">
              <div class="flex items-center gap-4 mb-3">
                <div class="w-12 h-12 rounded-xl bg-accent-600 flex items-center justify-center">
                  <Icon name="heroicons:building-office-2" class="w-6 h-6" />
                </div>
                <div>
                  <h4 class="font-bold text-white">AyDeep Ltd.</h4>
                  <p class="text-dark-400 text-sm">Istanbul, Türkei</p>
                </div>
              </div>
              <p class="text-dark-300 text-sm">Delivery-Partner für Softwareentwicklung und KI-Projekte</p>
            </div>

            <div class="p-6 bg-primary-600/20 rounded-2xl border border-primary-500/30">
              <div class="flex items-center gap-3 mb-3">
                <Icon name="heroicons:shield-check" class="w-6 h-6 text-primary-400" />
                <h4 class="font-bold text-white">Deutsche Steuerung</h4>
              </div>
              <p class="text-dark-300 text-sm">
                Internationale Umsetzung unter deutscher Steuerung mit DSGVO- und Security-Leitplanken. 
                Skalierbares internationales Team, effizientes Delivery-Modell, klare Verantwortung.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Qualifikationen -->
    <section class="py-24 bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <span class="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-4 block">
            Qualifikationen
          </span>
          <h2 class="section-title mb-4">
            Zertifizierungen & Sicherheit
          </h2>
        </div>

        <div class="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <!-- Diplom -->
          <div class="card-hover text-center">
            <div class="w-16 h-16 rounded-xl bg-primary-600 flex items-center justify-center mx-auto mb-4">
              <Icon name="heroicons:academic-cap" class="w-8 h-8 text-white" />
            </div>
            <h3 class="font-display font-bold text-xl text-dark-800 mb-2">Dipl.-Inf. (FH)</h3>
            <p class="text-dark-500 text-sm">
              RheinMain University of Applied Sciences
            </p>
          </div>

          <!-- PRINCE2 -->
          <div class="card-hover text-center">
            <div class="w-16 h-16 rounded-xl bg-accent-600 flex items-center justify-center mx-auto mb-4">
              <Icon name="heroicons:clipboard-document-check" class="w-8 h-8 text-white" />
            </div>
            <h3 class="font-display font-bold text-xl text-dark-800 mb-2">PRINCE2</h3>
            <p class="text-dark-500 text-sm">
              Certificate in Project Management
            </p>
          </div>

          <!-- ITIL -->
          <div class="card-hover text-center">
            <div class="w-16 h-16 rounded-xl bg-primary-600 flex items-center justify-center mx-auto mb-4">
              <Icon name="heroicons:cog-6-tooth" class="w-8 h-8 text-white" />
            </div>
            <h3 class="font-display font-bold text-xl text-dark-800 mb-2">ITIL</h3>
            <p class="text-dark-500 text-sm">
              IT Service Management Best Practices
            </p>
          </div>

          <!-- SÜ2 -->
          <div class="card-hover text-center">
            <div class="w-16 h-16 rounded-xl bg-white border border-dark-200 flex items-center justify-center mx-auto mb-4 overflow-hidden p-1">
              <img 
                src="/images/Bundesamt_Fuer_Verfassungsschutz.png" 
                alt="Bundesamt für Verfassungsschutz Logo"
                class="w-full h-full object-contain"
              />
            </div>
            <h3 class="font-display font-bold text-xl text-dark-800 mb-2">SÜ2</h3>
            <p class="text-dark-500 text-sm">
              Sicherheitsüberprüfung (Bundesamt für Verfassungsschutz)
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- KI-Kompetenz -->
    <section class="py-24 bg-dark-50">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span class="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-4 block">
              KI-Kompetenz
            </span>
            <h2 class="section-title mb-6">
              Gastvortrag: AI & Creativity
            </h2>
            <p class="text-dark-500 text-lg mb-6 leading-relaxed">
              Im Rahmen eines Gastvortrags an der <strong class="text-dark-800">Atatürk University in Erzurum</strong> 
              (Türkei) habe ich über das Thema „AI & Creativity – KI in Kunst & Musik" referiert.
            </p>
            <p class="text-dark-500 text-lg mb-6 leading-relaxed">
              Dieser Vortrag unterstreicht unsere tiefgehende Expertise im Bereich Künstliche Intelligenz 
              und die Fähigkeit, komplexe KI-Themen verständlich zu vermitteln – ein wichtiger Baustein 
              für erfolgreiche KI-Projekte und Schulungen.
            </p>
            <div class="flex items-center gap-3 p-4 bg-white rounded-xl shadow-soft">
              <Icon name="heroicons:academic-cap" class="w-8 h-8 text-primary-600" />
              <div>
                <span class="font-semibold text-dark-800 block">Guest Lecture</span>
                <span class="text-dark-500 text-sm">Atatürk University, Erzurum</span>
              </div>
            </div>
          </div>

          <!-- Gastvortrag Bild -->
          <div class="relative">
            <div class="rounded-3xl overflow-hidden aspect-video shadow-xl">
              <img 
                src="/images/Gastvortrag_Uni_Atatuerk.jpeg" 
                alt="Dipl.-Inf.(FH) Ibrahim Canakci bei Gastvortrag an der Atatürk University Erzurum – AI & Creativity"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Weiterbildung / Academy -->
    <section class="py-24 bg-white">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Workshop / Schulung Bild -->
          <div class="relative order-2 lg:order-1">
            <div class="rounded-3xl overflow-hidden aspect-video shadow-xl">
              <img 
                src="/images/Aydeep-Schulung_Istanbul_TR.jpeg" 
                alt="AyDeep Academy Schulung in Istanbul – Mitarbeiterweiterbildung und Wissenstransfer"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
            <!-- Weitere Academy Bilder -->
            <div class="grid grid-cols-2 gap-4 mt-4">
              <div class="rounded-xl overflow-hidden aspect-video shadow-lg">
                <img 
                  src="/images/AyDeep_Academy_Istanbul_TR.jpeg" 
                  alt="AyDeep Academy Istanbul – Technologie-Workshop"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div class="rounded-xl overflow-hidden aspect-video shadow-lg">
                <img 
                  src="/images/AyDeep_Academy_Istanbul_TR_ServiceManagement.jpeg" 
                  alt="AyDeep Academy – Service Management Schulung"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div class="order-1 lg:order-2">
            <span class="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-4 block">
              Weiterbildung
            </span>
            <h2 class="section-title mb-6">
              Interne Schulungen & Academy
            </h2>
            <p class="text-dark-500 text-lg mb-6 leading-relaxed">
              Wir investieren kontinuierlich in die Weiterbildung unserer Teams. Unsere interne Academy 
              in Istanbul bietet Schulungen zu aktuellen Technologien, Best Practices und Security Awareness.
            </p>
            <div class="space-y-4">
              <div v-for="item in academyFeatures" :key="item" 
                   class="flex items-center gap-3 p-4 bg-dark-50 rounded-xl">
                <Icon name="heroicons:check-circle" class="w-6 h-6 text-primary-600 flex-shrink-0" />
                <span class="font-medium text-dark-700">{{ item }}</span>
              </div>
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
  title: 'Dipl.-Inf. Ibrahim Canakci – IC-RESULTING Gründer & Team',
  description: 'Resulting statt Beratung: Ibrahim Canakci verbindet IT-Projektleitung mit technischer Umsetzung. PRINCE2, ITIL, SÜ2-zertifiziert.'
})

// Founder Image mit Fallback (unterstützt .webp und .jpg)
const founderImage = ref('/images/Dipl-Inf_Ibrahim_Canakci.png')
const fallbackImage = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80'

const handleImageError = (e) => {
  e.target.src = fallbackImage
}

// Founder Highlights (Bullet Points)
const founderHighlights = [
  'End-to-end Projektleitung (PRINCE2) & technische Steuerung',
  'IT-Service- & Betriebsmodelle (ITIL) / Continual Improvement',
  'DevSecOps & Automatisierung (CI/CD, IaC, Security Gates)',
  'KI-gestützte Prozessautomatisierung & Workflow-Optimierung',
  'DSGVO-konforme IT-Strukturen & Security-by-Design',
  'Wissenstransfer & interne Schulungen (Enablement)'
]

// Experience Fields
const experienceFields = [
  { icon: 'heroicons:building-office-2', title: 'Industrie & Mittelstand' },
  { icon: 'heroicons:building-library', title: 'Öffentlicher Sektor' },
  { icon: 'heroicons:paper-airplane', title: 'Luftfahrt & Touristik' },
  { icon: 'heroicons:shield-check', title: 'Versicherung & Finance' },
  { icon: 'heroicons:truck', title: 'Automotive' },
  { icon: 'heroicons:globe-alt', title: 'E-Government' }
]

// Karriere Timeline
const careerTimeline = [
  {
    period: 'Seit 2021',
    title: 'Freiberuflicher KI-Spezialist & KI-Unternehmer',
    company: 'IC-RESULTING (Selbstständig)',
    location: 'Wiesbaden, Deutschland · Remote',
    description: 'IT-Sicherheitsmanagement (SÜ2-zertifiziert), Generative KI & NLP, Computer Vision & Automatisierung, Datenanalyse & Predictive Analytics, IT-Architektur und Projektleitung.',
    skills: ['Generative KI', 'NLP', 'Computer Vision', 'SÜ2', 'IT-Architektur'],
    current: true
  },
  {
    period: 'Seit 2020',
    title: 'IT-Projektleiter & Technische Koordination',
    company: 'makroh GmbH (ITZBund, G2X-Projekt)',
    location: 'Region Köln/Bonn · Remote',
    description: 'Dienstekonsolidierung und G2X-Kommunikations-Dienst im Behördenumfeld. Technische Projektleitung unter SÜ2-Sicherheitsanforderungen für das Informationstechnikzentrum Bund.',
    skills: ['PRINCE2', 'E-Government', 'SÜ2', 'Dienstekonsolidierung'],
    current: true
  },
  {
    period: 'Seit 2017',
    title: 'Gründer & Leiter Forschung & Entwicklung',
    company: 'AyDeep Yazilim Ltd.',
    location: 'Istanbul, Türkei',
    description: 'Seit 2022 Fokus auf KI-Forschung & Entwicklung. Zuvor Softwarelösungen für Airline-Systeme, Buchungsmanagement und CRM. Projektkoordination aus Deutschland, Delivery aus Istanbul.',
    skills: ['KI-Forschung', 'Big Data', 'Airline-Systeme', 'Team-Building'],
    current: true
  },
  {
    period: '2017 – 2020',
    title: 'Manager IT & Services',
    company: 'Lamberth GmbH',
    location: 'Frankfurt am Main',
    description: 'Produktentwicklung, IT-Projektleitung, Aufbau von Serviceprozessen. Booking Management System, Schnittstellen-Integration, Kreditkartenabrechnungen. Aufbau von Entwicklerteams für Lufthansa, Luxair, Singapore Airlines.',
    skills: ['.NET', 'MSSQL', 'REST API', 'Service Desk', 'Team-Aufbau'],
    current: false
  },
  {
    period: '2015 – 2017',
    title: 'IT-Projektmanager',
    company: 'Gonex GmbH',
    location: 'Deutschland',
    description: 'Analyse und Dokumentation von Anforderungen, Planung und Leitung von IT-Lösungen, technische Leitung interner und externer Projekte, CMS-Lösungen.',
    skills: ['Projektmanagement', 'CMS', 'Anforderungsanalyse'],
    current: false
  },
  {
    period: '2011 – 2015',
    title: 'Consultant',
    company: 'Sciforma GmbH',
    location: 'Deutschland & Los Gatos, Kalifornien, USA',
    description: 'Projektmanagementlösungen, technische Leitung, Schnittstellen-Implementierung, Workshops, Softwareentwicklung in der zentralen Entwicklungsabteilung in Los Gatos, Kalifornien.',
    skills: ['PPM', 'Workshops', 'USA', 'Schulungen'],
    current: false
  }
]

// Frühere Karriere-Stationen (kompakt)
const earlierCareer = [
  {
    title: 'IT-Consultant',
    company: 'Triona GmbH',
    period: '2011',
    icon: 'heroicons:briefcase'
  },
  {
    title: 'Software Developer (Praktikum)',
    company: 'Pagemachine AG',
    period: '2009',
    icon: 'heroicons:code-bracket'
  }
]

const services = [
  {
    icon: 'heroicons:briefcase',
    title: 'IT-Projektleitung',
    description: 'Professionelle Steuerung Ihrer IT-Projekte nach PRINCE2-Methodik mit klarer Verantwortung.'
  },
  {
    icon: 'heroicons:cog-6-tooth',
    title: 'Service Management',
    description: 'IT Service Management nach ITIL Best Practices für nachhaltige IT-Prozesse.'
  },
  {
    icon: 'heroicons:code-bracket',
    title: 'Softwareentwicklung',
    description: 'Maßgeschneiderte Lösungen – Web, APIs, Integrationen und cloud-fähige Architekturen.'
  },
  {
    icon: 'heroicons:cpu-chip',
    title: 'KI & Automatisierung',
    description: 'KI-gestützte Prozessautomatisierung, Workflows und intelligente Agenten.'
  },
  {
    icon: 'heroicons:shield-check',
    title: 'Security & DSGVO',
    description: 'DSGVO-konforme Lösungen und IT-Security für den deutschen Markt.'
  },
  {
    icon: 'heroicons:academic-cap',
    title: 'Schulungen',
    description: 'Workshops, Security Awareness und individuelle Mitarbeiterschulungen.'
  }
]

const academyFeatures = [
  'Interne Mitarbeiterschulungen',
  'Security Awareness Programme',
  'Technologie-Workshops',
  'Best Practices & Standards'
]
</script>
