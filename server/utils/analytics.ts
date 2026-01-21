// Analytics Datentypen
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'

export interface PageView {
  id: string
  path: string
  timestamp: number
  userAgent: string
  device: 'mobile' | 'tablet' | 'desktop'
  browser: string
  os: string
  referrer: string
  country?: string
  city?: string
  sessionId: string
}

export interface AnalyticsStats {
  totalViews: number
  uniqueVisitors: number
  todayViews: number
  deviceStats: {
    mobile: number
    tablet: number
    desktop: number
  }
  browserStats: Record<string, number>
  pageStats: Record<string, number>
  referrerStats: Record<string, number>
  hourlyStats: number[]
  dailyStats: { date: string; views: number }[]
}

// Pfad zur JSON-Datei
const DATA_DIR = join(process.cwd(), 'data')
const ANALYTICS_FILE = join(DATA_DIR, 'analytics.json')

// In-Memory Storage
const pageViews: PageView[] = []

// Datei-Operationen
function ensureDataDir() {
  if (!existsSync(DATA_DIR)) {
    mkdirSync(DATA_DIR, { recursive: true })
  }
}

function loadFromFile(): void {
  ensureDataDir()
  if (existsSync(ANALYTICS_FILE)) {
    try {
      const data = readFileSync(ANALYTICS_FILE, 'utf-8')
      const views: PageView[] = JSON.parse(data)
      pageViews.length = 0 // Clear array
      pageViews.push(...views)
      console.log(`[Analytics] ${views.length} Einträge aus ${ANALYTICS_FILE} geladen`)
    } catch (error) {
      console.error('[Analytics] Fehler beim Laden:', error)
    }
  }
}

function saveToFile(): void {
  ensureDataDir()
  try {
    // Nur die letzten 10.000 Einträge speichern
    const dataToSave = pageViews.slice(-10000)
    writeFileSync(ANALYTICS_FILE, JSON.stringify(dataToSave, null, 2), 'utf-8')
  } catch (error) {
    console.error('[Analytics] Fehler beim Speichern:', error)
  }
}

// Debounce für Speichern (nicht bei jedem Page View sofort speichern)
let saveTimeout: ReturnType<typeof setTimeout> | null = null
function debouncedSave(): void {
  if (saveTimeout) clearTimeout(saveTimeout)
  saveTimeout = setTimeout(() => {
    saveToFile()
    console.log(`[Analytics] ${pageViews.length} Einträge gespeichert`)
  }, 5000) // Alle 5 Sekunden speichern wenn Änderungen
}

// Beim Import initialisieren
loadFromFile()

// Hilfsfunktionen
function parseUserAgent(ua: string): { device: 'mobile' | 'tablet' | 'desktop'; browser: string; os: string } {
  let device: 'mobile' | 'tablet' | 'desktop' = 'desktop'
  let browser = 'Unknown'
  let os = 'Unknown'

  // Device Detection
  if (/iPad|Android(?!.*Mobile)/i.test(ua)) {
    device = 'tablet'
  } else if (/iPhone|iPod|Android.*Mobile|webOS|BlackBerry|IEMobile|Opera Mini/i.test(ua)) {
    device = 'mobile'
  }

  // Browser Detection
  if (/Firefox/i.test(ua)) browser = 'Firefox'
  else if (/Edg/i.test(ua)) browser = 'Edge'
  else if (/Chrome/i.test(ua)) browser = 'Chrome'
  else if (/Safari/i.test(ua)) browser = 'Safari'
  else if (/MSIE|Trident/i.test(ua)) browser = 'Internet Explorer'

  // OS Detection
  if (/Windows/i.test(ua)) os = 'Windows'
  else if (/Mac OS/i.test(ua)) os = 'macOS'
  else if (/Linux/i.test(ua)) os = 'Linux'
  else if (/Android/i.test(ua)) os = 'Android'
  else if (/iOS|iPhone|iPad/i.test(ua)) os = 'iOS'

  return { device, browser, os }
}

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9)
}

// API Funktionen
export function trackPageView(data: {
  path: string
  userAgent: string
  referrer: string
  sessionId: string
}): PageView {
  const { device, browser, os } = parseUserAgent(data.userAgent)
  
  const pageView: PageView = {
    id: generateId(),
    path: data.path,
    timestamp: Date.now(),
    userAgent: data.userAgent,
    device,
    browser,
    os,
    referrer: data.referrer || 'Direct',
    sessionId: data.sessionId
  }

  pageViews.push(pageView)
  
  // Nur die letzten 10.000 Einträge behalten
  if (pageViews.length > 10000) {
    pageViews.splice(0, pageViews.length - 10000)
  }

  // Speichern (mit Debounce)
  debouncedSave()

  return pageView
}

