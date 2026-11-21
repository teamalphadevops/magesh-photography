import { site } from "@/content/site";

export default function Hero({ image }) {
  return (
    <section id="top" className={`hero ${image ? "hero--photo" : ""}`}>
      <div className="hero__media" aria-hidden="true">
        {image ? (
          <img src={image} alt="" className="hero__img hero__img--ambient" />
        ) : (
          <div className="hero__placeholder">
            <div className="orb orb--1" />
            <div className="orb orb--2" />
            <div className="orb orb--3" />
          </div>
        )}
        <div className="hero__shade" />
      </div>

      {image && (
        <figure className="hero__card">
          <img src={image} alt={`${site.featuredLabel} by ${site.name}`} />
          <div className="exp-badge" aria-label={`${site.experienceYears}+ years of experience`}>
            <strong>
              {site.experienceYears}
              <sup>+</sup>
            </strong>
            <span>Years of<br />experience</span>
          </div>
          <figcaption>
            <span>Featured</span>
            <span>{site.featuredLabel}</span>
          </figcaption>
        </figure>
      )}

      <div className="hero__content container">
        <p className="eyebrow hero__eyebrow">
          <span className="dot" /> {site.experienceYears}+ Years of Photography · {site.location}
        </p>

        <h1 className="hero__title">
          <span className="line"><span>Magesh</span></span>
          <span className="line line--indent">
            <span>
              <em>Photo</em>graphy
            </span>
          </span>
        </h1>

        <div className="hero__bottom">
          <p className="hero__intro">{site.intro}</p>
          <div className="hero__actions">
            <a href="#work" className="btn">
              View portfolio
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </a>
            <a href="#contact" className="btn btn--ghost">
              Check availability
            </a>
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll down">
        <span>Scroll</span>
        <i />
      </a>
    </section>
  );
}
