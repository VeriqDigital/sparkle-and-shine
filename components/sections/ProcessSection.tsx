import QuoteButton from "@/components/ui/QuoteButton";

const steps = [
  {
    title: "Tell us about your home",
    text: "Share your space, priorities, preferred schedule, and the service you have in mind.",
  },
  {
    title: "Get your personalized quote",
    text: "We review the details and confirm the scope, pricing, and availability with you.",
  },
  {
    title: "Come home to clean",
    text: "Your cleaning is handled according to the confirmed checklist. You get on with your day.",
  },
];
export default function ProcessSection() {
  return (
    <div>
      <div className="section-heading">
        <div>
          <p className="eyebrow">How it works</p>
          <h2>
            A simpler way
            <br />
            to a cleaner home.
          </h2>
        </div>
        <QuoteButton />
      </div>
      <ol className="process-timeline">
        {steps.map((step, i) => (
          <li key={step.title}>
            <span className="step-number">0{i + 1}</span>
            <div className="timeline-line">
              <i />
            </div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
