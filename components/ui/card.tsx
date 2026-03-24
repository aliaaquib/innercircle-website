import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[28px] border border-white/80 bg-white/90 p-6 shadow-md shadow-slate-900/8 backdrop-blur transition-all duration-300 ease-out",
        className
      )}
      {...props}
    />
  );
}
