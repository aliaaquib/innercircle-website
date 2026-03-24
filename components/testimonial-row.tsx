import { cn } from "@/lib/utils";
import { TestimonialCard } from "@/components/testimonial-card";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

type TestimonialRowProps = {
  testimonials: readonly Testimonial[];
  direction: "left" | "right";
  className?: string;
};

export function TestimonialRow({ testimonials, direction, className }: TestimonialRowProps) {
  const loopedTestimonials = [...testimonials, ...testimonials];

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
      }}
    >
      <div
        className={cn(
          "flex w-max gap-4 py-1 will-change-transform hover:[animation-play-state:paused] sm:gap-6",
          direction === "left" ? "animate-testimonial-left" : "animate-testimonial-right"
        )}
      >
        {loopedTestimonials.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.name}-${testimonial.role}-${index}`}
            testimonial={testimonial}
          />
        ))}
      </div>
    </div>
  );
}
