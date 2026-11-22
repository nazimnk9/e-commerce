# Multikart – Gradient (Next.js + TypeScript)

A pixel-faithful Next.js 16 + TypeScript rebuild of the **Multikart gradient demo**
(`https://themes.pixelstrap.com/multikart/front-end/gradient.html`) with the original
theme CSS, images, sliders and animations kept intact.

## Highlights

- **Next.js App Router + TypeScript (strict)** – Next 16, React 19, typed route
  params, data models and browser globals. Home, product pages and the 404 page
  are pre-rendered; the 127 imported template pages are server-rendered on
  demand from `content/pages` (keeps the Vercel static payload small).
- **Home page rebuilt as React components** – hero slider, gradient categories,
  collection banners, tabbed products, product slider, deal zone, parallax
  banners, blog slider, Instagram strip.
- **Every linked template page is available** (`/cart`, `/checkout`, `/login`,
  `/wishlist`, `/compare`, `/about`, `/blog`, `/contact`, `/search`, `/faq`,
  `/elements`, all demo home pages, invoices, …) plus a dynamic product detail
  route at `/product/[slug]`.
- **Original animation stack**: jQuery + Slick (hero fade slider, product/blog/
  Instagram carousels), Bootstrap 5 modals/offcanvas/accordion, SmartMenus mega
  menu, WOW.js, animate.css and the theme's own `script.js` behaviours.
- **Working store UI**: search modal, cart offcanvas with quantity/subtotal,
  add-to-cart modal, quick view, variation modal, mobile slide menu, sticky
  header, tap-to-top, newsletter popup, skeleton loader.
- **Theme customizer** (Customize tab → colour/demo/RTL/dark options) and the
  ThemeForest preview badge are included like the live preview.
- **Page-specific plugins are restored** on demo pages (price-range, isotope,
  magnific-popup lightbox, prism, date picker, countdown timers, …) through a
  small `PageAssets` loader that only runs the scripts a page originally used.
- Local assets only – no runtime requests to the theme CDN.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # tsc --noEmit (strict)
npm run build      # production build (150 static routes)
npm start          # serve the production build
```

Node 20+ is recommended.

## Deploy on Vercel

1. Push this folder to a Git repository and import it in Vercel.
2. Framework preset: **Next.js** – build command `npm run build`, output `.next`.
3. Select **Node.js 22.x** (or any version ≥ 20.9) in Project Settings.
4. No environment variables are required.

Vercel's Hobby plan allows **100 MB of static file uploads**. This project is
prepared for that limit:

- `public/` (theme CSS, JS, fonts, optimised images) is ~70 MB.
- Template pages are rendered on demand by a single Node function instead of
  127 pre-rendered HTML copies; their content is traced into the function bundle
  through `outputFileTracingIncludes` in `next.config.ts`.
- Home, product pages and the 404 page stay statically pre-rendered.

If you are on a Pro plan (1 GB static limit) and prefer every page to be fully
static for maximum CDN performance, add `generateStaticParams()` back to
`app/[slug]/page.tsx` and remove `dynamic = "force-dynamic"`.

## Project structure

```
app/
  layout.tsx              root layout: theme CSS, Header/Footer, overlays, scripts
  page.tsx                gradient home page (React sections)
  [slug]/page.tsx         imported template pages (server-rendered from content/)
  product/[slug]/page.tsx hand-built product detail page
  not-found.tsx           themed 404
components/              typed React components: Header, Footer, cart offcanvas,
                         modals, theme customizer, skeleton loader, page assets
content/
  pages/*.html           page bodies imported from the original template
  theme-settings.html    theme customizer markup
lib/
  data.ts                typed products, categories, banners, blog, Instagram data
  types.ts               shared interfaces (Product, CartItem, PageMeta, …)
  page-index.json        route ➜ title map used by generateStaticParams
types/global.d.ts        window augmentations (WOW, Prism, theme-ready flag)
next.config.ts           typed Next.js config
public/assets/           theme CSS, JS, images, fonts (local copies)
```

## How the imported pages work

Each route in `content/pages` is the original page's body with the shared header
and footer removed. Asset URLs and internal `.html` links are rewritten to the
Next.js routes, and the page's own plugin scripts are appended as inert
`<script type="text/plain" data-mk-*>` nodes. `components/PageAssets.js` loads
those scripts (and executes the inline init code) after the shared theme stack is
ready, so demo-specific interactions keep working without affecting other pages.

## Notes

- This is a front-end template reproduction: forms (newsletter, checkout, login)
  are UI only and post to the same endpoints/actions as the original demo.
- Product/cart data is demo data held in React state; there is no backend.
- Theme assets (CSS, images, icons, copy) belong to **Pixelstrap / Multikart**.
  Use them under a valid ThemeForest licence for production.
- The preview-only "Buy @ 30% OFF" badge links to the Pixelstrap portfolio and can
  be removed by deleting `components/PreviewBadge.js` from the layout.
- Nine images were already 404 on the live Pixelstrap demo (the christmas, game,
  jewellery and tools demo pages). They are remapped to available artwork from
  the same demo so the deployed build has no broken image requests.
- Images in `public/assets/images` were optimised once (max 1600 px, JPEG q72,
  lossless/palette PNG) to keep the Vercel deployment within the Hobby static
  upload limit while preserving the design.
- Demo-specific scripts are loaded automatically only when their markup exists
  (for example the countdown timer is skipped on pages without a countdown), which
  keeps the console clean while preserving every plugin the page originally used.