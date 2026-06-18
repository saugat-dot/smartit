import { Phone, MessageCircle } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/9779852059990"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="grid h-13 w-13 place-items-center rounded-full bg-[#25D366] text-white shadow-elegant transition-transform hover:scale-110"
        style={{ height: 52, width: 52 }}
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href="tel:+9779852059990"
        aria-label="Call now"
        className="grid place-items-center rounded-full bg-hero-gradient text-primary-foreground shadow-elegant transition-transform hover:scale-110"
        style={{ height: 52, width: 52 }}
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}
