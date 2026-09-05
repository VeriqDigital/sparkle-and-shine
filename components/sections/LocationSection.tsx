import QuoteButton from "@/components/ui/QuoteButton";
import { MapPinIcon, SparkleIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/config/site";

export default function LocationSection() {
  return (
    <div className="location-layout">
      <div>
        <p className="eyebrow">
          <MapPinIcon className="size-4" />
          Good care. Close to home.
        </p>
        <h2>
          Proudly serving
          <br />
          the Des Moines
          <br />
          <span className="text-blue">metro.</span>
        </h2>
        <p className="section-description">
          From West Des Moines to the neighborhoods around it, we help busy
          households make room for a lighter week.
        </p>
        <QuoteButton variant="secondary">Find Your Clean</QuoteButton>
      </div>
      <div className="region-panel">
        <div className="region-heading">
          <span>IOWA, AT HOME.</span>
          <SparkleIcon className="size-7" />
        </div>
        <div className="region-center">
          <MapPinIcon className="size-7" />
          <strong>Des Moines metro</strong>
          <span>Thoughtful cleaning. In your neighborhood.</span>
        </div>
        <ul className="location-pills">
          {siteConfig.location.communities.map((city) => (
            <li key={city}>
              <span />
              {city}
            </li>
          ))}
        </ul>
        <p>
          Based around West Des Moines · Availability confirmed with your quote.
        </p>
      </div>
    </div>
  );
}
