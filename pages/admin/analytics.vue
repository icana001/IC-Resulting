<template>
  <div>
    <!-- Page Header -->
    <div class="mb-8">
      <h1 class="text-2xl font-display font-bold text-slate-900">Analytics</h1>
      <p class="text-slate-500 mt-1">Detaillierte Besucherstatistiken</p>
    </div>

    <!-- Time Range Filter -->
    <div class="mb-6 flex flex-wrap items-center gap-4">
      <div class="flex bg-white rounded-lg border border-slate-200 p-1">
        <button 
          v-for="range in timeRanges" 
          :key="range.value"
          @click="selectedRange = range.value"
          :class="[
            'px-4 py-2 rounded-md text-sm font-medium transition-colors',
            selectedRange === range.value 
              ? 'bg-primary-500 text-white' 
              : 'text-slate-600 hover:bg-slate-100'
          ]"
        >
          {{ range.label }}
        </button>
      </div>
      
      <button 
        @click="() => refresh()" 
        :disabled="pending"
        class="ml-auto flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg 
               text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors disabled:opacity-50"
      >
        <Icon name="heroicons:arrow-path" :class="['w-4 h-4', pending && 'animate-spin']" />
        Aktualisieren
      </button>
    </div>

    <!-- Loading State -->
    <div v-if="pending" class="flex items-center justify-center py-20">
      <div class="text-center">
        <Icon name="heroicons:arrow-path" class="w-8 h-8 text-primary-500 animate-spin mx-auto mb-4" />
        <p class="text-slate-500">Lade Statistiken...</p>
      </div>
    </div>

    <template v-else-if="data">
      <!-- Overview Cards -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div class="bg-white rounded-xl border border-slate-200 p-5">
          <div class="text-sm text-slate-500 mb-1">Seitenaufrufe</div>
          <div class="text-2xl font-display font-bold text-slate-900">
            {{ data.stats.totalViews.toLocaleString('de-DE') }}
          </div>
        </div>
        <div class="bg-white rounded-xl border border-slate-200 p-5">
          <div class="text-sm text-slate-500 mb-1">Unique Besucher</div>
          <div class="text-2xl font-display font-bold text-slate-900">
            {{ data.stats.uniqueVisitors.toLocaleString('de-DE') }}
          </div>
        </div>
        <div class="bg-white rounded-xl border border-slate-200 p-5">
          <div class="text-sm text-slate-500 mb-1">Mobile Anteil</div>
          <div class="text-2xl font-display font-bold text-purple-600">
            {{ mobilePercentage }}%
          </div>
        </div>
        <div class="bg-white rounded-xl border border-slate-200 p-5">
          <div class="text-sm text-slate-500 mb-1">Ø Seiten/Besucher</div>
          <div class="text-2xl font-display font-bold text-slate-900">
            {{ pagesPerVisitor }}
          </div>
        </div>
      </div>

      <!-- Hourly Traffic Chart -->
      <div class="bg-white rounded-xl border border-slate-200 p-6 mb-8">
        <h3 class="text-lg font-display font-semibold text-slate-900 mb-6">Traffic nach Uhrzeit (24h)</h3>
        <div class="flex items-end gap-1 h-40">
          <div 
            v-for="(views, hour) in data.stats.hourlyStats" 
            :key="hour"
            class="flex-1 flex flex-col items-center"
          >
            <div 
              class="w-full bg-primary-500 rounded-t transition-all hover:bg-primary-600"
              :style="{ height: `${getBarHeight(views)}%`, minHeight: views > 0 ? '4px' : '0' }"
              :title="`${hour}:00 Uhr: ${views} Aufrufe`"
            ></div>
            <span class="text-xs text-slate-400 mt-2" v-if="hour % 3 === 0">{{ hour }}h</span>
          </div>
        </div>
      </div>

      <!-- Device & Browser Split -->
      <div class="grid lg:grid-cols-3 gap-6 mb-8">
        <!-- Devices Pie -->
        <div class="bg-white rounded-xl border border-slate-200 p-6">
          <h3 class="text-lg font-display font-semibold text-slate-900 mb-6">Geräte</h3>
          <div class="relative w-40 h-40 mx-auto mb-6">
            <svg viewBox="0 0 36 36" class="w-full h-full transform -rotate-90">
              <circle 
                v-for="(segment, i) in deviceSegments" 
                :key="i"
                cx="18" cy="18" r="15.9155"
                fill="none"
                :stroke="segment.color"
                stroke-width="3"
                :stroke-dasharray="`${segment.percent} ${100 - segment.percent}`"
                :stroke-dashoffset="-segment.offset"
              />
            </svg>
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-center">
                <div class="text-2xl font-bold text-slate-900">{{ data.stats.totalViews }}</div>
                <div class="text-xs text-slate-500">Aufrufe</div>
              </div>
            </div>
          </div>
          <div class="space-y-2">
            <div v-for="(value, device) in data.stats.deviceStats" :key="device" class="flex items-center justify-between text-sm">
              <span class="flex items-center gap-2">
                <span :class="['w-3 h-3 rounded-full', deviceColorClasses[device]]"></span>
                {{ deviceLabels[device] }}
              </span>
              <span class="font-medium">{{ value }}</span>
            </div>
          </div>
        </div>

        <!-- Browsers -->
        <div class="bg-white rounded-xl border border-slate-200 p-6">
          <h3 class="text-lg font-display font-semibold text-slate-900 mb-6">Browser</h3>
          <div class="space-y-4">
            <div v-for="(count, browser) in sortedBrowsers" :key="browser">
              <div class="flex items-center justify-between text-sm mb-1">
                <span class="text-slate-700">{{ browser }}</span>
                <span class="font-medium text-slate-900">{{ count }}</span>
              </div>
              <div class="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  class="h-full bg-accent-500 rounded-full"
                  :style="{ width: `${(count / data.stats.totalViews) * 100}%` }"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Traffic Sources -->
        <div class="bg-white rounded-xl border border-slate-200 p-6">
          <h3 class="text-lg font-display font-semibold text-slate-900 mb-6">Traffic-Quellen</h3>
          <div class="space-y-4">
            <div v-for="(count, source) in sortedSources" :key="source">
              <div class="flex items-center justify-between text-sm mb-1">
                <span class="text-slate-700">{{ formatSource(source) }}</span>
                <span class="font-medium text-slate-900">{{ count }}</span>
              </div>
              <div class="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  class="h-full bg-green-500 rounded-full"
                  :style="{ width: `${(count / data.stats.totalViews) * 100}%` }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Visitors Table -->
      <div class="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div class="p-6 border-b border-slate-200">
          <h3 class="text-lg font-display font-semibold text-slate-900">Letzte Besucher</h3>
        </div>
        
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-slate-50">
              <tr class="text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                <th class="px-6 py-4">Seite</th>
                <th class="px-6 py-4">Gerät</th>
                <th class="px-6 py-4">Browser</th>
                <th class="px-6 py-4">Betriebssystem</th>
                <th class="px-6 py-4">Quelle</th>
                <th class="px-6 py-4">Zeitpunkt</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr v-for="view in data.recentViews" :key="view.id" class="text-sm hover:bg-slate-50">
                <td class="px-6 py-4">
                  <span class="font-medium text-slate-900">{{ view.path }}</span>
                </td>
                <td class="px-6 py-4">
                  <span :class="[
                    'inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium',
                    view.device === 'mobile' ? 'bg-purple-100 text-purple-700' :
                    view.device === 'tablet' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-700'
                  ]">
                    <Icon :name="deviceIcons[view.device]" class="w-3 h-3" />
                    {{ deviceLabels[view.device] }}
                  </span>
                </td>
                <td class="px-6 py-4 text-slate-600">{{ view.browser }}</td>
                <td class="px-6 py-4 text-slate-600">{{ view.os }}</td>
                <td class="px-6 py-4 text-slate-600">{{ formatSource(view.referrer) }}</td>
                <td class="px-6 py-4 text-slate-500">{{ formatDateTime(view.timestamp) }}</td>
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
  title: 'Analytics | IC-RESULTING Admin',
  robots: 'noindex, nofollow'
})

