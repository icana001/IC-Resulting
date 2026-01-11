<template>
  <div>
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50"></div>
      <div class="absolute inset-0 bg-hero-pattern opacity-30"></div>

      <div class="container-custom relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="section-title mb-6">Datenschutzerklärung</h1>
        </div>
      </div>
    </section>

    <!-- Content -->
    <section class="py-24 bg-white -mt-10">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto">
          <div class="prose prose-lg max-w-none space-y-8">
            <div class="card">
              <h2 class="text-2xl font-display font-bold text-dark-800 mb-4">
                1. Datenschutz auf einen Blick
              </h2>
              <h3 class="text-lg font-semibold text-dark-700 mt-6 mb-3">Allgemeine Hinweise</h3>
              <p class="text-dark-600">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. 
                Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert 
                werden können.
              </p>
            </div>

            <div class="card">
              <h2 class="text-2xl font-display font-bold text-dark-800 mb-4">
                2. Verantwortliche Stelle
              </h2>
              <div class="text-dark-600 space-y-2">
                <p><strong>IC-RESULTING</strong></p>
                <p>Dipl.-Inf. Ibrahim Canakci</p>
                <p>Obere Webergasse 58</p>
                <p>65183 Wiesbaden</p>
                <p>Germany</p>
                <p class="mt-4">
                  Telefon: +49 (0) 176 618 659 80<br>
                  E-Mail: canakci.ibrahim@gmail.com
                </p>
              </div>
            </div>

            <div class="card">
              <h2 class="text-2xl font-display font-bold text-dark-800 mb-4">
                3. Datenerfassung auf unserer Website
              </h2>
              
              <h3 class="text-lg font-semibold text-dark-700 mt-6 mb-3">Cookies</h3>
              <p class="text-dark-600 mb-4">
                Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr 
                Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser 
                Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
              </p>

              <h3 class="text-lg font-semibold text-dark-700 mt-6 mb-3">Server-Log-Dateien</h3>
              <p class="text-dark-600 mb-4">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in 
                so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. 
                Dies sind:
              </p>
              <ul class="list-disc list-inside text-dark-600 space-y-1 ml-4">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>

              <h3 class="text-lg font-semibold text-dark-700 mt-6 mb-3">Kontaktformular</h3>
              <p class="text-dark-600">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben 
                aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten 
                zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns 
                gespeichert.
              </p>
            </div>

            <div class="card">
              <h2 class="text-2xl font-display font-bold text-dark-800 mb-4">
                4. Ihre Rechte
              </h2>
              <p class="text-dark-600 mb-4">
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre 
                gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und 
                den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung 
                oder Löschung dieser Daten.
              </p>
              <p class="text-dark-600">
                Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie 
                sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
              </p>
            </div>

            <div class="card">
              <h2 class="text-2xl font-display font-bold text-dark-800 mb-4">
                5. Widerspruch gegen Werbe-Mails
              </h2>
              <p class="text-dark-600">
                Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten 
                zur Übersendung von nicht ausdrücklich angeforderter Werbung und 
                Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten 
                behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten 
                Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Datenschutzerklärung - IC-RESULTING',
  description: 'Datenschutzerklärung von IC-RESULTING. Informationen zur Datenerfassung und Ihren Rechten.'
})
</script>
