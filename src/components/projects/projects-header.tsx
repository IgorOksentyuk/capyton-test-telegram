import { JobsBanner } from "./jobs-banner";

export function ProjectsHeader() {
  return (
    <header className="flex justify-between h-11 items-center">
      <h1 className="text-xl leading-[30px]">Freelance JOBs</h1>

      <JobsBanner />
    </header>
  );
}
