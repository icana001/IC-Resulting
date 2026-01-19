# Social Media Templates – Anleitung

## Übersicht

| Template | Datei | Format | Verwendung |
|----------|-------|--------|------------|
| Square | `square-1x1.html/css` | 1080×1080 | Instagram Feed, LinkedIn |
| Portrait | `portrait-4x5.html/css` | 1080×1350 | Instagram Feed (optimiert) |
| Story | `story-9x16.html/css` | 1080×1920 | Instagram/LinkedIn Stories |
| LinkedIn Doc | `linkedin-document.html/css` | 1080×1350 | LinkedIn Carousel/Dokument |

---

## Schnellstart

### 1. Template öffnen
```
Öffne die gewünschte .html Datei im Browser (Chrome/Edge empfohlen)
```

### 2. Text bearbeiten
- Öffne die .html Datei in einem Texteditor
- Suche nach `<!-- EDIT: ... -->` Kommentaren
- Ändere den Text zwischen den HTML-Tags
- Speichern und Browser neu laden

### 3. Export als Bild
**Option A: Screenshot (einfach)**
- Browser auf 100% Zoom
- Screenshot-Tool oder `Strg+Shift+S` (Firefox)
- Bereich auswählen und speichern

**Option B: Browser DevTools (präzise)**
1. Rechtsklick → Element untersuchen
2. Rechtsklick auf `.card` Element
3. "Capture node screenshot" (Chrome)
4. Speichert exakte Pixel-Größe

**Option C: Online-Tool**
- html2canvas oder ähnliche Services

---

## Template-Details

### Square 1:1 (square-1x1.html)
- **Größe:** 1080×1080px
- **Elemente:**
  - Brand-Logo (oben links)
  - Headline (Mitte)
  - Subheadline
  - Feature-Liste (optional)
  - CTA (unten rechts)

**Editierbare Bereiche:**
```html
<h1 class="headline">Ihre Headline hier</h1>
<p class="subheadline">Ihre Unterzeile</p>
<ul class="features">
  <li>Feature 1</li>
  <li>Feature 2</li>
</ul>
```

---

### Portrait 4:5 (portrait-4x5.html)
- **Größe:** 1080×1350px
- **Elemente:**
  - Brand
  - Tag/Kategorie
  - Headline
  - Body-Text
  - Keypoint-Box
  - URL

**Editierbare Bereiche:**
```html
<div class="tag">INSIGHT</div>
<h1 class="headline">Ihre Frage?</h1>
<p class="body">Ihre Erklärung</p>
<div class="keypoint">Kernaussage</div>
```

---

### Story 9:16 (story-9x16.html)
- **Größe:** 1080×1920px
- **Elemente:**
  - Brand (oben)
  - Headline (Mitte)
  - Subtext
  - Bullet Points
  - Swipe-Indikator

**Editierbare Bereiche:**
```html
<h1 class="headline">Kurze<br>Headline</h1>
<p class="subtext">Erklärung</p>
<ul class="bullets">
  <li>Punkt 1</li>
</ul>
```

---

### LinkedIn Document (linkedin-document.html)
- **Größe:** 1080×1350px pro Slide
- **Enthält:** Cover-Slide + Content-Slide Vorlage
- **Für Carousels:** Mehrere Content-Slides erstellen

**Slide-Nummer ändern:**
```html
<div class="slide-indicator">1/5</div>
```

**Content-Slide erweitern:**
```html
<div class="number">02</div>
<h2 class="point-headline">Nächster Punkt</h2>
<p class="point-body">Erklärung dazu</p>
```

---

## Anpassungen

### Farben ändern
In der jeweiligen .css Datei:
```css
/* Teal Akzent */
color: #14B8A6;

/* Dunkler Hintergrund */
background: #0F172A;

/* Grauer Text */
color: #94A3B8;
```

### Schriftgrößen
```css
.headline { font-size: 72px; }
.subheadline { font-size: 32px; }
```

### Bilder hinzufügen
1. Bild in `/public/images/` ablegen
2. In HTML einfügen:
```html
<img src="../../../public/images/DATEINAME.png" alt="Beschreibung">
```

---

## Tipps

1. **Weniger ist mehr** – Kurze Headlines, wenig Text
2. **Kontrast prüfen** – Text muss lesbar sein
3. **Brand konsistent** – Immer IC-RESULTING + Farben
4. **Mobile denken** – Vorschau auf Smartphone testen
5. **Preise beachten:**
   - Webpakete: Preise erlaubt (499/999/1999)
   - KI: Keine Preise!

---

## Export-Ordner

Fertige Grafiken ablegen in:
```
/marketing/exports/webpakete/
/marketing/exports/ki-automatisierung/
```
