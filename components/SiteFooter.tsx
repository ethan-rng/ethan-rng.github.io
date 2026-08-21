import { site, socials } from "@/data/site";

/**
 * Shared across every route, so contact is always one glance away and no
 * page has to carry a Contact section of its own.
 */
export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-dashed border-line pt-8">
      <p className="text-sm text-muted">
        <span aria-hidden="true" className="text-line">
          ${" "}
        </span>
        mail{" "}
        <a
          href={`mailto:${site.email}`}
          className="text-fg underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
        >
          {site.email}
        </a>
      </p>
      <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
        <li>
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-faint transition-colors hover:text-accent"
          >
            <span aria-hidden="true" className="text-line">
              [
            </span>
            Resume
            <span aria-hidden="true" className="text-line">
              ]
            </span>
          </a>
        </li>
        {socials.map((social) => (
          <li key={social.label}>
            <a
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={
                social.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="text-xs text-faint transition-colors hover:text-accent"
            >
              <span aria-hidden="true" className="text-line">
                [
              </span>
              {social.label}
              <span aria-hidden="true" className="text-line">
                ]
              </span>
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
