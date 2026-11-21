# Magesh Photography

A portfolio website for Magesh Photography, showcasing wedding, candid, couple, baby, and event photography in Chennai.

**Live site:** https://kamaleshboobalan.github.io/magesh-photography/

## Technology

- Next.js 16
- React 19
- Static export for GitHub Pages
- Responsive CSS with subtle motion and reveal effects

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

The static site is generated in `out/`.

## Content

- Add photos to the matching folders in `public/`.
- Edit studio details and links in `content/site.js`.
- Follow `CONTENT-GUIDE.md` for photo dimensions and placement.

## Deployment

The included GitHub Actions workflow builds and deploys `main` to GitHub Pages. In repository Settings > Pages, set Source to **GitHub Actions**.
