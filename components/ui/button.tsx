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
  "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-sky disabled:cursor-not-allowed disabled:opacity-50";

function getVariantClasses(variant: NonNullable<ButtonProps["variant"]>) {
  return {
    primary: "bg-ink text-white shadow-glow hover:bg-slate-800",
    secondary: "border border-slate-200 bg-white text-ink hover:border-slate-300",
    ghost: "bg-transparent text-slate-600 hover:text-ink"
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
