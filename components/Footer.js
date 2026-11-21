import { site } from "@/content/site";
import { assetPath } from "@/lib/paths";

export default function Footer() {
  const socials = [
    { label: "Instagram", href: site.instagram },
    { label: "YouTube", href: site.youtube },
    { label: "Facebook", href: site.facebook },
  ].filter((s) => s.href);

  return (
    <footer className="footer">
      <div className="container">
        <a href="#contact" className="footer__big">
          <span>Let's create</span>
          <em>something timeless.</em>
        </a>
        <div className="footer__row">
          <div className="footer__brand">
            <img src={assetPath("/logo.png")} alt="" className="footer__logo" width="298" height="400" />
            <div>
              <strong>{site.name}</strong>
              <p>{site.address}</p>
            </div>
          </div>
          <div className="footer__links">
            <a href={`tel:+91${site.phone}`} className="link-underline">
              {site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`} className="link-underline">
              {site.email}
            </a>
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="link-underline">
                {s.label}
              </a>
            ))}
          </div>
        </div>
        <div className="footer__legal">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <a href="#top" className="link-underline">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
