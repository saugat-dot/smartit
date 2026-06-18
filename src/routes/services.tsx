import { createFileRoute, Link } from "@tanstack/react-router";
import { Laptop, Monitor, HardDrive, Wifi, Download, Cpu, Calendar, ArrowRight, CheckCircle2 } from "lucide-react";
import { Layout, PageHero } from "@/components/Layout";
import serviceRepair from "@/assets/service-repair.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "IT Services — Repairs, Upgrades & Business IT | Smart IT Solution" },
      { name: "description", content: "Professional laptop & desktop repair, data recovery, network setup, software installation, hardware upgrades and AMC in Biratnagar." },
      { property: "og:title", content: "IT Services | Smart IT Solution" },
      { property: "og:description", content: "Expert repair, upgrades, networking, and annual maintenance for individuals & businesses." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Laptop, title: "Laptop Repair", desc: "Screen, battery, keyboard, motherboard & power issues — fixed by certified technicians.", benefits: ["Free diagnostics", "Genuine parts", "Same-day fixes (most)"] },
  { icon: Monitor, title: "Desktop Repair", desc: "Hardware faults, BSODs, overheating, slow performance — full diagnosis & repair.", benefits: ["Performance tuning", "Warranty on parts", "Transparent pricing"] },
  { icon: HardDrive, title: "Data Recovery", desc: "Recover lost data from failed drives, formatted disks, and crashed laptops.", benefits: ["No-recovery, no-charge*", "Secure handling", "Fast turnaround"] },
  { icon: Wifi, title: "Network Setup", desc: "Wi-Fi, mesh routers, office networks, CCTV, and secure configurations.", benefits: ["Site survey", "Optimized coverage", "Business-grade security"] },
  { icon: Download, title: "Software Installation", desc: "Windows, macOS, office suites, antivirus, drivers and productivity apps.", benefits: ["Licensed software", "Driver tuning", "Backup setup"] },
  { icon: Cpu, title: "Hardware Upgrades", desc: "RAM, SSD, GPU & cooling upgrades to extend the life of your machine.", benefits: ["Compatibility checks", "Quality parts", "Performance benchmarks"] },
  { icon: Calendar, title: "Annual Maintenance", desc: "AMC plans for businesses — preventive care, priority support, on-site visits.", benefits: ["Priority response", "Reporting & audits", "Volume discounts"] },
];

const steps = [
  { n: "01", t: "Tell us the issue", d: "Call, WhatsApp, or visit the store with your device." },
  { n: "02", t: "Free diagnosis", d: "Our technicians inspect and share a transparent quote." },
  { n: "03", t: "Approved repair", d: "We fix only after your approval — using genuine parts." },
  { n: "04", t: "Tested & delivered", d: "Quality-checked and handed back with a service warranty." },
];

function ServicesPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Services"
        title="Expert IT services, honest pricing"
        subtitle="From quick fixes to long-term IT partnerships — we deliver dependable service backed by certified technicians and authentic parts."
      />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((s) => (
            <article key={s.title} className="group rounded-3xl bg-card border border-border p-7 sm:p-8 shadow-card hover:shadow-elegant transition-all">
              <div className="flex items-start gap-5">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-hero-gradient text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{s.desc}</p>
                  <ul className="mt-4 grid sm:grid-cols-2 gap-y-2 gap-x-4">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-ink">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> {b}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
                    Book this service <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-subtle">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 grid gap-12 lg:grid-cols-2 items-center">
          <div className="rounded-3xl overflow-hidden shadow-elegant">
            <img src={serviceRepair} alt="Technician repairing a laptop motherboard" width={800} height={600} loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Our Process</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-ink tracking-tight">Simple, transparent, no surprises</h2>
            <div className="mt-8 space-y-5">
              {steps.map((s) => (
                <div key={s.n} className="flex gap-5">
                  <div className="text-2xl font-semibold gradient-text shrink-0 w-14">{s.n}</div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-ink">{s.t}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-hero-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant hover:scale-[1.03] transition-transform">
              Get a free quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
