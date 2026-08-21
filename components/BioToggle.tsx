"use client";

import { useState } from "react";

import { longBio, shortBio } from "@/data/about";

/**
 * The bio, with a short and a long version.
 *
 * The control is styled as command flags, `$ whoami --short --verbose`,
 * which is both the terminal idiom and an honest description of what the
 * toggle does. They're real buttons with `aria-pressed`, so the state is
 * announced rather than being conveyed by colour alone.
 */
export default function BioToggle() {
  const [verbose, setVerbose] = useState(false);
  const paragraphs = verbose ? longBio : shortBio;

  const flag = (active: boolean) =>
    [
      "transition-colors",
      active ? "text-accent" : "text-line hover:text-muted",
    ].join(" ");

  return (
    <div>
      <p className="flex flex-wrap items-baseline gap-x-3 text-xs text-faint">
        <span>
          <span aria-hidden="true" className="text-line">
            ${" "}
          </span>
          whoami
        </span>
        <span className="flex gap-x-3">
          <button
            type="button"
            onClick={() => setVerbose(false)}
            aria-pressed={!verbose}
            className={flag(!verbose)}
          >
            --short
          </button>
          <button
            type="button"
            onClick={() => setVerbose(true)}
            aria-pressed={verbose}
            className={flag(verbose)}
          >
            --verbose
          </button>
        </span>
      </p>

      <div className="mt-6 space-y-4">
        {paragraphs.map((paragraph, i) => (
          <p
            key={paragraph.slice(0, 32)}
            /* Lead with the first line brighter; the rest settles back. */
            className={i === 0 ? "text-base text-fg" : "text-base text-muted"}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
