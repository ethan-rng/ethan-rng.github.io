/**
 * Writing list. Same idea as projects.ts — edit the array, the section
 * follows.
 *
 * A post with a `body` gets its own page at /writing/<slug>. A post with an
 * `href` and no `body` just links out. Empty the array entirely and the
 * Writing section hides itself.
 */

export type Post = {
  /** URL segment: /writing/<slug>. */
  slug: string;
  title: string;
  /** ISO date, e.g. "2025-03-14". Formatted for display at render time. */
  date: string;
  /** One line under the title, shown on the post page and in the list. */
  summary?: string;
  /** Paragraphs. Include this and the post gets its own page. */
  body?: string[];
  /** External link, used only when there's no `body`. */
  href?: string;
  /** Optional thumbnail, as a path under `public/`. Rendered at 3:2. */
  image?: string;
};

export const posts: Post[] = [
  {
    slug: "post-title-goes-here",
    title: "Post title goes here",
    date: "2025-06-01",
    summary: "A one-line standfirst that says why this is worth reading.",
    body: [
      "Opening paragraph. Placeholder text — replace it with the actual post.",
      "A second paragraph. The measure here is set for reading, so long-form prose sits comfortably without extra work.",
      "A third, to show the rhythm of the page once there's real writing in it.",
    ],
    image: "/images/projects/placeholder-2.svg",
  },
  {
    slug: "another-post-title",
    title: "Another post title",
    date: "2025-02-18",
    summary: "Another standfirst, doing the same job as the one above.",
    body: [
      "Opening paragraph. Placeholder text — replace it with the actual post.",
      "A second paragraph to give the page some body.",
    ],
    image: "/images/projects/placeholder-3.svg",
  },
  {
    slug: "an-older-post",
    title: "An older post",
    date: "2024-11-05",
    summary: "This one links out instead of opening a page.",
    href: "https://example.com",
    image: "/images/projects/placeholder-1.svg",
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
