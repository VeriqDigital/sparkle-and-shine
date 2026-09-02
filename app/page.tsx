import AboutIntro from "@/components/sections/AboutIntro";
import ContactCtaSection from "@/components/sections/ContactCtaSection";
import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import LocationSection from "@/components/sections/LocationSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TrustStrip from "@/components/sections/TrustStrip";
import Section from "@/components/ui/Section";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <Section id="about" tone="white">
        <AboutIntro />
      </Section>
      <Section id="services" tone="blue">
        <ServicesSection />
      </Section>
      <Section id="process" tone="cream">
        <ProcessSection />
      </Section>
      <Section tone="white">
        <ContactCtaSection />
      </Section>
      <Section id="service-area" tone="blue">
        <LocationSection />
      </Section>
      <Section id="faq" tone="cream">
        <FAQ />
      </Section>
    </main>
  );
}
