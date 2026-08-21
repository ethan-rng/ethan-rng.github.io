/**
 * Two very soft accent-coloured pools of light, fixed behind everything.
 *
 * These exist so the glass surfaces have something to refract — `backdrop-blur`
 * over a flat colour is invisible, so without this the glass reads as plain
 * translucency. Kept at 5-7% opacity with a heavy blur: the intent is a faint
 * warmth at the edges of the page, not visible blobs.
 *
 * These use `accentDeep` — the true Meta brand blue. It's too dark to pass
 * contrast as text, but nothing here has to be legible, so the atmosphere
 * gets the real brand colour while the interactive accent stays readable.
 */
export default function Ambient() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="absolute -left-32 -top-32 h-[34rem] w-[34rem] rounded-full bg-accentDeep/[0.10] blur-[130px]" />
      <div className="absolute -right-40 top-[55%] h-[30rem] w-[30rem] rounded-full bg-accentDeep/[0.07] blur-[140px]" />
    </div>
  );
}
