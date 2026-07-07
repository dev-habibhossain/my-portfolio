import PageHeader from "@/components/PageHeader";
import About from "@/components/About";
import { profile } from "@/data/profile";

export const metadata = {
  title: `About — ${profile.name}`,
  description: profile.bio,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader idx="01" title="About" />
      <About count={null} />
    </>
  );
}
