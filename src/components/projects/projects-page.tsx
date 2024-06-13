import { PROJECTS_DATA } from "@/data/projects";
import { Card } from "./card";
import { Filter } from "./filter";
import { ProjectsHeader } from "./projects-header";

export function ProjectsPage() {
  return (
    <div>
      <ProjectsHeader />

      <div className="flex flex-col items-center justify-start h-screen pt-5">
        <Filter />
        <div className="h-fit pt-2 space-y-2 gap-2 overflow-y-auto">
          {PROJECTS_DATA.map((project) => (
            <Card key={project.id} project={project} isPreview />
          ))}
        </div>
      </div>
    </div>
  );
}