export function getAnalyticsStats(days: number = 30): AnalyticsStats {
  const now = Date.now()
  const cutoff = now - days * 24 * 60 * 60 * 1000
  const todayCutoff = new Date().setHours(0, 0, 0, 0)
  
  const filteredViews = pageViews.filter(v => v.timestamp >= cutoff)
  const todayViews = pageViews.filter(v => v.timestamp >= todayCutoff)
  
  // Unique Visitors (nach Session)
  const uniqueSessions = new Set(filteredViews.map(v => v.sessionId))
  
  // Device Stats
  const deviceStats = { mobile: 0, tablet: 0, desktop: 0 }
  filteredViews.forEach(v => deviceStats[v.device]++)
  
  // Browser Stats
  const browserStats: Record<string, number> = {}
  filteredViews.forEach(v => {
    browserStats[v.browser] = (browserStats[v.browser] || 0) + 1
  })
  
  // Page Stats
  const pageStats: Record<string, number> = {}
  filteredViews.forEach(v => {
    pageStats[v.path] = (pageStats[v.path] || 0) + 1
  })
  
  // Referrer Stats
  const referrerStats: Record<string, number> = {}
  filteredViews.forEach(v => {
    const ref = v.referrer === '' ? 'Direct' : new URL(v.referrer, 'http://localhost').hostname || 'Direct'
    referrerStats[ref] = (referrerStats[ref] || 0) + 1
  })
  
  // Hourly Stats (letzte 24 Stunden)
  const hourlyStats = Array(24).fill(0)
  const last24h = now - 24 * 60 * 60 * 1000
  pageViews
    .filter(v => v.timestamp >= last24h)
    .forEach(v => {
      const hour = new Date(v.timestamp).getHours()
      hourlyStats[hour]++
    })
  
  // Daily Stats
  const dailyStatsMap = new Map<string, number>()
  filteredViews.forEach(v => {
    const date = new Date(v.timestamp).toISOString().split('T')[0]
    dailyStatsMap.set(date, (dailyStatsMap.get(date) || 0) + 1)
  })
  
  const dailyStats = Array.from(dailyStatsMap.entries())
    .map(([date, views]) => ({ date, views }))
    .sort((a, b) => a.date.localeCompare(b.date))

  return {
    totalViews: filteredViews.length,
    uniqueVisitors: uniqueSessions.size,
    todayViews: todayViews.length,
    deviceStats,
    browserStats,
    pageStats,
    referrerStats,
    hourlyStats,
    dailyStats
  }
}

export function getRecentPageViews(limit: number = 50): PageView[] {
  return pageViews.slice(-limit).reverse()
}

// Demo-Daten generieren für lokales Testen
export function generateDemoData(): void {
  if (pageViews.length > 0) return // Nur einmal generieren
  
  console.log('[Analytics] Generiere Demo-Daten...')
  
  const paths = ['/', '/loesungen', '/ueber-uns', '/kontakt', '/referenzen', '/karriere', '/it-solutions', '/blog']
  const referrers = ['', 'https://google.com', 'https://linkedin.com', 'https://xing.com', 'https://facebook.com']
  const userAgents = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:121.0) Gecko/20100101 Firefox/121.0',
    'Mozilla/5.0 (Linux; Android 13) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36'
  ]
  
  const now = Date.now()
  const thirtyDaysAgo = now - 30 * 24 * 60 * 60 * 1000
  
  // 500 zufällige Page Views generieren
  for (let i = 0; i < 500; i++) {
    const timestamp = thirtyDaysAgo + Math.random() * (now - thirtyDaysAgo)
    const sessionId = `demo_${Math.floor(i / 3)}_${Math.random().toString(36).substr(2, 6)}`
    
    const { device, browser, os } = parseUserAgent(userAgents[Math.floor(Math.random() * userAgents.length)])
    
    pageViews.push({
      id: generateId(),
      path: paths[Math.floor(Math.random() * paths.length)],
      timestamp,
      userAgent: userAgents[Math.floor(Math.random() * userAgents.length)],
      device,
      browser,
      os,
      referrer: referrers[Math.floor(Math.random() * referrers.length)] || 'Direct',
      sessionId
    })
  }
  
  // Nach Timestamp sortieren
  pageViews.sort((a, b) => a.timestamp - b.timestamp)
  
  // Sofort speichern
  saveToFile()
  console.log(`[Analytics] ${pageViews.length} Demo-Einträge generiert und gespeichert`)
}
