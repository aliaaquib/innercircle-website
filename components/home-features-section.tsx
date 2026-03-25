"use client";

import { useState } from "react";
import { BriefcaseBusiness, Check, FileText, SearchCheck, Sparkles } from "lucide-react";
import { FadeIn, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { FeatureAccordionItem } from "@/components/feature-accordion-item";
import { SectionShell } from "@/components/section-shell";
import { Card } from "@/components/ui/card";

const featureItems = [
  {
    title: "Smart Matching",
    description: "Find the 3 people most likely to respond based on shared background and activity.",
    icon: SearchCheck
  },
  {
    title: "AI Email Generation",
    description: "Generate short, natural emails that feel human, contextual, and personalized.",
    icon: Sparkles
  },
  {
    title: "Resume Tools",
    description: "Tailor your resume to specific roles and improve match quality before you send anything out.",
    icon: FileText
  },
  {
    title: "Job Discovery",
    description: "Explore opportunities curated around your interests and profile so you can act with more direction.",
    icon: BriefcaseBusiness
  }
] as const;

const highlights = [
  "Better signals, not more noise",
  "Faster decisions",
  "Higher response rates"
] as const;

export function HomeFeaturesSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <SectionShell className="section-divider relative py-16 sm:py-20">
      <div className="section-tint absolute inset-x-0 inset-y-5 -z-10 rounded-[40px] border border-white/45 opacity-75" />

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <FadeIn className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-coral">Features</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl">
            Everything you need to go from application to introduction.
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-600 sm:text-base">
            InnerCircle brings everything into one place — from finding the right opportunities to reaching out with context. Instead of juggling tools, you move through a single, focused workflow.
          </p>

          <StaggerGroup className="mt-6 flex flex-col gap-3" delayChildren={0.12} staggerChildren={0.08}>
            {highlights.map((item) => (
              <StaggerItem key={item}>
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky/10 text-sky">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <p>{item}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </FadeIn>

        <FadeIn delay={0.08}>
          <Card className="rounded-2xl border border-slate-200 bg-ink p-6 text-white shadow-lg shadow-slate-900/14 sm:p-8">
            <StaggerGroup className="divide-y divide-white/10" delayChildren={0.14} staggerChildren={0.08}>
              {featureItems.map((item, index) => (
                <StaggerItem key={item.title}>
                  <FeatureAccordionItem
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(index)}
                    dark
                  />
                </StaggerItem>
              ))}
            </StaggerGroup>
          </Card>
        </FadeIn>
      </div>
    </SectionShell>
  );
}
