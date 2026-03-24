"use client";

import { useRouter } from "next/navigation";
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
    router.push(`/redirect?mode=${mode}`);
  }

  return (
    <Card className="w-full max-w-md rounded-[32px] border-slate-200 bg-white/90 p-7">
      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-coral">
          {mode === "login" ? "Welcome back" : "Join InnerCircle"}
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-ink">{actionLabel}</h1>
        <p className="text-sm leading-6 text-slate-600">{helperText}</p>
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
        <Button type="submit" disabled={pending} className="w-full">
          {pending ? "Redirecting..." : actionLabel}
        </Button>
      </form>
    </Card>
  );
}
