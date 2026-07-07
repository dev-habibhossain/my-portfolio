import PageHeader from "@/components/PageHeader";
import Experience from "@/components/Experience";
import { profile } from "@/data/profile";

export const metadata = {
  title: `Work — ${profile.name}`,
  description: `Experience and work history of ${profile.name}.`,
};

export default function WorkPage() {
  return (
    <>
      <PageHeader idx="02" title="Work" />
      <Experience count={null} />
    </>
  );
}
