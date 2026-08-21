import type { Metadata } from "next";

import PageHeader from "@/components/PageHeader";
import ProjectBento from "@/components/ProjectBento";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Work, ${site.name}`,
  description: "Projects and case studies.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        title="work"
        description="Projects and case studies. Open one for the full write-up."
      />
      <ProjectBento />
    </>
  );
}
