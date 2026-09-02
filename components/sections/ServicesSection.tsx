import Image from "next/image";
import Button from "@/components/ui/Button";
import { ArrowIcon } from "@/components/ui/Icons";
import { services } from "@/data/services";

type ServicesSectionProps = {
  showAll?: boolean;
  headingAs?: "h1" | "h2";
};

const ServicesSection = ({
  showAll = false,
  headingAs = "h2",
}: ServicesSectionProps) => {
  const Heading = headingAs;

  return (
    <div className="text-(--foreground)">
      <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
        <div className="max-w-3xl">
          <p className="eyebrow">Services</p>
          <Heading className="mt-4 font-heading text-[clamp(2.15rem,10vw,4.5rem)] font-bold leading-[1.03] tracking-[-0.035em] text-(--navy)">
            Cleaning Services Built Around Your Space
          </Heading>
        </div>
        <p className="max-w-md leading-7 text-(--muted)">
          From regular upkeep to a deep clean, a move, or a camper refresh,
          Domenica will tailor the quote to your space and priorities.
        </p>
      </div>

      <div className="mt-9 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <article
            key={service.title}
            className="group flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-(--border) bg-white text-(--foreground) shadow-(--shadow-sm) transition hover:-translate-y-1 hover:border-(--blue-light) hover:shadow-(--shadow-lg) sm:rounded-[1.5rem]"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-(--surface-soft)">
              <Image
                src={service.image}
                alt={service.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.025]"
                sizes="(max-width: 767px) calc(100vw - 2.5rem), (max-width: 1023px) calc(50vw - 3rem), 390px"
              />
              <span className="absolute left-4 top-4 rounded-full border border-(--border) bg-white px-3 py-1 text-xs font-extrabold tracking-wide text-(--navy) shadow-sm">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5 sm:p-7">
              <h3 className="font-heading text-2xl font-bold text-(--navy)">
                {service.title}
              </h3>
              <p className="mt-4 flex-1 leading-7 text-(--muted)">
                {service.description}
              </p>
              <a
                href="/contact"
                className="mt-6 inline-flex min-h-11 items-center gap-2 font-heading text-sm font-extrabold text-(--blue) transition hover:text-(--navy-deep)"
              >
                Ask about this service <ArrowIcon className="size-4" />
              </a>
            </div>
          </article>
        ))}
      </div>

      {!showAll && (
        <div className="mt-10">
          <Button href="/services" variant="secondary">
            View Service Details
          </Button>
        </div>
      )}
    </div>
  );
};

export default ServicesSection;
