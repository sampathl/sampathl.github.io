# Sampath Portfolio (React + Vite + TS)

Modern, warm, mobile-first portfolio with a left sidebar, impact cards, theme toggle, MDX-ready writing, and a scroll-tied "video" placeholder.

## Quick start

```bash
# 1) install
npm install

# 2) run dev server
npm run dev
# open the printed localhost URL

# 3) build for production
npm run build
npm run preview
```

> Requires Node 18+.

## Tech choices

- **Vite + React + TypeScript** — fast dev, modern bundling
- **React Router** — pages
- **Tailwind** — styling with theme tokens
- **Framer Motion** — tasteful motion + scroll awareness
- **React Helmet Async** — SEO metas per route
- **TanStack Query** — future-proof data fetching/caching (not yet used on v1)
- **MDX-ready** — author notes/case studies with React components

## File structure

```
sampath-portfolio/
  public/
    placeholder.jpg                # replace with your images
    cv/Sampath_Lakkaraju_CV.pdf    # replace with your real CV
  src/
    components/
      ImpactCard.tsx
      Layout.tsx
      ScrollScrubVideo.tsx
      Theme.tsx
    lib/
      cn.ts
      constants.ts                 # centralized navigation and config
    pages/
      About.tsx
      Contact.tsx
      Home.tsx
      Project.tsx
      Projects.tsx
      Writing.tsx
    styles/
      globals.css
    App.tsx
    main.tsx
  index.html
  tailwind.config.js
  postcss.config.js
  vite.config.ts
  tsconfig.json
  package.json
  README.md
```

## Architecture: Dual Navigation Pattern

This portfolio uses a **hybrid navigation approach** that combines single-page scrolling with traditional routing:

### Home Page Sections (Scroll-Based)
- **`hero`** - Introduction and main call-to-action
- **`experience`** - Impact cards and achievements  
- **`writing`** - Latest articles preview
- **`contact`** - Contact information and status

### Dedicated Route Pages (URL-Based)
- **`/projects`** - Full projects listing
- **`/writing`** - Complete writing archive
- **`/about`** - Detailed about page
- **`/contact`** - Dedicated contact form

### Why This Pattern?
- **Quick Overview**: Users see everything important on home page without clicking
- **Deep Dive**: Users navigate to dedicated pages for detailed content
- **SEO Friendly**: Separate URLs for different content types
- **Bookmarkable**: Users can bookmark specific sections
- **Performance**: Home page loads quickly with essential content
- **Scalability**: Easy to add more content to dedicated pages

The navigation in `src/lib/constants.ts` handles both approaches - scroll-to-section for home page content and route navigation for dedicated pages.

## How to customize content

### Hero
Edit `src/pages/Home.tsx` hero text and CTAs. Put your CV as `public/cv/Sampath_Lakkaraju_CV.pdf`.

### Impact highlights
Edit the `<ImpactCard>` items in `Home.tsx`. Keep a metric and a one-liner.

### Projects
Add to `src/pages/Projects.tsx`. Each item links to `/projects/:slug` which uses `Project.tsx` (template). Create dedicated pages later by branching `Project.tsx` or swapping to file-based routing if you migrate to Next.

### Writing (MDX)
Add MDX files under `src/writing` (you can create the folder) and import them in `src/pages/Writing.tsx`. The repo already supports MDX via the `@mdx-js/rollup` plugin in `vite.config.ts`.

### Scroll-tied video
`src/components/ScrollScrubVideo.tsx` is a placeholder. Replace the inner block with a `<video>` element. Keep videos **5–10s, muted, loop, 1080p max**. Provide a static poster and respect `prefers-reduced-motion` (swap to a static image).

### Theme
Colors are CSS variables in `src/styles/globals.css`. The light theme mirrors a warm Marugame-like feel; dark mirrors a restrained OpenAI vibe. Toggle lives in `Theme.tsx` and is used in the sidebar.

### Mobile behavior
On small screens the sidebar collapses into a compact bar with a Menu button. Hit areas are large and content uses stacked layout.

## SEO & performance

- Add per-page `<Helmet>` title+description.
- Use small, compressed images (AVIF/WEBP) in `public/` and reference with `/...` URLs.
- If you need SEO for deep pages, consider pre-rendering critical routes (Netlify / Vercel prerender) or migrate to Next.js later. This SPA structure keeps that door open.

## Next steps (recommended)

1. **Replace placeholders** — add a real headshot, project thumbnails, and your CV PDF.
2. **One flagship case study** — duplicate `Project.tsx` into a dedicated page and add:
   - TL;DR (role, timeframe, metrics)
   - Problem → Approach → Architecture → Results
   - Diagram or short scroll-tied video
   - “What I’d do next”
3. **Add Writing (MDX)** — start with: PySpark 90% speedup, Idempotent APIs, Serverless patterns.
4. **Analytics** — add your preferred privacy-friendly analytics (e.g., Umami).
5. **Contact** — change `your.email@example.com` and LinkedIn handle in `Contact.tsx`.
6. **Assets pipeline** — if you want automatic image optimization, use Cloudinary (drop-in URLs) or convert images to AVIF/WEBP and use `srcset` in components.
7. **Accessibility** — ensure alt text on all images and `prefers-reduced-motion` fallbacks for motion sections.
8. **Deployment** — Netlify/Vercel/Cloudflare Pages work out of the box.

## Migration path

When/if you want SSG/SSR, localized routes, API routes, or automatic image optimization, migrate to **Next.js**. Your components and styles will port almost directly.

---

Happy shipping!
