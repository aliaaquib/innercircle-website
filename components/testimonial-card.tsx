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
    <article className="w-[300px] flex-shrink-0 rounded-xl border border-slate-200 bg-white/92 p-5 shadow-sm transition-transform duration-300 hover:scale-[1.02] hover:shadow-md sm:w-[340px] sm:p-6">
      <div className="flex h-full flex-col justify-between gap-5">
        <p className="text-sm leading-7 text-slate-600">“{testimonial.quote}”</p>
        <div className="min-w-0">
          <p className="truncate font-semibold text-ink">{testimonial.name}</p>
          <p className="truncate text-sm text-slate-500">{testimonial.role}</p>
        </div>
      </div>
    </article>
  );
}
