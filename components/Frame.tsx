/**
 * A dashed panel with an optional label notched into its top rule, and `+`
 * glyphs at the corners — the way a box gets drawn in a terminal.
 *
 * The label sits on an opaque swatch so it interrupts the border rather than
 * overlapping it.
 */
export default function Frame({
  label,
  className = "",
  children,
}: {
  label?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`relative border border-dashed border-line ${className}`}
    >
      {label && (
        <span className="absolute -top-[0.65rem] left-4 bg-bg px-2 font-mono text-xs text-faint">
          {label}
        </span>
      )}

      {/* Corner marks. Decorative — the border already conveys the box. */}
      <span aria-hidden="true" className="pointer-events-none absolute -left-[3px] -top-[7px] font-mono text-xs text-line">
        +
      </span>
      <span aria-hidden="true" className="pointer-events-none absolute -right-[3px] -top-[7px] font-mono text-xs text-line">
        +
      </span>
      <span aria-hidden="true" className="pointer-events-none absolute -bottom-[7px] -left-[3px] font-mono text-xs text-line">
        +
      </span>
      <span aria-hidden="true" className="pointer-events-none absolute -bottom-[7px] -right-[3px] font-mono text-xs text-line">
        +
      </span>

      {children}
    </div>
  );
}
