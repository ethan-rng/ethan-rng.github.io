import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import PageHeader from "@/components/PageHeader";
import { posts } from "@/data/writing";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Writing, ${site.name}`,
  description: "Notes and posts.",
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  timeZone: "UTC",
});

export default function WritingPage() {
  return (
    <>
      <PageHeader title="writing" description="Notes and posts, newest first." />

      {posts.length === 0 ? (
        <p className="text-sm text-muted">Nothing published yet.</p>
      ) : (
        <ul>
          {posts.map((post) => {
            // A body means the post has its own page; otherwise link out.
            const external = !post.body && !!post.href;
            return (
              <li key={post.slug}>
                <Link
                  href={post.body ? `/writing/${post.slug}` : post.href ?? "#"}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 border-t border-dashed border-line py-5 first:border-t-0 first:pt-0"
                >
                  {post.image && (
                    <Image
                      src={post.image}
                      alt=""
                      width={200}
                      height={134}
                      className="hidden h-14 w-20 shrink-0 border border-dashed border-line object-cover grayscale transition duration-500 group-hover:grayscale-0 sm:block"
                    />
                  )}
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm text-fg transition-colors group-hover:text-accent">
                      {post.title}
                    </span>
                    {post.summary && (
                      <span className="mt-1 block text-sm text-muted">
                        {post.summary}
                      </span>
                    )}
                  </span>
                  <time
                    dateTime={post.date}
                    className="shrink-0 text-xs text-faint"
                  >
                    {dateFormatter.format(new Date(post.date))}
                  </time>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
