import PageHeader from "@/components/PageHeader";
import Skills from "@/components/Skills";
import { profile } from "@/data/profile";

export const metadata = {
  title: `Skills — ${profile.name}`,
  description: `Technologies and practices ${profile.name} works with.`,
};

export default function SkillsPage() {
  return (
    <>
      <PageHeader idx="03" title="Skills" />
      <Skills full />
    </>
  );
}
