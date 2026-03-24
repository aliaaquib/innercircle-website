"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { AppBrand } from "@/components/app-brand";
import { NavLink } from "@/components/nav-link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/login", label: "Login" }
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-sand/72 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="InnerCircle home">
          <AppBrand className="transition duration-300 hover:opacity-90" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
          <Link href="/signup">
            <Button>Get Started</Button>
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/90 bg-white/95 text-ink shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className={cn("overflow-hidden border-t border-white/70 bg-white/92 backdrop-blur-xl md:hidden", open ? "block" : "hidden")}>
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl px-3 py-3 text-sm font-medium text-slate-600 transition duration-300 hover:bg-slate-50 hover:text-ink"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/signup" onClick={() => setOpen(false)}>
            <Button className="mt-2 w-full">Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
