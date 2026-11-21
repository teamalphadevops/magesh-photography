"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <div className="nav__inner container">
        <a href="#top" className="nav__logo" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="Magesh Photography logo" className="nav__logo-img" width="298" height="400" />
          <span className="nav__logo-text">
            Magesh <em>Photography</em>
          </span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="link-underline">
              {l.label}
            </a>
          ))}
        </nav>

        <a href={`tel:+91${site.phone}`} className="btn btn--small nav__cta">
          Book a shoot
        </a>

        <button
          className="nav__burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>

      <div className="nav__overlay" aria-hidden={!open}>
        <nav className="nav__overlay-links">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
            >
              <span className="nav__overlay-num">0{i + 1}</span>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav__overlay-foot">
          <a href={`tel:+91${site.phone}`}>{site.phoneDisplay}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </div>
    </header>
  );
}
