import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
    <SectionShell className="pb-16 pt-8 sm:pb-24">
      <Card className="rounded-[36px] border-slate-200 bg-ink px-6 py-8 text-white sm:px-10 sm:py-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky">Start now</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">{description}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/signup">
              <Button className="w-full bg-white text-ink hover:bg-slate-100 sm:w-auto">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="ghost" className="w-full text-white hover:text-white sm:w-auto">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </SectionShell>
  );
}
