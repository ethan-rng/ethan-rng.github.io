"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { nav, site, socials } from "@/data/site";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Prevent the page scrolling behind the open mobile menu.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Mobile top bar — dashed to match the sidebar rule on desktop. */}
      <div className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-dashed border-line bg-bg/70 px-6 py-4 backdrop-blur-xl md:hidden">
        <Link
          href="/"
          className="text-sm text-bright transition-colors hover:text-accent"
        >
          {site.name}
        </Link>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="site-nav"
          className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-accent"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <aside
        id="site-nav"
        className={[
          // Mobile: full-screen overlay, toggled.
          "fixed inset-0 z-30 flex-col justify-between bg-bg/95 px-6 pb-10 pt-24 backdrop-blur-xl",
          open ? "flex" : "hidden",
          // Desktop: always-visible fixed rail, separated from the content
          // column by a dashed rule running the full viewport height.
          "md:flex md:inset-y-0 md:left-0 md:right-auto md:w-64 md:px-10 md:py-16 lg:w-72",
          "md:border-r md:border-dashed md:border-line md:bg-bg/50 md:backdrop-blur-2xl",
        ].join(" ")}
      >
        <div>
          <Image
            src={site.avatar}
            alt=""
            width={80}
            height={80}
            priority
            className="mb-5 h-10 w-10 rounded-full object-cover grayscale transition-[filter] duration-500 hover:grayscale-0"
          />
          <p className="text-lg text-bright">
            <Link href="/" className="transition-colors hover:text-accent">
              {site.name}
            </Link>
          </p>
          <p className="mt-1 font-mono text-sm text-muted">
            <span aria-hidden="true" className="text-line">
              ${" "}
            </span>
            {site.title}
            <span
              aria-hidden="true"
              className="ml-1 inline-block h-3 w-[7px] translate-y-[1px] bg-muted/70 motion-safe:animate-pulse"
            />
          </p>

          <nav aria-label="Primary" className="mt-14">
            <ul className="space-y-3">
              {nav.map((item) => {
                const isActive = [item.href, ...(item.match ?? [])].some(
                  (path) => pathname === path || pathname.startsWith(`${path}/`),
                );
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive ? "location" : undefined}
                      className={[
                        "group flex items-center gap-2 font-mono text-sm transition-colors hover:text-accent",
                        isActive ? "text-bright" : "text-muted",
                      ].join(" ")}
                    >
                      <span
                        aria-hidden="true"
                        className={[
                          "transition-opacity",
                          isActive
                            ? "text-accent opacity-100"
                            : "text-line opacity-0 group-hover:opacity-100",
                        ].join(" ")}
                      >
                        &gt;
                      </span>
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <ul className="mt-16 flex flex-wrap gap-x-5 gap-y-2 md:mt-0">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="font-mono text-xs text-faint transition-colors hover:text-accent"
              >
                <span aria-hidden="true" className="text-line">
                  [
                </span>
                {social.label}
                <span aria-hidden="true" className="text-line">
                  ]
                </span>
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
