import type { Metadata } from "next";
import ContactCtaSection from "@/components/sections/ContactCtaSection";
import LocationSection from "@/components/sections/LocationSection";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact & Request a Quote",
  description:
    "Request a personalized quote for house, apartment, move-in, move-out, deep, camper or RV cleaning in Wisconsin.",
};

export default function ContactPage() {
  return (
    <main>
      <Section tone="cream" className="pt-12 sm:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="eyebrow">Contact Domenica</p>
            <h1 className="mt-4 max-w-3xl font-heading text-[clamp(2.7rem,6vw,5rem)] font-bold leading-[0.98] tracking-[-0.04em] text-(--navy)">
              Let’s Talk About Your Space
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-(--muted)">
              Share what you need cleaned, the kind of space you have, and any
              priorities that would help Domenica prepare a personalized quote.
            </p>
          </div>
          <div className="flex min-w-60 flex-col gap-3 rounded-[1.5rem] border border-(--border) bg-white p-6 shadow-(--shadow-sm)">
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-(--blue)">Call or text</p>
            <a href={siteConfig.contact.phoneHref} className="font-heading text-2xl font-bold text-(--navy)">{siteConfig.contact.phone}</a>
            <Button href={siteConfig.contact.smsHref} variant="secondary">Message Domenica</Button>
          </div>
        </div>
      </Section>
      <Section tone="white"><ContactCtaSection /></Section>
      <Section tone="blue"><LocationSection /></Section>
    </main>
  );
}
