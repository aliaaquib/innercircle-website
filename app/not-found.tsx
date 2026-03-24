import Link from "next/link";
import { SectionShell } from "@/components/section-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function NotFound() {
  return (
    <SectionShell className="flex min-h-[calc(100vh-20rem)] items-center justify-center py-14">
      <Card className="max-w-xl rounded-[32px] border-slate-200 bg-white/90 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-coral">404</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink">Page not found</h1>
        <p className="mt-4 text-sm leading-7 text-slate-600">
          The page you are looking for does not exist on the InnerCircle website.
        </p>
        <div className="mt-6">
          <Link href="/">
            <Button>Back to home</Button>
          </Link>
        </div>
      </Card>
    </SectionShell>
  );
}
