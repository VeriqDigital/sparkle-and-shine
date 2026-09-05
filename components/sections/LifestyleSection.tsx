import Image from "next/image";
import { SparkleIcon } from "@/components/ui/Icons";

export default function LifestyleSection() {
  return (
    <section className="lifestyle-section">
      <div className="lifestyle-image">
        <Image
          src="/apartment-cleaning.png"
          alt="Inviting living room with a comfortable cream sofa, navy cushions, and afternoon light"
          fill
          sizes="100vw"
        />
      </div>
      <div className="site-container lifestyle-content">
        <SparkleIcon className="size-9" />
        <p className="eyebrow">The best part isn’t the cleaning.</p>
        <h2>
          Come home
          <br />
          to <em>done.</em>
        </h2>
        <p>
          The counters are clear. The floors are finished. The bathroom is
          reset. Your evening is yours again.
        </p>
        <span>LESS CATCHING UP. MORE SETTLING IN.</span>
      </div>
    </section>
  );
}
