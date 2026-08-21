/**
 * Projects list. Add, remove or reorder entries — the bento renders whatever
 * is in this array, in order.
 *
 * To add a project: copy one entry, change the fields. Nothing else to touch.
 * Give it a `caseStudy` and it gets its own page at /projects/<slug>; leave
 * `caseStudy` off and the tile just links out to `href` instead.
 *
 * The bento is three columns at `lg` and two at `sm`. One `size: "wide"` tile
 * takes two cells, so five entries fill exactly two rows at both widths —
 * worth keeping in mind when you add or remove one, or the grid goes ragged.
 */

/** A label/value pair in the case study's fact grid (Role, Timeline, ...). */
export type Fact = {
  label: string;
  value: string;
};

export type CaseStudy = {
  /** Short descriptor under the title, e.g. "Internal analytics platform". */
  kicker: string;
  /** The thesis line — the one sentence you'd want remembered. */
  headline: string;
  /** Rendered as a grid at the top of the page. Four reads well. */
  facts: Fact[];
  /** One or two sentences under "At a glance". */
  glance: string;
  /** Numbered highlights: the two or three things you actually did. */
  highlights: Array<{ title: string; body: string }>;
  /** Long-form sections, in order. */
  sections: Array<{ heading: string; paragraphs: string[] }>;
};

export type Project = {
  /** URL segment: /projects/<slug>. Keep it lowercase and hyphenated. */
  slug: string;
  title: string;
  /** One line. Two at most — the tile is built for short. */
  description: string;
  /** Rendered as small monospace labels. Keep to ~4. */
  tags: string[];
  /** Optional. An external link, shown on the case study page. */
  href?: string;
  /** Optional. Shown right-aligned against the title, e.g. "2025". */
  year?: string;
  /**
   * Optional thumbnail, as a path under `public/`. Rendered at 3:2 (16:6 for
   * wide tiles) — a ~480x320 image is plenty.
   */
  image?: string;
  /**
   * Tile size in the bento grid. "wide" spans two columns — good for a
   * feature project. Defaults to a single cell.
   */
  size?: "normal" | "wide";
  /** Omit to skip the detail page; the tile then links straight to `href`. */
  caseStudy?: CaseStudy;
};

/** Placeholder case study, shared by the sample entries below. Replace it. */
const placeholderCaseStudy: CaseStudy = {
  kicker: "Short descriptor of the product",
  headline:
    "The one-sentence thesis: what you set out to change, and what changed.",
  facts: [
    { label: "Role", value: "Software Engineer" },
    { label: "Timeline", value: "2025" },
    { label: "Stack", value: "TypeScript, Next.js" },
    { label: "Team", value: "2 engineers, 1 designer" },
  ],
  glance:
    "A sentence or two on the outcome — the thing a reader should take away if they read nothing else.",
  highlights: [
    {
      title: "First area of work",
      body: "What you owned here, and the decision that made the difference.",
    },
    {
      title: "Second area of work",
      body: "Another slice of the project, described in terms of the problem it solved.",
    },
    {
      title: "Third area of work",
      body: "The collaboration, the constraint, or the thing that nearly went wrong.",
    },
  ],
  sections: [
    {
      heading: "Context",
      paragraphs: [
        "Where this started: the situation, the constraint, and why it was worth doing.",
        "A second paragraph if the setup needs one. Keep it plain — the reader is skimming.",
      ],
    },
    {
      heading: "Approach",
      paragraphs: [
        "What you built and why you built it that way. Name the trade-off you made.",
      ],
    },
    {
      heading: "Outcome",
      paragraphs: [
        "What shipped, what it changed, and what you'd do differently next time.",
      ],
    },
  ],
};

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project Title",
    description: "Short description of what it is and why it exists.",
    tags: ["TypeScript", "Next.js"],
    href: "https://example.com",
    year: "2025",
    image: "/images/projects/placeholder-1.svg",
    size: "wide",
    caseStudy: placeholderCaseStudy,
  },
  {
    slug: "project-two",
    title: "Project Title",
    description: "Short description of what it is and why it exists.",
    tags: ["Python", "Postgres"],
    href: "https://example.com",
    year: "2024",
    image: "/images/projects/placeholder-2.svg",
    caseStudy: placeholderCaseStudy,
  },
  {
    slug: "project-three",
    title: "Project Title",
    description: "Short description of what it is and why it exists.",
    tags: ["Go", "Redis"],
    year: "2024",
    image: "/images/projects/placeholder-3.svg",
    caseStudy: placeholderCaseStudy,
  },
  {
    slug: "project-four",
    title: "Project Title",
    description: "Short description of what it is and why it exists.",
    tags: ["Rust", "WebAssembly"],
    href: "https://example.com",
    year: "2023",
    image: "/images/projects/placeholder-4.svg",
    caseStudy: placeholderCaseStudy,
  },
  {
    slug: "project-five",
    title: "Project Title",
    description: "Short description of what it is and why it exists.",
    tags: ["Swift", "CoreML"],
    year: "2023",
    image: "/images/projects/placeholder-5.svg",
    caseStudy: placeholderCaseStudy,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
