import { cn } from "@/lib/utils";

type AppBrandProps = {
  className?: string;
  textClassName?: string;
  withMark?: boolean;
};

export function AppBrand({
  className,
  textClassName,
  withMark = true
}: AppBrandProps) {
  return (
    <div className={cn("inline-flex items-center gap-2 text-ink", className)}>
      {withMark ? <span className="h-2.5 w-2.5 rounded-full bg-coral" aria-hidden="true" /> : null}
      <span className={cn("text-base font-semibold tracking-[0.02em]", textClassName)}>
        InnerCircle
      </span>
    </div>
  );
}
