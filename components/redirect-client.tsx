"use client";

import { useEffect } from "react";
import { FadeIn } from "@/components/motion/reveal";
import { SectionShell } from "@/components/section-shell";
import { Card } from "@/components/ui/card";

type RedirectClientProps = {
  target: string;
};

export function RedirectClient({ target }: RedirectClientProps) {
  useEffect(() => {
    window.location.href = target;
  }, [target]);

  return (
    <SectionShell className="flex min-h-[calc(100vh-20rem)] items-center justify-center py-16 sm:py-24">
      <FadeIn className="w-full max-w-xl">
        <Card className="depth-1 w-full rounded-[32px] border-slate-200 bg-white/92 text-center shadow-xl shadow-slate-900/12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-coral">Redirecting</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-ink">Taking you into InnerCircle</h1>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Your marketing-site auth flow is complete. If the redirect does not happen automatically, open the main app directly at:
          </p>
          <p className="mt-4 break-all rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold text-ink shadow-sm">{target}</p>
        </Card>
      </FadeIn>
    </SectionShell>
  );
}
