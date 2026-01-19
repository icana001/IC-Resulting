// Gemeinsame Typen für das Admin-Dashboard

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

export interface AnalyticsResponse {
  stats: AnalyticsStats
  recentViews: PageView[]
}

export interface AuthResponse {
  success?: boolean
  authenticated?: boolean
  message?: string
}

export interface PageSection {
  id: string
  name: string
  fields: Record<string, string>
}

export interface PageData {
  id: string
  title: string
  path: string
  sections?: PageSection[]
}
