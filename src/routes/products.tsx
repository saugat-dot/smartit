import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, MessageCircle } from "lucide-react";
import { Layout, PageHero } from "@/components/Layout";
import productLaptop from "@/assets/product-laptop.jpg";
import productDesktop from "@/assets/product-desktop.jpg";
import productMonitor from "@/assets/product-monitor.jpg";
import productAccessories from "@/assets/product-accessories.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Laptops, Desktops & Accessories | Smart IT Solution" },
      { name: "description", content: "Browse laptops, desktop PCs, gaming systems, monitors, printers, networking gear, and accessories at Smart IT Solution, Biratnagar." },
      { property: "og:title", content: "Products | Smart IT Solution" },
      { property: "og:description", content: "Curated tech: laptops, desktops, gaming, monitors, accessories." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

const categories = [
  "All", "Laptops", "Desktop PCs", "Gaming Systems", "Monitors", "Printers", "Networking", "Accessories", "Laptop Parts",
] as const;

type Cat = typeof categories[number];

interface Product { name: string; category: Exclude<Cat, "All">; price: string; img: string; tag?: string; }

const products: Product[] = [
  { name: "UltraBook 14 Pro", category: "Laptops", price: "From NPR 95,000", img: productLaptop, tag: "Bestseller" },
  { name: "Business Slim 15", category: "Laptops", price: "From NPR 78,000", img: productLaptop },
  { name: "Student Essential 14", category: "Laptops", price: "From NPR 52,000", img: productLaptop },
  { name: "Workstation Desktop", category: "Desktop PCs", price: "From NPR 110,000", img: productDesktop },
  { name: "Home Office PC", category: "Desktop PCs", price: "From NPR 65,000", img: productDesktop },
  { name: "RGB Gaming Beast", category: "Gaming Systems", price: "From NPR 185,000", img: productDesktop, tag: "New" },
  { name: "Esports Starter Rig", category: "Gaming Systems", price: "From NPR 120,000", img: productDesktop },
  { name: "34\" UltraWide Curved", category: "Monitors", price: "From NPR 68,000", img: productMonitor },
  { name: "27\" QHD IPS Monitor", category: "Monitors", price: "From NPR 42,000", img: productMonitor },
  { name: "All-in-One Color Printer", category: "Printers", price: "From NPR 22,000", img: productAccessories },
  { name: "Mesh Wi-Fi Router (3-pack)", category: "Networking", price: "From NPR 28,000", img: productAccessories },
  { name: "Wireless Keyboard & Mouse", category: "Accessories", price: "From NPR 4,500", img: productAccessories },
  { name: "Premium Headphones", category: "Accessories", price: "From NPR 7,900", img: productAccessories },
  { name: "16GB DDR4 RAM Module", category: "Laptop Parts", price: "From NPR 6,500", img: productAccessories },
  { name: "1TB NVMe SSD", category: "Laptop Parts", price: "From NPR 9,800", img: productAccessories },
];

function ProductsPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<Cat>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchCat = cat === "All" || p.category === cat;
      const matchQ = !q || p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [query, cat]);

  return (
    <Layout>
      <PageHero
        eyebrow="Products"
        title="Tech, curated with care"
        subtitle="From everyday essentials to powerful workstations, every product is hand-picked, tested, and backed by real after-sales support."
      />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-12">
        <div className="rounded-3xl glass p-5 sm:p-6">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] items-center">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value.slice(0, 80))}
                placeholder="Search laptops, accessories, parts…"
                className="w-full rounded-full border border-border bg-white pl-11 pr-4 py-3 text-sm text-ink placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition ${
                  cat === c
                    ? "bg-hero-gradient text-primary-foreground shadow-card"
                    : "bg-white border border-border text-muted-foreground hover:text-ink"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p) => (
            <article key={p.name} className="group rounded-3xl bg-card border border-border overflow-hidden shadow-card hover:shadow-elegant transition-all hover:-translate-y-1">
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                <img src={p.img} alt={p.name} width={800} height={600} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                {p.tag && (
                  <span className="absolute top-3 left-3 rounded-full bg-hero-gradient px-2.5 py-1 text-[10px] font-semibold text-primary-foreground uppercase tracking-wider">
                    {p.tag}
                  </span>
                )}
              </div>
              <div className="p-5">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">{p.category}</p>
                <h3 className="mt-1.5 font-semibold text-ink">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.price}</p>
                <a
                  href={`https://wa.me/9779852059990?text=${encodeURIComponent(`Hi, I'm interested in ${p.name}.`)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-hero-gradient px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:scale-[1.02] transition-transform"
                >
                  <MessageCircle className="h-4 w-4" /> Inquire
                </a>
              </div>
            </article>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full text-center py-16 text-muted-foreground">
              No products match your search. Try a different keyword or category.
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
