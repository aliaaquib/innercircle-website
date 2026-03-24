import Link from "next/link";
import { AuthForm } from "@/components/auth-form";
import { SectionShell } from "@/components/section-shell";

export default function SignupPage() {
  return (
    <SectionShell className="flex min-h-[calc(100vh-16rem)] items-center justify-center py-14 sm:py-20">
      <div className="grid w-full items-center gap-10 lg:grid-cols-[0.9fr_0.7fr]">
        <div className="max-w-2xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-coral">Get Started</p>
          <h1 className="text-5xl font-semibold tracking-tight text-ink sm:text-6xl">Create your InnerCircle account.</h1>
          <p className="text-base leading-7 text-slate-600 sm:text-lg">
            Start with the public website, then move directly into the main app to find contacts, draft outreach, and manage your search.
          </p>
          <p className="text-sm text-slate-500">
            Already have an account? <Link href="/login" className="font-semibold text-ink">Login here</Link>.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <AuthForm mode="signup" />
        </div>
      </div>
    </SectionShell>
  );
}
