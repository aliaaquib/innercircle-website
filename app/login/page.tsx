import Link from "next/link";
import { AuthForm } from "@/components/auth-form";
import { FadeIn } from "@/components/motion/reveal";
import { SectionShell } from "@/components/section-shell";

export default function LoginPage() {
  return (
    <SectionShell className="relative flex min-h-[calc(100vh-16rem)] items-center justify-center py-16 sm:py-24">
      <div className="section-tint absolute inset-x-0 inset-y-5 -z-10 rounded-[40px] border border-white/45 opacity-80" />
      <div className="grid w-full items-center gap-10 lg:grid-cols-[0.9fr_0.7fr]">
        <FadeIn className="max-w-2xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-coral">Login</p>
          <h1 className="text-5xl font-semibold tracking-[-0.04em] text-ink sm:text-[4.1rem]">Pick up where you left off.</h1>
          <p className="text-base leading-8 text-slate-600 sm:text-lg">
            Sign in to continue into the InnerCircle experience and jump straight back into outreach, job discovery, and resume support.
          </p>
          <p className="text-sm text-slate-500">
            Need an account? <Link href="/signup" className="font-semibold text-ink transition duration-300 hover:text-slate-700">Create one here</Link>.
          </p>
        </FadeIn>

        <FadeIn className="flex justify-center lg:justify-end" delay={0.08}>
          <AuthForm mode="login" />
        </FadeIn>
      </div>
    </SectionShell>
  );
}
