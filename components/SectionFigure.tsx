import Image from "next/image";

import type { Figure } from "@/data/projects";

/**
 * A diagram or screenshot inside a write-up section.
 *
 * Screenshots follow the site's grayscale-until-hover rule.
 *
 * Diagrams are handled differently. They arrive as line drawings on white,
 * which is wrong twice over on a dark page: the white slab fights the
 * background, and keying it out alone would leave black strokes invisible.
 * So the source has its background keyed to transparent, and `invert` plus a
 * 180 degree hue rotation flips lightness while putting the hues back, which
 * turns black strokes light and leaves the fills recognisable. Alpha is
 * untouched by both filters, so the background stays clear.
 */
export default function SectionFigure({ figure }: { figure: Figure }) {
  const isDiagram = figure.diagram === true;

  return (
    <figure className="mt-8">
      <div
        className={
          isDiagram
            ? "border border-dashed border-line px-4 py-6"
            : "border border-dashed border-line"
        }
      >
        <Image
          src={figure.src}
          alt={figure.alt}
          width={1400}
          height={800}
          sizes="(max-width: 768px) 100vw, 80vw"
          quality={90}
          className={[
            "w-full object-contain",
            isDiagram
              ? "invert hue-rotate-180"
              : "grayscale transition duration-500 hover:grayscale-0",
          ].join(" ")}
        />
      </div>
      <figcaption className="mt-3 text-xs text-faint">
        {figure.caption}
      </figcaption>
    </figure>
  );
}
