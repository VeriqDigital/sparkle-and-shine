"use client";

import Image from "next/image";
import Link from "next/link";
import LeadModal from "@/components/layout/LeadModal";
import useLeadModal from "@/components/layout/useLeadModal";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { HomeIcon, MessageIcon, SparkleIcon } from "@/components/ui/Icons";
import { primaryCta, siteConfig } from "@/config/site";

const Hero = () => {
  const modal = useLeadModal();

  return (
    <section className="relative overflow-hidden bg-(--background) pb-12 pt-7 sm:pb-20 sm:pt-12 lg:pb-24 lg:pt-16">
      <div aria-hidden="true" className="absolute -right-32 -top-32 size-96 rounded-full bg-(--blue-light)/45 blur-3xl" />
      <Container className="relative">
        <div className="grid items-center gap-9 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-(--border) bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-(--navy)">
              <SparkleIcon className="size-4 text-(--blue)" />
              Locally owned &amp; operated
            </div>
            <h1 className="font-heading text-[clamp(2.65rem,12vw,5.75rem)] font-bold leading-[0.96] tracking-[-0.04em] text-(--navy)">
              Clean Homes.
              <span className="mt-2 block text-(--blue)">Happy Homes.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-(--muted) sm:mt-7 sm:text-xl sm:leading-9">
              Detail-oriented cleaning for houses, apartments, move-ins,
              move-outs, deep cleans, and campers or RVs.
            </p>
            <div className="mt-6 flex max-w-xl items-start gap-3 rounded-2xl border border-(--border) bg-white p-4 text-sm leading-6 text-(--foreground) shadow-(--shadow-sm)">
              <MessageIcon className="mt-0.5 size-5 shrink-0 text-(--blue)" />
              <p>
                Personal service and direct communication with Domenica.
              </p>
            </div>
            <div className="mt-7 flex flex-col gap-3 min-[430px]:flex-row [&>*]:w-full min-[430px]:[&>*]:w-auto">
              <Button onClick={() => modal.openModal(primaryCta.modal)}>
                Request a Quote
              </Button>
              <Button href={siteConfig.contact.smsHref} variant="secondary">
                Message Domenica
              </Button>
            </div>
            <Link
              href="/services"
              className="mt-5 inline-flex min-h-11 items-center font-heading text-sm font-extrabold text-(--navy) underline decoration-(--blue) decoration-2 underline-offset-4 transition hover:text-(--blue)"
            >
              View Cleaning Services
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-2xl lg:mx-0">
            <div className="relative aspect-[4/4.5] overflow-hidden rounded-[1.5rem] border-4 border-white bg-(--surface-soft) shadow-(--shadow-lg) sm:aspect-[4/3] sm:rounded-[2rem] sm:border-8 lg:aspect-[4/4.35]">
              <Image
                src="/domenicas-cleaning-hero.png"
                alt="Independent home cleaner carefully wiping a kitchen counter"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1023px) calc(100vw - 2.5rem), 580px"
                preload
              />
              <div className="absolute inset-x-3 bottom-3 rounded-xl bg-white p-3 text-(--foreground) shadow-lg sm:inset-x-auto sm:bottom-6 sm:left-6 sm:max-w-xs sm:rounded-2xl sm:p-4">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-(--surface-blue) text-(--blue)">
                    <HomeIcon className="size-5" />
                  </span>
                  <p className="text-sm font-semibold leading-5 text-(--navy)">
                    Thoughtful care for the spaces you live in.
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-3 text-xs leading-5 text-(--muted)">
              Lifestyle image. Replace with an authentic photo of Domenica at
              work when available.
            </p>
          </div>
        </div>
      </Container>

      {modal.activeModal && (
        <LeadModal
          activeModal={modal.activeModal}
          hasSubmitted={modal.hasSubmitted}
          isSubmitting={modal.isSubmitting}
          onClose={modal.closeModal}
          onSubmit={modal.handleFormSubmit}
          submitError={modal.submitError}
        />
      )}
    </section>
  );
};

export default Hero;
