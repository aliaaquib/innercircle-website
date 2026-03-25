"use client";

import Link from "next/link";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { SectionShell } from "@/components/section-shell";
import { Input } from "@/components/ui/input";

const brandLetters = [
  { letter: "I", size: "text-5xl sm:text-6xl lg:text-7xl" },
  { letter: "n", size: "text-5xl sm:text-6xl lg:text-7xl" },
  { letter: "n", size: "text-5xl sm:text-6xl lg:text-7xl" },
  { letter: "e", size: "text-5xl sm:text-6xl lg:text-7xl" },
  { letter: "r", size: "text-5xl sm:text-6xl lg:text-7xl" },
  { letter: "", size: "mx-1 sm:mx-1.5" },
  { letter: "C", size: "text-5xl sm:text-6xl lg:text-7xl" },
  { letter: "i", size: "text-5xl sm:text-6xl lg:text-7xl" },
  { letter: "r", size: "text-5xl sm:text-6xl lg:text-7xl" },
  { letter: "c", size: "text-5xl sm:text-6xl lg:text-7xl" },
  { letter: "l", size: "text-5xl sm:text-6xl lg:text-7xl" },
  { letter: "e", size: "text-5xl sm:text-6xl lg:text-7xl" }
] as const;

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) {
      return;
    }

    setSubscribed(true);
    setEmail("");
  }

  return (
    <footer className="border-t border-slate-200/60 bg-gradient-to-b from-transparent to-slate-50/80 backdrop-blur-sm">
      <SectionShell className="py-24 sm:py-28">
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="max-w-4xl">
            <div className="flex items-end justify-center gap-0.5 text-ink sm:gap-1">
              {brandLetters.map((item, index) => (
                <span
                  key={`${item.letter}-${index}`}
                  className={`${item.size} font-bold leading-none tracking-[-0.045em] transition-transform duration-300 hover:-translate-y-0.5`}
                >
                  {item.letter}
                </span>
              ))}
            </div>
            <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed text-slate-500 sm:text-base">
              InnerCircle helps you find the right people to contact, write better messages, and move through your job search with clarity.
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Built for people who want better outcomes from their outreach.
            </p>

            <div className="mt-6">
              <p className="text-sm text-slate-500">Get feature updates</p>
              <form className="mt-4 flex flex-col items-center justify-center gap-2 sm:flex-row" onSubmit={handleSubmit}>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    if (subscribed) {
                      setSubscribed(false);
                    }
                  }}
                  className="w-full max-w-[18rem] rounded-lg border border-slate-200 bg-white/90 py-2.5 shadow-none focus:border-slate-400 focus:shadow-none sm:max-w-[19rem]"
                />
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-ink px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:opacity-90 sm:w-auto"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-2 min-h-5 text-sm text-slate-400">
                {subscribed ? "You're in 🚀" : ""}
              </p>
            </div>
          </div>

          <div className="mt-10 grid w-full max-w-3xl grid-cols-3 gap-6 text-center text-sm text-slate-500 sm:gap-12 lg:mt-12 lg:gap-16">
            <div>
              <p className="mb-2 text-sm font-semibold text-ink">Product</p>
              <div className="space-y-2">
                <Link href="/about" className="block transition-colors duration-300 hover:text-ink">About</Link>
                <Link href="/features" className="block transition-colors duration-300 hover:text-ink">Features</Link>
                <Link href="/pricing" className="block transition-colors duration-300 hover:text-ink">Pricing</Link>
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold text-ink">Account</p>
              <div className="space-y-2">
                <Link href="/login" className="block transition-colors duration-300 hover:text-ink">Login</Link>
                <Link href="/signup" className="block transition-colors duration-300 hover:text-ink">Get Started</Link>
                <Link href="/privacy" className="block transition-colors duration-300 hover:text-ink">Privacy</Link>
                <Link href="/terms" className="block transition-colors duration-300 hover:text-ink">Terms</Link>
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold text-ink">Socials</p>
              <div className="space-y-2">
                <a href="#" className="flex items-center justify-center gap-2 transition-colors duration-300 hover:text-ink">
                  <Linkedin className="h-3.5 w-3.5" />
                  <span>LinkedIn</span>
                </a>
                <a href="#" className="flex items-center justify-center gap-2 transition-colors duration-300 hover:text-ink">
                  <Twitter className="h-3.5 w-3.5" />
                  <span>X</span>
                </a>
                <a href="#" className="flex items-center justify-center gap-2 transition-colors duration-300 hover:text-ink">
                  <Instagram className="h-3.5 w-3.5" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 border-t border-slate-200/60 pt-6 text-center text-sm text-slate-400">
          <p>© 2026 InnerCircle. All rights reserved.</p>
        </div>
      </SectionShell>

    </footer>
  );
}
