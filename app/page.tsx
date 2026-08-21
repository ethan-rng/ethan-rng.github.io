import Image from "next/image";
import Link from "next/link";

import Donut from "@/components/Donut";
import Frame from "@/components/Frame";
import ProjectBento from "@/components/ProjectBento";
import Section from "@/components/Section";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export default function Home() {
  return (
    <>
      <h1 className="sr-only">
        {site.name} — {site.title}
      </h1>

      <Frame
        label={`~/${site.name.toLowerCase().replace(" ", "-")}`}
        className="px-4 py-6"
      >
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-8">
          <Image
            src={site.avatar}
            alt={site.name}
            width={320}
            height={320}
            priority
            className="w-28 shrink-0 border border-dashed border-line object-cover grayscale transition duration-500 hover:grayscale-0 sm:w-32 lg:w-40"
          />
          <div className="min-w-0 overflow-hidden">
            <Donut className="text-[5px] leading-[5px] sm:text-[6px] sm:leading-[6px] lg:text-[9px] lg:leading-[9px]" />
          </div>
        </div>
      </Frame>

      <p className="mt-10 max-w-prose text-base text-fg">
        <span aria-hidden="true" className="text-line">
          ${" "}
        </span>
        whoami — placeholder intro. One or two sentences on who you are and the
        kind of work you care about.
      </p>

      <Section title="Selected work" wide>
        <ProjectBento items={projects.slice(0, 3)} uniform />
        <Link
          href="/work"
          className="mt-6 inline-block text-xs text-faint transition-colors hover:text-accent"
        >
          <span aria-hidden="true" className="text-line">
            ${" "}
          </span>
          ls work/ &rarr;
        </Link>
      </Section>
    </>
  );
}
