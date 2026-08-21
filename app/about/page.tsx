import type { Metadata } from "next";

import BioToggle from "@/components/BioToggle";
import PageHeader from "@/components/PageHeader";
import PhotoScatter from "@/components/PhotoScatter";
import Section from "@/components/Section";
import { elsewhereIntro, foodIntro } from "@/data/about";
import { elsewherePhotos, foodPhotos, site } from "@/data/site";

export const metadata: Metadata = {
  title: `About, ${site.name}`,
  description: site.description,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader title="about" />

      <BioToggle />

      <Section title="elsewhere">
        <p className="mb-8 text-sm text-muted">{elsewhereIntro}</p>
        <PhotoScatter photos={elsewherePhotos} variant="portrait" />
      </Section>

      <Section title="food">
        <p className="mb-8 text-sm text-muted">{foodIntro}</p>
        <PhotoScatter photos={foodPhotos} />
      </Section>
    </>
  );
}
