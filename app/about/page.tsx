import { ArrowRight, Check, Compass, MessageSquareText, SearchCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import { CTASection } from "@/components/cta-section";
import { FadeIn, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { SectionShell } from "@/components/section-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const principles = [
  {
    title: "Start with signal",
    body: "The first step is not writing a better email. It is knowing who is actually worth contacting.",
    icon: SearchCheck
  },
  {
    title: "Keep outreach human",
    body: "Generated messages should feel grounded in context, not like templates that could go to anyone.",
    icon: MessageSquareText
  },
  {
    title: "Connect the workflow",
    body: "Jobs, contacts, outreach, and resume work should support one another instead of living in separate tools.",
    icon: Compass
  }
] as const;

const workflow = [
  "Find roles that match your direction and momentum.",
  "Surface the people most likely to respond.",
  "Generate outreach that feels researched and natural.",
  "Improve your resume before you apply and follow up."
] as const;

export default function AboutPage() {
  return (
    <>
      <SectionShell className="section-divider relative py-16 sm:py-24">
        <div className="section-tint absolute inset-x-0 inset-y-5 -z-10 rounded-[40px] border border-white/45 opacity-80" />
        <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-end">
          <FadeIn className="max-w-3xl space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-coral">About</p>
            <h1 className="text-5xl font-semibold tracking-[-0.04em] text-ink sm:text-[4.35rem] sm:leading-[1.02]">
              InnerCircle is built to make outreach feel sharper, faster, and less random.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              We designed InnerCircle around a simple idea: better outcomes start when you know where to focus. Instead of juggling tabs, guessing who matters, and writing from scratch, you move through one intentional workflow.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/signup">
                <Button className="w-full px-6 py-3.5 sm:w-auto">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/features">
                <Button variant="secondary" className="w-full px-6 py-3.5 sm:w-auto">
                  Explore Features
                </Button>
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <Card className="depth-1 rounded-[36px] border-slate-200 bg-ink p-8 text-white shadow-xl shadow-slate-950/18 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky">What we believe</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                Less noise. More momentum.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                InnerCircle helps you focus on the right opportunities, the right people, and the right message so each move builds on the last one.
              </p>
            </Card>
          </FadeIn>
        </div>
      </SectionShell>

      <SectionShell className="section-divider relative py-16 sm:py-20">
        <div className="section-tint-sky absolute inset-x-0 inset-y-5 -z-10 rounded-[40px] border border-white/40 opacity-75" />
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <FadeIn className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-coral">Why it exists</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl">
              Job search tools often help with one piece of the process, but not the whole move.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Most people bounce between job boards, LinkedIn searches, notes apps, and half-finished drafts. InnerCircle brings those moments together so your search becomes more coherent and more useful.
            </p>
          </FadeIn>

          <StaggerGroup className="grid gap-4" delayChildren={0.12} staggerChildren={0.1}>
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <StaggerItem key={principle.title}>
                  <Card className="depth-2 card-hover rounded-[30px] border-slate-200 bg-white/92">
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-sky/10 text-sky">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold tracking-[-0.02em] text-ink">{principle.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-slate-600">{principle.body}</p>
                      </div>
                    </div>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </SectionShell>

      <SectionShell className="section-divider relative py-16 sm:py-20">
        <div className="section-tint-coral absolute inset-x-0 inset-y-5 -z-10 rounded-[40px] border border-white/40 opacity-70" />
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <FadeIn className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-coral">How it helps</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl">
              One workflow that supports the whole journey.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              InnerCircle is meant to reduce decision fatigue. You do not need to guess who to reach out to, what to say, or whether your materials are strong enough to send.
            </p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <Card className="depth-1 rounded-[34px] border-slate-200 bg-white/90 shadow-lg shadow-slate-900/10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-coral">Core workflow</p>
              <div className="mt-6 grid gap-4">
                {workflow.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                    <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-sky/10 text-sky">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-[24px] bg-ink px-5 py-5 text-white">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-sky">
                    <Sparkles className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky">Outcome</p>
                    <p className="mt-1 text-lg font-semibold tracking-[-0.02em]">
                      Better targeting, better outreach, better follow-through.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </FadeIn>
        </div>
      </SectionShell>

      <CTASection
        title="See how InnerCircle fits your workflow"
        description="Create an account and move from scattered effort to a search process that feels more focused, more deliberate, and more effective."
      />
    </>
  );
}
