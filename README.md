# personal-web

A dark, minimal personal site with a terminal streak: everything set in
monospace, dashed rules for every divider, panels drawn like boxes in a shell,
and a spinning ASCII torus on the landing page. Fixed left sidebar, short
focused pages, monochrome until you hover.

Next.js 16 (App Router) · TypeScript · Tailwind CSS. No UI libraries — the only
runtime dependencies are `next`, `react` and `react-dom`.

## Run it

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Editing content

Almost everything lives in `data/`. You shouldn't need to touch a component to
change what the site says.

### `data/site.ts` — you, the nav, the socials

Your name, one-line title, email, the sidebar avatar (`avatar`, a path under
`public/`), the nav items, and the social row at the bottom of the sidebar.

Nav items are routes, not anchors. Each needs a matching directory under
`app/`. `match` lists extra path prefixes that should keep an item lit — a
case study at `/projects/foo` keeps **Work** active.

```ts
export const nav: NavItem[] = [
  { href: "/work", label: "Work", match: ["/projects"] },
  // ...
];
```

### `data/experience.ts` — the work history

Work roles only — education is a line in the About prose instead, not an
entry here. Newest first. `role`, `company` and `period` are required;
`description`, `tags` and `href` are optional. `period` is free text, so
"2025 — Present" and "Summer 2023" both work.

```ts
{
  role: "Job Title",
  company: "Company",
  period: "2025 — Present",
  description: "One line on what you worked on.",  // optional
  tags: ["TypeScript"],                            // optional
  href: "https://example.com",                     // optional — links the company
}
```

### `data/projects.ts` — the projects list

Copy an entry, change the fields. Order in the array is order on the page.

```ts
{
  title: "Project Title",
  description: "Short description of what it is and why it exists.",
  tags: ["TypeScript", "Next.js"],
  href: "https://example.com",  // optional — omit for no link
  year: "2025",                 // optional
  image: "/images/projects/placeholder-1.svg",  // optional thumbnail
  size: "wide",                 // optional — "wide" spans both bento columns
}
```

Projects render as a **bento grid**: three columns at `lg`, two at `sm`, one
on mobile. One `size: "wide"` tile takes two cells, so the five entries fill
exactly two rows at `lg` and three at `sm` with no gaps — adding or removing
one will leave the last row ragged unless you adjust a `size`. `size: "wide"` makes a tile span both columns — currently
the first project, as a feature tile. Wide tiles get a 16:6 banner image,
single cells get 3:2.

The three entries currently in there are placeholders, and so are their
thumbnails — generated SVGs in `public/images/projects/`. Drop a real image
into `public/images/projects/` and point `image` at it. Thumbnails render at
3:2 and are hidden below the `sm` breakpoint, so ~480x320 is plenty. Omit
`image` and the card falls back to the text-only layout.

### Images

The About section carries a four-photo strip from `aboutPhotos` in
`data/site.ts`, and experience rows and writing entries take an optional
`image`. Everything is grayscale at rest and comes to colour on hover — the
same treatment as the sidebar avatar, so it all reads as one idea.

Two of the experience marks (`meta.svg`, `mlh.svg`) are generated monogram
placeholders, not real logos — swap them for the real thing when you have
files you're happy to publish. The Ivey entry uses a real photo.

Photos live in `public/images/about/`, logo marks in
`public/images/experience/`. All were resized down from the originals on
`master`; keep new ones around 720px wide and `next/image` handles the rest.

Type is **Geist** and **Geist Mono**, loaded through `next/font`. Mono
carries the nav, tags, dates and section labels; sans does everything else.

`public/images/avatar.jpg` is the sidebar headshot, resized to 320px and
referenced from `site.avatar`. It renders grayscale and comes to colour on
hover. Project thumbnails live in `public/images/projects/`.

Both go through `next/image`, so they're optimized and lazy-loaded
automatically. The one catch: if you switch to a static export (see Deploy),
add `images: { unoptimized: true }` to `next.config.mjs` — the default image
optimizer needs a server.

### `data/writing.ts` — the writing list

`slug`, `title` and `date` (ISO, e.g. `"2025-06-01"`) are required. Dates are
formatted for display automatically.

Give a post a `body` (an array of paragraphs) and it gets its own page at
`/writing/<slug>`. Give it an `href` and no `body` and the list links straight
out instead. `summary` shows under the title in both places.

Set the array to empty and `/writing` says so rather than rendering a blank
list; drop the nav item from `data/site.ts` if you want the route hidden too.

### Case study pages

A project with a `caseStudy` gets a page at `/projects/<slug>`, and its bento
tile links there instead of to `href` (the external link moves to the bottom
of the case study). Drop `caseStudy` and the tile goes back to linking out.

