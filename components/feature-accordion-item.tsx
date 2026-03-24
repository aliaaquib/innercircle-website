"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type FeatureAccordionItemProps = {
  title: string;
  description: string;
  isOpen: boolean;
  onClick: () => void;
  icon: LucideIcon;
};

export function FeatureAccordionItem({
  title,
  description,
  isOpen,
  onClick,
  icon: Icon
}: FeatureAccordionItemProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border transition-all duration-300 ease-in-out",
        isOpen
          ? "border-sky/35 bg-sky/5"
          : "border-transparent hover:bg-slate-50/80"
      )}
    >
      <button
        type="button"
        onClick={onClick}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
      >
        <div className="flex min-w-0 items-center gap-3">
          <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-slate-100 text-sky">
            <Icon className="h-5 w-5" />
          </span>
          <span className="text-base font-semibold tracking-[-0.02em] text-ink">{title}</span>
        </div>
        <ChevronDown
          className={cn(
            "h-4 w-4 flex-shrink-0 text-slate-400 transition-transform duration-300 ease-in-out",
            isOpen ? "rotate-180 text-sky" : ""
          )}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pl-[4.75rem] pr-12 text-sm leading-7 text-slate-600 sm:px-6 sm:pb-6 sm:pl-[5.25rem]">
              {description}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
