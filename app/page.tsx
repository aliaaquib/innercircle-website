import Link from "next/link";
import { ArrowRight, Check, Search, SendHorizonal, Sparkles } from "lucide-react";
import { CTASection } from "@/components/cta-section";
import { FeatureCard } from "@/components/feature-card";
import { HeroSection } from "@/components/hero-section";
import { FadeIn, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { SectionShell } from "@/components/section-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { featureHighlights, socialProof } from "@/lib/site";

const steps = [
  {
    title: "Enter role + company",
    description: "Tell InnerCircle what role you want and where you want to land."
  },
  {
    title: "Get top 3 people",
    description: "See the strongest contacts to prioritize instead of searching blindly."
  },
  {
    title: "Send personalized emails",
    description: "Use AI-generated outreach that feels tailored to the person and context."
  }
] as const;

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <SectionShell className="section-divider relative py-16 sm:py-20">
        <div className="section-tint-coral absolute inset-x-0 inset-y-5 -z-10 rounded-[40px] border border-white/45 opacity-75" />
        <div className="grid gap-6 lg:grid-cols-2">
          <FadeIn>
            <Card className="depth-2 card-hover rounded-[32px] border-slate-200 bg-white/92">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-coral">The problem</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-ink">Cold emailing is hard. Finding the right people is harder.</h2>
              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                Most outreach fails before the first sentence. People spend hours guessing who matters, then send messages that never feel personal enough to earn a reply.
              </p>
            </Card>
          </FadeIn>

          <FadeIn delay={0.08}>
            <Card className="depth-1 card-hover rounded-[32px] border-slate-200 bg-ink text-white shadow-xl shadow-slate-950/16">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky">The shift</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">InnerCircle turns scattered effort into a focused plan.</h2>
              <p className="mt-4 text-sm leading-8 text-slate-300 sm:text-base">
                Instead of starting from a blank page, you get the right contacts, messaging help, and support tools around the rest of your search.
              </p>
            </Card>
          </FadeIn>
        </div>
      </SectionShell>

      <SectionShell className="section-divider relative py-16 sm:py-20">
        <div className="section-tint-sky absolute inset-x-0 inset-y-5 -z-10 rounded-[40px] border border-white/40 opacity-80" />
        <FadeIn className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-coral">How it works</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl">A simple flow with better odds of a real response.</h2>
          </div>
          <Link href="/signup">
            <Button variant="secondary" className="px-6 py-3.5">
              Start with InnerCircle
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </FadeIn>

        <StaggerGroup className="mt-10 grid gap-4 lg:grid-cols-3" delayChildren={0.12} staggerChildren={0.12}>
          {steps.map((step, index) => {
            const Icon = [Search, Sparkles, SendHorizonal][index];

            return (
              <StaggerItem key={step.title}>
                <Card className="depth-2 card-hover rounded-[30px] border-slate-200 bg-white/88">
                  <span className="inline-flex rounded-2xl bg-sky/10 p-3 text-sky shadow-sm shadow-sky/15">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Step {index + 1}</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-ink">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </SectionShell>

      <SectionShell className="section-divider relative py-16 sm:py-20">
        <div className="section-tint absolute inset-x-0 inset-y-5 -z-10 rounded-[40px] border border-white/45 opacity-75" />
        <FadeIn className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-coral">Features</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl">Everything you need to go from application to introduction.</h2>
        </FadeIn>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {featureHighlights.map((feature) => (
            <FeatureCard key={feature.title} title={feature.title} description={feature.description} />
          ))}
        </div>
      </SectionShell>

      <SectionShell className="section-divider relative py-16 sm:py-20">
        <div className="section-tint-sky absolute inset-x-0 inset-y-5 -z-10 rounded-[40px] border border-white/40 opacity-70" />
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeIn>
            <Card className="depth-2 card-hover rounded-[32px] border-slate-200 bg-white/92">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-coral">Social proof</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-ink">What early users say</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Mock testimonials for now, but placed here to establish the trust layer the full site will need.
              </p>
            </Card>
          </FadeIn>

          <StaggerGroup className="grid gap-4 md:grid-cols-3" delayChildren={0.12} staggerChildren={0.12}>
            {socialProof.map((item) => (
              <StaggerItem key={item.name}>
                <Card className="depth-2 card-hover rounded-[30px] border-slate-200 bg-white/88">
                  <div className="flex h-full flex-col justify-between gap-6">
                    <p className="text-sm leading-7 text-slate-600">“{item.quote}”</p>
                    <div>
                      <p className="font-semibold text-ink">{item.name}</p>
                      <p className="text-sm text-slate-500">{item.role}</p>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </SectionShell>

      <SectionShell className="relative py-16 sm:py-20">
        <div className="section-tint-coral absolute inset-x-0 inset-y-5 -z-10 rounded-[40px] border border-white/40 opacity-70" />
        <FadeIn>
          <Card className="depth-1 rounded-[34px] border-slate-200 bg-white/88 shadow-lg shadow-slate-900/10">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-coral">Why teams like it</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-ink">A sharper workflow for career momentum.</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  InnerCircle brings together the outreach, job-search, and application pieces that usually live across too many tabs and docs.
                </p>
              </div>
              <div className="grid gap-3 text-sm text-slate-600">
                {[
                  "High-signal contact recommendations instead of manual guessing",
                  "Personalized email drafts built around context, not templates",
                  "Resume and discovery tools that support the same end goal"
                ].map((item) => (
                  <div key={item} className="depth-3 card-hover flex gap-3 rounded-[22px] bg-slate-50/90 p-4">
                    <span className="mt-1 rounded-full bg-sky/10 p-1 text-sky">
                      <Check className="h-4 w-4" />
                    </span>
                    <p className="leading-6">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </FadeIn>
      </SectionShell>

      <CTASection title="Start using InnerCircle" />
    </>
  );
}
