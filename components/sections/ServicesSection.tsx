import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, SparkleIcon } from "@/components/ui/Icons";
import { services } from "@/data/services";

export default function ServicesSection() {
  const featured = services[0];
  return (
    <div>
      <div className="section-heading">
        <div>
          <p className="eyebrow">Your home. Your kind of clean.</p>
          <h2>
            Less on your list.
            <br />
            <span className="text-blue">More room for life.</span>
          </h2>
        </div>
        <div>
          <p>
            From keeping up to catching up, there’s a clean for the season
            you’re in.
          </p>
          <Link className="text-link" href="/services">
            Explore all services
            <ArrowIcon />
          </Link>
        </div>
      </div>
      <div className="service-showcase">
        <Link className="featured-service" href={`/services#${featured.slug}`}>
          <div className="featured-service-image">
            <Image
              src={featured.image}
              alt={featured.imageAlt}
              fill
              sizes="(max-width: 767px) 90vw, 50vw"
            />
            <span className="service-tag">
              <SparkleIcon className="size-4" />
              The everyday essential
            </span>
          </div>
          <div className="featured-service-copy">
            <p className="eyebrow">Recurring home cleaning</p>
            <h3>{featured.shortTitle}</h3>
            <p>
              Weekly, every two weeks, or monthly. A dependable rhythm for a
              home that feels good to come back to.
            </p>
            <span className="service-arrow">
              <ArrowIcon />
            </span>
          </div>
        </Link>
        <div className="service-list">
          {services.slice(1).map((service, i) => (
            <Link
              key={service.slug}
              href={`/services#${service.slug}`}
              className="service-row"
            >
              <span className="service-number">0{i + 2}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.shortTitle}</p>
              </div>
              <ArrowIcon />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
