"use client";
import { useId, useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import { SparkleIcon } from "@/components/ui/Icons";

const rooms = [
  {
    name: "Kitchen",
    summary: "The heart of the home, ready for whatever’s cooking.",
    tasks: [
      "Counters and reachable surfaces",
      "Exterior appliance wipe-down",
      "Sink and fixtures",
      "Cabinet fronts, as appropriate",
      "Vacuuming and mopping floors",
    ],
    image: "/house-cleaning.png",
    alt: "Clean kitchen with warm wood cabinetry and clear counters",
  },
  {
    name: "Bathrooms",
    summary: "A fresh reset for the busiest little room.",
    tasks: [
      "Showers and tubs",
      "Sinks and countertops",
      "Toilets",
      "Mirrors and fixtures",
      "Bathroom floors",
    ],
    image: "/home-care.png",
    alt: "Microfiber cleaning cloth being used on a household surface",
  },
  {
    name: "Living areas",
    summary: "Settle in. The everyday details are taken care of.",
    tasks: [
      "Dusting reachable surfaces",
      "Accessible tables and shelving",
      "Vacuuming rugs and carpets",
      "Hard-floor care",
      "A light general reset",
    ],
    image: "/apartment-cleaning.png",
    alt: "Tidy living area with a cream sofa and navy cushions",
  },
  {
    name: "Bedrooms",
    summary: "End the day somewhere that feels restful.",
    tasks: [
      "Reachable bedside and dresser surfaces",
      "Accessible mirrors",
      "Vacuuming and floor care",
      "A light general tidy",
    ],
    image: "/apartment-cleaning.png",
    alt: "Soft furnishings and a neatly folded navy throw",
  },
];

export default function CleaningChecklist() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const prefix = useId();
  const room = rooms[active];
  function handleKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % rooms.length;
    else if (event.key === "ArrowLeft")
      next = (index + rooms.length - 1) % rooms.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = rooms.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }
  return (
    <div className="checklist-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">What clean actually means</p>
          <h2>
            The details that make
            <br />a home feel finished.
          </h2>
        </div>
        <p>
          Not just a quick once-over. A thoughtful checklist, with your home’s
          priorities built in.
        </p>
      </div>
      <div
        className="room-tabs"
        role="tablist"
        aria-label="Explore typical cleaning by room"
      >
        {rooms.map((item, i) => (
          <button
            key={item.name}
            ref={(node) => {
              tabs.current[i] = node;
            }}
            type="button"
            role="tab"
            id={`${prefix}-tab-${i}`}
            aria-controls={`${prefix}-panel-${i}`}
            aria-selected={active === i}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => handleKey(e, i)}
          >
            <span>0{i + 1}</span>
            {item.name}
          </button>
        ))}
      </div>
      {rooms.map((item, i) => (
        <div
          key={item.name}
          role="tabpanel"
          id={`${prefix}-panel-${i}`}
          aria-labelledby={`${prefix}-tab-${i}`}
          hidden={active !== i}
          tabIndex={0}
          className="room-panel"
        >
          {active === i && (
            <>
              <div className="room-image">
                <Image
                  src={room.image}
                  alt={room.alt}
                  fill
                  sizes="(max-width: 767px) 90vw, 50vw"
                />
                <span className="room-image-label">
                  Thoughtful care, down to the details.
                </span>
              </div>
              <div className="room-details">
                <SparkleIcon className="size-9" />
                <h3>{room.summary}</h3>
                <ul>
                  {room.tasks.map((task) => (
                    <li key={task}>
                      <span>✓</span>
                      {task}
                    </li>
                  ))}
                </ul>
                <p className="scope-note">
                  Typical cleaning checklist — exact scope confirmed with your
                  quote.
                </p>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
