"use client";

import { useEffect, useRef, useState } from "react";

const RING = 2 * Math.PI * 92; // circumference of the progress ring

/**
 * Intro loader: logo inside a gold progress ring + counter,
 * a camera-flash at 100%, then the curtain lifts to reveal the page.
 */
export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("loading"); // loading → flash → exit → gone
  const loaded = useRef(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const minTime = reduce ? 300 : 1500;
    const start = performance.now();
    let timer;
    let value = 0;
    let finished = false;

    const markLoaded = () => (loaded.current = true);
    if (document.readyState === "complete") markLoaded();
    else window.addEventListener("load", markLoaded, { once: true });
    const failSafe = setTimeout(markLoaded, 5000); // stop waiting for slow images after 5s

    document.documentElement.classList.add("is-loading");

    const finish = () => {
      if (finished) return;
      finished = true;
      clearTimeout(timer);
      setProgress(100);
      setPhase("flash");
      setTimeout(() => {
        setPhase("exit");
        document.documentElement.classList.remove("is-loading");
      }, 260);
      setTimeout(() => setPhase("gone"), 1400);
    };
    // Absolute cut-off: the page is always revealed within 7s
    const hardStop = setTimeout(finish, 7000);

    // setTimeout (not requestAnimationFrame) so it keeps going in background tabs
    const tick = () => {
      const elapsed = performance.now() - start;
      const timeTarget = Math.min(1, elapsed / minTime) * 100;
      const target = loaded.current ? timeTarget : Math.min(timeTarget, 88);
      value += (target - value) * 0.18;
      if (target === 100 && value > 98.5) value = 100;
      setProgress(Math.round(value));

      if (value >= 100) return finish();
      timer = setTimeout(tick, 16);
    };
    tick();

    return () => {
      clearTimeout(timer);
      clearTimeout(hardStop);
      clearTimeout(failSafe);
      window.removeEventListener("load", markLoaded);
      document.documentElement.classList.remove("is-loading");
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div className={`loader is-${phase}`} role="status" aria-label="Loading Magesh Photography">
      <div className="loader__inner">
        <div className="loader__mark">
          <svg viewBox="0 0 200 200" className="loader__ring" aria-hidden="true">
            <circle cx="100" cy="100" r="92" className="loader__ring-track" />
            <circle
              cx="100"
              cy="100"
              r="92"
              className="loader__ring-bar"
              strokeDasharray={RING}
              strokeDashoffset={RING * (1 - progress / 100)}
            />
          </svg>
          <img src="/logo.png" alt="" className="loader__logo" width="298" height="400" />
        </div>

        <p className="loader__name">
          Magesh <em>Photography</em>
        </p>
        <p className="loader__count">
          <span>{String(progress).padStart(3, "0")}</span>
        </p>
      </div>
      <div className="loader__flash" aria-hidden="true" />
    </div>
  );
}
