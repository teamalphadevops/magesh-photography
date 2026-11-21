# Magesh Photography — how to add your content

## 1. Photos (just drop files in folders)

| What                | Folder                        | Notes                                   |
|---------------------|-------------------------------|-----------------------------------------|
| Big homepage image  | `public/hero/`                | 1 landscape photo (first file is used)  |
| Your portrait       | `public/about/`               | 1 portrait photo                        |
| Wedding portfolio   | `public/gallery/wedding/`     | as many as you like                     |
| Candid portfolio    | `public/gallery/candid/`      |                                         |
| Couple portfolio    | `public/gallery/couple/`      |                                         |
| Baby portfolio      | `public/gallery/baby/`        |                                         |
| Events portfolio    | `public/gallery/events/`      |                                         |

- Formats: `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`
- Photos are shown in name order — rename to `01.jpg`, `02.jpg`… to control the order.
- Resize to about **2000px on the long side** (under ~500 KB each) so the site loads fast.
- While a folder is empty, the site shows an elegant placeholder tile in its place.
- After adding photos: refresh the page in `npm run dev`; for the live site, run `npm run build` again.

## 2. Text

Edit **`content/site.js`** — studio name, intro line, about text, services, process steps,
phone, email, address, and Instagram / YouTube / Facebook links.

## 3. Run it

```
npm install
npm run dev      # open http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```
