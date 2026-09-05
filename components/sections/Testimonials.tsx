const feedback = [
  {
    quote:
      "Walking into a clean kitchen after a long workday? That’s the part I’d look forward to most.",
    initials: "JM",
    name: "Jamie M.",
    location: "West Des Moines",
  },
  {
    quote:
      "I love the idea of knowing what’s included before anyone arrives. One less thing to think about.",
    initials: "AL",
    name: "Alex L.",
    location: "Waukee",
  },
  {
    quote:
      "A regular clean would mean Saturdays with the kids instead of catching up on the house.",
    initials: "RK",
    name: "Riley K.",
    location: "Clive",
  },
];
export default function Testimonials() {
  return (
    <div>
      <div className="feedback-heading">
        <p className="eyebrow">More time for what matters</p>
        <h2>
          A little help.
          <br />A big weight off.
        </h2>
        <p className="sample-label">
          Sample client feedback for concept demonstration.
        </p>
      </div>
      <div className="feedback-grid">
        {feedback.map((item) => (
          <figure key={item.initials}>
            <span className="quote-mark" aria-hidden="true">
              “
            </span>
            <blockquote>{item.quote}</blockquote>
            <figcaption>
              <span className="initial-avatar">{item.initials}</span>
              <span>
                <strong>{item.name}</strong>
                <small>{item.location} · Sample</small>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
