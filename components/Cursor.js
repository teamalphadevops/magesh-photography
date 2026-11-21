"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Custom cursor: a precise dot + a soft trailing ring.
 * - Grows over links/buttons
 * - Shows a label over elements with data-cursor="View" (etc.)
 * - Disabled automatically on touch devices
 */
export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState(""); // "", "hover", "label"
  const [label, setLabel] = useState("");
  const [hidden, setHidden] = useState(true);
  const [down, setDown] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine) return;
    setEnabled(true);
    document.documentElement.classList.add("has-cursor");

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: pos.x, y: pos.y };
    let raf;

    const move = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      setHidden(false);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      }
    };

    const loop = () => {
      const ease = reduce ? 1 : 0.16;
      ring.x += (pos.x - ring.x) * ease;
      ring.y += (pos.y - ring.y) * ease;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };

    const over = (e) => {
      const labelled = e.target.closest("[data-cursor]");
      if (labelled) {
        setMode("label");
        setLabel(labelled.getAttribute("data-cursor"));
        return;
      }
      const interactive = e.target.closest("a, button, input, select, textarea, label, [role='button']");
      setMode(interactive ? "hover" : "");
      setLabel("");
    };

    const leave = () => setHidden(true);
    const enter = () => setHidden(false);
    const press = () => setDown(true);
    const release = () => setDown(false);

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover", over, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    document.documentElement.addEventListener("mouseenter", enter);
    window.addEventListener("mousedown", press);
    window.addEventListener("mouseup", release);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.documentElement.removeEventListener("mouseleave", leave);
      document.documentElement.removeEventListener("mouseenter", enter);
      window.removeEventListener("mousedown", press);
      window.removeEventListener("mouseup", release);
      document.documentElement.classList.remove("has-cursor");
    };
  }, []);

  if (!enabled) return null;

  const cls = [
    "cursor",
    mode && `is-${mode}`,
    hidden && "is-hidden",
    down && "is-down",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={cls} aria-hidden="true">
      <div ref={ringRef} className="cursor__ring">
        <span className="cursor__label">{label}</span>
      </div>
      <div ref={dotRef} className="cursor__dot" />
    </div>
  );
}
