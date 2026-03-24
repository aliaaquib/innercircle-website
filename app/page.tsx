import { Check, Search, SendHorizonal, Sparkles } from "lucide-react";
import { CTASection } from "@/components/cta-section";
import { HeroSection } from "@/components/hero-section";
import { HomeFeaturesSection } from "@/components/home-features-section";
import { HomeSocialProofSection } from "@/components/home-social-proof-section";
import { FadeIn, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { SectionShell } from "@/components/section-shell";
import { Card } from "@/components/ui/card";
import { socialProof } from "@/lib/site";

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

const problemPoints = [
  "You do not know who is actually worth reaching out to",
  "Most cold emails feel generic and get ignored",
  "Too many profiles, no clear signal",
  "People spend hours guessing instead of acting",
  "No feedback loop on what works"
] as const;

const shiftPoints = [
  "Focus on the right people, not more people",
  "Prioritize high-signal connections instantly",
  "Use context-aware messaging instead of templates",
  "Reduce time spent searching and guessing",
  "Move from scattered effort to a clear workflow"
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
              <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.03em] text-ink">Cold emailing is hard. Finding the right people is harder.</h2>
              <p className="mt-4 max-w-lg text-sm leading-8 text-slate-600 sm:text-base">
                Most outreach fails before the first sentence. People spend hours guessing who matters, then send messages that never feel personal enough to earn a reply.
              </p>
              <StaggerGroup className="mt-7 flex max-w-lg flex-col gap-3" delayChildren={0.12} staggerChildren={0.08}>
                {problemPoints.map((item) => (
                  <StaggerItem key={item}>
                    <div className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                      <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-sky/10 text-sky">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span>{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </Card>
          </FadeIn>

          <FadeIn delay={0.08}>
            <Card className="depth-1 card-hover rounded-[32px] border-slate-200 bg-ink text-white shadow-xl shadow-slate-950/16">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky">The shift</p>
              <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.03em]">InnerCircle turns scattered effort into a focused plan.</h2>
              <p className="mt-4 max-w-lg text-sm leading-8 text-slate-300 sm:text-base">
                Instead of starting from a blank page, you get the right contacts, messaging help, and support tools around the rest of your search.
              </p>
              <StaggerGroup className="mt-7 flex max-w-lg flex-col gap-3" delayChildren={0.16} staggerChildren={0.08}>
                {shiftPoints.map((item) => (
                  <StaggerItem key={item}>
                    <div className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                      <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-sky">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span>{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </Card>
          </FadeIn>
        </div>
      </SectionShell>

      <SectionShell className="section-divider relative py-16 sm:py-20">
        <div className="section-tint-sky absolute inset-x-0 inset-y-5 -z-10 rounded-[40px] border border-white/40 opacity-80" />
        <FadeIn className="max-w-3xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-coral">How it works</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl">A simple flow with better odds of a real response.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              InnerCircle simplifies the entire process — from figuring out where to apply, to identifying the right people, to sending messages that actually get replies.
            </p>
          </div>
        </FadeIn>

        <StaggerGroup className="mt-10 grid gap-6 lg:grid-cols-3" delayChildren={0.12} staggerChildren={0.12}>
          {steps.map((step, index) => {
            const Icon = [Search, Sparkles, SendHorizonal][index];

            return (
              <StaggerItem key={step.title}>
                <Card className="h-full rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8">
                  <div className="flex h-full flex-col gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-sky">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="pt-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Step {index + 1}</p>
                    <h3 className="text-xl font-semibold tracking-[-0.02em] text-ink sm:text-2xl">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
                  </div>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </SectionShell>

      <HomeFeaturesSection />

      <HomeSocialProofSection testimonials={socialProof} />

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
