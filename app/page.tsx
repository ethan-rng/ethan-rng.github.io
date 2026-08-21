import Image from "next/image";
import Link from "next/link";

import Donut from "@/components/Donut";
import ExperienceItem from "@/components/ExperienceItem";
import Frame from "@/components/Frame";
import ProjectBento from "@/components/ProjectBento";
import Section from "@/components/Section";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export default function Home() {
  return (
    <>
      <h1 className="sr-only">
        {site.name}, {site.title}
      </h1>

      <Frame
        label={`~/${site.name.toLowerCase().replace(" ", "-")}`}
        className="px-5 py-7 sm:px-8 sm:py-8"
      >
        {/* Identity left, torus right, pushed apart so the box is actually
            filled rather than leaving big empty gutters. */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="flex items-center gap-5 sm:gap-6">
            <Image
              src={site.portrait}
              alt={site.name}
              width={340}
              height={340}
              priority
              className="w-24 shrink-0 border border-dashed border-faint/50 p-1 object-cover grayscale transition duration-500 hover:grayscale-0 sm:w-28 lg:w-32"
            />

            <div className="min-w-0">
              <p className="text-xs text-faint">
                <span aria-hidden="true" className="text-line">
                  ${" "}
                </span>
                whoami
              </p>
              <p className="mt-3 max-w-[56ch] text-base text-fg sm:text-lg">
                Placeholder intro, a sentence or two on who you are and the
                kind of work you care about.
              </p>
              <Link
                href="/work"
                className="mt-5 inline-block text-xs text-faint transition-colors hover:text-accent"
              >
                <span aria-hidden="true" className="text-line">
                  ${" "}
                </span>
                ls work/ &rarr;
              </Link>
            </div>
          </div>

          <Donut className="mx-auto shrink-0 text-[5px] leading-[5px] sm:text-[6px] sm:leading-[6px] lg:mx-0 lg:text-[8px] lg:leading-[8px]" />
        </div>
      </Frame>

      <Section title="Experience">
        {experience.map((item, i) => (
          <ExperienceItem key={`${item.company}-${i}`} item={item} />
        ))}
      </Section>

      <Section title="Selected work">
        <ProjectBento items={projects.slice(0, 3)} uniform />
      </Section>
    </>
  );
}
