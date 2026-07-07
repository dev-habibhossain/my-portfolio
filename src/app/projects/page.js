import PageHeader from "@/components/PageHeader";
import ProjectsGrid from "@/components/ProjectsGrid";
import { profile } from "@/data/profile";

export const metadata = {
  title: `Projects — ${profile.name}`,
  description: `Selected projects by ${profile.name}.`,
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader id="projects" />
      <ProjectsGrid />
    </>
  );
}
