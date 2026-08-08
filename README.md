# Kashifur Rahman Reza — Portfolio (Next.js, single-page)

Built with Next.js 15 (App Router), Turbopack, Tailwind CSS, and Framer Motion.
Layout modeled on brittanychiang.com: fixed sidebar (name, scroll-spy nav, socials)
+ a scrollable content column with numbered sections, monochrome white/grey theme.

## Setup

```bash
npm install
npm run dev
```

Opens at http://localhost:3000. `npm run dev` runs `next dev --turbopack`.

Production build:

```bash
npm run build
npm run start
```

> Installed and built successfully in a sandboxed environment before delivery — the
> single route compiled and statically pre-rendered with no errors. The only thing
> that couldn't be verified there was the `next/font` Google Fonts fetch, since that
> sandbox blocks outbound requests to fonts.googleapis.com. It'll fetch normally on
> your machine on first run with a working internet connection.

## Structure

```
app/
  layout.js              — fonts + metadata, no shared nav (this is a true single page)
  page.js                — the entire site: Sidebar + MobileHeader + 4 sections + footer
  components/
    Sidebar.jsx           — desktop-only fixed sidebar: name, bio, scroll-spy nav, socials
    MobileHeader.jsx       — sticky top bar + hamburger dropdown for small screens
    useScrollSpy.js        — IntersectionObserver hook driving active-nav highlighting
    SectionHeading.jsx     — "01  About Me ───" numbered heading used by each section
    StatusLine.jsx         — small live clock / availability line (your flavour touch)
    About.jsx, Skills.jsx, Projects.jsx, Education.jsx — section content
```

Sections are plain anchors (`#about`, `#skills`, `#projects`, `#education`) on one route —
no React Router, no multi-page navigation. Clicking a sidebar/mobile-menu item smooth-scrolls
via CSS (`scroll-behavior: smooth` in globals.css) plus `scroll-mt-24` on each section so
anchors don't land under the mobile sticky header.

## TODO before you ship this

1. **`app/components/Sidebar.jsx` and `MobileHeader.jsx`** — resume link points to
   `/KashifurRahmanReza.pdf`; add that file to `public/`.
2. **Images** — profile photo (used to live in `LeftSideNav`, now removed from this
   layout to match Brittany Chiang's photo-less sidebar — say the word if you want a
   small avatar added back), university logo, and project screenshot pull from
   `i.ibb.co.com`. `next.config.mjs` allows that domain for `next/image`. Self-host in
   `public/` if you'd rather.
3. **More projects** — `app/components/Projects.jsx` has a `PROJECTS` array; push
   another object and the card layout handles it.
4. **Contact section** — still not built. Worth adding as a 5th anchor section given
   this is meant to attract recruiters.

## Design system

White background, gray-900/gray-800 for solid buttons and emphasis text, gray-100/200/300
for borders and secondary surfaces — no accent color anywhere except real tech-logo brand
colors on the Skills cards.
