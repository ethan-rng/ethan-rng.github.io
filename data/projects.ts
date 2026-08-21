/**
 * Projects list. Add, remove or reorder entries, the bento renders whatever
 * is in this array, in order.
 *
 * To add a project: copy one entry, change the fields. Nothing else to touch.
 * Give it a `caseStudy` and it gets its own page at /projects/<slug>; leave
 * `caseStudy` off and the tile just links out to `href` instead.
 *
 * The two Hack Western entries come from real sources: the interview tool is
 * written up in Ethan's own Medium article, and the wallet work is described
 * in a teammate's HW12 case study. Details of *how* the wallet integration
 * was implemented are inferred from what the feature does; worth a read
 * before this is public.
 *
 * The bento is three columns at `lg` and two at `sm`. One `size: "wide"` tile
 * takes two cells, so five entries fill exactly two rows at both widths,
 * worth keeping in mind when you add or remove one, or the grid goes ragged.
 */

/** A topline number. `unit` is rendered small and accented after the value. */
export type Metric = {
  value: string;
  unit?: string;
  label: string;
};

/** A label/value pair in the case study's fact grid (Role, Timeline, ...). */
export type Fact = {
  label: string;
  value: string;
};

export type CaseStudy = {
  /** Short descriptor under the title, e.g. "Internal analytics platform". */
  kicker: string;
  /** The thesis line, the one sentence you'd want remembered. */
  headline: string;
  /** Rendered as a grid at the top of the page. Four reads well. */
  facts: Fact[];
  /**
   * Topline numbers under the banner. Three fits the row. Only include
   * figures you can actually stand behind; a soft metric reads as filler.
   */
  impact?: Metric[];
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
  /** One line. Two at most, the tile is built for short. */
  description: string;
  /** Rendered as small monospace labels. Keep to ~4. */
  tags: string[];
  /** Optional. An external link, shown on the case study page. */
  href?: string;
  /** Optional. Shown right-aligned against the title, e.g. "2025". */
  year?: string;
  /**
   * Optional thumbnail, as a path under `public/`. Rendered at 3:2 (16:6 for
   * wide tiles), a ~480x320 image is plenty.
   */
  image?: string;
  /**
   * Optional wider image for the top of the case study page. Falls back to
   * `image` when absent, useful when the tile art and the hero shot differ.
   */
  heroImage?: string;
  /**
   * Tile size in the bento grid. "wide" spans two columns, good for a
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
    "A sentence or two on the outcome: the thing a reader should take away if they read nothing else.",
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
        "A second paragraph if the setup needs one. Keep it plain, because the reader is skimming.",
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
    slug: "hack-western-wallet",
    title: "The hacker pass",
    description:
      "Apple and Google Wallet passes for Hack Western, plus the approval gate that stopped anyone from minting a working one.",
    tags: ["tRPC", "TypeScript", "Drizzle", "Google Wallet API"],
    href: "https://github.com/hackwestern/hackwestern",
    year: "2025",
    image: "/images/projects/hackwestern-thumb.jpg",
    heroImage: "/images/projects/hackwestern-site.jpg",
    size: "wide",
    caseStudy: {
      kicker: "Hack Western · web team",
      headline:
        "A QR pass in every hacker's wallet, and the endpoint gate that decides whose pass actually counts.",
      facts: [
        { label: "Role", value: "Web Organizer" },
        { label: "Timeline", value: "Hack Western 12 → 13" },
        { label: "Team", value: "meb, the web team" },
        { label: "Stack", value: "Next.js, tRPC, Drizzle, Cloudflare R2" },
      ],
      impact: [
        { value: "6", label: "application statuses that could mint a live pass" },
        { value: "2", label: "endpoints put behind one approval check" },
        { value: "14", label: "PRs merged across the platform" },
      ],
      glance:
        "Every accepted hacker generates a pass from their dashboard: an Apple .pkpass served from R2, or a Google Wallet object signed through a service account. The QR on it is their identity for check-in, meals, workshops and the scavenger hunt.",
      highlights: [
        {
          title: "Anyone logged in could mint one",
          body: "The QR encodes a user id and nothing more, and pass generation was only gated on being signed in. An applicant who was still pending, or rejected, or waitlisted, could produce a fully working pass.",
        },
        {
          title: "The scanner checked the wrong person",
          body: "Scanning was gated on the organizer holding the scanner, never on the hacker being scanned. So an organizer scanning an unapproved pass still awarded points, meals and redemptions.",
        },
        {
          title: "One predicate, both ends",
          body: "The fix was a shared approval check applied at generation and at scan, so a pass can neither be created nor honoured unless the application behind it was actually accepted, with tests over the scavenger hunt path.",
        },
      ],
      sections: [
        {
          heading: "Context",
          paragraphs: [
            "Hack Western's site carries the whole hacker lifecycle: application, review, acceptance, then the dashboard people use during the event. The wallet pass is where the digital half meets the physical one; it is what someone holds up at a door, a meal line, or a workshop table.",
            "Because the same QR drives check-in and the points system, the pass isn't just a convenience. It's a credential, and it needed to behave like one.",
          ],
        },
        {
          heading: "Passes",
          paragraphs: [
            "The two platforms want different things. Google's pass is a generic object created against an issuer through a service-account JWT; Apple's is a signed .pkpass bundle, which the site stores in Cloudflare R2 and hands back the most recent one for that hacker. Both start from the same user record and the same generated QR.",
            "My work here was the manual pass creation path and, later, the gating around it. The initial QR and wallet plumbing was a teammate's.",
          ],
        },
        {
          heading: "The hole, and closing it",
          paragraphs: [
            "The root cause was that no endpoint was gated on application status. Generation only required a session, and while the scan endpoint checked that the scanner was an organizer, it never validated the status of the person being scanned. Both paths trusted a user id that anyone with an account had.",
            "Closing it meant one shared approval predicate rather than two separate checks that could drift, applied at both the generate and the scan boundary, plus tests over the scavenger hunt flow that depended on it.",
          ],
        },
        {
          heading: "The rest of the loop",
          paragraphs: [
            "The pass only matters because of what it unlocks, and most of that was the same stretch of work: the scavenger hunt endpoints, the scan table, redemptions, and prize quantities, the backend that turns a scanned QR into points somebody can spend.",
          ],
        },
      ],
    },
  },
  {
    slug: "hack-western-interviews",
    title: "Interview rooms, off one PC",
    description:
      "A self-hosted tool that gave every candidate a disposable, isolated VS Code in the browser. Built in two days.",
    tags: ["Docker", "Tailscale", "code-server", "Bash"],
    href: "https://medium.com/hack-western/we-ran-hack-western-interviews-off-my-pc-heres-how-we-built-it-in-two-days-b7d0d601a853",
    year: "2026",
    image: "/images/projects/interviews-thumb.jpg",
    heroImage: "/images/projects/interviews-architecture.jpg",
    caseStudy: {
      kicker: "Hack Western 13 · internal tooling",
      headline:
        "Every candidate gets a clean, isolated VS Code in their own browser, served off a desktop in my room.",
      facts: [
        { label: "Role", value: "Web Organizer" },
        { label: "Timeline", value: "Hack Western 13, built in two days" },
        { label: "Team", value: "meb, the web team" },
        { label: "Stack", value: "Docker, code-server, Tailscale, Bash" },
      ],
      impact: [
        { value: "2", unit: "days", label: "from idea to running interviews" },
        { value: "1", unit: "PC", label: "hosting every room" },
        { value: "30", unit: "min", label: "per slot, none of it spent on setup" },
      ],
      glance:
        "Live technical interviews used to mean candidates coding on an interviewer's laptop: unfamiliar editor, unfamiliar keyboard, and no way for interviewers to take notes on the same machine. This gave every candidate a disposable workspace in their own browser instead.",
      highlights: [
        {
          title: "Rooms, not containers per candidate",
          body: "A container per interview was too expensive in RAM, so a fixed pool of rooms gets reused. Assigning a candidate spawns a fresh workspace in an existing room and rotates its password, which is also what stops anyone rejoining after their slot.",
        },
        {
          title: "Public access without touching the router",
          body: "Tailscale Funnels expose specific local ports to the internet, so no port forwarding on a home network and no open IP to scan. Each room maps to its own path and its own localhost port.",
        },
        {
          title: "The prefix problem",
          body: "Serving rooms under /room1 and /room2 broke the apps inside them. The React router treated the prefix as a route, and asset requests resolved against the wrong base. A reverse proxy strips the prefix, and Vite's base path is injected per container at runtime.",
        },
      ],
      sections: [
        {
          heading: "Context",
          paragraphs: [
            "Every year the web team runs a live technical interview built around React and Tailwind. To avoid leaking the questions, candidates had always written code on an interviewer's laptop, which meant adjusting to someone else's editor, settings and keyboard layout inside a thirty-minute window, while the interviewer lost the ability to take notes on that same machine.",
            "The goal was narrow on purpose: candidates code on their own laptop in a standard editor, candidates are isolated from each other but can still run their dev server, and interviewers keep remote access to every room.",
          ],
        },
        {
          heading: "How it works",
          paragraphs: [
            "Each room is a Docker container running code-server (VS Code in the browser) with a freshly cloned copy of the evaluation mounted into the workspace. Extensions and a dark theme are baked into the image, so nobody starts an interview configuring their editor.",
            "Tailscale Funnels put each room on its own public path, a reverse proxy strips that prefix before the request reaches the container, and Bash scripts underneath handle the lifecycle: list rooms, assign a candidate, rotate the password, save the work, reset for the next one.",
            "Reassigning a candidate who has been in before restores their previous code and evaluation rather than issuing a blank workspace, a safeguard for reconnects and re-runs.",
          ],
        },
        {
          heading: "What broke, and what's next",
          paragraphs: [
            "Self-hosting was the interesting part and also the weak point. A home network drop or a spontaneous reboot meant falling back to the old laptop method mid-schedule; a serverless container runtime would trade the fun for reliability.",
            "The core logic is Bash, which stopped scaling with the complexity, and the tool is CLI-only: fine for a technical team, less so if it outlives one. Both are on the list, along with moving it onto the hackwestern.com domain and open-sourcing it.",
          ],
        },
      ],
    },
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
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
