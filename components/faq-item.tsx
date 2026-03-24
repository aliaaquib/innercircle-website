"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type FAQItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
};

export function FAQItem({
  question,
  answer,
  isOpen,
  onClick
}: FAQItemProps) {
  return (
    <div className="border-b border-slate-100 last:border-b-0">
      <button
        type="button"
        onClick={onClick}
        aria-expanded={isOpen}
        className={cn(
          "flex w-full items-center justify-between gap-4 rounded-xl px-3 py-4 text-left transition-all duration-300 ease-in-out sm:px-4",
          isOpen
            ? "bg-sky/5 text-ink shadow-sm shadow-sky/10 ring-1 ring-sky/15"
            : "hover:bg-slate-50/80"
        )}
      >
        <span className={cn(
          "text-sm font-semibold tracking-[-0.01em] text-ink sm:text-base",
          isOpen ? "text-ink" : "text-slate-800"
        )}>
          {question}
        </span>
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
            <div className="px-3 pb-4 pr-10 pt-1 text-sm leading-relaxed text-slate-500 sm:px-4 sm:pb-5">
              {answer}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
