import Link from "next/link";
import { CTASection } from "@/components/cta-section";
import { FadeIn, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { SectionShell } from "@/components/section-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pricingTiers } from "@/lib/site";

export default function PricingPage() {
  return (
    <>
      <SectionShell className="section-divider relative py-16 sm:py-24">
        <div className="section-tint-sky absolute inset-x-0 inset-y-5 -z-10 rounded-[40px] border border-white/45 opacity-80" />
        <FadeIn className="max-w-3xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-coral">Pricing</p>
          <h1 className="text-5xl font-semibold tracking-[-0.04em] text-ink sm:text-[4.2rem]">Simple plans for getting started.</h1>
          <p className="text-base leading-8 text-slate-600 sm:text-lg">
            Mock pricing for now, designed to fit a clean SaaS presentation and leave room for future billing integration.
          </p>
        </FadeIn>

        <StaggerGroup className="mt-12 grid gap-5 lg:grid-cols-3" delayChildren={0.1} staggerChildren={0.12}>
          {pricingTiers.map((tier, index) => (
            <StaggerItem key={tier.name}>
              <Card
                className={
                  index === 1
                    ? "depth-1 card-hover rounded-[32px] border-ink bg-ink text-white shadow-xl shadow-slate-950/18"
                    : "depth-2 card-hover rounded-[32px] border-slate-200 bg-white/90"
                }
              >
                <p className={index === 1 ? "text-sm font-semibold uppercase tracking-[0.2em] text-sky" : "text-sm font-semibold uppercase tracking-[0.2em] text-coral"}>
                  {tier.name}
                </p>
                <div className="mt-5 flex items-end gap-2">
                  <span className="text-5xl font-semibold tracking-[-0.04em]">{tier.price}</span>
                  <span className={index === 1 ? "pb-2 text-slate-300" : "pb-2 text-slate-500"}>/ month</span>
                </div>
                <p className={index === 1 ? "mt-4 text-sm leading-7 text-slate-300" : "mt-4 text-sm leading-7 text-slate-600"}>
                  {tier.description}
                </p>
                <div className="mt-6">
                  <Link href="/signup">
                    <Button
                      className={index === 1 ? "w-full bg-white py-3.5 text-ink shadow-lg shadow-black/20 hover:bg-slate-100" : "w-full py-3.5"}
                      variant="primary"
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
                <div className="mt-6 space-y-3">
                  {tier.features.map((feature) => (
                    <div key={feature} className={index === 1 ? "depth-3 rounded-[20px] bg-white/10 p-4 text-sm text-slate-200" : "depth-3 rounded-[20px] bg-slate-50/90 p-4 text-sm text-slate-600"}>
                      {feature}
                    </div>
                  ))}
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </SectionShell>

      <CTASection title="Choose a plan and enter the main app" />
    </>
  );
}
