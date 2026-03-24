import Link from "next/link";
import { CTASection } from "@/components/cta-section";
import { SectionShell } from "@/components/section-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pricingTiers } from "@/lib/site";

export default function PricingPage() {
  return (
    <>
      <SectionShell className="py-14 sm:py-20">
        <div className="max-w-3xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-coral">Pricing</p>
          <h1 className="text-5xl font-semibold tracking-tight text-ink sm:text-6xl">Simple plans for getting started.</h1>
          <p className="text-base leading-7 text-slate-600 sm:text-lg">
            Mock pricing for now, designed to fit a clean SaaS presentation and leave room for future billing integration.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <Card
              key={tier.name}
              className={index === 1 ? "rounded-[32px] border-ink bg-ink text-white" : "rounded-[32px] border-slate-200 bg-white/88"}
            >
              <p className={index === 1 ? "text-sm font-semibold uppercase tracking-[0.2em] text-sky" : "text-sm font-semibold uppercase tracking-[0.2em] text-coral"}>
                {tier.name}
              </p>
              <div className="mt-5 flex items-end gap-2">
                <span className="text-5xl font-semibold tracking-tight">{tier.price}</span>
                <span className={index === 1 ? "pb-2 text-slate-300" : "pb-2 text-slate-500"}>/ month</span>
              </div>
              <p className={index === 1 ? "mt-4 text-sm leading-7 text-slate-300" : "mt-4 text-sm leading-7 text-slate-600"}>
                {tier.description}
              </p>
              <div className="mt-6">
                <Link href="/signup">
                  <Button
                    className={index === 1 ? "w-full bg-white text-ink hover:bg-slate-100" : "w-full"}
                    variant={index === 1 ? "primary" : "primary"}
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
              <div className="mt-6 space-y-3">
                {tier.features.map((feature) => (
                  <div key={feature} className={index === 1 ? "rounded-[20px] bg-white/10 p-4 text-sm text-slate-200" : "rounded-[20px] bg-slate-50 p-4 text-sm text-slate-600"}>
                    {feature}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </SectionShell>

      <CTASection title="Choose a plan and enter the main app" />
    </>
  );
}
