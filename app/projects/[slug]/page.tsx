import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import BackLink from "@/components/BackLink";
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
    title: `${project.title} — ${site.name}`,
    description: project.caseStudy?.headline ?? project.description,
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project?.caseStudy) notFound();

  const { title, tags, href, image, caseStudy } = project;
  const { kicker, headline, facts, glance, highlights, sections } = caseStudy;

  return (
    <article className="pb-16">
      <BackLink href="/#projects" label="Projects" />

      <header className="mt-10">
        <p className="font-mono text-xs uppercase tracking-widest text-faint">
          {kicker}
        </p>
        <h1 className="mt-4 text-3xl text-bright sm:text-4xl">{title}</h1>
        <p className="mt-4 max-w-prose text-lg text-muted">{headline}</p>
      </header>

      {image && (
        <Image
          src={image}
          alt=""
          width={1200}
          height={600}
          className="mt-10 aspect-[2/1] w-full border border-dashed border-line object-cover grayscale"
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

      <section className="mt-16">
        <h2 className="font-mono text-xs uppercase tracking-widest text-faint">
          At a glance
        </h2>
        <p className="mt-4 max-w-prose text-lg text-fg">{glance}</p>
      </section>

      <ol className="mt-12 grid gap-3 sm:grid-cols-3">
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
            <h3 className="mt-3 text-base text-bright">{highlight.title}</h3>
            <p className="mt-2 text-sm text-muted">{highlight.body}</p>
          </li>
        ))}
      </ol>

      {sections.map((section) => (
        <section key={section.heading} className="mt-16">
          <h2 className="font-mono text-xs uppercase tracking-widest text-faint">
            {section.heading}
          </h2>
          <div className="mt-4 max-w-prose space-y-4">
            {section.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-base text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      ))}

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
