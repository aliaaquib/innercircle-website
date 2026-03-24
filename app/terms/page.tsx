import { FadeIn } from "@/components/motion/reveal";
import { SectionShell } from "@/components/section-shell";

export default function TermsPage() {
  return (
    <SectionShell className="relative py-20 sm:py-24">
      <div className="section-tint-sky absolute inset-x-0 inset-y-5 -z-10 rounded-[40px] border border-white/40 opacity-70" />
      <FadeIn className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-coral">Terms</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl">
          Terms of use
        </h1>
        <div className="mt-8 space-y-6 text-sm leading-7 text-slate-600 sm:text-base">
          <p>
            InnerCircle is built to help users discover opportunities, organize outreach, and improve their application materials through a focused workflow.
          </p>
          <p>
            Recommendations and generated messages are provided to support your decisions, but you remain responsible for reviewing and approving anything before it is sent or submitted.
          </p>
          <p>
            Features, policies, and pricing may evolve over time. Continued use of InnerCircle indicates acceptance of those updates when they are published.
          </p>
        </div>
      </FadeIn>
    </SectionShell>
  );
}
