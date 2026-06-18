import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, ArrowRight, Cpu, Laptop, Wrench, ShieldCheck, Headphones, Zap, MapPin, Phone, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/Layout";
import heroImg from "@/assets/hero-tech.jpg";
import productLaptop from "@/assets/product-laptop.jpg";
import productDesktop from "@/assets/product-desktop.jpg";
import productMonitor from "@/assets/product-monitor.jpg";
import productAccessories from "@/assets/product-accessories.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Smart IT Solution — Trusted Laptops, Computers & IT Services in Biratnagar" },
      { name: "description", content: "Biratnagar's trusted destination for premium laptops, desktops, repairs and complete IT solutions. 4.8★ rated. Call +977 985-2059990." },
      { property: "og:title", content: "Smart IT Solution — Biratnagar's Trusted Technology Partner" },
      { property: "og:description", content: "Premium laptops, desktops, accessories and professional IT services. Rated 4.8★ by 36+ customers." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Smart IT Solution",
        image: "/og-image.jpg",
        telephone: "+977 985-2059990",
        address: { "@type": "PostalAddress", streetAddress: "City Center", addressLocality: "Biratnagar", postalCode: "56613", addressCountry: "NP" },
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "36" },
      }),
    }],
  }),
  component: HomePage,
});

const products = [
  { name: "Laptops", desc: "Premium ultrabooks, business & student picks.", img: productLaptop },
  { name: "Desktop & Gaming PCs", desc: "Powerful builds for work and play.", img: productDesktop },
  { name: "Monitors", desc: "Crisp displays for productivity & gaming.", img: productMonitor },
  { name: "Accessories", desc: "Keyboards, mice, headphones & more.", img: productAccessories },
];

const features = [
  { icon: ShieldCheck, title: "Authentic Products", desc: "Genuine brand-warranty hardware, every time." },
  { icon: Wrench, title: "Expert Repairs", desc: "Certified technicians, transparent diagnostics." },
  { icon: Zap, title: "Fast Turnaround", desc: "Most repairs completed within 24–48 hours." },
  { icon: Headphones, title: "After-Sales Support", desc: "Reliable help long after the purchase." },
];

const services = [
  { icon: Laptop, title: "Laptop & Desktop Repair", desc: "Hardware diagnostics, board-level fixes, screen & battery replacement." },
  { icon: Cpu, title: "Hardware Upgrades", desc: "RAM, SSD, GPU and full performance tune-ups." },
  { icon: ShieldCheck, title: "Business IT Solutions", desc: "Procurement, networking, security & annual maintenance." },
];

const testimonials = [
  { name: "Aakash R.", quote: "Best laptop store in Biratnagar and good service. Highly recommend!", rating: 5 },
  { name: "Sneha K.", quote: "Most experienced IT sector professionals. They fixed my laptop in hours.", rating: 5 },
  { name: "Ravi T.", quote: "Excellent product quality and customer support. Fair pricing too.", rating: 5 },
];

function HomePage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-subtle">
        <div className="absolute inset-0 bg-mesh opacity-70" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5">
              <span className="flex items-center gap-0.5 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </span>
              <span className="text-xs font-semibold text-ink">4.8</span>
              <span className="text-xs text-muted-foreground">· 36+ Google reviews</span>
            </div>

            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-semibold tracking-tight text-ink leading-[1.05]">
              Your Trusted{" "}
              <span className="gradient-text">Technology Partner</span>{" "}
              in Biratnagar
            </h1>

            <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              From premium laptops to professional IT services, Smart IT Solution provides
              technology that helps individuals, students, and businesses succeed.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-hero-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03]"
              >
                Contact Us <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-ink hover:bg-white"
              >
                Get a Quote
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> City Center, Biratnagar</div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +977 985-2059990</div>
            </div>
          </div>

          <div className="relative animate-fade-up [animation-delay:150ms]">
            <div className="absolute -inset-6 bg-hero-gradient rounded-[3rem] blur-3xl opacity-25" aria-hidden />
            <div className="relative rounded-3xl overflow-hidden shadow-elegant">
              <img
                src={heroImg}
                alt="Premium laptop on a clean modern workspace"
                width={1920}
                height={1280}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 glass rounded-2xl p-4 animate-float hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-hero-gradient">
                  <ShieldCheck className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Authorized</p>
                  <p className="text-sm font-semibold text-ink">Brand Warranty</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Shop</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-ink tracking-tight">Featured Categories</h2>
          </div>
          <Link to="/products" className="text-sm font-semibold text-primary inline-flex items-center gap-1 hover:gap-2 transition-all">
            View all products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <Link
              key={p.name}
              to="/products"
              className="group rounded-3xl bg-card shadow-card overflow-hidden border border-border hover:shadow-elegant transition-all hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img src={p.img} alt={p.name} width={800} height={600} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-ink">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-subtle">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Why Smart IT</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-ink tracking-tight">
              Trusted by Biratnagar for a reason.
            </h2>
            <p className="mt-4 text-muted-foreground">
              We pair authentic products with honest advice and expert service — so you can buy
              with confidence and own with peace of mind.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="rounded-3xl glass p-6 hover:shadow-elegant transition-shadow">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-hero-gradient text-primary-foreground">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold text-ink">{f.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Services</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-ink tracking-tight">End-to-end IT services</h2>
          </div>
          <Link to="/services" className="text-sm font-semibold text-primary inline-flex items-center gap-1 hover:gap-2 transition-all">
            See all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-3xl bg-card border border-border p-7 shadow-card hover:shadow-elegant transition-all hover:-translate-y-1">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-primary">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <Link to="/services" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-subtle">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Loved Locally</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-ink tracking-tight">
              Rated 4.8★ by our customers
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-3xl glass p-7">
                <div className="flex gap-0.5 text-amber-500">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-ink leading-relaxed">"{t.quote}"</blockquote>
                <figcaption className="mt-5 text-sm font-semibold text-muted-foreground">— {t.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <div className="relative overflow-hidden rounded-[2rem] bg-hero-gradient p-10 sm:p-16 text-center text-primary-foreground shadow-elegant">
          <div className="absolute inset-0 bg-mesh opacity-30" aria-hidden />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              Ready to upgrade your tech?
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-primary-foreground/90">
              Visit our store in City Center, Biratnagar or get a personalized quote today.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-white/90">
                Get a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:+9779852059990" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
                <Phone className="h-4 w-4" /> Call +977 985-2059990
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 justify-center text-sm text-white/80">
              {["Genuine Products", "Expert Service", "After-Sales Support"].map((t) => (
                <span key={t} className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> {t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
