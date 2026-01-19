// Session-Verwaltung (In-Memory für lokales Testen)
const sessions = new Map<string, { expires: number }>()

export function createSession(): string {
  const token = generateToken()
  const expires = Date.now() + 24 * 60 * 60 * 1000 // 24 Stunden
  sessions.set(token, { expires })
  return token
}

export function validateSession(token: string): boolean {
  const session = sessions.get(token)
  if (!session) return false
  if (Date.now() > session.expires) {
    sessions.delete(token)
    return false
  }
  return true
}

export function destroySession(token: string): void {
  sessions.delete(token)
}

function generateToken(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let token = ''
  for (let i = 0; i < 64; i++) {
    token += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return token
}
