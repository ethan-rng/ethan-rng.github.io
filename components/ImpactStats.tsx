import type { Metric } from "@/data/projects";

/**
 * The numbers that open the write-up, sitting under the divider.
 *
 * Large enough to register as the first thing in the story, but not so large
 * that they compete with the title. Columns are separated by dashed rules
 * rather than boxed, to stay in the same language as the rest of the page.
 *
 * `dt` is the label and `dd` the value, which is the correct pairing for a
 * description list; `flex-col-reverse` puts the number on top visually
 * without reversing the markup.
 */
export default function ImpactStats({ metrics }: { metrics: Metric[] }) {
  if (metrics.length === 0) return null;

  return (
    <dl className="grid grid-cols-1 divide-y divide-dashed divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="flex flex-col-reverse gap-2 py-5 sm:px-7 sm:py-2 sm:first:pl-0"
        >
          <dt className="text-xs uppercase tracking-widest text-faint">
            {metric.label}
          </dt>
          <dd className="text-2xl leading-none text-bright sm:text-3xl">
            {metric.value}
            {metric.unit && (
              <span className="ml-1.5 text-base text-accent">
                {metric.unit}
              </span>
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}
