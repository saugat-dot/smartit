import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { Layout, PageHero } from "@/components/Layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Smart IT Solution — Biratnagar | +977 985-2059990" },
      { name: "description", content: "Visit Smart IT Solution at City Center, Biratnagar 56613, Nepal. Call +977 985-2059990 or send an inquiry. Open Sun – Fri, 10 AM – 8 PM." },
      { property: "og:title", content: "Contact | Smart IT Solution" },
      { property: "og:description", content: "Get in touch — store, phone, WhatsApp, and inquiry form." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(120),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  message: z.string().trim().min(10, "Please add a bit more detail").max(1000),
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((i) => { fieldErrors[i.path[0] as string] = i.message; });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    // Open WhatsApp pre-filled as the channel; a real backend can be wired later.
    const text = `New inquiry from ${result.data.name}\nEmail: ${result.data.email}\nPhone: ${result.data.phone}\n\n${result.data.message}`;
    window.open(`https://wa.me/9779852059990?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    setSent(true);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Layout>
      <PageHero
        eyebrow="Contact"
        title="Let's talk technology"
        subtitle="Reach out for sales, service, or a custom quote — we usually reply within a few hours."
      />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* INFO */}
          <div className="space-y-4">
            {[
              { icon: MapPin, title: "Visit Us", body: "City Center, Biratnagar 56613, Nepal" },
              { icon: Phone, title: "Call / WhatsApp", body: "+977 985-2059990", href: "tel:+9779852059990" },
              { icon: Mail, title: "Email", body: "hello@smartitsolution.com", href: "mailto:hello@smartitsolution.com" },
              { icon: Clock, title: "Business Hours", body: "Sun – Fri · 10:00 AM – 8:00 PM" },
            ].map((c) => (
              <div key={c.title} className="rounded-3xl glass p-6 flex gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-hero-gradient text-primary-foreground">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">{c.title}</p>
                  {c.href ? (
                    <a href={c.href} className="mt-1 block text-ink font-medium hover:text-primary break-words">{c.body}</a>
                  ) : (
                    <p className="mt-1 text-ink font-medium">{c.body}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* FORM */}
          <form onSubmit={submit} className="rounded-3xl bg-card border border-border p-7 sm:p-9 shadow-card">
            <h2 className="text-2xl font-semibold text-ink tracking-tight">Send an inquiry</h2>
            <p className="mt-1.5 text-sm text-muted-foreground">Fill the form — we'll reach out shortly.</p>

            {sent && (
              <div className="mt-5 rounded-2xl bg-accent/60 border border-primary/20 p-4 flex gap-3 text-sm text-ink">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                Thanks! Your message is ready in WhatsApp — just hit send to deliver it.
              </div>
            )}

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Full Name" error={errors.name}>
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="form-input" placeholder="Your name" />
              </Field>
              <Field label="Phone" error={errors.phone}>
                <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="form-input" placeholder="+977 9xxxxxxxxx" />
              </Field>
              <div className="sm:col-span-2">
                <Field label="Email" error={errors.email}>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="form-input" placeholder="you@example.com" />
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Field label="Message" error={errors.message}>
                  <textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="form-input resize-none" placeholder="Tell us what you need…" />
                </Field>
              </div>
            </div>

            <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-hero-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant hover:scale-[1.03] transition-transform">
              <Send className="h-4 w-4" /> Send Inquiry
            </button>

            <style>{`.form-input{width:100%;border-radius:12px;border:1px solid var(--border);background:white;padding:.7rem .9rem;font-size:.875rem;color:var(--ink);outline:none;transition:.15s}.form-input:focus{border-color:var(--primary);box-shadow:0 0 0 3px var(--ring)}.form-input::placeholder{color:var(--muted-foreground)}`}</style>
          </form>
        </div>

        {/* MAP */}
        <div className="mt-12 rounded-3xl overflow-hidden shadow-card border border-border">
          <iframe
            title="Smart IT Solution location in Biratnagar"
            src="https://www.google.com/maps?q=City+Center+Biratnagar+Nepal&output=embed"
            width="100%"
            height="420"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        {/* NEWSLETTER */}
        <div className="mt-12 rounded-3xl bg-hero-gradient p-8 sm:p-10 text-primary-foreground text-center shadow-elegant">
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Stay in the loop</h3>
          <p className="mt-2 text-primary-foreground/85">Deals on laptops, parts and IT services — straight to your inbox.</p>
          <form onSubmit={(e) => { e.preventDefault(); alert("Subscribed! Thank you."); }} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input required type="email" placeholder="Your email" className="flex-1 rounded-full bg-white/15 backdrop-blur border border-white/30 px-4 py-3 text-sm text-white placeholder:text-white/70 outline-none focus:bg-white/25" />
            <button className="rounded-full bg-white text-primary px-6 py-3 text-sm font-semibold hover:bg-white/90">Subscribe</button>
          </form>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold text-ink mb-1.5">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
