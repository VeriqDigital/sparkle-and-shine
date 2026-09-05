import type { Metadata } from "next";
import ServicesSection from "@/components/sections/ServicesSection";
import Section from "@/components/ui/Section";
import { getServices } from "@/sanity/lib/services";

export const metadata: Metadata = {
  title: "Cleaning Services",
  description:
    "Explore regular, apartment, deep, move-in, move-out, camper and RV cleaning from Domenica’s Cleaning in Wisconsin.",
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <main>
      <Section tone="blue" className="pt-12 sm:pt-16">
        <ServicesSection services={services} showAll headingAs="h1" />
      </Section>
    </main>
  );
}
