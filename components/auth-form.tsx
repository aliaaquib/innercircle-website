"use client";

import { useRouter } from "next/navigation";
import type { Route } from "next";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

type AuthFormProps = {
  mode: "login" | "signup";
};

export function AuthForm({ mode }: AuthFormProps) {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  const actionLabel = mode === "login" ? "Login" : "Create account";
  const helperText =
    mode === "login"
      ? "Enter your credentials to continue into InnerCircle."
      : "Create your account to start using InnerCircle.";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    router.push(`/redirect?mode=${mode}` as Route);
  }

  return (
    <Card className="depth-1 card-hover w-full max-w-md rounded-[32px] border-slate-200 bg-white/92 p-7 shadow-xl shadow-slate-900/10">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-coral">
          {mode === "login" ? "Welcome back" : "Join InnerCircle"}
        </p>
        <h1 className="text-3xl font-semibold tracking-[-0.03em] text-ink">{actionLabel}</h1>
        <p className="text-sm leading-7 text-slate-600">{helperText}</p>
      </div>

      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        <label className="block space-y-2">
          <span className="text-sm font-medium text-slate-700">Email</span>
          <Input type="email" name="email" placeholder="you@example.com" required />
        </label>
        <label className="block space-y-2">
          <span className="text-sm font-medium text-slate-700">Password</span>
          <Input type="password" name="password" placeholder="Enter your password" required />
        </label>
        <Button type="submit" disabled={pending} className="w-full py-3.5 shadow-lg shadow-slate-900/15">
          {pending ? "Redirecting..." : actionLabel}
        </Button>
      </form>
    </Card>
  );
}
