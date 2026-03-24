import type { ReactNode } from "react";
import type { Route } from "next";
import Link from "next/link";
import { cn } from "@/lib/utils";

type NavLinkProps = {
  href: Route;
  children: ReactNode;
  className?: string;
};

export function NavLink({ href, children, className }: NavLinkProps) {
  return (
    <Link href={href} className={cn("text-sm font-medium text-slate-600 transition hover:text-ink", className)}>
      {children}
    </Link>
  );
}
