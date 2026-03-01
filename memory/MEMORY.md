# ORMA Website — Project Memory

## Project Overview
Luxury garden design agency (Kinfolk/editorial aesthetic).
Working directory: `.claude/worktrees/frosty-jones`

## Key Files
- `css/style.css` — global styles (nav, footer, animations, burger menu, lightbox)
- `js/main.js` — global JS (scroll nav, reveal observer, burger menu, lightbox)
- Pages: `index.html`, `approach.html`, `inner-garden.html`, `contact.html`, `about.html`, `about_us.html`, `works.html`
- Also present (unused/backup): `about_us.html` (masha bio), `masha.html` (same), `about.html` (philosophy page)

## Design System
- Colors: `--cream: #FAF9F6`, `--black: #0A0A0A`, `--klein: #002FA7`, `--grey: #6B6B6B`
- Fonts: Crimson Text (serif), museo-sans/DM Sans (sans)
- `body.dark-page` — dark variant used on index.html (video hero)

## Completed Features
- Mobile burger menu (≤768px): `.menu-toggle` button in nav, `.mobile-menu-overlay` full-screen overlay
  - Overlay: cream bg `rgba(250,249,246,0.98)`, links in Crimson Text 32px, fade in/out
  - index.html dark-page: burger spans are white
- Lightbox gallery on works.html: click card → full-screen slideshow
  - 3 projects with 4-5 images each from `/images/` folder
  - Keyboard (←→ Esc), touch swipe, arrow buttons, counter display
  - `window.openLightbox` exposed globally for onclick handlers

## Nav Structure (all pages)
```html
<nav id="nav">
  <a href="index.html" class="nav-logo">...</a>
  <ul class="nav-links">...</ul>
  <button class="menu-toggle" id="menuToggle">3×<span></button>
</nav>
<div class="mobile-menu-overlay" id="mobileMenu">
  <button class="mobile-menu-close" id="menuClose">✕</button>
  <ul class="mobile-nav-links">...</ul>
</div>
```

## Image Assets (in /images/)
garden1_cover.jpg, garden1_plan.jpg, garden1_plant1.jpg, garden1_plant2.jpg
garden2_alternative.jpg, garden2_cover.jpg, garden2_plan.jpg
garden3_alternative.jpg, garden3_cover.JPG (caps), garden3_plan.jpg
work-1.jpg, work-2.jpg, work-3.jpg
masha-portrait.jpg, LOGO_orma.png, LOGO_inner_garden.png
background_video.mp4, Garden_forest_final.mp4
