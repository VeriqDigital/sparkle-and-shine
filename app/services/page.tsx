import type { Metadata } from "next";
import ServicesSection from "@/components/sections/ServicesSection";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Cleaning Services",
  description:
    "Explore regular, apartment, deep, move-in, move-out, camper and RV cleaning from Domenica’s Cleaning in Wisconsin.",
};

export default function ServicesPage() {
  return (
    <main>
      <Section tone="blue" className="pt-12 sm:pt-16">
        <ServicesSection showAll headingAs="h1" />
      </Section>
    </main>
  );
}
