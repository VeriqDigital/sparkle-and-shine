import type { Metadata } from "next";
import AboutIntro from "@/components/sections/AboutIntro";
import ContactCtaSection from "@/components/sections/ContactCtaSection";
import Section from "@/components/ui/Section";
import { HeartIcon, MessageIcon, SparkleIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "About Domenica",
  description:
    "Meet Domenica and learn about the personal, detail-oriented approach behind Domenica’s Cleaning in Wisconsin.",
};

const values = [
  {
    title: "Direct communication",
    description: "Share your priorities with Domenica and receive clear, personal follow-up.",
    Icon: MessageIcon,
  },
  {
    title: "Thoughtful care",
    description: "Your home is treated like a personal space, not just another appointment on a route.",
    Icon: HeartIcon,
  },
  {
    title: "Attention to detail",
    description: "The quote begins with your rooms, needs, and the small details that matter to you.",
    Icon: SparkleIcon,
  },
] as const;

export default function AboutPage() {
  return (
    <main>
      <Section tone="white" className="pt-12 sm:pt-16">
        <AboutIntro headingAs="h1" />
      </Section>
      <Section tone="blue">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">What you can expect</p>
          <h2 className="mt-4 font-heading text-[clamp(2.45rem,5vw,4.4rem)] font-bold leading-[1.02] tracking-[-0.035em] text-(--navy)">
            Personal Service, Clear Communication
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-(--muted)">
            Domenica’s Cleaning is designed around a direct owner-to-customer
            relationship, with the details confirmed before service begins.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {values.map(({ title, description, Icon }) => (
            <article key={title} className="rounded-[1.5rem] border border-(--border) bg-white p-7 shadow-(--shadow-sm)">
              <span className="flex size-12 items-center justify-center rounded-full bg-(--surface-blue) text-(--blue)"><Icon className="size-6" /></span>
              <h3 className="mt-6 font-heading text-xl font-bold text-(--navy)">{title}</h3>
              <p className="mt-3 leading-7 text-(--muted)">{description}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section tone="white"><ContactCtaSection /></Section>
    </main>
  );
}
