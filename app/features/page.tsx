import { CTASection } from "@/components/cta-section";
import { FadeIn, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { SectionShell } from "@/components/section-shell";
import { Card } from "@/components/ui/card";
import { detailedFeatures } from "@/lib/site";

export default function FeaturesPage() {
  return (
    <>
      <SectionShell className="section-divider relative py-16 sm:py-24">
        <div className="section-tint absolute inset-x-0 inset-y-5 -z-10 rounded-[40px] border border-white/45 opacity-80" />
        <FadeIn className="max-w-3xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-coral">Features</p>
          <h1 className="text-5xl font-semibold tracking-[-0.04em] text-ink sm:text-[4.2rem]">One product for outreach, applications, and momentum.</h1>
          <p className="text-base leading-8 text-slate-600 sm:text-lg">
            InnerCircle is built for the part of the job search that usually feels disconnected: finding the right role, identifying the right people, and sending the right message.
          </p>
        </FadeIn>

        <StaggerGroup className="mt-12 grid gap-5" delayChildren={0.1} staggerChildren={0.12}>
          {detailedFeatures.map((feature, index) => (
            <StaggerItem key={feature.title}>
              <Card className="depth-2 card-hover rounded-[32px] border-slate-200 bg-white/92">
                <div className="grid gap-5 lg:grid-cols-[0.3fr_1fr] lg:items-start">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Feature {index + 1}</p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-ink sm:text-3xl">{feature.title}</h2>
                  </div>
                  <div className="grid gap-4 lg:grid-cols-2">
                    <p className="text-sm leading-7 text-slate-600 sm:text-base">{feature.body}</p>
                    <div className="depth-3 rounded-[24px] bg-slate-50/90 p-5 text-sm leading-7 text-slate-600">
                      InnerCircle keeps the experience cohesive, so the same product that helps you find contacts can also support your resume and next steps inside the dashboard.
                    </div>
                  </div>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </SectionShell>

      <CTASection title="Turn features into real outreach" description="Create an account, land in the main app, and keep your search moving with the same design language and workflow." />
    </>
  );
}
