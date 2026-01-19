# IC-RESULTING Unternehmensflyer

## Übersicht

Professioneller 2-seitiger A4-Flyer zur Unternehmensvorstellung von IC-RESULTING.
Design basiert auf der Website ic-resulting.de (Tailwind-Farbsystem).

## Dateien

| Datei | Beschreibung |
|-------|--------------|
| `flyer-a4.html` | Hauptdatei mit vollständigem Layout (2 Seiten) |
| `flyer-a4.css` | Stylesheet mit Print-Optimierung |

## Inhalt

### Seite 1: Hero & Leistungsübersicht
- Header mit Logo und Zertifizierungs-Badges
- Hero-Bereich: "Verantwortung abgeben, Ergebnisse erhalten"
- Stats-Bar: PRINCE2, ITIL, SÜ2, DSGVO
- 6 Services im Grid-Layout

### Seite 2: Gründer & Standorte
- Gründerprofil: Dipl.-Inf.(FH) Ibrahim Canakci
- Zertifizierungen: Diplom, PRINCE2, ITIL, SÜ2
- Delivery-Modell: Wiesbaden, Berlin/Köln, Istanbul R&D
- Branchenerfahrung
- CTA mit Kontaktdaten

## Farben (aus Website)

```css
Primary Blue:   #2563eb (primary-600)
Accent Cyan:    #06b6d4 (accent-500)
Dark:           #0f172a (dark-900)
```

## PDF exportieren

### Option A: Browser Print-to-PDF
1. `flyer-a4.html` im Browser öffnen
2. `Strg+P` / `Cmd+P`
3. Ziel: "Als PDF speichern"
4. Layout: Hochformat
5. Ränder: Keine
6. Hintergrundgrafiken: ✓ aktivieren

### Option B: Chrome CLI (ohne UI)
```bash
chrome --headless --print-to-pdf="flyer-unternehmen.pdf" flyer-a4.html
```

## Anpassungen

### Kontaktdaten ändern
In `flyer-a4.html` nach `cta-section` und `page-footer` suchen.

### Farben ändern
In `flyer-a4.css` die CSS-Variablen unter `:root` anpassen.

### Schriften
Google Fonts werden geladen:
- **Inter** – Body Text
- **Plus Jakarta Sans** – Headlines

Für Offline-Nutzung: Fonts lokal einbetten.

## Qualitätssicherung

- [x] Alle Informationen aus Marketing-Quellen
- [x] Design entspricht Website ic-resulting.de
- [x] Print-CSS für A4 optimiert
- [x] Kontaktdaten aktuell
- [x] Keine erfundenen Fakten

## Zielgruppe

B2B-Entscheider, die:
- IT-Verantwortung extern vergeben möchten
- Professionelle IT-Projektleitung suchen
- Wert auf Zertifizierungen (PRINCE2, SÜ2) legen

---

**Stand:** Januar 2026
**Autor:** Marketing / IC-RESULTING
