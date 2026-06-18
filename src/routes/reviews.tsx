import { createFileRoute } from "@tanstack/react-router";
import { Star, Quote } from "lucide-react";
import { Layout, PageHero } from "@/components/Layout";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews — 4.8★ on Google | Smart IT Solution Biratnagar" },
      { name: "description", content: "Read real customer reviews of Smart IT Solution — rated 4.8★ by 36+ verified customers in Biratnagar, Nepal." },
      { property: "og:title", content: "Reviews | Smart IT Solution" },
      { property: "og:description", content: "Real customer reviews of Biratnagar's trusted IT store." },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

const reviews = [
  { name: "Aakash Rai", quote: "Best laptop store in Biratnagar and good service. Got a great deal on my work laptop and they helped with setup too.", rating: 5 },
  { name: "Sneha Khatri", quote: "Most experienced IT sector professionals. They diagnosed and fixed my laptop the same day. Highly recommended.", rating: 5 },
  { name: "Ravi Thapa", quote: "Excellent product quality and customer support. The team is patient and explains everything clearly.", rating: 5 },
  { name: "Pooja Shrestha", quote: "Bought a gaming PC here — fair pricing, genuine parts, and they tuned it perfectly. Very happy.", rating: 5 },
  { name: "Bibek Limbu", quote: "AMC for our small office has been worth every rupee. Quick response whenever something breaks.", rating: 5 },
  { name: "Anjali Karki", quote: "Loved the buying experience. They didn't push the most expensive option — recommended what actually fit my needs.", rating: 5 },
];

const distribution = [
  { stars: 5, pct: 92 },
  { stars: 4, pct: 6 },
  { stars: 3, pct: 1 },
  { stars: 2, pct: 0 },
  { stars: 1, pct: 1 },
];

function ReviewsPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Reviews"
        title="Trusted by our community"
        subtitle="Honest feedback from real customers — the foundation of everything we do at Smart IT Solution."
      />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="rounded-3xl glass p-8 sm:p-10 grid gap-10 md:grid-cols-[auto_1fr] items-center">
          <div className="text-center md:text-left">
            <div className="text-6xl font-semibold gradient-text">4.8</div>
            <div className="mt-2 flex justify-center md:justify-start gap-0.5 text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-5 w-5 fill-current" />))}
            </div>
            <p className="mt-2 text-sm text-muted-foreground">Based on 36+ Google reviews</p>
          </div>
          <div className="space-y-2">
            {distribution.map((d) => (
              <div key={d.stars} className="flex items-center gap-3">
                <span className="text-xs font-medium text-muted-foreground w-8">{d.stars}★</span>
                <div className="flex-1 h-2 rounded-full bg-secondary overflow-hidden">
                  <div className="h-full bg-hero-gradient" style={{ width: `${d.pct}%` }} />
                </div>
                <span className="text-xs text-muted-foreground w-10 text-right">{d.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="rounded-3xl bg-card border border-border p-7 shadow-card hover:shadow-elegant transition-shadow relative">
              <Quote className="absolute top-5 right-5 h-6 w-6 text-accent" />
              <div className="flex gap-0.5 text-amber-500">
                {Array.from({ length: r.rating }).map((_, i) => (<Star key={i} className="h-4 w-4 fill-current" />))}
              </div>
              <blockquote className="mt-4 text-ink leading-relaxed">"{r.quote}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-hero-gradient text-primary-foreground text-sm font-semibold">
                  {r.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink">{r.name}</div>
                  <div className="text-xs text-muted-foreground">Verified customer</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </Layout>
  );
}
