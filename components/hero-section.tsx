import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { SectionShell } from "@/components/section-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function HeroSection() {
  return (
    <SectionShell className="py-14 sm:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-coral">InnerCircle</p>
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
              Get referrals that actually work
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              InnerCircle finds the right people to reach out to and writes the message for you.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/signup">
              <Button className="w-full sm:w-auto">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/features">
              <Button variant="secondary" className="w-full sm:w-auto">Try Demo</Button>
            </Link>
          </div>

          <div className="grid gap-3 text-sm text-slate-600 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/70 p-4 shadow-sm">Top 3 outreach targets in one view</div>
            <div className="rounded-2xl bg-white/70 p-4 shadow-sm">Personalized email drafts ready to send</div>
            <div className="rounded-2xl bg-white/70 p-4 shadow-sm">Resume and job-search tools in the same flow</div>
          </div>
        </div>

        <Card className="space-y-6 overflow-hidden bg-white/80">
          <div className="rounded-[24px] bg-ink p-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky">How it feels</p>
            <div className="mt-5 space-y-4">
              <p className="text-2xl font-semibold">Less random outreach. More high-signal introductions.</p>
              <p className="text-sm leading-6 text-slate-300">
                Build momentum with a workflow that connects job discovery, contact selection, and message writing in one place.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[24px] bg-slate-50 p-5">
              <div className="flex items-center gap-3">
                <span className="rounded-2xl bg-sky/10 p-3 text-sky">
                  <Sparkles className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Suggested flow</p>
                  <p className="mt-1 text-lg font-semibold text-ink">Role entered: Product Manager at Stripe</p>
                </div>
              </div>
            </div>
            <div className="grid gap-3">
              <div className="rounded-[22px] border border-slate-200 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">1. Smart matching</p>
                <p className="mt-2 text-sm font-semibold text-ink">Top contacts surfaced across recruiting, hiring, and adjacent teams.</p>
              </div>
              <div className="rounded-[22px] border border-slate-200 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">2. Personalized draft</p>
                <p className="mt-2 text-sm font-semibold text-ink">AI prepares a cold email that feels researched instead of generic.</p>
              </div>
              <div className="rounded-[22px] border border-slate-200 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">3. Sharper application</p>
                <p className="mt-2 text-sm font-semibold text-ink">Resume tools help you tailor your story before you hit apply.</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </SectionShell>
  );
}
