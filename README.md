# Techdelivery — marketing site

Single-page bilingual (EN/ES) marketing site for [Techdelivery](https://www.linkedin.com/in/jarrieta/), a software consulting practice by Javier Arrieta.

No build step, no dependencies: plain HTML, CSS and JavaScript.

## Structure

| File | Purpose |
|---|---|
| `index.html` | Page markup; all text uses `data-i18n` keys |
| `styles.css` | All design tokens (colors, spacing, type) and layout |
| `app.js` | Translations (EN/ES), dark mode, nav, contact form |

## Preview locally

Open `index.html` in a browser, or serve it:

```sh
python3 -m http.server 8080
```

## Editing

- **Text**: change the English or Spanish entry in the `I18N` object in `app.js`, and the matching default text in `index.html`.
- **Colors / spacing**: edit the CSS variables at the top of `styles.css` (`:root` for light mode, `html[data-theme="dark"]` for dark mode).

## Deployment

This repository is **private**. GitHub Pages on private repositories requires a paid GitHub plan (Pro/Team). Options:

1. **GitHub Pages (needs Pro):** Pages is already wired via `.github/workflows/deploy.yml` — enable it under **Settings → Pages → Source: GitHub Actions** and every push to `main` deploys.
2. **Free static hosts:** Netlify or Cloudflare Pages can build this repo for free with no configuration (no build step; publish directory `/`).

To use a custom domain (`techdelivery.es`), add it in your host's domain settings and point your DNS there.
