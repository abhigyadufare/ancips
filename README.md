# ANCIPS 2026 — Conference Website

A modern, elegant Next.js conference website for **ANCIPS 2026** (Annual National Conference of the Indian Psychiatric Society), inspired by the original [ancips2027.com](https://ancips2027.com) design but fully rebuilt with:

- ✅ **Next.js 14** (App Router, TypeScript)
- ✅ **Tailwind CSS** with a custom mental-health-inspired color palette
- ✅ **Framer Motion** — parallax hero, scroll-triggered animations, 3D tilt cards, flip countdown
- ✅ **Google Form Embed Component** — drop-in, configurable, with fullscreen toggle
- ✅ **Countdown Timer** — configurable to any date, supports multiple visual themes
- ✅ **Fully Responsive** — mobile-first, glassmorphism navbar, drawer menu
- ✅ All 2027 references updated to **December 2026**

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx                    # Homepage (hero, countdown, welcome, theme, venue)
│   ├── layout.tsx                  # Root layout with Navbar + Footer
│   ├── globals.css                 # Global styles, CSS variables, design tokens
│   ├── about/
│   │   ├── president/page.tsx      # President's message
│   │   └── past-president/page.tsx # Imm. Past President
│   ├── committee/
│   │   ├── organising/page.tsx     # Organising Committee grid
│   │   └── office-bearers/page.tsx # Office Bearers list
│   ├── registration/
│   │   ├── page.tsx                # Registration fee table
│   │   └── abstract/page.tsx       # Abstract submission (Google Form embed)
│   ├── venue/
│   │   ├── page.tsx                # About Venue + gallery
│   │   ├── places/page.tsx         # Places to Visit
│   │   └── how-to-reach/page.tsx   # How to Reach Madurai
│   ├── contact/page.tsx            # Contact page (Google Form embed)
│   ├── downloads/page.tsx          # Downloads (reg form + brochure)
│   ├── terms/page.tsx
│   └── privacy/page.tsx
├── components/
│   ├── Navbar.tsx                  # Glassmorphism responsive navbar
│   ├── Footer.tsx                  # Multi-column footer
│   ├── CountdownTimer.tsx          # ⭐ Configurable countdown timer
│   ├── GoogleFormEmbed.tsx         # ⭐ Google Form embed component
│   ├── PageHero.tsx                # Reusable inner-page hero with breadcrumbs
│   └── Section.tsx                 # Scroll-triggered section wrapper
```

---

## ⭐ Key Components

### CountdownTimer

Drop into any page:

```tsx
import CountdownTimer from '@/components/CountdownTimer'

<CountdownTimer
  targetDate="2026-12-07T09:00:00"   // ISO date string — update when confirmed
  label="Conference starts in"
  variant="dark"                      // "light" | "dark" | "glass"
/>
```

### GoogleFormEmbed

Embed any Google Form on any page:

```tsx
import GoogleFormEmbed from '@/components/GoogleFormEmbed'

<GoogleFormEmbed
  formUrl="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform"
  title="Registration Form"
  description="Fill in the form to register."
  height={800}
  showDirectLink={true}
  directLinkUrl="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform"
/>
```

It automatically:
- Converts regular Google Form URLs to embedded URLs
- Shows a loading spinner while the form loads
- Provides a fullscreen toggle
- Shows a "placeholder" state if no URL is provided (handy during development)

---

## 🎨 Color Palette (Mental Health & Peace)

| Token | Hex | Meaning |
|-------|-----|---------|
| `teal-600` `#0d9488` | Primary | Trust, healing, calm |
| `sage-500` `#5f8a5f` | Secondary | Nature, growth |
| `lavender-500` `#8b5cf6` | Accent | Creativity, peace |
| `warm-500` `#f59e0b` | Warm accent | Optimism, warmth |

---

## 📅 To Update Conference Dates

1. **Hero chip** — `src/app/page.tsx` line ~78: `December 2026 {/* UPDATE WHEN EXACT DATES CONFIRMED */}`
2. **Countdown** — `src/app/page.tsx` line ~127: `targetDate="2026-12-07T09:00:00"`
3. **Registration table** — `src/app/registration/page.tsx` — deadline dates are set to Aug/Nov/Dec 2026
4. **Footer** — `src/components/Footer.tsx` — "Madurai • December 2026"

---

## 📝 To Configure Google Forms

Replace `"PLACEHOLDER"` with your actual Google Form URL in:

- `src/app/registration/abstract/page.tsx` — Abstract submission form
- `src/app/contact/page.tsx` — Contact/inquiry form

---

## 🏗️ Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

Deploy easily to **Vercel** (recommended for Next.js):
```bash
npx vercel
```

---

## 🖼️ Image Sources

All images are loaded from the original `ancips2027.com` CDN. To host images locally:
1. Download images to `/public/images/`
2. Update `<img src="...">` tags to use `/images/...`
3. Update `next.config.js` to remove the remote patterns

---

## 📦 Dependencies

| Package | Purpose |
|---------|---------|
| `next` 14 | Framework |
| `framer-motion` 11 | Animations (parallax, spring, scroll-trigger) |
| `tailwindcss` 3 | Utility-first CSS |
| `lucide-react` | Icon set |
| `typescript` | Type safety |
