# stuff — onyx's website ⭐

a tiny straw.page-style about-me site. everything lives in **one file**: `index.html`.

## run it locally

```bash
npm start          # serves the site on http://localhost:3000
```

or just open `index.html` in a browser.

## edit it (the fun part ✏️)

open `index.html` and look for these spots:

| what | where to look |
| --- | --- |
| your name / tagline | `<h1>hi, i'm <span class="grad">onyx</span>` + `.tagline` |
| quick facts | the `<ul class="facts">` list |
| socials | the `.social-btn` links in the "find me" card |
| about me text | the "about me" card |
| colors (dark mode) | the `[data-theme="dark"]` block at the top of `<style>` |
| colors (light mode) | the `[data-theme="light"]` block |
| doodle colors | `DOODLE_COLORS_DARK` / `DOODLE_COLORS_LIGHT` in the `<script>` |
| music pill | search for `music pill` in the script |
| marquee text | the `<span>` inside `.marquee` |

## features

- 🌙 **dark mode** (default) + ☀️ light mode — toggle in the top bar, choice is remembered
- ✦ **palette shuffle** — rotates the star colors
- ✉️ **ask box** — anonymous messages save to the guestbook (stored in the visitor's browser via `localStorage`)
- 🎨 **doodle box** — draw + save as PNG
- 📖 **guestbook** — clear/export entries as JSON
- 🎵 music pill placeholder — wire up an `<audio>` src whenever you want

> note: guestbook + ask entries are saved per-browser (no backend). if you ever want
> shared entries across visitors, that needs a tiny backend later.

## deploy

any static host works — the site is one HTML file with zero dependencies:

```bash
npm run build      # outputs dist/index.html
```
