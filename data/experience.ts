/**
 * Work history — roles only, no education. Same idea as projects.ts: edit the
 * array, the section follows. Newest first; the list renders in array order.
 *
 * Sourced from LinkedIn. Tags aren't on LinkedIn; they're drawn from each
 * role's title and description, so adjust them to whatever you'd rather lead
 * with.
 */

export type Role = {
  /** Job title, e.g. "Software Engineer". */
  role: string;
  company: string;
  /** Free text so you can write "2024 — Present" or "Summer 2023". */
  period: string;
  /** Optional. One line on what you actually did. */
  description?: string;
  /** Optional. Tech or focus areas, rendered as small monospace labels. */
  tags?: string[];
  /** Optional. Links the company name out. */
  href?: string;
  /**
   * Optional square mark next to the role — a logo or a photo, as a path
   * under `public/`. The monogram SVGs in `public/images/experience/` are
   * placeholders; swap in real logos when you have them.
   */
  image?: string;
};

export const experience: Role[] = [
  {
    role: "Production Engineer Intern",
    company: "Meta",
    period: "Jun 2026 — Present",
    description: "AI infrastructure work on the Ads ML Training team.",
    image: "/images/experience/meta.svg",
    tags: ["AI Infrastructure", "Production Engineering"],
  },
  {
    role: "Production Engineer Intern",
    company: "Meta",
    period: "May 2025 — Aug 2025",
    description:
      "Fault injection testing in production, alongside full-stack development.",
    image: "/images/experience/meta.svg",
    tags: ["Fault Injection", "Full Stack", "Production Engineering"],
  },
  {
    role: "Case Author",
    company: "Ivey Business School",
    period: "Mar 2025 — Jun 2025",
    description:
      "Published a case on monetization opportunities for DeepSeek and other open-source AI foundation models.",
    image: "/images/experience/ivey.jpg",
    tags: ["Case Writing", "Open-Source AI", "Monetization"],
  },
  {
    role: "Production Engineer Fellow",
    company: "MLH Fellowship",
    period: "Jun 2024 — Aug 2024",
    description: "Meta × MLH production engineering fellowship, Summer B.",
    image: "/images/experience/mlh.svg",
    tags: ["Production Engineering", "Open Source"],
  },
];
