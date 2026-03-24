"use client";

import type { Route } from "next";
import { useState } from "react";
import { FadeIn, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { FAQItem } from "@/components/faq-item";
import { SectionShell } from "@/components/section-shell";
import { ButtonLink } from "@/components/ui/button";

const faqItems = [
  {
    question: "How is this different from cold emailing manually?",
    answer:
      "InnerCircle helps you identify the right people first, then generates messages that feel personal and relevant instead of generic."
  },
  {
    question: "How does InnerCircle choose who to contact?",
    answer:
      "It looks at shared background, role relevance, and activity signals to surface people most likely to respond."
  },
  {
    question: "Are the emails fully automated?",
    answer:
      "Emails are generated for you but designed to sound natural and human. You can edit them before sending."
  },
  {
    question: "Does this work for internships and full-time roles?",
    answer:
      "Yes, you can use InnerCircle for both internships and job opportunities across different fields."
  },
  {
    question: "Do I need a strong resume to start?",
    answer:
      "No, InnerCircle also helps you improve and tailor your resume as part of the process."
  }
] as const;

export function HomeFAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <SectionShell className="section-divider relative py-20 sm:py-24">
      <div className="section-tint absolute inset-x-0 inset-y-5 -z-10 rounded-[40px] border border-white/40 opacity-70" />

      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <FadeIn className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-coral">FAQ</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl">
            Common questions, clear answers.
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
            Everything you need to know about how InnerCircle works and how it helps you get better responses.
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="rounded-2xl border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,250,252,0.88))] p-6 shadow-lg shadow-slate-900/10 transition-transform duration-300 hover:-translate-y-0.5 sm:p-8">
            <div className="rounded-2xl bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,255,255,0.52))] backdrop-blur-sm">
              <StaggerGroup className="divide-y divide-slate-100" delayChildren={0.12} staggerChildren={0.08}>
                {faqItems.map((item, index) => (
                  <StaggerItem key={item.question}>
                    <FAQItem
                      question={item.question}
                      answer={item.answer}
                      isOpen={openIndex === index}
                      onClick={() => setOpenIndex(index)}
                    />
                  </StaggerItem>
                ))}
              </StaggerGroup>

              <div className="mt-4 border-t border-slate-100 px-3 pt-5 sm:px-4 sm:pt-6">
                <p className="text-sm text-slate-500">Still have questions?</p>
                <div className="mt-3">
                  <ButtonLink
                    href={"/signup" as Route}
                    variant="secondary"
                    className="px-4 py-2.5 text-sm shadow-sm"
                  >
                    Ask InnerCircle AI
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </SectionShell>
  );
}
