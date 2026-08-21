import Image from "next/image";

import type { Polaroid } from "@/data/site";

/**
 * A scatter of polaroids, spaced apart, each tilted a different way and
 * nudged off the baseline, straightening under the cursor.
 *
 * The rotations and nudges are hand-picked per position rather than random:
 * a deliberate arrangement reads as scattered, whereas actual randomness
 * tends to land on clumps and near-duplicates. They're indexed modulo the
 * list length, so adding a photo still gets a sensible angle.
 */
const TILTS = [
  "-rotate-6 sm:-translate-y-2",
  "rotate-3 sm:translate-y-3",
  "-rotate-2 sm:-translate-y-4",
  "rotate-6 sm:translate-y-1",
  "-rotate-3 sm:-translate-y-1",
  "rotate-2 sm:translate-y-2",
];

export default function PhotoScatter({
  photos,
  /** Match the frame to the source shots so `object-cover` isn't hacking off heads. */
  variant = "landscape",
}: {
  photos: Polaroid[];
  variant?: "landscape" | "portrait";
}) {
  if (photos.length === 0) return null;

  const frame =
    variant === "portrait"
      ? "h-32 w-24 sm:h-[10rem] sm:w-[7.5rem]"
      : "h-24 w-32 sm:h-28 sm:w-36";

  return (
    <ul className="flex flex-wrap justify-center gap-x-6 gap-y-9 sm:justify-start sm:gap-x-9">
      {photos.map((photo, i) => (
        <li
          key={photo.src}
          className={[
            // Spaced apart rather than stacked, the tilt and the vertical
            // nudge carry the scatter, so they don't need to overlap.
            "relative",
            "transition-transform duration-300 hover:z-10 hover:rotate-0 hover:scale-105",
            TILTS[i % TILTS.length],
          ].join(" ")}
        >
          <figure className="border border-dashed border-faint/50 bg-raised p-1.5 shadow-lg shadow-black/40">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={300}
              height={300}
              className={`${frame} object-cover grayscale transition duration-500 hover:grayscale-0`}
            />
            <figcaption className="mt-1.5 text-center text-[10px] text-faint">
              {photo.label}
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
