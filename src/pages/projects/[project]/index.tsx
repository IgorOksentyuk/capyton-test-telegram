import { ProjectPage } from "@/components/project/project-page"

interface PageProps {
    params: {
      project: string
    }
  }

export default function Page(props: PageProps) {
    const { project } = props.params
  
    return <ProjectPage id={project}/>
  }