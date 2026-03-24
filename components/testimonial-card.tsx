type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="w-[230px] flex-shrink-0 rounded-xl border border-slate-200 bg-white/92 p-4 shadow-sm transition-transform duration-300 hover:scale-[1.02] hover:shadow-md sm:w-[300px] sm:p-5">
      <div className="flex h-full flex-col justify-between gap-4 sm:gap-5">
        <p className="text-[13px] leading-6 text-slate-600 sm:text-sm sm:leading-7">“{testimonial.quote}”</p>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-ink">{testimonial.name}</p>
          <p className="truncate text-xs text-slate-500 sm:text-sm">{testimonial.role}</p>
        </div>
      </div>
    </article>
  );
}
