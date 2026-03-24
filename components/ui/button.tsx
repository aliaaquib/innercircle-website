"use client";

import * as React from "react";
import Link from "next/link";
import type { Route } from "next";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

type ButtonLinkProps = {
  href: Route<string>;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
};

const buttonStyles =
  "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-[-0.01em] transform-gpu transition-all duration-300 ease-out hover:scale-[1.03] hover:brightness-[1.02] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50";

function getVariantClasses(variant: NonNullable<ButtonProps["variant"]>) {
  return {
    primary: "bg-ink text-white shadow-lg shadow-slate-900/15 hover:bg-slate-800",
    secondary: "border border-slate-200/90 bg-white/95 text-ink shadow-sm hover:border-slate-300 hover:shadow-md",
    ghost: "bg-transparent text-slate-600 hover:bg-white/40 hover:text-ink"
  }[variant];
}

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        buttonStyles,
        getVariantClasses(variant),
        className
      )}
      {...props}
    />
  );
}

export function ButtonLink({ href, className, variant = "primary", children }: ButtonLinkProps) {
  return (
    <Link href={href} className={cn(buttonStyles, getVariantClasses(variant), className)}>
      {children}
    </Link>
  );
}
