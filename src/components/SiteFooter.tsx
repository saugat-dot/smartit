import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-primary-foreground/90">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-hero-gradient">
                <span className="text-primary-foreground font-bold text-sm">S</span>
              </div>
              <span className="font-display font-semibold text-white text-lg">Smart IT Solution</span>
            </div>
            <p className="mt-4 max-w-md text-sm text-white/60 leading-relaxed">
              Biratnagar's trusted destination for premium laptops, desktops, and complete IT
              solutions. Serving individuals, students, and businesses since day one.
            </p>
            <div className="mt-5 flex gap-3">
              <a href="#" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full border border-white/10 hover:bg-white/10 transition"><Facebook className="h-4 w-4" /></a>
              <a href="#" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full border border-white/10 hover:bg-white/10 transition"><Instagram className="h-4 w-4" /></a>
              <a href="#" aria-label="Twitter" className="grid h-9 w-9 place-items-center rounded-full border border-white/10 hover:bg-white/10 transition"><Twitter className="h-4 w-4" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Explore</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="text-white/60 hover:text-white">About Us</Link></li>
              <li><Link to="/products" className="text-white/60 hover:text-white">Products</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-white">Services</Link></li>
              <li><Link to="/reviews" className="text-white/60 hover:text-white">Reviews</Link></li>
              <li><Link to="/contact" className="text-white/60 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Reach Us</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 mt-0.5 text-primary-glow" /> City Center, Biratnagar 56613, Nepal</li>
              <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 mt-0.5 text-primary-glow" /> <a href="tel:+9779852059990" className="hover:text-white">+977 985-2059990</a></li>
              <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 mt-0.5 text-primary-glow" /> hello@smartitsolution.com</li>
              <li className="flex gap-2"><Clock className="h-4 w-4 shrink-0 mt-0.5 text-primary-glow" /> Sun – Fri · 10:00 AM – 8:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Smart IT Solution. All rights reserved.</p>
          <p>Built with care in Biratnagar, Nepal.</p>
        </div>
      </div>
    </footer>
  );
}
