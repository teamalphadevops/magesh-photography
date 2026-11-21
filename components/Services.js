import Reveal from "./Reveal";
import { services } from "@/content/site";

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <p className="eyebrow">What we do</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="h2">
              Services crafted for <em>every</em> chapter.
            </h2>
          </Reveal>
        </div>

        <ul className="services__list">
          {services.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 50} className="service">
              <a href="#contact" className="service__link">
                <span className="service__num">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="service__title">{s.title}</h3>
                <p className="service__text">{s.text}</p>
                <span className="service__arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="22" height="22">
                    <path d="M7 17L17 7M9 7h8v8" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
