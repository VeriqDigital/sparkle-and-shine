"use client";

import Image from "next/image";
import Link from "next/link";
import { footerLinks, siteConfig } from "@/config/site";
import { services } from "@/data/services";
import LeadModal from "./LeadModal";
import useLeadModal from "./useLeadModal";

const Footer = () => {
  const modal = useLeadModal();

  return (
    <footer className="w-full bg-(--navy-deep) text-(--text-on-dark)">
      <div className="mx-auto w-full max-w-(--container-width) px-5 py-14 sm:px-8 lg:px-10 lg:py-18">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr_0.65fr_0.85fr] lg:gap-9">
          <div>
            <Link
              href="/"
              aria-label="Domenica’s Cleaning home"
              className="inline-flex items-center gap-3 text-(--text-on-dark)"
            >
              <span className="flex size-20 items-center justify-center rounded-full bg-white">
                <Image
                  src="/DomLogoNoBG.png"
                  alt="Domenica’s Cleaning logo"
                  width={1024}
                  height={1024}
                  className="size-18 object-contain"
                  sizes="72px"
                />
              </span>
              <span>
                <span className="block font-heading text-xl font-extrabold text-(--text-on-dark)">
                  {siteConfig.name}
                </span>
                <span className="mt-1 block text-sm font-semibold text-(--blue-light)">
                  {siteConfig.tagline}
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-md leading-7 text-(--muted-on-dark)">
              Personal, detail-oriented cleaning for houses, apartments,
              moves, deep cleans, campers, and RVs in Wisconsin.
            </p>
            <p className="mt-4 font-heading font-bold text-(--text-on-dark)">
              Local service. Direct communication. Thoughtful care.
            </p>
          </div>

          <nav aria-label="Cleaning services">
            <h2 className="font-heading text-sm font-extrabold uppercase tracking-[0.14em] text-(--blue-light)">
              Services
            </h2>
            <ul className="mt-5 grid gap-2 text-sm font-semibold text-(--muted-on-dark)">
              {services.slice(0, 5).map((service) => (
                <li key={service.title}>
                  <Link
                    href="/services"
                    className="inline-flex min-h-10 items-center transition hover:text-(--text-on-dark)"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer navigation">
            <h2 className="font-heading text-sm font-extrabold uppercase tracking-[0.14em] text-(--blue-light)">
              Quick Links
            </h2>
            <ul className="mt-5 grid gap-2 text-sm font-semibold text-(--muted-on-dark)">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  {"href" in link ? (
                    <Link
                      href={link.href}
                      className="inline-flex min-h-10 items-center transition hover:text-(--text-on-dark)"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => modal.openModal(link.modal)}
                      className="min-h-10 cursor-pointer text-left transition hover:text-(--text-on-dark)"
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-heading text-sm font-extrabold uppercase tracking-[0.14em] text-(--blue-light)">
              Contact Domenica
            </h2>
            <address className="mt-5 text-sm not-italic leading-7 text-(--muted-on-dark)">
              <p>{siteConfig.location.businessState}</p>
              <p>{siteConfig.location.serviceAreaLabel}</p>
              <a
                href={siteConfig.contact.phoneHref}
                className="mt-4 block min-h-10 content-center font-heading text-lg font-bold text-(--text-on-dark) hover:text-(--blue-light)"
              >
                {siteConfig.contact.phone}
              </a>
              <a
                href={siteConfig.contact.smsHref}
                className="block min-h-10 content-center font-bold text-(--blue-light) hover:text-(--text-on-dark)"
              >
                Message Domenica
              </a>
              <a
                href={siteConfig.contact.emailHref}
                className="block min-h-10 content-center break-all font-bold text-(--blue-light) hover:text-(--text-on-dark)"
              >
                {siteConfig.contact.email}
              </a>
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-(--subtle-on-dark) pt-6 text-xs leading-6 text-(--subtle-on-dark) sm:flex sm:items-start sm:justify-between sm:gap-8">
          <div className="max-w-2xl">
            <p>
              Unofficial website preview. Online form delivery and final business
              details must be confirmed before launch.
            </p>
            <p className="mt-1">&copy; 2026 {siteConfig.name}. Wisconsin.</p>
          </div>
          <p className="mt-3 sm:mt-0">
            Website designed by{" "}
            <Link
              href="https://www.veriqdigital.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-(--muted-on-dark) hover:text-(--text-on-dark)"
            >
              Veriq Digital
            </Link>
          </p>
        </div>
      </div>

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
    </footer>
  );
};

export default Footer;
