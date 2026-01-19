<template>
  <div>
    <!-- Page Header -->
    <div class="mb-8">
      <h1 class="text-2xl font-display font-bold text-slate-900">Einstellungen</h1>
      <p class="text-slate-500 mt-1">Verwalten Sie Ihre Admin-Einstellungen</p>
    </div>

    <div class="max-w-2xl space-y-6">
      <!-- Password Change -->
      <div class="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div class="p-6 border-b border-slate-200">
          <h2 class="text-lg font-display font-semibold text-slate-900">Passwort ändern</h2>
          <p class="text-sm text-slate-500 mt-1">Ändern Sie Ihr Admin-Passwort</p>
        </div>
        
        <form @submit.prevent="changePassword" class="p-6 space-y-4">
          <div>
            <label for="currentPassword" class="block text-sm font-medium text-slate-700 mb-2">
              Aktuelles Passwort
            </label>
            <input
              type="password"
              id="currentPassword"
              v-model="passwordForm.current"
              required
              class="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 
                     focus:ring-primary-500 focus:border-primary-500 transition-colors"
            />
          </div>
          
          <div>
            <label for="newPassword" class="block text-sm font-medium text-slate-700 mb-2">
              Neues Passwort
            </label>
            <input
              type="password"
              id="newPassword"
              v-model="passwordForm.new"
              required
              minlength="8"
              class="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 
                     focus:ring-primary-500 focus:border-primary-500 transition-colors"
            />
          </div>
          
          <div>
            <label for="confirmPassword" class="block text-sm font-medium text-slate-700 mb-2">
              Passwort bestätigen
            </label>
            <input
              type="password"
              id="confirmPassword"
              v-model="passwordForm.confirm"
              required
              class="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 
                     focus:ring-primary-500 focus:border-primary-500 transition-colors"
            />
          </div>

          <div class="pt-4">
            <button
              type="submit"
              class="px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-lg 
                     text-sm font-medium transition-colors"
            >
              Passwort ändern
            </button>
          </div>
        </form>
      </div>

      <!-- Site Settings -->
      <div class="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div class="p-6 border-b border-slate-200">
          <h2 class="text-lg font-display font-semibold text-slate-900">Website-Einstellungen</h2>
          <p class="text-sm text-slate-500 mt-1">Allgemeine Einstellungen für die Website</p>
        </div>
        
        <div class="p-6 space-y-4">
          <div class="flex items-center justify-between py-3 border-b border-slate-100">
            <div>
              <h4 class="font-medium text-slate-900">Analytics aktiviert</h4>
              <p class="text-sm text-slate-500">Besuchertracking für die Website</p>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" v-model="settings.analyticsEnabled" class="sr-only peer" />
              <div class="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 
                          peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full 
                          rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white 
                          after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
                          after:bg-white after:border-slate-300 after:border after:rounded-full 
                          after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
            </label>
          </div>

          <div class="flex items-center justify-between py-3 border-b border-slate-100">
            <div>
              <h4 class="font-medium text-slate-900">Wartungsmodus</h4>
              <p class="text-sm text-slate-500">Website vorübergehend offline schalten</p>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" v-model="settings.maintenanceMode" class="sr-only peer" />
              <div class="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 
                          peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full 
                          rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white 
                          after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
                          after:bg-white after:border-slate-300 after:border after:rounded-full 
                          after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
            </label>
          </div>

          <div class="flex items-center justify-between py-3">
            <div>
              <h4 class="font-medium text-slate-900">Cookie-Banner</h4>
              <p class="text-sm text-slate-500">DSGVO-konformes Cookie-Banner anzeigen</p>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" v-model="settings.cookieBanner" class="sr-only peer" />
              <div class="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 
                          peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full 
                          rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white 
                          after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
                          after:bg-white after:border-slate-300 after:border after:rounded-full 
                          after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
            </label>
          </div>
        </div>
      </div>

      <!-- System Info -->
      <div class="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div class="p-6 border-b border-slate-200">
          <h2 class="text-lg font-display font-semibold text-slate-900">System-Informationen</h2>
        </div>
        
        <div class="p-6">
          <dl class="space-y-3 text-sm">
            <div class="flex justify-between py-2 border-b border-slate-100">
              <dt class="text-slate-500">Nuxt Version</dt>
              <dd class="font-medium text-slate-900">3.15.4</dd>
            </div>
            <div class="flex justify-between py-2 border-b border-slate-100">
              <dt class="text-slate-500">Vue Version</dt>
              <dd class="font-medium text-slate-900">3.5.13</dd>
            </div>
            <div class="flex justify-between py-2 border-b border-slate-100">
              <dt class="text-slate-500">Node.js</dt>
              <dd class="font-medium text-slate-900">v20+</dd>
            </div>
            <div class="flex justify-between py-2">
              <dt class="text-slate-500">Admin Dashboard Version</dt>
              <dd class="font-medium text-slate-900">1.0.0</dd>
            </div>
          </dl>
        </div>
      </div>

      <!-- Danger Zone -->
      <div class="bg-red-50 rounded-xl border border-red-200 overflow-hidden">
        <div class="p-6 border-b border-red-200">
          <h2 class="text-lg font-display font-semibold text-red-900">Gefahrenzone</h2>
          <p class="text-sm text-red-700 mt-1">Vorsicht: Diese Aktionen können nicht rückgängig gemacht werden</p>
        </div>
        
        <div class="p-6 space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <h4 class="font-medium text-red-900">Analytics zurücksetzen</h4>
              <p class="text-sm text-red-700">Alle Besucherstatistiken löschen</p>
            </div>
            <button
              @click="confirmResetAnalytics"
              class="px-4 py-2 bg-white border border-red-300 text-red-700 rounded-lg 
                     text-sm font-medium hover:bg-red-50 transition-colors"
            >
              Zurücksetzen
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin',
  middleware: ['admin-auth']
})

useSeoMeta({
  title: 'Einstellungen | IC-RESULTING Admin',
  robots: 'noindex, nofollow'
})

const passwordForm = ref({
  current: '',
  new: '',
  confirm: ''
})

const settings = ref({
  analyticsEnabled: true,
  maintenanceMode: false,
  cookieBanner: true
})

function changePassword() {
  if (passwordForm.value.new !== passwordForm.value.confirm) {
    alert('Die Passwörter stimmen nicht überein')
    return
  }
  
  // In einer echten Implementierung würde hier ein API-Call erfolgen
  alert('Passwort-Änderung ist in der lokalen Testversion nicht verfügbar.\n\nFür die Produktion: Setzen Sie ADMIN_PASSWORD in den Environment-Variablen.')
  
  passwordForm.value = { current: '', new: '', confirm: '' }
}

function confirmResetAnalytics() {
  if (confirm('Sind Sie sicher, dass Sie alle Analytics-Daten löschen möchten? Diese Aktion kann nicht rückgängig gemacht werden.')) {
    alert('Analytics wurden zurückgesetzt (Demo-Modus)')
  }
}
</script>
