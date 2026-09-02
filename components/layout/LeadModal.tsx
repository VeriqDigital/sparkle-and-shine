"use client";

import type { FormEvent } from "react";
import { siteConfig } from "@/config/site";

export type ModalType = "service" | "contact";

const modalContent = {
  service: {
    eyebrow: "Personalized quote",
    title: "Tell Domenica About Your Space",
    submitLabel: "Send Quote Request",
  },
  contact: {
    eyebrow: "Get in touch",
    title: "Send Domenica a Message",
    submitLabel: "Send Message",
  },
} as const;

type LeadModalProps = {
  activeModal: ModalType;
  hasSubmitted: boolean;
  isSubmitting: boolean;
  onClose: () => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  submitError: string;
};

const Label = ({ children }: { children: React.ReactNode }) => (
  <label className="block text-sm font-bold text-(--navy)">{children}</label>
);

const LeadModal = ({
  activeModal,
  hasSubmitted,
  isSubmitting,
  onClose,
  onSubmit,
  submitError,
}: LeadModalProps) => {
  const content = modalContent[activeModal];
  const isQuote = activeModal === "service";
  const successMessage = siteConfig.forms.deliveryConfigured
    ? "Thanks! Domenica received your request and will follow up after reviewing the details."
    : "Thanks! Your request details are ready, but online delivery is not connected in this preview.";

  return (
    <div
      className="fixed inset-0 z-70 flex items-center justify-center bg-(--navy-deep)/80 px-4 py-5 backdrop-blur-sm sm:py-8"
      role="presentation"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${activeModal}-form-title`}
        className="max-h-[calc(100vh-2.5rem)] w-full max-w-3xl overflow-y-auto rounded-[1.5rem] border border-(--border) bg-(--background) p-5 text-(--foreground) shadow-(--shadow-lg) sm:max-h-[calc(100vh-4rem)] sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-7 flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow">{content.eyebrow}</p>
            <h2
              id={`${activeModal}-form-title`}
              className="mt-2 font-heading text-3xl font-bold leading-tight text-(--navy) sm:text-4xl"
            >
              {content.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            autoFocus
            className="flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-(--border) bg-white text-2xl leading-none text-(--navy) transition hover:border-(--blue) hover:bg-(--surface-soft) hover:text-(--blue)"
            aria-label={`Close ${content.title.toLowerCase()} form`}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        {hasSubmitted ? (
          <div
            className="rounded-2xl border border-(--border) bg-(--surface-soft) p-6 text-(--foreground)"
            aria-live="polite"
          >
            <p className="font-heading text-xl font-bold text-(--navy)">
              {successMessage}
            </p>
            {!siteConfig.forms.deliveryConfigured && (
              <p className="mt-3 leading-7 text-(--muted)">
                To make sure Domenica receives your request, call or message her
                directly at {siteConfig.contact.phone}.
              </p>
            )}
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold text-(--blue)">
              <a
                href={siteConfig.contact.phoneHref}
                className="min-h-11 content-center underline decoration-2 underline-offset-4 hover:text-(--navy-deep)"
              >
                Call {siteConfig.contact.phone}
              </a>
              <a
                href={siteConfig.contact.smsHref}
                className="min-h-11 content-center underline decoration-2 underline-offset-4 hover:text-(--navy-deep)"
              >
                Message Domenica
              </a>
            </div>
          </div>
        ) : (
          <form
            className="space-y-5"
            onSubmit={onSubmit}
            data-email-subject={
              isQuote
                ? siteConfig.forms.quoteSubject
                : siteConfig.forms.contactSubject
            }
            data-recipient={
              siteConfig.forms.deliveryConfigured
                ? siteConfig.forms.recipientEmail
                : undefined
            }
          >
            {!siteConfig.forms.deliveryConfigured && (
              <div className="rounded-xl border border-(--border) bg-(--surface-soft) p-4 text-sm leading-6 text-(--muted)">
                <p className="font-bold text-(--navy)">
                  Online delivery needs to be connected
                </p>
                <p className="mt-1">
                  You can preview the form here. For immediate contact, call or
                  message Domenica at{" "}
                  <a
                    href={siteConfig.contact.phoneHref}
                    className="font-bold text-(--blue) underline decoration-2 underline-offset-2"
                  >
                    {siteConfig.contact.phone}
                  </a>
                  .
                </p>
              </div>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
              <Label>
                Name <span className="text-(--blue)">*</span>
                <input
                  required
                  name="name"
                  autoComplete="name"
                  className="field mt-2"
                  placeholder="Your name"
                />
              </Label>
              <Label>
                Phone <span className="text-(--blue)">*</span>
                <input
                  required
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="field mt-2"
                  placeholder="Your phone number"
                />
              </Label>
              <Label>
                Email
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="field mt-2"
                  placeholder="you@example.com"
                />
              </Label>
              <Label>
                Preferred contact method
                <select
                  name="preferredContactMethod"
                  defaultValue="text"
                  className="field mt-2"
                >
                  <option value="text">Text message</option>
                  <option value="call">Phone call</option>
                  <option value="email">Email</option>
                </select>
              </Label>
            </div>

            {isQuote && (
              <>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Label>
                    Type of space <span className="text-(--blue)">*</span>
                    <select
                      required
                      name="spaceType"
                      defaultValue=""
                      className="field mt-2"
                    >
                      <option value="" disabled>Choose your space</option>
                      <option value="house">House</option>
                      <option value="apartment">Apartment / condo</option>
                      <option value="camper-rv">Camper / RV</option>
                      <option value="other">Other</option>
                    </select>
                  </Label>
                  <Label>
                    Approximate size
                    <input
                      name="approximateSize"
                      className="field mt-2"
                      placeholder="Square footage or RV length"
                    />
                  </Label>
                  <Label>
                    Number of bedrooms
                    <input
                      name="bedrooms"
                      type="number"
                      min="0"
                      inputMode="numeric"
                      className="field mt-2"
                      placeholder="e.g. 3"
                    />
                  </Label>
                  <Label>
                    Number of bathrooms
                    <input
                      name="bathrooms"
                      type="number"
                      min="0"
                      step="0.5"
                      inputMode="decimal"
                      className="field mt-2"
                      placeholder="e.g. 2"
                    />
                  </Label>
                  <Label>
                    Desired cleaning service
                    <select
                      name="desiredService"
                      defaultValue="regular-house"
                      className="field mt-2"
                    >
                      <option value="regular-house">Regular House Cleaning</option>
                      <option value="apartment">Apartment Cleaning</option>
                      <option value="deep">Deep Cleaning</option>
                      <option value="move-in">Move-In Cleaning</option>
                      <option value="move-out">Move-Out Cleaning</option>
                      <option value="camper-rv">Camper / RV Cleaning</option>
                      <option value="custom">Custom Cleaning Request</option>
                    </select>
                  </Label>
                  <Label>
                    Preferred frequency
                    <select
                      name="preferredFrequency"
                      defaultValue="not-sure"
                      className="field mt-2"
                    >
                      <option value="one-time">One-time</option>
                      <option value="weekly">Weekly</option>
                      <option value="biweekly">Biweekly</option>
                      <option value="monthly">Monthly</option>
                      <option value="not-sure">Not sure</option>
                    </select>
                  </Label>
                  <Label>
                    General location
                    <input
                      name="generalLocation"
                      autoComplete="address-level2"
                      className="field mt-2"
                      placeholder="City or nearby community"
                    />
                  </Label>
                </div>
              </>
            )}

            <Label>
              {isQuote ? "Message or cleaning details" : "Message"}
              <textarea
                name="cleaningDetails"
                rows={5}
                className="field mt-2 min-h-32 resize-y"
                placeholder={
                  isQuote
                    ? "Tell Domenica about the rooms, priorities, current condition, timing, or anything else that would help with your quote."
                    : "What would you like Domenica to know?"
                }
              />
            </Label>

            <p className="text-xs leading-5 text-(--muted)">
              Fields marked with an asterisk are required. Specific service
              arrangements are confirmed directly with Domenica.
            </p>

            <div className="flex flex-col-reverse gap-3 pt-1 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={onClose}
                disabled={isSubmitting}
                className="min-h-12 cursor-pointer rounded-full border border-(--blue) bg-white px-6 font-heading text-sm font-bold text-(--navy) transition hover:border-(--navy) hover:bg-(--surface-soft) disabled:cursor-not-allowed disabled:opacity-60"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="min-h-12 cursor-pointer rounded-full border border-(--navy) bg-(--navy) px-6 font-heading text-sm font-bold text-(--text-on-dark) transition hover:border-(--navy-deep) hover:bg-(--navy-deep) hover:text-(--text-on-dark) disabled:cursor-not-allowed disabled:bg-(--muted) disabled:text-(--text-on-dark)"
              >
                {isSubmitting ? "Sending…" : content.submitLabel}
              </button>
            </div>

            {submitError && (
              <p className="text-sm font-semibold text-red-700" aria-live="polite">
                {submitError}
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default LeadModal;
