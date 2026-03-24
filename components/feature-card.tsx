import { FadeIn } from "@/components/motion/reveal";
import { Card } from "@/components/ui/card";

type FeatureCardProps = {
  title: string;
  description: string;
};

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <FadeIn className="h-full">
      <Card className="depth-2 card-hover h-full rounded-[30px] border-slate-100 bg-white/88">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-coral">{title}</p>
        <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
      </Card>
    </FadeIn>
  );
}
