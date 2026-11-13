# Rajaul & Lawyers — website (royal blue brand)

Next.js 15 (App Router) + plain CSS. Same layout as the maroon version, recoloured to the brand palette taken from the logo files:

| token | hex | use |
|---|---|---|
| `--navy` | `#05253F` | brand blue (logo "B"), hero panel, hover states |
| `--royal` | `#0B3760` | stats band, WhatsApp button |
| `--steel` | `#375E7D` | secondary blue (logo tagline) |
| `--champagne` | `#F0DAB8` | logo mark on dark (logo "Y") |
| `--ink` | `#060C14` | dark sections |
| `--cream` | `#F3EEE6` | light sections |

All colours live at the top of `app/globals.css`.

## Motion

All animation is in `lib/motion.ts`, started by `components/Motion.tsx`:

- **Lenis** — smooth, weighted scrolling; anchor links glide to their section
- **GSAP + ScrollTrigger + SplitText** — logo preloader, hero curtain reveal, headline line-by-line reveals, image curtains with parallax, the "How we work" line drawing itself, footer wordmark rising letter by letter, header hiding on scroll down and returning on scroll up, marquee that speeds up and reverses with scroll
- **Vanta (fog)** — slow navy WebGL field behind "Let's discuss your matter"; it only runs while that section is near the screen
- **React Bits patterns** — count-up stats, blur-in quote, magnetic buttons

Visitors who set "reduce motion" in their OS get the static site with no animation.

## Run

```bash
npm install
npm run dev
```

## Where things are

- `lib/site.ts` — all copy, team, practice areas, contact details and image URLs (swap the Unsplash links for your own files in `public/images/` here)
- `app/page.tsx` — the home page sections
- `lib/motion.ts` — every animation
- `components/Header.tsx` — fixed header (turns solid on scroll, mobile menu)
- `public/brand/mark.png` — the R&L monogram as a transparent mask; CSS gives it its colour
