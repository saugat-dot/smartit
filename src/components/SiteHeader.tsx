import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-hero-gradient shadow-glow transition-transform group-hover:scale-105">
              <span className="text-primary-foreground font-bold text-sm">S</span>
            </div>
            <span className="font-display font-semibold tracking-tight text-ink">
              Smart IT Solution
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-ink hover:bg-secondary transition-colors"
                activeProps={{ className: "px-3.5 py-2 rounded-lg text-sm font-medium text-primary bg-accent" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+9779852059990"
              className="inline-flex items-center gap-2 rounded-full bg-hero-gradient px-4 py-2 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03]"
            >
              <Phone className="h-3.5 w-3.5" />
              Call Now
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-ink"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-5 pt-2">
            <div className="glass rounded-2xl p-3 flex flex-col gap-1">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="px-4 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-ink"
                  activeProps={{ className: "px-4 py-2.5 rounded-lg text-sm font-medium text-primary bg-accent" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              ))}
              <a
                href="tel:+9779852059990"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-hero-gradient px-4 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                <Phone className="h-3.5 w-3.5" /> +977 985-2059990
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
