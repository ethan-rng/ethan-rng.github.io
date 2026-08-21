import Image from "next/image";

import { aboutPhotos } from "@/data/site";

/**
 * The About photo row. Grayscale at rest so it stays quiet against the
 * type, coming to colour on hover — the same treatment as the sidebar
 * avatar, so the two read as one idea.
 */
export default function PhotoStrip() {
  if (aboutPhotos.length === 0) return null;

  return (
    <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
      {aboutPhotos.map((photo) => (
        <li key={photo.src}>
          <figure className="group relative overflow-hidden rounded-sm border border-dashed border-line p-1">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={720}
              height={480}
              className="aspect-[4/3] w-full rounded-[2px] object-cover grayscale transition duration-500 group-hover:grayscale-0"
            />
          </figure>
        </li>
      ))}
    </ul>
  );
}
