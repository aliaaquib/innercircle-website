import { FadeIn } from "@/components/motion/reveal";
import { SectionShell } from "@/components/section-shell";
import { TestimonialRow } from "@/components/testimonial-row";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

type HomeSocialProofSectionProps = {
  testimonials: readonly Testimonial[];
};

export function HomeSocialProofSection({ testimonials }: HomeSocialProofSectionProps) {
  const rowOne = testimonials;
  const rowTwo = [...testimonials.slice(2), ...testimonials.slice(0, 2)];
  const rowThree = [...testimonials.slice(4), ...testimonials.slice(0, 4)];

  return (
    <SectionShell className="section-divider relative py-16 sm:py-20">
      <div className="section-tint-sky absolute inset-x-0 inset-y-5 -z-10 rounded-[40px] border border-white/40 opacity-70" />

      <FadeIn className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-coral">Social proof</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-ink">
          What early users say
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
          Early feedback points to the same pattern: clearer targets, faster outreach decisions, and a workflow that feels much more intentional.
        </p>
      </FadeIn>

      <div className="relative mt-10 space-y-4 sm:space-y-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#fff8ef] to-transparent sm:w-16" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#fff8ef] to-transparent sm:w-16" />

        <TestimonialRow testimonials={rowOne} direction="left" />
        <TestimonialRow testimonials={rowTwo} direction="right" className="hidden sm:block" />
        <TestimonialRow testimonials={rowThree} direction="left" className="hidden lg:block" />
      </div>
    </SectionShell>
  );
}
