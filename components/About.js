import Reveal from "./Reveal";
import { about, site } from "@/content/site";

export default function About({ image }) {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <Reveal className="about__media">
          <div className="about__frame">
            {image ? (
              <img src={image} alt={`${site.owner}, photographer`} />
            ) : (
              <div className="ph ph--portrait">
                <span>Your portrait</span>
                <small>/public/about/</small>
              </div>
            )}
          </div>
          <div className="about__badge">
            <svg viewBox="0 0 200 200" className="about__badge-ring">
              <defs>
                <path id="circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
              </defs>
              <text>
                <textPath href="#circle">
                  CAPTURING MOMENTS · ALL OVER CHENNAI ·
                </textPath>
              </text>
            </svg>
            <img src="/logo.png" alt="" className="about__badge-icon" width="298" height="400" />
          </div>
        </Reveal>

        <div className="about__text">
          <Reveal>
            <p className="eyebrow">About the studio</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="h2">
              {about.heading.split(" ").slice(0, -1).join(" ")} <em>{about.heading.split(" ").slice(-1)}</em>
            </h2>
          </Reveal>
          <Reveal delay={120} className="about__stat">
            <span className="about__stat-num">
              {site.experienceYears}
              <sup>+</sup>
            </span>
            <span className="about__stat-label">
              Years of experience
              <br />
              in photography
            </span>
          </Reveal>
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={160 + i * 80}>
              <p className="lead">{p}</p>
            </Reveal>
          ))}
          <Reveal delay={360} className="about__meta">
            <div>
              <span className="label">Based in</span>
              <strong>{site.address}</strong>
            </div>
            <div>
              <span className="label">Available</span>
              <strong>{site.location}</strong>
            </div>
            <div>
              <span className="label">Experience</span>
              <strong>{site.experienceYears}+ years</strong>
            </div>
          </Reveal>
          <Reveal delay={420}>
            <p className="signature">{site.owner}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
