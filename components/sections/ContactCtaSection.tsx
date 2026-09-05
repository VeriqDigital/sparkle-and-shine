import QuoteButton from "@/components/ui/QuoteButton";
import { SparkleIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/config/site";

export default function ContactCtaSection() {
  return (
    <section className="closing-cta">
      <div className="site-container closing-inner">
        <div>
          <p className="eyebrow">Leave the cleaning list with us.</p>
          <h2>
            Your weekend has
            <br />
            <span>better things to do.</span>
          </h2>
          <p>
            Tell us about your home and we’ll put together a personalized
            cleaning quote.
          </p>
          <div className="closing-actions">
            <QuoteButton variant="light">Get My Quote</QuoteButton>
            <a href={siteConfig.contact.phoneHref}>
              Call {siteConfig.contact.phone}
            </a>
          </div>
        </div>
        <div className="closing-art" aria-hidden="true">
          <SparkleIcon />
          <span>
            A cleaner home.
            <br />A lighter week.
          </span>
        </div>
      </div>
    </section>
  );
}
