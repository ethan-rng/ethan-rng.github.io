/**
 * Everything about you. Edit this file and the sidebar, contact section and
 * page metadata all follow.
 */

export type NavItem = {
  href: string;
  label: string;
  /**
   * Extra path prefixes that should light this item up — e.g. a case study
   * at /projects/foo keeps "Work" active. `href` is always matched too.
   */
  match?: string[];
};

export type Photo = {
  src: string;
  /** Describe the photo — these carry meaning, so don't leave it empty. */
  alt: string;
};

export type Social = {
  label: string;
  href: string;
};

export const site = {
  name: "Ethan Rong",
  /** Shown under the name in the sidebar. Keep it to one line. */
  title: "Software Engineer",
  /** Used for <title> / OG description. */
  description: "Software engineer. Building quiet, careful software.",
  email: "ethan.rong@gmail.com",
  /** Sidebar avatar. Any square-ish image in public/images works. */
  avatar: "/images/avatar.jpg",
};

export const nav: NavItem[] = [
  { href: "/work", label: "Work", match: ["/projects"] },
  { href: "/experience", label: "Experience" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
];

/**
 * The photo strip in the About section. Grayscale at rest, colour on hover.
 * Drop new files in `public/images/about/` and point at them here.
 *
 * `alt` matters — these are content, not decoration. Describe what's in the
 * photo for anyone who can't see it.
 */
export const aboutPhotos: Photo[] = [
  { src: "/images/about/hackathon.jpg", alt: "Testing a hardware project at Hack Western." },
  { src: "/images/about/ivey.jpg", alt: "The atrium of the Ivey Business School building." },
  { src: "/images/about/western.jpg", alt: "First year at Western University with friends." },
  { src: "/images/about/projectvp.jpg", alt: "The Western Founders' Network project team." },
];

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/ethan-rng" },
  { label: "X", href: "https://x.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ethanrong2004/" },
  { label: "Email", href: `mailto:${site.email}` },
];
