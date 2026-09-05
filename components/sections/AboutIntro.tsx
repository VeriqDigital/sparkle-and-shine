import Link from "next/link";
import {
  ArrowIcon,
  MessageIcon,
  SparkleIcon,
  HeartIcon,
  CalendarIcon,
} from "@/components/ui/Icons";

const values = [
  {
    title: "You’re kept in the loop.",
    text: "Clear arrival plans, agreed priorities, and someone to contact when things change.",
    Icon: MessageIcon,
  },
  {
    title: "A checklist. A shared standard.",
    text: "A consistent approach across the team, with the details of your home in mind.",
    Icon: SparkleIcon,
  },
  {
    title: "Your home is personal.",
    text: "Thoughtful handling of your space, belongings, pets, and product preferences.",
    Icon: HeartIcon,
  },
  {
    title: "Real life has a schedule.",
    text: "Recurring options and clear conversations when your routine needs to shift.",
    Icon: CalendarIcon,
  },
];
export default function AboutIntro() {
  return (
    <div className="why-layout">
      <div>
        <p className="eyebrow">The Sparkle & Shine way</p>
        <h2>
          Cleaning built
          <br />
          around
          <br />
          <span className="text-blue">consistency.</span>
        </h2>
        <p className="section-description">
          You shouldn’t have to wonder who to contact, what’s included, or
          whether the same standard will follow the next visit. Good cleaning
          starts with a clear plan.
        </p>
        <Link className="text-link" href="/about">
          Meet our approach
          <ArrowIcon />
        </Link>
      </div>
      <div className="why-values">
        {values.map(({ title, text, Icon }) => (
          <article key={title}>
            <Icon className="size-6" />
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
