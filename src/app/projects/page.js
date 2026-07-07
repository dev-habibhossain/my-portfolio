import PageHeader from "@/components/PageHeader";
import ProjectsAccordion from "@/components/ProjectsAccordion";
import { profile } from "@/data/profile";

export const metadata = {
  title: `Projects — ${profile.name}`,
  description: `Selected projects by ${profile.name}.`,
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader idx="04" title="Projects" />
      <ProjectsAccordion count={null} />
    </>
  );
}
