import type { ModalType } from "@/components/layout/LeadModal";

export const siteConfig = {
  name: "Domenica’s Cleaning",
  shortName: "Domenica’s Cleaning",
  owner: "Domenica",
  tagline: "Clean Homes. Happy Homes.",
  description:
    "Detail-oriented cleaning for houses, apartments, deep cleans, move-ins, move-outs, campers and RVs in local Wisconsin communities.",
  locale: "en_US",
  location: {
    // TODO: Confirm Domenica's exact Wisconsin city and service radius before launch.
    businessCity: "CITY TO CONFIRM",
    businessState: "Wisconsin",
    serviceAreaLabel: "Serving local homes and surrounding Wisconsin communities",
  },
  contact: {
    phone: "815-714-1432",
    phoneHref: "tel:+18157141432",
    smsHref: "sms:+18157141432",
    email: "Dmenicaloia61909@gmail.com",
    emailHref: "mailto:Dmenicaloia61909@gmail.com",
  },
  forms: {
    // TODO: Connect form delivery before launch.
    recipientEmail: "Dmenicaloia61909@gmail.com",
    quoteSubject: "New cleaning quote request for Domenica’s Cleaning",
    contactSubject: "New website message for Domenica’s Cleaning",
    deliveryConfigured: false,
  },
} as const;

export type NavItem =
  | { label: string; href: string }
  | { label: string; modal: ModalType };

export const navigation: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Service Area", href: "/#service-area" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks: NavItem[] = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "Service Area", href: "/#service-area" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
  { label: "Request a Quote", modal: "service" },
];

export const primaryCta = {
  label: "Request a Quote",
  modal: "service",
} as const satisfies { label: string; modal: ModalType };
