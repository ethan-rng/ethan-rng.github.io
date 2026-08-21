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

/** An inline diagram or screenshot inside a write-up section. */
export type Figure = {
  src: string;
  alt: string;
  /** Shown beneath the image, in the article's own voice. */
  caption: string;
  /**
   * A line drawing rather than a screenshot. Rendered with its white
   * background keyed out and its lightness inverted, so it reads on a dark
   * page without losing its hues.
   */
  diagram?: boolean;
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
  /** Long-form sections, in order. Each can carry one figure. */
  sections: Array<{
    heading: string;
    paragraphs: string[];
    figure?: Figure;
  }>;
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
          figure: {
            src: "/images/projects/pass-flow.svg",
            alt: "Flow diagram: the dashboard calls qrRouter.generate with a wallet type, which runs isUserApprovedForEvent. An unapproved user gets a 403. An approved user gets a QR encoding their user id, then either the newest Apple pkpass from R2 or a Google generic pass object signed with a service-account JWT.",
            caption: "One record in, two very different pass formats out.",
            diagram: true,
          },
        },
        {
          heading: "The hole, and closing it",
          paragraphs: [
            "The root cause was that no endpoint was gated on application status. Generation only required a session, and while the scan endpoint checked that the scanner was an organizer, it never validated the status of the person being scanned. Both paths trusted a user id that anyone with an account had.",
            "Closing it meant one shared approval predicate rather than two separate checks that could drift, applied at both the generate and the scan boundary, plus tests over the scavenger hunt flow that depended on it.",
          ],
          figure: {
            src: "/images/projects/pass-gate.svg",
            alt: "Before and after diagram. Before: the generate endpoint only required a signed-in user and the scan endpoint only checked the scanner was an organizer, so a pass and points were issued regardless. After: both endpoints pass through one isUserApprovedForEvent predicate, which allows ACCEPTED or CONFIRMED applications plus organizers and sponsors.",
            caption: "The same two endpoints, before and after. The gate is one predicate, not two checks that can drift apart.",
            diagram: true,
          },
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
    heroImage: "/images/projects/interviews-candidate.jpg",
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
          heading: "The shape of it",
          paragraphs: [
            "Everything runs on one desktop. A Tailscale Funnel puts that machine on the public internet without touching the home router, each room is mapped to its own path and its own local port, and an HTTP proxy sits between those paths and the Docker containers that hold the interviews.",
            "Interviewers get the root path and can see every room. Candidates get exactly one.",
          ],
          figure: {
            src: "/images/projects/interviews-architecture.png",
            alt: "Architecture diagram: a client connects through a Tailscale Funnel to a PC, where interviewer and candidate paths pass through an HTTP proxy server into separate Docker containers for room1 and room2.",
            caption: "Client to funnel to proxy to container. The proxy exists because of the path prefix, which is the part that broke first.",
            diagram: true,
          },
        },
        {
          heading: "Rooms, not a container per candidate",
          paragraphs: [
            "A container per interview was too expensive in memory, so a fixed pool of rooms gets reused. Assigning a candidate clones a fresh copy of the evaluation, mounts it into a room, and rotates that room's password, which is also what stops anyone rejoining after their slot.",
            "Reassigning someone who has been in before restores their previous code and evaluation instead of a blank workspace, which matters when a connection drops mid-interview.",
          ],
          figure: {
            src: "/images/projects/interviews-rooms.jpg",
            alt: "Terminal output of the interview list command, showing room1 occupied by tester1 with a URL, password, PID and running status, and room2 free.",
            caption: "interview list: who is in which room, what they were issued, and what is still free.",
          },
        },
        {
          heading: "Assigning a candidate",
          paragraphs: [
            "One command creates the workspace, reclaims permissions, generates a password, starts the proxy for that port, installs dependencies inside the container, and prints the link to send.",
            "The link and the password are per-assignment, so the previous candidate's credentials stop working the moment the next one is placed.",
          ],
          figure: {
            src: "/images/projects/interviews-assign.jpg",
            alt: "Terminal output of interview assign tester1: creating a workspace, reclaiming permissions, generating a password, starting the proxy, installing dependencies, then printing the room URL and password.",
            caption: "One command from an empty room to a link you can paste into the chat.",
          },
        },
        {
          heading: "Getting it onto the internet",
          paragraphs: [
            "Port forwarding a home router was the option I did not want. Tailscale puts every device on a private network, and Funnels expose one chosen port on one chosen machine to the public internet, so nothing else on the network is reachable.",
            "Each room is served under its own path on the machine's tailnet domain, which is where the routing problem starts: the apps inside the containers had no idea they were being served from a subpath.",
          ],
          figure: {
            src: "/images/projects/interviews-tailnet.jpg",
            alt: "Tailscale machines list showing several devices named after frederick, with the Linux desktop marked as having Funnel enabled.",
            caption: "The tailnet. Only the desktop has a Funnel; everything else is just on the private network.",
          },
        },
        {
          heading: "The editor itself",
          paragraphs: [
            "Each room runs code-server, which is VS Code in the browser, with the evaluation mounted into the workspace. Extensions and a dark theme are baked into the image, so nobody spends part of their thirty minutes configuring an editor.",
            "Candidates can run the dev server as normal. From their side it is just VS Code, on their own machine, with their own keyboard.",
          ],
        },
        {
          heading: "What broke, and what is next",
          paragraphs: [
            "Serving rooms under a path prefix broke the apps inside them twice over. The React router read the prefix as a route, and asset requests resolved against the wrong base, so the proxy strips the prefix on the way in and Vite's base path is injected per container at runtime.",
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
