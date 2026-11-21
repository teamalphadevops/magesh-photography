"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Reveal from "./Reveal";
import { galleryCategories, site } from "@/content/site";

// Shapes used for placeholder tiles until real photos are added
const PH_RATIOS = ["3/4", "4/5", "1/1", "3/4", "4/3", "2/3", "4/5", "3/4", "1/1"];

export default function Gallery({ items }) {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(-1);

  const hasPhotos = items.length > 0;

  const placeholders = useMemo(
    () =>
      galleryCategories.flatMap((c, ci) =>
        [0, 1].map((k) => ({
          category: c.label,
          folder: c.folder,
          ratio: PH_RATIOS[(ci * 2 + k) % PH_RATIOS.length],
          hue: (ci * 2 + k) % 6,
        }))
      ),
    []
  );

  const source = hasPhotos ? items : placeholders;
  const visible = filter === "All" ? source : source.filter((i) => i.category === filter);

  const close = useCallback(() => setActive(-1), []);
  const step = useCallback(
    (d) => setActive((a) => (a + d + visible.length) % visible.length),
    [visible.length]
  );

  useEffect(() => {
    if (active < 0) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, step]);

  // Only show filters for categories that actually have photos
  const filters = [
    "All",
    ...galleryCategories
      .map((c) => c.label)
      .filter((label) => !hasPhotos || items.some((i) => i.category === label)),
  ];

  return (
    <section id="work" className="section gallery">
      <div className="container">
        <div className="section-head section-head--split">
          <div>
            <Reveal>
              <p className="eyebrow">Selected work</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="h2">
                Moments, <em>framed</em> forever.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160} className="filters" role="tablist" aria-label="Filter portfolio">
            {filters.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                className={`filter ${filter === f ? "is-active" : ""}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </Reveal>
        </div>

        <div className="masonry" key={filter}>
          {visible.map((item, i) =>
            hasPhotos ? (
              <button
                key={item.src}
                className="tile"
                data-cursor="View"
                onClick={() => setActive(i)}
                style={{ animationDelay: `${Math.min(i, 12) * 50}ms` }}
              >
                <img src={item.src} alt={`${item.category} photography by Magesh`} loading="lazy" />
                <span className="tile__tag">{item.category}</span>
              </button>
            ) : (
              <div
                key={`${item.folder}-${i}`}
                className={`tile tile--ph ph-hue-${item.hue}`}
                style={{ aspectRatio: item.ratio, animationDelay: `${i * 50}ms` }}
              >
                <div className="tile__ph-inner">
                  <span className="tile__ph-cat">{item.category}</span>
                  <small>Add photos to /public/gallery/{item.folder}/</small>
                </div>
              </div>
            )
          )}
        </div>

        {site.instagram && (
          <div className="gallery__more">
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
              See more on Instagram
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path d="M7 17L17 7M9 7h8v8" fill="none" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </a>
          </div>
        )}
      </div>

      {active >= 0 && hasPhotos && visible[active] && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={close}>
          <button className="lightbox__close" onClick={close} aria-label="Close">
            <svg viewBox="0 0 24 24" width="26" height="26">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous"
          >
            <svg viewBox="0 0 24 24" width="28" height="28">
              <path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
          <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
            <img key={visible[active].src} src={visible[active].src} alt={visible[active].category} />
            <figcaption>
              <span>{visible[active].category}</span>
              <span>
                {String(active + 1).padStart(2, "0")} / {String(visible.length).padStart(2, "0")}
              </span>
            </figcaption>
          </figure>
          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next"
          >
            <svg viewBox="0 0 24 24" width="28" height="28">
              <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
