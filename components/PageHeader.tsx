/**
 * The top of a route. `## work ─────`, the page's one <h1>, with a dashed
 * rule running out to the margin.
 */
export default function PageHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <header className="mb-12">
      <h1 className="flex items-baseline gap-3 text-xl text-bright sm:text-2xl">
        <span aria-hidden="true" className="text-line">
          ##
        </span>
        <span>{title}</span>
        <span
          aria-hidden="true"
          className="ml-1 h-0 flex-1 self-center border-t border-dashed border-line"
        />
      </h1>
      {description && (
        <p className="mt-5 text-sm text-muted">{description}</p>
      )}
    </header>
  );
}
