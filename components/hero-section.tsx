"use client";

import type { Route } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { AccordionItem } from "@/components/accordion-item";
import { FadeIn, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { SectionShell } from "@/components/section-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const accordionItems = [
  {
    title: "Smart Matching",
    description: "Top contacts surfaced across recruiting, hiring, and adjacent teams."
  },
  {
    title: "Personalized Draft",
    description: "AI prepares a cold email that feels researched instead of generic."
  },
  {
    title: "Sharper Application",
    description: "Resume tools help you tailor your story before you hit apply."
  }
] as const;

const checklistItems = [
  "Top 3 outreach targets in one view",
  "Personalized email drafts ready to send",
  "Resume and job tools in the same flow"
] as const;

export function HeroSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionShell className="section-divider relative py-16 sm:py-24">
      <div className="section-tint absolute inset-x-0 inset-y-6 -z-10 rounded-[40px] border border-white/45 opacity-80" />
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <FadeIn className="space-y-10" y={28}>
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-coral">InnerCircle</p>
            <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.04em] text-ink sm:text-[4.35rem] sm:leading-[1.02]">
              Get referrals that actually work
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              InnerCircle finds the right people to reach out to and writes the message for you.
            </p>
          </div>

          <div className="flex flex-col gap-3 pt-1 sm:flex-row">
            <Link href="/signup">
              <Button className="w-full px-6 py-3.5 sm:w-auto">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href={"/about" as Route}>
              <Button variant="secondary" className="w-full px-6 py-3.5 sm:w-auto">Know More</Button>
            </Link>
          </div>

          <StaggerGroup className="flex flex-col gap-3 text-sm text-slate-600" delayChildren={0.15}>
            {checklistItems.map((item) => (
              <StaggerItem key={item}>
                <div className="flex items-center gap-3 leading-6">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky/10 text-sky">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm text-slate-600">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </FadeIn>

        <FadeIn className="relative" delay={0.08} y={32}>
          <div className="pointer-events-none absolute inset-6 -z-10 rounded-[38px] bg-sky/10 blur-3xl" />
          <Card className="depth-1 card-hover relative space-y-6 overflow-hidden bg-white/86 shadow-xl shadow-slate-900/12">
            <div className="rounded-[24px] bg-ink p-6 text-white shadow-lg shadow-slate-950/20">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky">How it feels</p>
              <div className="mt-5 space-y-4">
                <p className="text-2xl font-semibold tracking-[-0.02em]">Less random outreach. More high-signal introductions.</p>
                <p className="text-sm leading-7 text-slate-300">
                  Build momentum with a workflow that connects job discovery, contact selection, and message writing in one place.
                </p>
              </div>
            </div>

            <StaggerGroup className="grid gap-3" delayChildren={0.12} staggerChildren={0.08}>
              {accordionItems.map((item, index) => (
                <StaggerItem key={item.title}>
                  <AccordionItem
                    number={index + 1}
                    title={item.title}
                    description={item.description}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex((current) => (current === index ? null : index))}
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
