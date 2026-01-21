# IC-RESULTING GmbH Website

Modern, responsive website built with **Nuxt 3**, **Vue 3**, and **Tailwind CSS**.

## 🚀 Features

- ⚡️ **Nuxt 3** - Modern Vue.js framework
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📱 **Fully Responsive** - Mobile-first design
- 🎯 **SEO Optimized** - Meta tags and structured data
- 🌙 **Modern UI** - Clean and professional design
- 🔤 **Google Fonts** - Inter & Plus Jakarta Sans
- 🎭 **Smooth Animations** - CSS transitions and animations

## 📦 Tech Stack

- **Framework:** Nuxt 3
- **UI Framework:** Vue 3 (Composition API)
- **Styling:** Tailwind CSS
- **Icons:** Nuxt Icon (Heroicons, MDI)
- **Fonts:** Google Fonts (Inter, Plus Jakarta Sans)

## 🛠️ Setup

### Prerequisites

- Node.js 22+ 
- pnpm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 📁 Project Structure

```
ic-resulting/
├── assets/
│   └── css/
│       └── main.css          # Global styles & Tailwind
├── components/
│   ├── TheHeader.vue         # Navigation header
│   └── TheFooter.vue         # Site footer
├── composables/
│   └── useScrollAnimation.ts # Scroll animation utility
├── layouts/
│   └── default.vue           # Default layout
├── pages/
│   ├── index.vue             # Homepage
│   ├── it-solutions.vue      # IT Solutions page
│   ├── loesungen.vue         # Solutions overview
│   ├── referenzen.vue        # References & clients
│   ├── blog/                 # Blog section
│   ├── kontakt.vue           # Contact page
│   ├── karriere.vue          # Careers page
│   ├── ueber-uns.vue         # About page
│   ├── impressum.vue         # Legal notice
│   └── datenschutz.vue       # Privacy policy
├── public/
│   ├── favicon.svg           # Site favicon
│   └── logo/                 # Logo folder
├── app.vue                   # App entry point
├── nuxt.config.ts            # Nuxt configuration
├── tailwind.config.js        # Tailwind configuration
└── package.json              # Dependencies
```

## 🎨 Color Scheme

The website uses a professional blue color palette:

- **Primary:** Blue (#3b82f6 - #1e3a8a)
- **Accent:** Cyan (#06b6d4 - #164e63)
- **Dark:** Slate (#64748b - #020617)

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Homepage | `/` | Main landing page |
| IT Solutions | `/it-solutions` | IT services & capabilities |
| Solutions | `/loesungen` | Solution overview |
| References | `/referenzen` | Clients & projects |
| Blog | `/blog` | News & articles |
| Contact | `/kontakt` | Contact form & info |
| Careers | `/karriere` | Job opportunities |
| About | `/ueber-uns` | Company information |
| Impressum | `/impressum` | Legal notice |
| Privacy | `/datenschutz` | Privacy policy |

## 🌐 Deployment

The website can be deployed to:

- **Vercel** (recommended)
- **Netlify**
- **Cloudflare Pages**
- **Any Node.js hosting**

```bash
# Generate static site
pnpm generate

# Build for SSR
pnpm build
```

## 📞 Contact

**IC-RESULTING**  
Dipl.-Inf. Ibrahim Canakci  
Obere Webergasse 58  
65183 Wiesbaden  
Germany

Phone: +49 (0) 176 618 659 80  
Email: info@ic-resulting.de

---

© 2026 IC-RESULTING. All rights reserved.