The template follows a standard case-study shape:

| Field        | Renders as                                        |
| ------------ | ------------------------------------------------- |
| `kicker`     | small label above the title                       |
| `headline`   | the thesis line under the title                   |
| `facts`      | the Role / Timeline / Stack / Team grid           |
| `glance`     | the "At a glance" paragraph                       |
| `highlights` | numbered 01/02/03 glass cards                     |
| `sections`   | long-form `heading` + `paragraphs`, in order      |

All three sample projects share one `placeholderCaseStudy` object, so editing
it changes all of them — split it up as you write real ones.

Both route types use `generateStaticParams`, so every page is prerendered at
build time and a static export still works.

### Prose

The About prose lives in `app/about/page.tsx` and the landing-page intro in
`app/page.tsx`. That's the only copy not in `data/`, because prose in a config
file is worse than prose in the markup. The first two About paragraphs are
still placeholders; the third — the education line — is real.

## Design tokens

All colour and type in `tailwind.config.ts`:

| Token    | Value     | Used for                                |
| -------- | --------- | --------------------------------------- |
| `bg`     | `#121212` | page background                         |
| `bright` | `#ededed` | headings, project titles                |
| `fg`     | `#e5e5e5` | body text                               |
| `muted`  | `#9b9b9b` | secondary prose, nav at rest            |
| `faint`  | `#828282` | section labels, tags, dates             |
| `line`   | `#2e2e2e` | hairlines, dashed sidebar rule          |
| `accent` | `#3b8aff` | **hover and active states only**        |
| `accentDeep` | `#0064e0` | ambient glow only — never text      |

Two things worth preserving if you change these:

- **Nothing is accent-coloured at rest.** The accent only appears on hover or
  on the active nav item. That restraint is most of the look.
- **Every text colour clears WCAG AA (4.5:1) against `#121212`.** `faint` is
  the floor at 4.87:1 and it lands on small text, so darkening it — or
  lightening `bg` much further — will fail contrast.
- **The accent is a lightened Meta blue, on purpose.** Meta's brand blue
  (`#0064e0`) is 3.48:1 here and Facebook blue (`#1877f2`) is 4.42:1 — both
  fail AA for text. `accent` is 5.59:1 and safe for hover states;
  `accentDeep` holds the true brand blue and is used *only* for the ambient
  glow, where nothing has to be readable.

The colour token is named `fg`, not `base`, on purpose — a Tailwind colour
called `base` collides with the built-in `text-base` font size and both rules
end up applying.

## Structure

Each route is deliberately short — one job per page, rather than one long
scroll.

| Route              | Holds                                          |
| ------------------ | ---------------------------------------------- |
| `/`                | the ASCII hero, one-line intro, three featured projects |
| `/work`            | the full projects bento                        |
| `/experience`      | roles, newest first                            |
| `/writing`         | the posts index                                |
| `/about`           | bio and the photo strip                        |
| `/projects/<slug>` | a case study                                   |
| `/writing/<slug>`  | a post                                         |

Contact isn't a page — `SiteFooter` puts the email and socials at the bottom
of every route.

```
app/
  layout.tsx      sidebar + main column + footer, fonts, metadata
  page.tsx        landing page
  work/           projects index
  experience/     roles
  writing/        posts index + [slug] post pages
  about/          bio + photos
  projects/       [slug] case studies
  globals.css     resets, focus rings, reduced-motion
components/
  Sidebar.tsx        fixed rail on desktop, top bar + overlay on mobile
  Section.tsx        anchor target + small-caps heading
  ExperienceItem.tsx one role
  ProjectBento.tsx   the projects grid
  ProjectTile.tsx    one glass project tile
  Ambient.tsx        blurred light pools behind the glass
  Cursor.tsx         custom pointer (desktop only)
data/             all editable content
hooks/
  useActiveSection.ts   IntersectionObserver → active nav item
```

Nav highlighting comes from `usePathname`, not scroll position — there's no
scroll-spy any more, since each section is its own route.

The sidebar is fixed and the main column scrolls past it, separated by a
dashed vertical rule running the full viewport height. Below `md` the sidebar
becomes a top bar — with the same dashed rule along its bottom edge — and a
Menu toggle that opens a full-screen overlay.

**Everything is monospace.** The body font is Geist Mono; `font-sans` still
exists in the config but nothing uses it. That single choice does most of the
terminal work — the rest is punctuation.

