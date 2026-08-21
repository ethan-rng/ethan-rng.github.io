import type { Metadata } from "next";
import { notFound } from "next/navigation";

import BackLink from "@/components/BackLink";
import { getPost, posts } from "@/data/writing";
import { site } from "@/data/site";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

// Only posts with an inline body get a page; the rest link out.
export function generateStaticParams() {
  return posts.filter((p) => p.body).map((p) => ({ slug: p.slug }));
}

// Next 16: params is async and must be awaited.
type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — ${site.name}`,
    description: post.summary,
  };
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post?.body) notFound();

  return (
    <article className="pb-16">
      <BackLink href="/#writing" label="Writing" />

      <header className="mt-10 max-w-prose">
        <time
          dateTime={post.date}
          className="font-mono text-xs uppercase tracking-widest text-faint"
        >
          {dateFormatter.format(new Date(post.date))}
        </time>
        <h1 className="mt-4 text-3xl text-bright sm:text-4xl">{post.title}</h1>
        {post.summary && (
          <p className="mt-4 text-lg text-muted">{post.summary}</p>
        )}
      </header>

      <div className="mt-10 max-w-prose space-y-5 border-t border-dashed border-line pt-8">
        {post.body.map((paragraph, i) => (
          <p key={i} className="text-base text-fg">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}
