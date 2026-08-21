export default function Section({
  id,
  title,
  wide = false,
  children,
}: {
  id?: string;
  title: string;
  /**
   * Let the content fill the full column instead of being held to prose
   * width. Used by the projects bento, which needs room for a grid.
   */
  wide?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-16 md:scroll-mt-16">
      {/* `## heading ─────` — a markdown-ish rule that runs to the margin. */}
      <h2 className="flex items-baseline gap-3 font-mono text-xs uppercase tracking-widest text-faint">
        <span aria-hidden="true" className="text-line">
          ##
        </span>
        {title}
        <span
          aria-hidden="true"
          className="ml-1 h-0 flex-1 self-center border-t border-dashed border-line"
        />
      </h2>
      <div className={wide ? "mt-8" : "mt-8 max-w-prose"}>{children}</div>
    </section>
  );
}
