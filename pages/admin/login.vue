<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
    <!-- Background Effects -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl"></div>
    </div>

    <div class="relative w-full max-w-md">
      <!-- Logo & Title -->
      <div class="text-center mb-8">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-2xl shadow-lg shadow-primary-500/25 mb-4">
          <Icon name="heroicons:shield-check" class="w-8 h-8 text-white" />
        </div>
        <h1 class="text-2xl font-display font-bold text-white">Admin-Bereich</h1>
        <p class="text-slate-400 mt-2">IC-RESULTING Dashboard</p>
      </div>

      <!-- Login Card -->
      <div class="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700 p-8 shadow-2xl">
        <form @submit.prevent="handleLogin" class="space-y-6">
          <!-- Error Message -->
          <div v-if="error" class="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
            <div class="flex items-center gap-3">
              <Icon name="heroicons:exclamation-circle" class="w-5 h-5 text-red-400 flex-shrink-0" />
              <p class="text-red-400 text-sm">{{ error }}</p>
            </div>
          </div>

          <!-- Password Field -->
          <div>
            <label for="password" class="block text-sm font-medium text-slate-300 mb-2">
              Admin-Passwort
            </label>
            <div class="relative">
              <input
                :type="showPassword ? 'text' : 'password'"
                id="password"
                v-model="password"
                required
                placeholder="••••••••••"
                class="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white 
                       placeholder-slate-500 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 
                       transition-all pr-12"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
              >
                <Icon :name="showPassword ? 'heroicons:eye-slash' : 'heroicons:eye'" class="w-5 h-5" />
              </button>
            </div>
          </div>

          <!-- Remember Option -->
          <div class="flex items-center gap-3">
            <input
              type="checkbox"
              id="remember"
              v-model="remember"
              class="w-4 h-4 rounded border-slate-600 bg-slate-900/50 text-primary-500 
                     focus:ring-primary-500 focus:ring-offset-0 focus:ring-offset-slate-800"
            />
            <label for="remember" class="text-sm text-slate-400">
              Angemeldet bleiben
            </label>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="loading"
            class="w-full py-3 px-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 
                   hover:to-primary-600 text-white font-semibold rounded-xl transition-all shadow-lg 
                   shadow-primary-500/25 flex items-center justify-center gap-2 disabled:opacity-50 
                   disabled:cursor-not-allowed"
          >
            <Icon v-if="loading" name="heroicons:arrow-path" class="w-5 h-5 animate-spin" />
            <span v-if="loading">Anmelden...</span>
            <template v-else>
              <Icon name="heroicons:lock-closed" class="w-5 h-5" />
              <span>Anmelden</span>
            </template>
          </button>
        </form>

        <!-- Hint -->
        <div class="mt-6 pt-6 border-t border-slate-700">
          <p class="text-xs text-slate-500 text-center">
            <Icon name="heroicons:information-circle" class="w-4 h-4 inline mr-1" />
            Für lokales Testen: <code class="text-slate-400">admin2024!</code>
          </p>
        </div>
      </div>

      <!-- Back Link -->
      <div class="text-center mt-6">
        <a href="/" class="text-slate-400 hover:text-white text-sm transition-colors inline-flex items-center gap-2">
          <Icon name="heroicons:arrow-left" class="w-4 h-4" />
          Zurück zur Website
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AuthResponse } from '~/types/admin'

definePageMeta({
  layout: false
})

useSeoMeta({
  title: 'Admin Login | IC-RESULTING',
  robots: 'noindex, nofollow'
})

const password = ref('')
const showPassword = ref(false)
const remember = ref(false)
const loading = ref(false)
const error = ref('')

// Prüfen ob bereits angemeldet
onMounted(async () => {
  try {
    const response = await $fetch<AuthResponse>('/api/admin/session')
    if (response?.authenticated) {
      await navigateTo('/admin')
    }
  } catch (e) {
    // Nicht angemeldet, bleiben auf Login-Seite
  }
})

async function handleLogin() {
  loading.value = true
  error.value = ''

  try {
    const response = await $fetch<AuthResponse>('/api/admin/login', {
      method: 'POST',
      body: { password: password.value }
    })

    if (response.success) {
      // Verwende window.location für zuverlässige Navigation
      window.location.href = '/admin'
    }
  } catch (e: any) {
    error.value = e.data?.statusMessage || 'Anmeldung fehlgeschlagen'
    password.value = ''
  } finally {
    loading.value = false
  }
}

function goToHome() {
  window.location.href = '/'
}
</script>
