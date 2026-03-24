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
    <Link
      href={href}
      className={cn(
        "relative text-sm font-medium text-slate-600 transition duration-300 hover:text-ink after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-slate-400/60 after:transition-transform after:duration-300 hover:after:scale-x-100",
        className
      )}
    >
      {children}
    </Link>
  );
}
