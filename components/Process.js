import Reveal from "./Reveal";
import { process } from "@/content/site";

export default function Process() {
  return (
    <section id="process" className="section process">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <p className="eyebrow">How it works</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="h2">
              From hello to <em>heirloom</em>.
            </h2>
          </Reveal>
        </div>
        <ol className="process__grid">
          {process.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 100} className="step">
              <span className="step__num">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="step__title">{p.title}</h3>
              <p className="step__text">{p.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
