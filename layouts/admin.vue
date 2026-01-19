<template>
  <div class="min-h-screen bg-slate-50">
    <!-- Admin Header -->
    <header class="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <div class="flex items-center gap-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
                <Icon name="heroicons:squares-2x2" class="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 class="font-display font-bold text-slate-900">IC-RESULTING</h1>
                <p class="text-xs text-slate-500">Admin Dashboard</p>
              </div>
            </div>
          </div>

          <!-- Navigation -->
          <nav class="hidden md:flex items-center gap-1">
            <NuxtLink 
              v-for="item in navigation" 
              :key="item.path"
              :to="item.path"
              class="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              :class="[
                $route.path === item.path 
                  ? 'bg-primary-50 text-primary-700' 
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              ]"
            >
              <Icon :name="item.icon" class="w-4 h-4 inline mr-2" />
              {{ item.label }}
            </NuxtLink>
          </nav>

          <!-- User Menu -->
          <div class="flex items-center gap-4">
            <NuxtLink to="/" target="_blank" class="text-slate-500 hover:text-slate-700 transition-colors">
              <Icon name="heroicons:arrow-top-right-on-square" class="w-5 h-5" />
            </NuxtLink>
            <button
              @click="handleLogout"
              class="flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:text-red-600 
                     hover:bg-red-50 rounded-lg transition-colors"
            >
              <Icon name="heroicons:arrow-right-on-rectangle" class="w-5 h-5" />
              <span class="hidden sm:inline">Abmelden</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div class="md:hidden border-t border-slate-200 px-4 py-2 flex gap-1 overflow-x-auto">
        <NuxtLink 
          v-for="item in navigation" 
          :key="item.path"
          :to="item.path"
          class="px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors"
          :class="[
            $route.path === item.path 
              ? 'bg-primary-50 text-primary-700' 
              : 'text-slate-600 hover:bg-slate-100'
          ]"
        >
          <Icon :name="item.icon" class="w-4 h-4 inline mr-1" />
          {{ item.label }}
        </NuxtLink>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()

const navigation = [
  { label: 'Dashboard', path: '/admin', icon: 'heroicons:home' },
  { label: 'Analytics', path: '/admin/analytics', icon: 'heroicons:chart-bar' },
  { label: 'Content Editor', path: '/admin/editor', icon: 'heroicons:pencil-square' },
  { label: 'Seiten', path: '/admin/pages', icon: 'heroicons:document-text' },
  { label: 'Einstellungen', path: '/admin/settings', icon: 'heroicons:cog-6-tooth' }
]

async function handleLogout() {
  try {
    await $fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
  } catch (e) {
    console.error('Logout failed:', e)
  }
}
</script>
