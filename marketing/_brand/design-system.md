# IC-RESULTING Farb- & Designsystem

> Technische Referenz für Designer und Entwickler
> Basierend auf der aktuellen Website (Tailwind CSS)

---

## FARBPALETTE

### Primärfarben

| Name | HEX | RGB | Tailwind | Verwendung |
|------|-----|-----|----------|------------|
| Navy Dark | #0F172A | 15, 23, 42 | slate-900 | Headers, Footers |
| Navy Medium | #1E293B | 30, 41, 59 | slate-800 | Cards, Sections |
| Teal Primary | #14B8A6 | 20, 184, 166 | teal-500 | CTAs, Akzente |
| Teal Light | #2DD4BF | 45, 212, 191 | teal-400 | Hover States |

### Neutralfarben

| Name | HEX | RGB | Tailwind | Verwendung |
|------|-----|-----|----------|------------|
| White | #FFFFFF | 255, 255, 255 | white | Hintergründe |
| Gray 50 | #F9FAFB | 249, 250, 251 | gray-50 | Light Sections |
| Gray 100 | #F3F4F6 | 243, 244, 246 | gray-100 | Alternate BG |
| Gray 300 | #D1D5DB | 209, 213, 219 | gray-300 | Borders |
| Gray 600 | #4B5563 | 75, 85, 99 | gray-600 | Body Text |
| Gray 900 | #111827 | 17, 24, 39 | gray-900 | Headlines |

### Akzentfarben

| Name | HEX | Tailwind | Verwendung |
|------|-----|----------|------------|
| Success Green | #10B981 | emerald-500 | Erfolg, Häkchen |
| Warning Yellow | #F59E0B | amber-500 | Hinweise |
| Error Red | #EF4444 | red-500 | Fehler, Alerts |
| Info Blue | #3B82F6 | blue-500 | Info-Badges |

---

## TYPOGRAFIE

### Schrifthierarchie

```
H1 (Hero):    text-4xl md:text-5xl lg:text-6xl font-bold
H2 (Section): text-3xl md:text-4xl font-bold
H3 (Card):    text-xl md:text-2xl font-semibold
H4 (Sub):     text-lg font-semibold
Body:         text-base leading-relaxed
Small:        text-sm text-gray-600
Caption:      text-xs text-gray-500
```

### Schriftfamilie
- **Primary:** System Font Stack (optimale Ladezeit)
- **Mono:** Für Code-Snippets

### Textfarben
- Headlines: `text-gray-900` (Light) / `text-white` (Dark)
- Body: `text-gray-600` (Light) / `text-gray-300` (Dark)
- Muted: `text-gray-500`
- Links: `text-teal-500 hover:text-teal-600`

---

## ABSTÄNDE & LAYOUT

### Spacing Scale (Tailwind)
```
xs:   0.5rem  (8px)   → p-2, m-2
sm:   0.75rem (12px)  → p-3, m-3
base: 1rem   (16px)   → p-4, m-4
md:   1.5rem (24px)   → p-6, m-6
lg:   2rem   (32px)   → p-8, m-8
xl:   3rem   (48px)   → p-12, m-12
2xl:  4rem   (64px)   → p-16, m-16
```

### Container
```
max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
```

### Section Spacing
```
py-16 md:py-24 lg:py-32
```

---

## KOMPONENTEN

### Buttons

**Primary CTA:**
```css
bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold
transition-colors duration-200
```

**Secondary:**
```css
border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white
px-6 py-3 rounded-lg font-semibold transition-colors duration-200
```

**Ghost:**
```css
text-teal-500 hover:text-teal-600 font-semibold
```

### Cards

**Standard Card:**
```css
bg-white rounded-xl shadow-lg p-6 md:p-8
hover:shadow-xl transition-shadow duration-300
```

**Dark Card:**
```css
bg-slate-800 rounded-xl p-6 md:p-8
border border-slate-700
```

### Badges

```css
inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
bg-teal-100 text-teal-800  /* Success */
bg-blue-100 text-blue-800   /* Info */
bg-amber-100 text-amber-800 /* Warning */
```

---

## ICONS

### Empfohlene Icon-Sets
- **Heroicons** (bereits in Nuxt integriert)
- **Lucide Icons** (Alternative)

### Icon Sizing
```
Small:  w-4 h-4  (16px) – Inline, Buttons
Base:   w-5 h-5  (20px) – Listen, Navigation
Medium: w-6 h-6  (24px) – Cards, Features
Large:  w-8 h-8  (32px) – Hero, Highlights
XL:     w-12 h-12 (48px) – Feature Icons
```

### Icon Colors
- Standard: `text-gray-400`
- Active: `text-teal-500`
- On Dark: `text-gray-300`

---

## ANIMATIONEN

### Transitions
```css
transition-all duration-200    /* Schnell (Hover) */
transition-all duration-300    /* Standard */
transition-all duration-500    /* Langsam (Scroll) */
```

### Hover Effects
- Buttons: `hover:scale-105` (subtil)
- Cards: `hover:shadow-xl`
- Links: `hover:text-teal-600`

### Scroll Animations (aus useScrollAnimation.ts)
- Fade In Up
- Fade In
- Scale In
- Stagger für Listen

---

## RESPONSIVE BREAKPOINTS

| Breakpoint | Min Width | Verwendung |
|------------|-----------|------------|
| sm | 640px | Tablets (Portrait) |
| md | 768px | Tablets (Landscape) |
| lg | 1024px | Desktop |
| xl | 1280px | Large Desktop |
| 2xl | 1536px | Extra Large |

### Mobile First
```css
text-base md:text-lg lg:text-xl
grid-cols-1 md:grid-cols-2 lg:grid-cols-3
```

---

## DARK MODE

### Aktivierung
```vue
<div class="dark">
  <!-- Dark Mode Content -->
</div>
```

### Farb-Mapping
| Light | Dark |
|-------|------|
| white | slate-900 |
| gray-50 | slate-800 |
| gray-900 (text) | white |
| gray-600 (text) | gray-300 |

---

## EXPORT FÜR DESIGNER

### Figma/Sketch Color Tokens
```json
{
  "colors": {
    "primary": {
      "teal-500": "#14B8A6",
      "teal-400": "#2DD4BF"
    },
    "neutral": {
      "slate-900": "#0F172A",
      "slate-800": "#1E293B",
      "white": "#FFFFFF"
    }
  }
}
```

### Social Media Formate

| Plattform | Format | Größe |
|-----------|--------|-------|
| LinkedIn Post | 1.91:1 | 1200x628px |
| LinkedIn Carousel | 1:1 | 1080x1080px |
| Instagram Post | 1:1 | 1080x1080px |
| Instagram Story | 9:16 | 1080x1920px |
| XING Post | 1.91:1 | 1200x628px |
| Google Business | 4:3 | 1200x900px |
