import type { Metadata } from "next";

import PageHeader from "@/components/PageHeader";
import PhotoStrip from "@/components/PhotoStrip";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `About — ${site.name}`,
  description: site.description,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader title="about" />

      {/* The first two paragraphs are still placeholder copy — replace them.
          The third is real; education lives here rather than under
          Experience, which is work only. */}
      <div className="max-w-prose space-y-4 text-base">
        <p className="text-bright">
          Placeholder intro. One or two sentences on who you are and the kind of
          work you care about — this is the first thing anyone reads.
        </p>
        <p className="text-muted">
          A second paragraph with more detail: what you build, the problems you
          like, where you&rsquo;ve worked. Keep it short. The whitespace is
          doing as much work as the words.
        </p>
        <p className="text-muted">
          Computer Science at the University of Western Ontario, alongside an
          HBA at Ivey Business School.
        </p>
      </div>

      <PhotoStrip />
    </>
  );
}
