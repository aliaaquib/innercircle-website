"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  amount?: number;
};

type StaggerGroupProps = {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
  amount?: number;
};

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  y?: number;
};

export function FadeIn({
  children,
  className,
  delay = 0,
  y = 24,
  amount = 0.2
}: FadeInProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGroup({
  children,
  className,
  delayChildren = 0.08,
  staggerChildren = 0.1,
  amount = 0.15
}: StaggerGroupProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: reduceMotion
            ? { delayChildren: 0 }
            : {
                delayChildren,
                staggerChildren
              }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, y = 18 }: StaggerItemProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      variants={{
        hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y },
        visible: reduceMotion
          ? { opacity: 1, transition: { duration: 0.25 } }
          : {
              opacity: 1,
              y: 0,
              transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
            }
      }}
    >
      {children}
    </motion.div>
  );
}
