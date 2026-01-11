<template>
  <div>
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50"></div>
      <div class="absolute inset-0 bg-hero-pattern opacity-30"></div>

      <div class="container-custom relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="section-title mb-6">Impressum</h1>
        </div>
      </div>
    </section>

    <!-- Content -->
    <section class="py-24 bg-white -mt-10">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto">
          <div class="prose prose-lg max-w-none">
            <div class="card mb-8">
              <h2 class="text-2xl font-display font-bold text-dark-800 mb-6">IC-RESULTING</h2>
              
              <div class="space-y-4 text-dark-600">
                <div class="flex items-start gap-3">
                  <Icon name="heroicons:map-pin" class="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <p>Obere Webergasse 58</p>
                    <p>65183 Wiesbaden</p>
                    <p>Germany</p>
                  </div>
                </div>

                <div class="flex items-center gap-3">
                  <Icon name="heroicons:phone" class="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <div>
                    <p>Phone: +49 (0) 176 618 659 80</p>
                  </div>
                </div>

                <div class="flex items-center gap-3">
                  <Icon name="heroicons:envelope" class="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <a href="mailto:canakci.ibrahim@gmail.com" class="text-primary-600 hover:underline">
                    canakci.ibrahim@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div class="card mb-8">
              <h3 class="text-xl font-display font-bold text-dark-800 mb-4">Inhaber</h3>
              <p class="text-dark-600">Dipl.-Inf. Ibrahim Canakci</p>
              <p class="text-dark-500 text-sm mt-1">IT-Projektleiter & Software-Unternehmer</p>
            </div>

            <div class="card mb-8">
              <h3 class="text-xl font-display font-bold text-dark-800 mb-4">Handelsregister</h3>
              <div class="space-y-2 text-dark-600">
                <p>Amtsgericht Frankfurt am Main</p>
                <p>HRB 45873</p>
              </div>
            </div>

           

            <div class="card">
              <h3 class="text-xl font-display font-bold text-dark-800 mb-4">Haftungsausschluss</h3>
              <div class="space-y-4 text-dark-600 text-sm">
                <p>
                  <strong>Haftung für Inhalte:</strong> Die Inhalte unserer Seiten wurden mit größter 
                  Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der 
                  Inhalte können wir jedoch keine Gewähr übernehmen.
                </p>
                <p>
                  <strong>Haftung für Links:</strong> Unser Angebot enthält Links zu externen 
                  Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können 
                  wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                </p>
                <p>
                  <strong>Urheberrecht:</strong> Die durch die Seitenbetreiber erstellten Inhalte 
                  und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die 
                  Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb 
                  der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des 
                  jeweiligen Autors bzw. Erstellers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Impressum - IC-RESULTING',
  description: 'Impressum von IC-RESULTING. Inhaber Dipl.-Inf. Ibrahim Canakci. Wiesbaden.'
})
</script>
