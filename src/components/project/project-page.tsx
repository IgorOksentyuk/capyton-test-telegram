import { PROJECTS_DATA } from "@/data/projects";
import { Card } from "../projects/card";

type Props = {
  id: string;
};

export function ProjectPage(props: Props) {
  const { id } = props;

  const project = PROJECTS_DATA.find((project) => project.id === id);

  return (
    <div className="flex flex-col items-center justify-start h-screen">
      <Card project={project} />
    </div>
  );
}
