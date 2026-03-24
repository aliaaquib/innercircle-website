"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type AccordionItemProps = {
  number: number;
  title: string;
  description: string;
  isOpen: boolean;
  onClick: () => void;
};

export function AccordionItem({
  number,
  title,
  description,
  isOpen,
  onClick
}: AccordionItemProps) {
  return (
    <div
      className={cn(
        "rounded-[22px] border bg-white transition-all duration-300 ease-in-out",
        isOpen
          ? "border-sky/40 bg-sky/5 shadow-md shadow-sky/10"
          : "border-slate-200 hover:bg-slate-50/90 hover:shadow-sm"
      )}
    >
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left"
        aria-expanded={isOpen}
      >
        <div className="flex min-w-0 items-center gap-3">
          <span className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky/10 text-sm font-semibold text-sky">
            {number}
          </span>
          <span className="text-sm font-semibold tracking-[-0.01em] text-ink sm:text-base">{title}</span>
        </div>
        <ChevronDown
          className={cn(
            "h-4 w-4 flex-shrink-0 text-slate-400 transition-transform duration-300 ease-in-out",
            isOpen ? "rotate-180 text-sky" : "rotate-0"
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
            <div className="px-4 pb-4 pl-[3.75rem] pr-10 text-sm leading-7 text-slate-600">
              {description}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
