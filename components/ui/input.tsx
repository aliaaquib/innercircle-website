import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "w-full rounded-2xl border border-slate-200/90 bg-white px-4 py-3 text-sm text-ink shadow-sm transition placeholder:text-slate-400 focus:border-sky focus:bg-white focus:shadow-md focus:shadow-sky/10",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
