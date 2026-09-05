import {
  CalendarIcon,
  MessageIcon,
  HeartIcon,
  HomeIcon,
} from "@/components/ui/Icons";

const benefits = [
  {
    title: "On your calendar.",
    detail: "Dependable scheduling",
    Icon: CalendarIcon,
  },
  {
    title: "Clear from the start.",
    detail: "Straightforward quotes",
    Icon: MessageIcon,
  },
  {
    title: "Care in the details.",
    detail: "Respect for your home",
    Icon: HeartIcon,
  },
  {
    title: "Find your rhythm.",
    detail: "Flexible recurring options",
    Icon: HomeIcon,
  },
];
export default function TrustStrip() {
  return (
    <section className="trust-band" aria-label="A simpler cleaning routine">
      <div className="site-container trust-grid">
        {benefits.map(({ title, detail, Icon }) => (
          <div key={title}>
            <Icon className="size-7" />
            <p>
              <strong>{title}</strong>
              <span>{detail}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