const timeRanges = [
  { label: '7 Tage', value: 7 },
  { label: '30 Tage', value: 30 },
  { label: '90 Tage', value: 90 }
]

const selectedRange = ref(30)

// Fetch data
const { data, pending, refresh } = await useFetch<AnalyticsResponse>('/api/admin/analytics', {
  query: computed(() => ({ days: selectedRange.value, demo: 'true' })),
  watch: [selectedRange]
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

const deviceColorClasses: Record<string, string> = {
  mobile: 'bg-purple-500',
  tablet: 'bg-blue-500',
  desktop: 'bg-primary-500'
}

const deviceColorHex: Record<string, string> = {
  desktop: '#0ea5e9',
  mobile: '#a855f7',
  tablet: '#3b82f6'
}

// Computed
const mobilePercentage = computed(() => {
  if (!data.value?.stats) return 0
  const total = data.value.stats.totalViews
  if (total === 0) return 0
  return Math.round((data.value.stats.deviceStats.mobile / total) * 100)
})

const pagesPerVisitor = computed(() => {
  if (!data.value?.stats) return '0'
  const { totalViews, uniqueVisitors } = data.value.stats
  if (uniqueVisitors === 0) return '0'
  return (totalViews / uniqueVisitors).toFixed(1)
})

const deviceSegments = computed(() => {
  if (!data.value?.stats) return []
  const total = data.value.stats.totalViews
  if (total === 0) return []
  
  const devices = ['desktop', 'mobile', 'tablet'] as const
  let offset = 0
  
  return devices.map(device => {
    const percent = (data.value!.stats.deviceStats[device] / total) * 100
    const segment = {
      device,
      percent,
      offset,
      color: deviceColorHex[device]
    }
    offset += percent
    return segment
  })
})

const sortedBrowsers = computed(() => {
  if (!data.value?.stats?.browserStats) return {}
  const entries = Object.entries(data.value.stats.browserStats)
    .sort(([, a], [, b]) => (b as number) - (a as number))
    .slice(0, 5)
  return Object.fromEntries(entries)
})

const sortedSources = computed(() => {
  if (!data.value?.stats?.referrerStats) return {}
  const entries = Object.entries(data.value.stats.referrerStats)
    .sort(([, a], [, b]) => (b as number) - (a as number))
    .slice(0, 5)
  return Object.fromEntries(entries)
})

// Helper functions
function getBarHeight(views: number): number {
  if (!data.value?.stats?.hourlyStats) return 0
  const max = Math.max(...data.value.stats.hourlyStats)
  if (max === 0) return 0
  return (views / max) * 100
}

function formatSource(source: string): string {
  if (!source || source === 'Direct' || source === 'localhost') return 'Direktaufruf'
  try {
    return new URL(source, 'http://localhost').hostname
  } catch {
    return source
  }
}

function formatDateTime(timestamp: number): string {
  return new Date(timestamp).toLocaleString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  })
}
</script>
