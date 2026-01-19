# Webpakete Flyer – Marketing Kampagne

> **Ziel:** Kundengewinnung für Website-Projekte bei KMU  
> **Positionierung:** Premium-Alternative zu Baukästen (Wix, IONOS, Jimdo)  
> **Kernbotschaft:** *Verantwortung und Kompetenz*

---

## 🎯 Wettbewerbsanalyse & Positionierung

### Wettbewerber-Preise (Stand Januar 2026)

| Anbieter | Modell | Preis | Nachteile |
|----------|--------|-------|-----------|
| **IONOS** | Baukasten-Abo | 6-33 €/Monat | Template-Look, Plattform-Abhängigkeit |
| **Wix** | Baukasten-Abo | 12-40 €/Monat | Eingeschränktes SEO, Werbung |
| **Jimdo** | Baukasten-Abo | 9-39 €/Monat | Limitierte Anpassungen |
| **Agenturen** | Projektbasis | 2.000-10.000+ € | Teuer, lange Abstimmungen |

### 💪 IC-RESULTING Wettbewerbsvorteile

| Vorteil | Beschreibung |
|---------|--------------|
| ✅ **Festpreis** | Keine Abo-Falle, einmalige Zahlung |
| ✅ **Eigentum** | Website gehört Ihnen, keine Plattform-Abhängigkeit |
| ✅ **Persönlich** | Dipl.-Inf. als Ansprechpartner, nicht Hotline |
| ✅ **Technologie** | Vue.js/Nuxt statt Template-Baukasten |
| ✅ **Kompetenz** | PRINCE2, ITIL, SÜ2-sicherheitsgeprüft |
| ✅ **DSGVO** | Echte Expertise, nicht nur Cookie-Banner |

### 📊 Kostenvergleich (3-Jahres-Rechnung)

| Lösung | Monat 1 | Jahr 1 | Jahr 3 |
|--------|---------|--------|--------|
| IONOS Plus (18€/Mo) | 18 € | 216 € | 648 € |
| Wix Business (22€/Mo) | 22 € | 264 € | 792 € |
| **IC-RESULTING Silber** | **499 €** | **499 €** | **499 €** |
| **IC-RESULTING Gold** | **999 €** | **999 €** | **999 €** |

> 💡 **Verkaufsargument:** Ab Jahr 2 zahlen Baukasten-Kunden weiter – Sie nicht!

---

## 📁 Dateien

| Datei | Format | Verwendung |
|-------|--------|------------|
| `flyer-a4.html` | HTML | Editierbar im Browser, Print-to-PDF |
| `flyer-a4.css` | CSS | Modernes Stylesheet (basierend auf ic-resulting.de) |

---

## 📤 Export als PDF

### Option 1: Browser Print-to-PDF (empfohlen)

1. Öffne `flyer-a4.html` im Browser (Chrome/Edge empfohlen)
2. Drücke `Strg + P` (Windows) oder `Cmd + P` (Mac)
3. Wähle **"Als PDF speichern"** als Drucker
4. Einstellungen:
   - Papierformat: **A4**
   - Ränder: **Keine** (wichtig für das Design!)
   - Hintergrundgrafiken: ✓ **Aktivieren**
5. Speichern unter: `/marketing/exports/webpakete/flyer-a4.pdf`

### Option 2: Automatisiert mit Playwright (Node.js)

```bash
npx playwright pdf flyer-a4.html flyer-a4.pdf --format=A4
```

---

## ✏️ Bearbeitung

### HTML bearbeiten
- Texte direkt in `flyer-a4.html` ändern
- Preise in den `.price` Elementen anpassen
- Features in `.features` Listen ändern
- Vergleichstabelle in `.comparison-section` aktualisieren

### Design-Varianten
- Primärfarbe ändern: CSS Variable `--primary` in `flyer-a4.css`
- Gradient-Hintergrund: `.bg-gradient` Klasse anpassen
- Pakete hervorheben: `.recommended` Badge hinzufügen

---

## 💰 Preise (aktuell)

| Paket | Preis | Seiten | Extras |
|-------|-------|--------|--------|
| **Silber** | 499 € | bis 5 | Responsive, 1 Korrekturschleife |
| **Gold** ⭐ | 999 € | bis 10 | SEO, Kontaktformular, 2 Schleifen |
| **Platin** | 1.999 € | bis 15 | Full-Service, CMS, unbegrenzte Schleifen |
| Hosting Standard | 50 €/Monat | – | Wartung, Updates, Support |
| Hosting Premium | 100 €/Monat | – | Priority-Support, Analytics |

⚠️ Bei Preisänderungen HTML-Datei aktualisieren!

---

## 📣 Verwendung in Kampagnen

### Social Media
- Vergleichstabelle als Grafik extrahieren (Screenshot der Comparison-Section)
- **Headline:** *"Warum jeden Monat zahlen, wenn es auch einmal geht?"*
- **Call-to-Action:** Kostenloses Beratungsgespräch

### Flyer-Verteilung
- **Zielgruppe:** Lokale KMU, Handwerker, Freiberufler
- **Orte:** Gründerzentren, IHK-Veranstaltungen, Gewerbegebiete
- Kombination mit Visitenkarten empfohlen

### E-Mail-Marketing
- PDF als Anhang bei Kaltakquise
- QR-Code führt zu Landingpage

---

## 🖨️ Druckhinweise

- Empfohlen: 300 DPI für Druckqualität
- Farbmodus: RGB (für Digital) oder CMYK konvertieren (für Druck)
- Beschnitt: Bei professionellem Druck 3mm hinzufügen
- Papier: 170-250 g/m² für professionellen Eindruck

---

## 🎨 Design-System

### Farben (aus ic-resulting.de)
```css
--primary: #2563eb       /* Blau */
--accent: #06b6d4        /* Cyan */
--dark: #0f172a          /* Dunkel */
--success: #22c55e       /* Grün für Checkmarks */
--danger: #ef4444        /* Rot für X-Marks */
```

### Schriften
- **Headlines:** Plus Jakarta Sans (700)
- **Body:** Inter (400, 500)

---

*Letzte Aktualisierung: Januar 2026*
