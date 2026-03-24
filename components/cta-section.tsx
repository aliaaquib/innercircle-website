import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion/reveal";
import { SectionShell } from "@/components/section-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type CTASectionProps = {
  title: string;
  description?: string;
};

export function CTASection({
  title,
  description = "Start using InnerCircle to move from random cold outreach to a workflow that actually helps you get replies."
}: CTASectionProps) {
  return (
    <SectionShell className="pb-20 pt-10 sm:pb-28">
      <FadeIn>
        <Card className="depth-1 card-hover relative rounded-[36px] border-slate-200 bg-[linear-gradient(135deg,#0F172A_0%,#111f38_58%,#1b2a45_100%)] px-6 py-8 text-white shadow-xl shadow-slate-950/20 sm:px-10 sm:py-12">
          <div className="pointer-events-none absolute inset-0 rounded-[36px] bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.10),transparent_24%)]" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky">Start now</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">{description}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/signup">
                <Button className="w-full bg-white px-6 py-3.5 text-ink shadow-lg shadow-black/20 hover:bg-slate-100 sm:w-auto">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </FadeIn>
    </SectionShell>
  );
}
