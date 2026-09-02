import Button from "@/components/ui/Button";
import { SparkleIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/config/site";
import Image from "next/image";

type AboutIntroProps = {
  headingAs?: "h1" | "h2";
};

const AboutIntro = ({ headingAs = "h2" }: AboutIntroProps) => {
  const Heading = headingAs;

  return (
    <div className="grid items-center gap-11 lg:grid-cols-[0.85fr_1.15fr] lg:gap-18">
      <div className="relative mx-auto w-full max-w-md">
        <div className="relative aspect-[4/4.6] overflow-hidden rounded-[1.5rem] shadow-(--shadow-sm) sm:rounded-[2rem]">
          <Image
            src="/domcleanad.jpg"
            alt="Domenica, owner of Dom Clean"
            fill
            sizes="(min-width: 1024px) 38vw, (min-width: 640px) 28rem, 100vw"
            className="object-cover object-top"
          />
        </div>
        <span className="absolute -bottom-5 -right-3 flex size-14 items-center justify-center rounded-full bg-(--navy) text-(--text-on-dark) shadow-lg sm:right-2">
          <SparkleIcon className="size-6" />
        </span>
      </div>

      <div className="text-(--foreground)">
        <p className="eyebrow">A personal approach</p>
        <Heading className="mt-4 max-w-2xl font-heading text-[clamp(2.15rem,10vw,4.4rem)] font-bold leading-[1.03] tracking-[-0.035em] text-(--navy)">
          The person you contact is the person who cares for your space.
        </Heading>
        <p className="mt-5 max-w-2xl text-lg font-semibold leading-7 text-(--foreground) sm:mt-6 sm:text-xl sm:leading-8">
          Hi, I’m Domenica. I’m detail-oriented and love leaving spaces looking
          fresh, comfortable, and thoroughly cared for. Whether you’re moving,
          managing a busy schedule, or simply do not feel like spending your free
          time cleaning, I’m here to help.
        </p>
        <p className="mt-5 max-w-2xl leading-7 text-(--muted)">
          You work directly with me from the first message through the completed
          cleaning. Share your priorities and I’ll prepare a personalized quote
          based on your space and cleaning needs.
        </p>
        <div className="mt-8 flex flex-col gap-3 min-[430px]:flex-row [&>*]:w-full min-[430px]:[&>*]:w-auto">
          <Button href="/about">More About Domenica</Button>
          <Button href={siteConfig.contact.smsHref} variant="secondary">
            Message Domenica
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
