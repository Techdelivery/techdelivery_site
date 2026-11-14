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

Hosted on Javier's k3s cluster (k8s-titan, Flux GitOps) at **https://www.techdelivery.es**.

- `.github/workflows/publish.yml` builds this site into an nginx image and pushes it to `ghcr.io/techdelivery/techdelivery-site` on every push to `main`.
- The cluster manifest (`apply/50-apps/techdelivery-site/` in k8s-titan) pins the image **by digest**; a deploy is a one-line digest bump in that repo.
- To release: push here, read the digest from the workflow log, open the digest-bump PR in k8s-titan.

Local container test: `docker build -t td . && docker run -p 8080:8080 td`.
