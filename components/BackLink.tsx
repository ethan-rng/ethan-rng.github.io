import Link from "next/link";

/**
 * Reads as a shell command — `cd ../projects` — with the real destination
 * announced to screen readers, which shouldn't have to parse a path.
 */
export default function BackLink({
  href,
  label,
}: {
  href: string;
  /** Human name of the destination, e.g. "Projects". */
  label: string;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center font-mono text-xs text-faint transition-colors hover:text-accent"
    >
      <span
        aria-hidden="true"
        className="inline-block transition-transform group-hover:-translate-x-1"
      >
        <span className="text-line">$ </span>
        cd ../{label.toLowerCase()}
      </span>
      <span className="sr-only">Back to {label}</span>
    </Link>
  );
}
