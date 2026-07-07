import PageHeader from "@/components/PageHeader";
import Experience from "@/components/Experience";
import { profile } from "@/data/profile";

export const metadata = {
  title: `Experience — ${profile.name}`,
  description: `Work history and experience of ${profile.name}.`,
};

export default function WorkPage() {
  return (
    <>
      <PageHeader id="experience" />
      <Experience full />
    </>
  );
}
