import { FadeIn } from "@/components/motion/reveal";
import { SectionShell } from "@/components/section-shell";

export default function PrivacyPage() {
  return (
    <SectionShell className="relative py-20 sm:py-24">
      <div className="section-tint absolute inset-x-0 inset-y-5 -z-10 rounded-[40px] border border-white/40 opacity-70" />
      <FadeIn className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-coral">Privacy</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl">
          Privacy policy
        </h1>
        <div className="mt-8 space-y-6 text-sm leading-7 text-slate-600 sm:text-base">
          <p>
            InnerCircle collects the information needed to personalize outreach recommendations, improve the product experience, and support your job search workflow.
          </p>
          <p>
            This can include profile details, outreach context, resume content, and usage activity within the platform. We use that information to make InnerCircle more useful and relevant to you.
          </p>
          <p>
            We do not sell your personal data. If you need help with privacy-related requests, you can contact support through the main InnerCircle product.
          </p>
        </div>
      </FadeIn>
    </SectionShell>
  );
}
