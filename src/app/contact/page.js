import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";
import { profile } from "@/data/profile";

export const metadata = {
  title: `Contact — ${profile.name}`,
  description: `Get in touch with ${profile.name} at ${profile.email}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader id="contact" />
      <Contact full />
    </>
  );
}
