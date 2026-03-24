import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/app/globals.css";
import { BackToTop } from "@/components/back-to-top";
import { Footer } from "@/components/footer";
import { InnerCircleChat } from "@/components/innercircle-chat";
import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: "InnerCircle",
    template: "%s | InnerCircle"
  },
  description: siteConfig.description
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="relative min-h-screen overflow-x-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.75),_transparent_45%)]" />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <InnerCircleChat />
          <BackToTop />
        </div>
      </body>
    </html>
  );
}
