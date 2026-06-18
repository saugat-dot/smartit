import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { FloatingActions } from "./FloatingActions";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 pt-16">{children}</main>
      <SiteFooter />
      <FloatingActions />
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden bg-subtle">
      <div className="absolute inset-0 bg-mesh opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28 text-center animate-fade-up">
        {eyebrow && (
          <span className="inline-flex items-center rounded-full glass px-4 py-1.5 text-xs font-medium text-primary tracking-wide uppercase">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-ink">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
