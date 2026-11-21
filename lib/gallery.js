import fs from "fs";
import path from "path";
import { galleryCategories } from "@/content/site";
import { assetPath } from "@/lib/paths";

const IMAGE_EXT = /\.(jpe?g|png|webp|avif|gif)$/i;

function listImages(relDir) {
  const abs = path.join(process.cwd(), "public", relDir);
  try {
    return fs
      .readdirSync(abs)
      .filter((f) => IMAGE_EXT.test(f))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((f) => assetPath(`/${relDir}/${encodeURIComponent(f)}`).replace(/\\/g, "/"));
  } catch {
    return [];
  }
}

/** Reads /public/gallery/<folder>/ for every category. */
export function getGallery() {
  const items = [];
  for (const cat of galleryCategories) {
    for (const src of listImages(path.join("gallery", cat.folder))) {
      items.push({ src, category: cat.label });
    }
  }
  return items;
}

/** First image in /public/hero/ (or null). */
export function getHeroImage() {
  return listImages("hero")[0] || null;
}

/** First image in /public/about/ (or null). */
export function getAboutImage() {
  return listImages("about")[0] || null;
}
