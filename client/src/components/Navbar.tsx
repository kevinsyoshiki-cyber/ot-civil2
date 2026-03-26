/**
 * Navbar V2 — OT Civil Engineering
 * Design: Modern Editorial — white bg, Playfair logo, minimal links, terracotta CTA
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const TERRA = "oklch(0.55 0.13 40)";
const CHARCOAL = "oklch(0.18 0.01 50)";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <header
      style={{
        backgroundColor: "white",
        borderBottom: scrolled ? "1px solid oklch(0.9 0.005 60)" : "1px solid transparent",
        transition: "border-color 0.3s ease",
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div
              className="w-8 h-8 flex items-center justify-center text-white text-sm font-bold rounded-sm"
              style={{ backgroundColor: TERRA, fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.02em" }}
            >
              OT
            </div>
            <span
              className="text-base font-semibold hidden sm:block"
              style={{ fontFamily: "'Playfair Display', serif", color: CHARCOAL, letterSpacing: "-0.01em" }}
            >
              Civil Engineering
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: location === link.href ? TERRA : "oklch(0.4 0.01 50)",
                  textDecoration: location === link.href ? "underline" : "none",
                  textUnderlineOffset: "4px",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact#form"
              className="text-sm font-medium px-5 py-2 rounded-sm transition-opacity hover:opacity-85"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                backgroundColor: TERRA,
                color: "white",
              }}
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen((v) => !v)}
            style={{ color: CHARCOAL }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t" style={{ borderColor: "oklch(0.9 0.005 60)" }}>
          <div className="px-6 py-5 flex flex-col gap-4">
            <Link href="/" className="text-sm font-medium" style={{ fontFamily: "'DM Sans', sans-serif", color: CHARCOAL }}>Home</Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium"
                style={{ fontFamily: "'DM Sans', sans-serif", color: location === link.href ? TERRA : CHARCOAL }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact#form"
              className="text-sm font-medium px-5 py-2.5 rounded-sm text-center"
              style={{ backgroundColor: TERRA, color: "white", fontFamily: "'DM Sans', sans-serif" }}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
