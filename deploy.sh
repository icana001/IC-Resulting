#!/bin/bash
# =============================================================================
# IC-RESULTING Deployment Script
# Server: Nuxt 3 SSR mit Caddy + PM2
# =============================================================================

set -e

echo "🚀 IC-RESULTING Deployment gestartet..."

# Verzeichnis
APP_DIR="/var/www/ic-resulting"
BACKUP_DIR="/var/www/backups"

# Backup erstellen
echo "📦 Backup erstellen..."
mkdir -p $BACKUP_DIR
if [ -d "$APP_DIR/.output" ]; then
    tar -czf "$BACKUP_DIR/ic-resulting-$(date +%Y%m%d-%H%M%S).tar.gz" -C $APP_DIR .output 2>/dev/null || true
fi

# In App-Verzeichnis wechseln
cd $APP_DIR

# Git Pull (falls Git verwendet wird)
if [ -d ".git" ]; then
    echo "📥 Git Pull..."
    git pull origin main
fi

# Dependencies installieren
echo "📦 Dependencies installieren..."
pnpm install --frozen-lockfile

# Build
echo "🔨 Building Nuxt App..."
pnpm build

# PM2 Restart
echo "🔄 PM2 Restart..."
pm2 reload ecosystem.config.cjs --update-env || pm2 start ecosystem.config.cjs

# Caddy Reload (falls Caddyfile geändert)
echo "🔄 Caddy Reload..."
sudo systemctl reload caddy || true

# Alte Backups löschen (älter als 7 Tage)
find $BACKUP_DIR -name "ic-resulting-*.tar.gz" -mtime +7 -delete 2>/dev/null || true

echo "✅ Deployment abgeschlossen!"
echo ""
echo "📊 Status prüfen:"
echo "   pm2 status"
echo "   pm2 logs ic-resulting"
echo "   sudo systemctl status caddy"
