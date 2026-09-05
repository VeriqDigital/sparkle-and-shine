import Image from "next/image";
import Link from "next/link";
import QuoteButton from "@/components/ui/QuoteButton";
import { ArrowIcon, SparkleIcon, MapPinIcon } from "@/components/ui/Icons";

export default function Hero() {
  return (
    <section className="hero">
      <div className="site-container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-line" />
            Home cleaning. Life, a little lighter.
          </p>
          <h1>
            A cleaner <br />
            home.
            <br />
            <span>A lighter week.</span>
          </h1>
          <p className="hero-description">
            Reliable recurring and deep cleaning for busy households across the
            Des Moines metro. More care for your home. More time for everything
            else.
          </p>
          <div className="hero-actions">
            <QuoteButton />
            <Link href="/services" className="text-link">
              Explore Services
              <ArrowIcon />
            </Link>
          </div>
          <p className="hero-location">
            <MapPinIcon className="size-4" />
            Serving West Des Moines + the greater Des Moines metro
          </p>
        </div>
        <div className="hero-visual">
          <div className="hero-photo">
            <Image
              src="/house-cleaning.png"
              alt="Warm, sunlit kitchen with spotless counters and a navy cleaning caddy"
              fill
              sizes="(max-width: 767px) 90vw, (max-width: 1279px) 48vw, 610px"
              preload
            />
            <span className="photo-caption">
              A fresh start to your everyday.
            </span>
          </div>
          <div className="hero-inset">
            <Image
              src="/home-care.png"
              alt="Thoughtful attention to a kitchen counter with a microfiber cloth"
              fill
              sizes="(max-width: 767px) 130px, 190px"
            />
          </div>
          <div className="hero-note">
            <span className="note-icon">
              <SparkleIcon className="size-6" />
            </span>
            <div>
              <strong>Clean home. Clear calendar.</strong>
              <span>Leave the checklist to us.</span>
            </div>
          </div>
          <div className="hero-stamp" aria-hidden="true">
            <span>THOUGHTFUL CARE</span>
            <SparkleIcon className="size-10" />
            <span>ROOM BY ROOM</span>
          </div>
        </div>
        <ul className="hero-checks" aria-label="The Sparkle & Shine approach">
          <li>
            <span>✓</span>Easy scheduling
          </li>
          <li>
            <span>✓</span>Consistent checklists
          </li>
          <li>
            <span>✓</span>Clear communication
          </li>
        </ul>
      </div>
    </section>
  );
}
