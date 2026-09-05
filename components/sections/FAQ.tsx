"use client";
import { useState } from "react";
import Link from "next/link";
import { faqs } from "@/data/faq";
import { ArrowIcon } from "@/components/ui/Icons";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="faq-layout">
      <div>
        <p className="eyebrow">A few helpful details</p>
        <h2>
          Good questions.
          <br />
          <span className="text-blue">Clear answers.</span>
        </h2>
        <p className="section-description">
          A little clarity goes a long way. Here’s what to know before your
          first clean.
        </p>
        <Link href="/contact" className="text-link">
          Let’s talk about your home
          <ArrowIcon />
        </Link>
      </div>
      <div className="faq-list">
        {faqs.map((item, i) => (
          <div
            key={item.question}
            className={openIndex === i ? "faq-item is-open" : "faq-item"}
          >
            <h3>
              <button
                type="button"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span>{item.question}</span>
                <span aria-hidden="true" className="faq-plus">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
            </h3>
            <div id={`faq-answer-${i}`} hidden={openIndex !== i}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
