import Container from "@/components/ui/Container";
import {
  CalendarIcon,
  HeartIcon,
  HomeIcon,
  MessageIcon,
  SparkleIcon,
} from "@/components/ui/Icons";

const trustItems = [
  { label: "Locally owned", detail: "Personal local service", Icon: HomeIcon },
  { label: "Direct communication", detail: "Talk with Domenica", Icon: MessageIcon },
  { label: "Reliable follow-up", detail: "Clear next steps", Icon: CalendarIcon },
  { label: "Detail-oriented", detail: "Care for the little things", Icon: SparkleIcon },
  { label: "Flexible options", detail: "Built around your space", Icon: HeartIcon },
] as const;

const TrustStrip = () => (
  <section aria-label="Why choose Domenica’s Cleaning" className="border-y border-(--border) bg-white">
    <Container>
      <div className="grid min-[430px]:grid-cols-2 lg:grid-cols-5">
        {trustItems.map(({ label, detail, Icon }, index) => (
          <div
            key={label}
            className={`flex min-h-24 min-w-0 items-start gap-3 border-b border-(--border-warm) px-2 py-5 last:border-b-0 min-[430px]:min-h-32 min-[430px]:border-b-0 min-[430px]:px-3 min-[430px]:py-6 min-[430px]:last:col-span-2 sm:px-5 lg:last:col-span-1 ${
              index % 2 === 0 ? "bg-(--surface-soft) lg:bg-transparent" : ""
            }`}
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-(--surface-blue) text-(--blue)">
              <Icon className="size-5" />
            </span>
            <div className="min-w-0">
              <p className="font-heading text-sm font-extrabold leading-5 text-(--navy)">{label}</p>
              <p className="mt-1 text-xs leading-5 text-(--muted)">{detail}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default TrustStrip;
