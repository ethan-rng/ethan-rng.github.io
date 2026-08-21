/**
 * Everything about you. Edit this file and the sidebar, contact section and
 * page metadata all follow.
 */

export type NavItem = {
  href: string;
  label: string;
  /**
   * Extra path prefixes that should light this item up, e.g. a case study
   * at /projects/foo keeps "Work" active. `href` is always matched too.
   */
  match?: string[];
};

export type Photo = {
  src: string;
  /** Describe the photo; these carry meaning, so don't leave it empty. */
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
  email: "ethanj.rong@gmail.com",
  /** The small circular mark in the sidebar. */
  avatar: "/images/avatar.jpg",
  /** The larger square portrait in the landing-page hero. */
  portrait: "/images/portrait.jpg",
  /**
   * Résumé PDF, served straight out of `public/`; no route, no viewer.
   * Drop a new file at the same path to update it.
   */
  resume: "/ethan-rong-resume.pdf",
};

export const nav: NavItem[] = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work", match: ["/projects"] },
  { href: "/writing", label: "Writing" },
];

/** A photo in one of the scattered polaroid walls. */
export type Polaroid = Photo & {
  /** Shown as the polaroid's caption; keep it filename-ish. */
  label: string;
};

/**
 * The food wall in About. Rendered as a messy, overlapping stack of tilted
 * polaroids; each one straightens on hover. These are landscape shots, so
 * the wall renders in its landscape variant.
 */
export const foodPhotos: Polaroid[] = [
  {
    src: "/images/food/ramen.jpg",
    label: "tonkotsu.jpg",
    alt: "A bowl of tonkotsu ramen with chashu pork, sesame and spring onion.",
  },
  {
    src: "/images/food/curry.jpg",
    label: "curry.jpg",
    alt: "Shrimp and tofu curry served with a mound of jasmine rice.",
  },
  {
    src: "/images/food/steak.jpg",
    label: "steak.jpg",
    alt: "Sliced medium-rare steak with chimichurri, roast potatoes and a tomato salad.",
  },
  {
    src: "/images/food/congee.jpg",
    label: "congee.jpg",
    alt: "Congee topped with fried dough sticks, spring onion and soy sauce.",
  },
  {
    src: "/images/food/porkbelly.jpg",
    label: "porkbelly.jpg",
    alt: "A glazed slab of pork belly resting on mashed potato with chives.",
  },
  {
    src: "/images/food/tonkatsu.jpg",
    label: "tonkatsu.jpg",
    alt: "A tonkatsu set meal on a black tray with shredded cabbage, rice and small dishes of sauce.",
  },
];

/**
 * The second wall: everything that isn't food. Portrait shots, so this one
 * renders in the portrait variant.
 */
export const elsewherePhotos: Polaroid[] = [
  {
    src: "/images/elsewhere/torii.jpg",
    label: "torii.jpg",
    alt: "Leaning against one of a long row of vermilion torii gates.",
  },
  {
    src: "/images/elsewhere/karts.jpg",
    label: "karts.jpg",
    alt: "Go-karts lined up on a neon-lit city street at night.",
  },
  {
    src: "/images/elsewhere/walkway.jpg",
    label: "walkway.jpg",
    alt: "Walking along an elevated green walkway under a bright, cloudy sky.",
  },
  {
    src: "/images/elsewhere/candle.jpg",
    label: "candle.jpg",
    alt: "Holding a candle and a small handwritten note reading \"Please Return\".",
  },
  {
    src: "/images/elsewhere/mirror.jpg",
    label: "mirror.jpg",
    alt: "A fitting-room mirror shot in a denim jacket over a white shirt.",
  },
];

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/ethan-rng" },
  { label: "X", href: "https://x.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ethanrong2004/" },
  { label: "Email", href: `mailto:${site.email}` },
];
