import Image from "next/image";

import type { Role } from "@/data/experience";

export default function ExperienceItem({ item }: { item: Role }) {
  const { role, company, period, description, tags, href, image } = item;

  const companyName = (
    <span className="text-muted transition-colors group-hover:text-accent">
      {company}
    </span>
  );

  return (
    <article className="group relative flex gap-4 border-t border-dashed border-line py-6 first:border-t-0 first:pt-0">
      {image && (
        <Image
          src={image}
          alt=""
          width={96}
          height={96}
          /* A light chip: these are brand marks, and several of them (Ivey's
             dark green, MLH's navy) are invisible against a near-black tile.
             object-contain so a wide wordmark isn't cropped to its middle. */
          className="mt-1 h-10 w-10 shrink-0 rounded-md border border-dashed border-line bg-[#ededed] object-contain p-1 grayscale transition duration-500 group-hover:grayscale-0"
        />
      )}

      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-base text-bright">
            {role}
            <span className="text-faint"> · </span>
            {href ? (
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                /* Stretch the hit area across the row without nesting links. */
                className="after:absolute after:inset-0 after:content-['']"
              >
                {companyName}
              </a>
            ) : (
              companyName
            )}
          </h3>
          <span className="shrink-0 font-mono text-xs text-faint">
            {period}
          </span>
        </div>

        {description && (
          <p className="mt-2 text-sm text-muted">{description}</p>
        )}

        {tags && tags.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
            {tags.map((tag) => (
              <li key={tag} className="font-mono text-xs text-faint">
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
