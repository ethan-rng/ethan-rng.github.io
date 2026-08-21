import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Ambient from "@/components/Ambient";
import Cursor from "@/components/Cursor";
import Sidebar from "@/components/Sidebar";
import SiteFooter from "@/components/SiteFooter";
import { site } from "@/data/site";
import "./globals.css";

const sans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: `${site.name} — ${site.title}`,
  description: site.description,
};

export const viewport = {
  // Keep in sync with `bg` in tailwind.config.ts.
  themeColor: "#121212",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // data-scroll-behavior: opt in to Next's scroll handling for the smooth
    // scrolling set in globals.css (Next 16 no longer does this implicitly).
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-raised focus:px-3 focus:py-2 focus:text-sm focus:text-bright"
        >
          Skip to content
        </a>

        <Ambient />
        <Cursor />
        <Sidebar />

        {/* Offset matches the sidebar width on desktop, the top bar on mobile. */}
        <main
          id="main"
          className="relative z-10 px-6 pb-32 pt-24 sm:px-10 md:ml-64 md:pt-32 lg:ml-72 lg:px-16"
        >
          {/* Sections hold themselves to prose width; the bento opts out. */}
          <div className="max-w-5xl">
            {children}
            <SiteFooter />
          </div>
        </main>
      </body>
    </html>
  );
}
