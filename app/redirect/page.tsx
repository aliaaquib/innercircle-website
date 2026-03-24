import { RedirectClient } from "@/components/redirect-client";
import { resolveAppUrl } from "@/lib/site";

type RedirectPageProps = {
  searchParams: Promise<{
    mode?: string;
  }>;
};

export default async function RedirectPage({ searchParams }: RedirectPageProps) {
  const params = await searchParams;
  const target = params.mode === "login" ? resolveAppUrl("/dashboard") : resolveAppUrl("/onboarding");

  return <RedirectClient target={target} />;
}
