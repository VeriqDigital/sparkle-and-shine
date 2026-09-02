import Button from "@/components/ui/Button";
import { MapPinIcon, MessageIcon, SparkleIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/config/site";

const LocationSection = () => (
  <div className="grid overflow-hidden rounded-[1.5rem] border border-(--border) bg-white text-(--foreground) shadow-(--shadow-sm) sm:rounded-[2rem] lg:grid-cols-[0.92fr_1.08fr]">
    <div className="p-5 sm:p-10 lg:p-12">
      <p className="eyebrow">Service area</p>
      <h2 className="mt-4 font-heading text-[clamp(2.1rem,10vw,4rem)] font-bold leading-[1.03] tracking-[-0.03em] text-(--navy)">
        Proudly Serving Local Wisconsin Communities
      </h2>
      <p className="mt-6 max-w-xl leading-7 text-(--muted)">
        Domenica provides cleaning services locally and in surrounding
        communities. Contact her to confirm availability for your location.
      </p>
      <div className="mt-8 space-y-5">
        <div className="flex items-start gap-3">
          <MapPinIcon className="mt-0.5 size-5 shrink-0 text-(--blue)" />
          <div>
            <p className="font-heading font-bold text-(--navy)">
              {siteConfig.location.businessState}
            </p>
            <p className="mt-1 text-sm leading-6 text-(--muted)">
              {siteConfig.location.serviceAreaLabel}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <MessageIcon className="mt-0.5 size-5 shrink-0 text-(--blue)" />
          <div>
            <p className="font-heading font-bold text-(--navy)">
              Not sure if you’re in range?
            </p>
            <a
              href={siteConfig.contact.smsHref}
              className="mt-1 inline-block min-h-11 content-center text-sm font-semibold text-(--blue) underline decoration-2 underline-offset-4 hover:text-(--navy-deep)"
            >
              Message Domenica at {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 [&>*]:w-full sm:[&>*]:w-auto">
        <Button href={siteConfig.contact.smsHref} variant="secondary">
          Confirm Service Availability
        </Button>
      </div>
    </div>

    <div className="relative flex min-h-72 items-center justify-center overflow-hidden border-t border-(--border) bg-(--surface-soft) p-5 text-center sm:min-h-80 sm:p-8 lg:min-h-full lg:border-l lg:border-t-0">
      <div aria-hidden="true" className="absolute -right-16 -top-16 size-56 rounded-full bg-(--surface-blue)" />
      <div aria-hidden="true" className="absolute -bottom-16 -left-16 size-44 rounded-full border-[28px] border-white/70" />
      <div className="relative max-w-sm rounded-[1.25rem] border border-(--border) bg-white p-5 shadow-(--shadow-sm) sm:rounded-[1.75rem] sm:p-8">
        <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-(--surface-blue) text-(--blue)">
          <MapPinIcon className="size-8" />
        </span>
        <p className="mt-5 font-heading text-2xl font-bold text-(--navy)">
          Local Wisconsin Service
        </p>
        <p className="mt-3 leading-7 text-(--muted)">
          Contact Domenica to confirm service availability in your community.
        </p>
        <div className="mt-5 flex items-center justify-center gap-2 text-sm font-bold text-(--blue)">
          <SparkleIcon className="size-4" /> Personal, owner-led cleaning
        </div>
      </div>
    </div>
  </div>
);

export default LocationSection;
