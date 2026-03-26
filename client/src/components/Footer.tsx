/**
 * Footer V2 — OT Civil Engineering
 * Design: Modern Editorial — warm off-white bg, minimal 3-col, terracotta accents
 */
import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

const TERRA = "oklch(0.55 0.13 40)";
const CHARCOAL = "oklch(0.18 0.01 50)";
const MUTED = "oklch(0.5 0.01 50)";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "oklch(0.97 0.008 60)", borderTop: "1px solid oklch(0.9 0.005 60)" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-8 h-8 flex items-center justify-center text-white text-sm font-bold rounded-sm"
                style={{ backgroundColor: TERRA, fontFamily: "'DM Sans', sans-serif" }}
              >
                OT
              </div>
              <span
                className="text-base font-semibold"
                style={{ fontFamily: "'Playfair Display', serif", color: CHARCOAL }}
              >
                Civil Engineering
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: MUTED, fontFamily: "'DM Sans', sans-serif" }}>
              Bay Area civil engineering for ADUs and residential projects. Permit-ready plans with fast turnaround.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: TERRA, fontFamily: "'DM Sans', sans-serif" }}>
              Navigation
            </p>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm transition-colors hover:text-stone-800" style={{ color: MUTED, fontFamily: "'DM Sans', sans-serif" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: TERRA, fontFamily: "'DM Sans', sans-serif" }}>
              Contact
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: TERRA }} />
                <span className="text-sm" style={{ color: MUTED, fontFamily: "'DM Sans', sans-serif" }}>
                  809 Cuesta Drive Suite B PMB 1037, Mountain View, CA 94040
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="shrink-0" style={{ color: TERRA }} />
                <a href="tel:+14084756303" className="text-sm hover:underline" style={{ color: MUTED, fontFamily: "'DM Sans', sans-serif" }}>
                  (408) 475-6303
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="shrink-0" style={{ color: TERRA }} />
                <a href="mailto:info@otcivileng.com" className="text-sm hover:underline" style={{ color: MUTED, fontFamily: "'DM Sans', sans-serif" }}>
                  info@otcivileng.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t text-center text-xs" style={{ borderColor: "oklch(0.88 0.005 60)", color: "oklch(0.65 0.01 50)", fontFamily: "'DM Sans', sans-serif" }}>
          © {new Date().getFullYear()} OT Civil Engineering. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
