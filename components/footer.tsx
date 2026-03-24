import Link from "next/link";
import { AppBrand } from "@/components/app-brand";
import { SectionShell } from "@/components/section-shell";

export function Footer() {
  return (
    <footer className="border-t border-white/70 bg-white/65 backdrop-blur-sm">
      <SectionShell className="py-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <AppBrand />
            <p className="max-w-md text-sm leading-7 text-slate-600">
              InnerCircle helps you find the right people to contact, draft the message, and move through your search with more intention.
            </p>
          </div>

          <div className="grid gap-8 text-sm text-slate-600 sm:grid-cols-3">
            <div className="space-y-3">
              <p className="font-semibold text-ink">Product</p>
              <div className="space-y-2">
                <Link href="/features" className="block transition duration-300 hover:text-ink">Features</Link>
                <Link href="/pricing" className="block transition duration-300 hover:text-ink">Pricing</Link>
              </div>
            </div>
            <div className="space-y-3">
              <p className="font-semibold text-ink">Account</p>
              <div className="space-y-2">
                <Link href="/login" className="block transition duration-300 hover:text-ink">Login</Link>
                <Link href="/signup" className="block transition duration-300 hover:text-ink">Get Started</Link>
              </div>
            </div>
            <div className="space-y-3">
              <p className="font-semibold text-ink">Socials</p>
              <div className="space-y-2">
                <a href="#" className="block transition duration-300 hover:text-ink">LinkedIn</a>
                <a href="#" className="block transition duration-300 hover:text-ink">X</a>
                <a href="#" className="block transition duration-300 hover:text-ink">Instagram</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
          © 2026 InnerCircle. All rights reserved.
        </div>
      </SectionShell>
    </footer>
  );
}
