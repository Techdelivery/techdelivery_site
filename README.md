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

Every push to `main` deploys automatically to GitHub Pages via `.github/workflows/deploy.yml`.

Live site: <https://javierarrieta.github.io/techdelivery/>

To use a custom domain (`techdelivery.es`), add it under **Settings → Pages → Custom domain** in this repository, then point your DNS at GitHub.
