import type { Metadata } from "next";

import ExperienceItem from "@/components/ExperienceItem";
import PageHeader from "@/components/PageHeader";
import { experience } from "@/data/experience";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Experience — ${site.name}`,
  description: "Roles, newest first.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader title="experience" description="Roles, newest first." />
      <div className="max-w-prose">
        {experience.map((item, i) => (
          <ExperienceItem key={`${item.company}-${i}`} item={item} />
        ))}
      </div>
    </>
  );
}
