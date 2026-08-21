import Link from "next/link";

import Frame from "@/components/Frame";
import PageHeader from "@/components/PageHeader";
import { nav } from "@/data/site";

export const metadata = {
  title: "404, not found",
};

/**
 * Rendered inside the root layout, so the sidebar and footer come with it and
 * there's always a way out. Written as a failed shell command, which is the
 * page's whole job: say what went wrong, then offer the paths that do exist.
 */
export default function NotFound() {
  return (
    <>
      <PageHeader title="404" />

      <Frame label="stderr" className="max-w-prose px-5 py-5">
        <p className="text-sm text-fg">
          <span aria-hidden="true" className="text-line">
            ${" "}
          </span>
          cd <span className="text-muted">that page</span>
        </p>
        <p className="mt-2 text-sm text-faint">
          bash: no such file or directory
        </p>
      </Frame>

      <p className="mt-10 text-sm text-muted">
        The link is wrong or the page has moved. These ones are real:
      </p>

      <ul className="mt-5 space-y-2">
        <li>
          <Link
            href="/"
            className="group text-sm text-fg transition-colors hover:text-accent"
          >
            <span aria-hidden="true" className="text-line">
              ${" "}
            </span>
            cd ~
          </Link>
        </li>
        {nav.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-sm text-fg transition-colors hover:text-accent"
            >
              <span aria-hidden="true" className="text-line">
                ${" "}
              </span>
              cd {item.href}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
