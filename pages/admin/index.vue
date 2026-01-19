<template>
  <div>
    <!-- Page Header -->
    <div class="mb-8">
      <h1 class="text-2xl font-display font-bold text-slate-900">Dashboard</h1>
      <p class="text-slate-500 mt-1">Übersicht Ihrer Website-Statistiken</p>
    </div>

    <!-- Loading State -->
    <div v-if="pending" class="flex items-center justify-center py-20">
      <div class="text-center">
        <Icon name="heroicons:arrow-path" class="w-8 h-8 text-primary-500 animate-spin mx-auto mb-4" />
        <p class="text-slate-500">Lade Statistiken...</p>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
      <Icon name="heroicons:exclamation-triangle" class="w-10 h-10 text-red-500 mx-auto mb-4" />
      <h3 class="text-lg font-semibold text-red-800 mb-2">Fehler beim Laden</h3>
      <p class="text-red-600 mb-4">{{ error.message }}</p>
      <button @click="() => refresh()" class="btn-primary">Erneut versuchen</button>
    </div>

    <!-- Dashboard Content -->
    <template v-else-if="data">
      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div v-for="stat in statsCards" :key="stat.label" 
             class="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
          <div class="flex items-center justify-between mb-4">
            <div :class="['w-12 h-12 rounded-xl flex items-center justify-center', stat.bgColor]">
              <Icon :name="stat.icon" :class="['w-6 h-6', stat.iconColor]" />
            </div>
            <span v-if="stat.trend" :class="[
              'text-xs font-medium px-2 py-1 rounded-full',
              stat.trend > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            ]">
              {{ stat.trend > 0 ? '+' : '' }}{{ stat.trend }}%
            </span>
          </div>
          <div class="text-3xl font-display font-bold text-slate-900 mb-1">
            {{ stat.value }}
          </div>
          <div class="text-sm text-slate-500">{{ stat.label }}</div>
        </div>
      </div>

      <!-- Charts Row -->
      <div class="grid lg:grid-cols-2 gap-6 mb-8">
        <!-- Device Distribution -->
        <div class="bg-white rounded-xl border border-slate-200 p-6">
          <h3 class="text-lg font-display font-semibold text-slate-900 mb-6">Geräteverteilung</h3>
          <div class="space-y-4">
            <div v-for="(value, device) in data.stats.deviceStats" :key="device" class="space-y-2">
              <div class="flex items-center justify-between text-sm">
                <span class="flex items-center gap-2 text-slate-700">
                  <Icon :name="deviceIcons[device]" class="w-4 h-4" />
                  {{ deviceLabels[device] }}
                </span>
                <span class="font-medium text-slate-900">{{ value }} ({{ getPercentage(value, data.stats.totalViews) }}%)</span>
              </div>
              <div class="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  :class="deviceColors[device]" 
                  class="h-full rounded-full transition-all duration-500"
                  :style="{ width: `${getPercentage(value, data.stats.totalViews)}%` }"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Top Pages -->
        <div class="bg-white rounded-xl border border-slate-200 p-6">
          <h3 class="text-lg font-display font-semibold text-slate-900 mb-6">Top Seiten</h3>
          <div class="space-y-3">
            <div 
              v-for="(views, path) in sortedPageStats" 
              :key="path"
              class="flex items-center justify-between py-2 border-b border-slate-100 last:border-0"
            >
              <span class="text-slate-700 font-medium">{{ path || '/' }}</span>
              <div class="flex items-center gap-3">
                <div class="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    class="h-full bg-primary-500 rounded-full"
                    :style="{ width: `${getPercentage(views, maxPageViews)}%` }"
                  ></div>
                </div>
                <span class="text-sm font-semibold text-slate-900 w-12 text-right">{{ views }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Traffic Sources & Browsers -->
      <div class="grid lg:grid-cols-2 gap-6 mb-8">
        <!-- Traffic Sources -->
        <div class="bg-white rounded-xl border border-slate-200 p-6">
          <h3 class="text-lg font-display font-semibold text-slate-900 mb-6">Traffic-Quellen</h3>
          <div class="space-y-3">
            <div 
              v-for="(count, source) in sortedReferrerStats" 
              :key="source"
              class="flex items-center justify-between py-2"
            >
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                  <Icon :name="getSourceIcon(source)" class="w-4 h-4 text-slate-600" />
                </div>
                <span class="text-slate-700">{{ formatSource(source) }}</span>
              </div>
              <span class="text-sm font-semibold text-slate-900">{{ count }}</span>
            </div>
          </div>
        </div>

        <!-- Browsers -->
        <div class="bg-white rounded-xl border border-slate-200 p-6">
          <h3 class="text-lg font-display font-semibold text-slate-900 mb-6">Browser</h3>
          <div class="space-y-3">
            <div 
              v-for="(count, browser) in data.stats.browserStats" 
              :key="browser"
              class="flex items-center justify-between py-2"
            >
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                  <Icon name="heroicons:globe-alt" class="w-4 h-4 text-slate-600" />
                </div>
                <span class="text-slate-700">{{ browser }}</span>
              </div>
              <span class="text-sm font-semibold text-slate-900">{{ count }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Visitors -->
      <div class="bg-white rounded-xl border border-slate-200 p-6">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-lg font-display font-semibold text-slate-900">Letzte Besucher</h3>
          <NuxtLink to="/admin/analytics" class="text-primary-600 hover:text-primary-700 text-sm font-medium">
            Alle anzeigen →
          </NuxtLink>
        </div>
        
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                <th class="pb-3 pr-4">Seite</th>
                <th class="pb-3 pr-4">Gerät</th>
                <th class="pb-3 pr-4">Browser</th>
                <th class="pb-3 pr-4">Quelle</th>
                <th class="pb-3">Zeit</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr v-for="view in data.recentViews.slice(0, 10)" :key="view.id" class="text-sm">
                <td class="py-3 pr-4">
                  <span class="font-medium text-slate-900">{{ view.path }}</span>
                </td>
                <td class="py-3 pr-4">
                  <span :class="[
                    'inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium',
                    view.device === 'mobile' ? 'bg-purple-100 text-purple-700' :
                    view.device === 'tablet' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-700'
                  ]">
                    <Icon :name="deviceIcons[view.device]" class="w-3 h-3" />
                    {{ deviceLabels[view.device] }}
                  </span>
                </td>
                <td class="py-3 pr-4 text-slate-600">{{ view.browser }}</td>
                <td class="py-3 pr-4 text-slate-600">{{ formatSource(view.referrer) }}</td>
                <td class="py-3 text-slate-500">{{ formatTime(view.timestamp) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { AnalyticsResponse } from '~/types/admin'

definePageMeta({
  layout: 'admin',
  middleware: ['admin-auth']
})

useSeoMeta({
  title: 'Dashboard | IC-RESULTING Admin',
  robots: 'noindex, nofollow'
})

// Fetch Analytics Data
const { data, pending, error, refresh } = await useFetch<AnalyticsResponse>('/api/admin/analytics', {
  query: { days: 30, demo: 'true' }
})

// Device helpers
const deviceIcons: Record<string, string> = {
  mobile: 'heroicons:device-phone-mobile',
  tablet: 'heroicons:device-tablet',
  desktop: 'heroicons:computer-desktop'
}

const deviceLabels: Record<string, string> = {
  mobile: 'Mobil',
  tablet: 'Tablet',
  desktop: 'Desktop'
}

const deviceColors: Record<string, string> = {
  mobile: 'bg-purple-500',
  tablet: 'bg-blue-500',
  desktop: 'bg-primary-500'
}

// Computed stats cards
const statsCards = computed(() => {
  if (!data.value?.stats) return []
  const stats = data.value.stats
  return [
    {
      label: 'Seitenaufrufe (30 Tage)',
      value: stats.totalViews.toLocaleString('de-DE'),
      icon: 'heroicons:eye',
      bgColor: 'bg-primary-100',
      iconColor: 'text-primary-600',
      trend: 12
    },
    {
      label: 'Unique Besucher',
      value: stats.uniqueVisitors.toLocaleString('de-DE'),
      icon: 'heroicons:users',
      bgColor: 'bg-accent-100',
      iconColor: 'text-accent-600',
      trend: 8
    },
    {
      label: 'Heute',
      value: stats.todayViews.toLocaleString('de-DE'),
      icon: 'heroicons:calendar',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600',
      trend: null
    },
    {
      label: 'Mobile Besucher',
      value: `${getPercentage(stats.deviceStats.mobile, stats.totalViews)}%`,
      icon: 'heroicons:device-phone-mobile',
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600',
      trend: 5
    }
  ]
})

// Sorted page stats
const sortedPageStats = computed(() => {
  if (!data.value?.stats?.pageStats) return {}
  const entries = Object.entries(data.value.stats.pageStats)
    .sort(([, a], [, b]) => (b as number) - (a as number))
    .slice(0, 5)
  return Object.fromEntries(entries)
})

const maxPageViews = computed(() => {
  if (!data.value?.stats?.pageStats) return 1
  return Math.max(...Object.values(data.value.stats.pageStats as Record<string, number>))
})

// Sorted referrer stats
const sortedReferrerStats = computed(() => {
  if (!data.value?.stats?.referrerStats) return {}
  const entries = Object.entries(data.value.stats.referrerStats)
    .sort(([, a], [, b]) => (b as number) - (a as number))
    .slice(0, 5)
  return Object.fromEntries(entries)
})

// Helper functions
function getPercentage(value: number, total: number): number {
  if (total === 0) return 0
  return Math.round((value / total) * 100)
}

function formatTime(timestamp: number): string {
  const date = new Date(timestamp)
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  
  if (diff < 60000) return 'Gerade eben'
  if (diff < 3600000) return `vor ${Math.floor(diff / 60000)} Min.`
  if (diff < 86400000) return `vor ${Math.floor(diff / 3600000)} Std.`
  
  return date.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })
}

function formatSource(source: string): string {
  if (!source || source === 'Direct' || source === 'localhost') return 'Direktaufruf'
  try {
    return new URL(source, 'http://localhost').hostname
  } catch {
    return source
  }
}

function getSourceIcon(source: string): string {
  const s = source.toLowerCase()
  if (s.includes('google')) return 'mdi:google'
  if (s.includes('linkedin')) return 'mdi:linkedin'
  if (s.includes('xing')) return 'mdi:alpha-x-box'
  if (s.includes('facebook')) return 'mdi:facebook'
  if (s.includes('twitter') || s.includes('x.com')) return 'mdi:twitter'
  return 'heroicons:globe-alt'
}
</script>
