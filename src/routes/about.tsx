import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Award, Users, Heart, TrendingUp } from "lucide-react";
import { Layout, PageHero } from "@/components/Layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Smart IT Solution — Biratnagar's IT Experts" },
      { name: "description", content: "Learn about Smart IT Solution — our story, mission, and commitment to delivering trusted IT solutions in Biratnagar, Nepal." },
      { property: "og:title", content: "About Smart IT Solution" },
      { property: "og:description", content: "Our story, mission and team. Trusted IT partner in Biratnagar." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Heart, title: "Customer First", desc: "Every recommendation is made with your needs and budget in mind." },
  { icon: Award, title: "Authentic Quality", desc: "We sell only genuine, warranty-backed products from trusted brands." },
  { icon: TrendingUp, title: "Continuous Growth", desc: "We invest in training and tools to stay ahead of fast-moving tech." },
];

const stats = [
  { v: "4.8★", l: "Google rating" },
  { v: "36+", l: "Verified reviews" },
  { v: "1,000+", l: "Happy customers" },
  { v: "10+", l: "Years experience" },
];

function AboutPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="About Us"
        title="Building trust through technology"
        subtitle="Smart IT Solution started with a simple idea — make great technology accessible, reliable, and well-supported for every customer in Biratnagar."
      />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Our Story</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-ink tracking-tight">From a local store to Biratnagar's trusted IT partner</h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                What began as a small shop selling laptops and accessories has grown into one of
                Biratnagar's most trusted destinations for computers, IT services, and business
                technology solutions.
              </p>
              <p>
                Our team brings years of experience in hardware, networking, and customer service —
                combined with a deep understanding of what students, professionals, and local
                businesses really need.
              </p>
              <p>
                Today, we serve thousands of customers across the region with the same promise we
                started with: honest advice, authentic products, and reliable after-sales care.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.l} className="rounded-3xl glass p-7 text-center">
                <div className="text-3xl sm:text-4xl font-semibold gradient-text">{s.v}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-subtle">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-card border border-border p-8 shadow-card">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-hero-gradient text-primary-foreground">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-2xl font-semibold text-ink">Our Mission</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              To empower individuals and businesses in Biratnagar with reliable technology,
              expert guidance, and dependable service — making great tech accessible to everyone.
            </p>
          </div>
          <div className="rounded-3xl bg-card border border-border p-8 shadow-card">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-hero-gradient text-primary-foreground">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-2xl font-semibold text-ink">Our Vision</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              To be Eastern Nepal's most trusted technology partner — known for quality products,
              expert service, and a customer experience that sets the standard.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">What we stand for</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-ink tracking-tight">Our values</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-3xl bg-card border border-border p-7 shadow-card hover:shadow-elegant transition-shadow">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-primary">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-subtle">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 text-center">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-hero-gradient text-primary-foreground mx-auto">
            <Users className="h-7 w-7" />
          </div>
          <h2 className="mt-5 text-3xl sm:text-4xl font-semibold text-ink tracking-tight">A team that genuinely cares</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Our certified technicians and friendly sales advisors are here to listen, recommend,
            and support — long after your purchase. That commitment is what makes us different.
          </p>
        </div>
      </section>
    </Layout>
  );
}
