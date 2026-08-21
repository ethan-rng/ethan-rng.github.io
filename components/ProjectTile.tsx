import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/data/projects";

export default function ProjectTile({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const { slug, title, description, tags, href, year, image, size, caseStudy } =
    project;
  const wide = size === "wide";
  // A case study takes precedence: the tile opens the detail page, and the
  // external link moves to that page's footer. Without one, the tile is a
  // plain outbound link.
  const target = caseStudy ? `/projects/${slug}` : href;
  const external = !caseStudy && !!href;

  const heading = (
    <span className="text-base text-bright transition-colors group-hover:text-accent">
      {title}
    </span>
  );

  return (
    <article
      className={[
        "group relative isolate flex flex-col p-5",
        // A terminal box: dashed rule, faint glass fill so the ambient pools
        // still read through it.
        "border border-dashed border-line bg-white/[0.02] backdrop-blur-2xl",
        "transition-[background-color,border-color] duration-300",
        "hover:border-accent/40 hover:bg-white/[0.045]",
        wide ? "sm:col-span-2" : "",
      ].join(" ")}
    >
      {/* Corner marks, the way a box gets drawn in a terminal. */}
      {[
        "-left-[3px] -top-[7px]",
        "-right-[3px] -top-[7px]",
        "-bottom-[7px] -left-[3px]",
        "-bottom-[7px] -right-[3px]",
      ].map((position) => (
        <span
          key={position}
          aria-hidden="true"
          className={`pointer-events-none absolute font-mono text-xs text-line transition-colors group-hover:text-accent/50 ${position}`}
        >
          +
        </span>
      ))}

      {/* Index label notched into the top rule. */}
      <span
        aria-hidden="true"
        className="absolute -top-[0.65rem] left-4 bg-bg px-2 font-mono text-xs text-line"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {image && (
        <Image
          src={image}
          alt=""
          width={480}
          height={320}
          className={[
            "mb-4 w-full rounded-md object-cover opacity-70 transition duration-300",
            "group-hover:opacity-100 group-hover:grayscale-0",
            wide ? "aspect-[16/6]" : "aspect-[3/2]",
          ].join(" ")}
        />
      )}

      <div className="flex items-baseline justify-between gap-4">
        <h3>
          {target ? (
            <Link
              href={target}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              /* Stretch the hit area across the tile without nesting links. */
              className="after:absolute after:inset-0 after:content-['']"
            >
              {heading}
            </Link>
          ) : (
            heading
          )}
        </h3>
        {year && (
          <span className="shrink-0 font-mono text-xs text-faint">{year}</span>
        )}
      </div>

      <p className="mt-2 text-sm text-muted">{description}</p>

      {tags.length > 0 && (
        <ul className="mt-auto flex flex-wrap gap-x-3 gap-y-1 pt-3">
          {tags.map((tag) => (
            <li key={tag} className="font-mono text-xs text-faint">
              {tag}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
