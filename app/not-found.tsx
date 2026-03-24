import Link from "next/link";
import { FadeIn } from "@/components/motion/reveal";
import { SectionShell } from "@/components/section-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function NotFound() {
  return (
    <SectionShell className="relative flex min-h-[calc(100vh-20rem)] items-center justify-center py-16 sm:py-24">
      <div className="section-tint absolute inset-x-0 inset-y-5 -z-10 rounded-[40px] border border-white/45 opacity-80" />
      <FadeIn className="w-full max-w-xl">
        <Card className="depth-1 w-full rounded-[32px] border-slate-200 bg-white/92 text-center shadow-xl shadow-slate-900/12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-coral">404</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-ink">Page not found</h1>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            The page you are looking for does not exist on the InnerCircle website.
          </p>
          <div className="mt-6">
            <Link href="/">
              <Button className="px-6 py-3.5">Back to home</Button>
            </Link>
          </div>
        </Card>
      </FadeIn>
    </SectionShell>
  );
}
