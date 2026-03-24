import Link from "next/link";
import { AuthForm } from "@/components/auth-form";
import { SectionShell } from "@/components/section-shell";

export default function LoginPage() {
  return (
    <SectionShell className="flex min-h-[calc(100vh-16rem)] items-center justify-center py-14 sm:py-20">
      <div className="grid w-full items-center gap-10 lg:grid-cols-[0.9fr_0.7fr]">
        <div className="max-w-2xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-coral">Login</p>
          <h1 className="text-5xl font-semibold tracking-tight text-ink sm:text-6xl">Pick up where you left off.</h1>
          <p className="text-base leading-7 text-slate-600 sm:text-lg">
            Sign in to continue into the InnerCircle experience and jump straight back into outreach, job discovery, and resume support.
          </p>
          <p className="text-sm text-slate-500">
            Need an account? <Link href="/signup" className="font-semibold text-ink">Create one here</Link>.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <AuthForm mode="login" />
        </div>
      </div>
    </SectionShell>
  );
}