**ASCII furniture.** Section headings are `## about` followed by a dashed rule
to the margin. Nav items get a `>` caret that appears on hover and stays on
the active item. Socials are bracketed, `[GitHub]`. Panels carry `+` corner
marks and a label notched into the top rule (`components/Frame.tsx` is the
reusable version; project tiles inline their own with an `01`/`02` index).
Contact is a `$ mail …` prompt, and the back link on detail pages reads
`$ cd ../projects` — with a screen-reader-only "Back to Projects", since
nobody should have to parse a shell path by ear.

**Dashed is the divider language.** Every rule on the site is dashed: the
sidebar edge, the line above each section, the rules between experience rows
and writing entries, the case-study fact grid and footer, and the frames
around photos and logo marks. Glass panels (bento tiles, the numbered
highlight cards) keep solid hairline edges — those are surfaces catching
light, not rules, and dashing them would fight the material.

`<Section>` holds its children to prose width by default. Pass `wide` to opt
out — the projects bento does, so it can use the full column.

### Glass, under the ASCII

The glass survived the terminal redesign in a quieter form. Panels are dashed
boxes now rather than sheened slabs, but they keep a faint translucent fill
over `backdrop-blur`, so the ambient light still shows through them.

`components/Ambient.tsx` is what makes any of it visible. `backdrop-blur` over
a flat colour produces nothing — there has to be something behind the glass to
refract. So two large, heavily blurred pools of accent-red light sit fixed
behind the page at 5-7% opacity. They're meant to read as a faint warmth at
the edges rather than as visible shapes.

If the effect is too subtle (or too strong), that file is the dial: raise the
`bg-accent/[0.07]` opacities for more colour, or the `blur-[130px]` radii for
a softer spread. The tiles' own `bg-white/[0.025]` in `ProjectTile.tsx`
controls how frosted the panels read.

The stacking matters: `Ambient` is `z-0`, `<main>` is `relative z-10`. If the
glow ever disappears, something has broken that relationship.

### The hero

The frame on the landing page pairs a portrait with the torus — photo left, donut
right, stacking on mobile. It currently reuses `site.avatar`, the same file as
the sidebar mark; point it at anything in `public/images/` if you'd rather the
two didn't repeat.

### The donut

`components/Donut.tsx` is a port of Andy Sloane's `donut.c`. For each point
on a torus it projects to a character cell, keeps the nearest hit in a
z-buffer, and picks a glyph from the `.,-~:;=!*#$@` ramp by dotting the
surface normal with the light.

Some details worth keeping if you touch it:

- **It renders on the server too.** `renderFrame` is pure, so the first frame
  is in the HTML — the torus is visible before JS runs, survives JS failing
  entirely, and reserves its own height so nothing shifts on load.
- **Frames are written with `textContent` through a ref**, not React state.
  At ~1,700 cells this would otherwise mean a reconciliation pass 24 times a
  second for something purely decorative.
- **It runs at 24fps, pauses on a hidden tab, and holds a still frame under
  `prefers-reduced-motion`.**
- It's `aria-hidden` — it carries no information.

`width`/`height` are props (default 80x22). The projection constants scale
from those, so it stays circular at other sizes; the font size is set by the
caller in `app/page.tsx`.

### Custom cursor

`components/Cursor.tsx` replaces the pointer with a dot that tracks exactly
and a ring that eases a frame behind it; over anything clickable the ring
grows and turns accent-coloured.

It's deliberately conservative about when it runs. It only activates for
`(pointer: fine)` devices — touch and stylus keep the native cursor — and
bows out entirely under `prefers-reduced-motion`. The `cursor: none` rule is
scoped to a `.has-custom-cursor` class that the component adds on mount and
removes on unmount, so a JS failure can never leave you with no pointer.

To remove it, delete `<Cursor />` from `app/layout.tsx`. Nothing else depends
on it.

## Deploy

**Vercel** — import the repo, accept the detected defaults, done. No
environment variables, no build configuration.

**Anywhere else** — `npm run build` then `npm run start` behind a reverse proxy.

The page is fully static (prerendered at build time), so it can also be
exported: add `output: "export"` **and** `images: { unoptimized: true }` to
`next.config.mjs`, and `npm run build` writes a static `out/` directory
suitable for GitHub Pages or any static host. The second setting is required —
`next/image`'s default optimizer can't run without a server.

> Note: this branch replaced the previous site. The old one is still on
> `master`, along with its GitHub Pages workflow in `.github/workflows/` and
> the `CNAME` for `ethan-rng.site`. Neither has been rewired to this branch.

## Accessibility

Semantic landmarks (`aside` / `nav` / `main` / `section`), a skip link, visible
focus rings on keyboard navigation only, `aria-current` on the active nav item,
`aria-expanded` on the mobile toggle, Escape to close the mobile menu, and
`prefers-reduced-motion` honoured for the smooth scrolling and transitions.
