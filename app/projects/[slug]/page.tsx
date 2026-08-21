import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import BackLink from "@/components/BackLink";
import ImpactStats from "@/components/ImpactStats";
import { getProject, projects } from "@/data/projects";
import { site } from "@/data/site";

// Every project is known at build time, so each page is prerendered.
export function generateStaticParams() {
  return projects
    .filter((p) => p.caseStudy)
    .map((p) => ({ slug: p.slug }));
}

// Next 16: params is async and must be awaited.
type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title}, ${site.name}`,
    description: project.caseStudy?.headline ?? project.description,
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project?.caseStudy) notFound();

  const { title, tags, href, image, heroImage, caseStudy } = project;
  const { kicker, headline, facts, impact, glance, highlights, sections } =
    caseStudy;

  return (
    <article className="pb-16">
      <BackLink href="/#projects" label="Projects" />

      <header className="mt-10">
        <p className="font-mono text-xs uppercase tracking-widest text-faint">
          {kicker}
        </p>
        <h1 className="mt-4 text-3xl text-bright sm:text-4xl">{title}</h1>
        <p className="mt-4 text-lg text-muted">{headline}</p>
      </header>

      {(heroImage ?? image) && (
        <Image
          src={(heroImage ?? image) as string}
          alt=""
          width={2200}
          height={1100}
          priority
          /* The column is unbounded, so let the optimizer pick a rendition
             for the viewport. quality lifts off the default 75, which
             visibly softens a dense screenshot. */
          sizes="(max-width: 768px) 100vw, 90vw"
          quality={90}
          className="mt-10 aspect-[2/1] w-full border border-dashed border-line object-cover grayscale transition duration-500 hover:grayscale-0"
        />
      )}

      <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-dashed border-line pt-8 sm:grid-cols-4">
        {facts.map((fact) => (
          <div key={fact.label}>
            <dt className="font-mono text-xs uppercase tracking-widest text-faint">
              {fact.label}
            </dt>
            <dd className="mt-2 text-sm text-fg">{fact.value}</dd>
          </div>
        ))}
      </dl>

      {/* Summary and Full write-up are the two top-level movements; both use
          the rule-heading, so the split reads at a glance. */}
      <section className="mt-20">
        <h2 className="flex items-baseline gap-4">
          <span className="text-xl text-bright sm:text-2xl">Summary</span>
          <span
            aria-hidden="true"
            className="h-0 flex-1 self-center border-t border-dashed border-line"
          />
        </h2>
        <p className="mt-6 text-lg text-fg">{glance}</p>
      </section>

      {/* Everything above is the summary; everything below is the story.
          Same shape as the section headings, minus the number. */}
      <h2 className="mt-20 flex items-baseline gap-4">
        <span className="text-xl text-bright sm:text-2xl">Full write-up</span>
        <span
          aria-hidden="true"
          className="h-0 flex-1 self-center border-t border-dashed border-line"
        />
      </h2>

      {impact && impact.length > 0 && (
        /* Part of the write-up rather than a section beside it: the numbers
           sit straight under the divider and lead into the story. */
        <div className="mt-12">
          <h3 className="sr-only">Impact</h3>
          <ImpactStats metrics={impact} />
        </div>
      )}

      {sections.map((section) => (
        <section key={section.heading} className="mt-14">
          <h3 className="font-mono text-xs uppercase tracking-widest text-faint">
            {section.heading}
          </h3>
          <div className="mt-4 space-y-4">
            {section.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-base text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      ))}

      <section className="mt-16">
        <h3 className="font-mono text-xs uppercase tracking-widest text-faint">
          Highlights
        </h3>
        <ol className="mt-8 grid gap-3 sm:grid-cols-3">
          {highlights.map((highlight, i) => (
            <li
              key={highlight.title}
              className="relative border border-dashed border-line bg-white/[0.02] p-5 backdrop-blur-2xl"
            >
              <span className="font-mono text-xs text-accent">
                <span aria-hidden="true" className="text-line">
                  [
                </span>
                {String(i + 1).padStart(2, "0")}
                <span aria-hidden="true" className="text-line">
                  ]
                </span>
              </span>
              <h4 className="mt-3 text-base text-bright">{highlight.title}</h4>
              <p className="mt-2 text-sm text-muted">{highlight.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <footer className="mt-16 border-t border-dashed border-line pt-8">
        {tags.length > 0 && (
          <ul className="flex flex-wrap gap-x-3 gap-y-1">
            {tags.map((tag) => (
              <li key={tag} className="font-mono text-xs text-faint">
                {tag}
              </li>
            ))}
          </ul>
        )}
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block text-sm text-fg transition-colors hover:text-accent"
          >
            Visit the project &rarr;
          </a>
        )}
      </footer>
    </article>
  );
}
