import ProjectTile from "@/components/ProjectTile";
import type { Project } from "@/data/projects";
import { projects as allProjects } from "@/data/projects";

export default function ProjectBento({
  items = allProjects,
  /** Ignore per-project `size`, every tile takes one cell. */
  uniform = false,
}: {
  items?: Project[];
  uniform?: boolean;
} = {}) {
  return (
    // Panels float with a real gap rather than sharing hairline edges, glass
    // needs to read as separate surfaces to look like glass at all.
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((project, i) => (
        <ProjectTile
          key={project.slug}
          project={uniform ? { ...project, size: "normal" } : project}
          index={i}
        />
      ))}
    </div>
  );
}
