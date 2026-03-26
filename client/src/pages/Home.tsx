/**
 * Home Page V2 — OT Civil Engineering
 * Design: Modern Editorial — text-only hero, split-screen alternating sections,
 * white bg, terracotta accents, Playfair Display headings, DM Sans body
 */
import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const TERRA = "oklch(0.55 0.13 40)";
const CHARCOAL = "oklch(0.18 0.01 50)";
const BODY = "oklch(0.38 0.01 50)";
const MUTED = "oklch(0.55 0.01 50)";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663470081773/jDbSv5mR6LAKncvi4hBttC/v2-hero-cropped_aad2c0db.jpg";
const PLANS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663470081773/jDbSv5mR6LAKncvi4hBttC/v2-plans-WwXoJA3XqcFzMu88zPk9HS.webp";
const ADU_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663470081773/jDbSv5mR6LAKncvi4hBttC/v2-strengths-home.jpg";

const services = [
  { num: "01", title: "ADU Civil Engineering", desc: "Civil plans for ADU permits — grading, drainage, and utility connections.", anchor: "adu" },
  { num: "02", title: "Grading & Drainage", desc: "Site grading plans, drainage flow, and stormwater management.", anchor: "grading" },
  { num: "03", title: "Utility Plans", desc: "Water, sewer, and storm drain connections coordinated with local agencies.", anchor: "utility" },
  { num: "04", title: "SB9 Lot Splits", desc: "Civil support for small subdivision and lot split projects.", anchor: "sb9" },
];

const strengths = [
  "Licensed Professional Engineer",
  "10+ years of experience (municipal and private)",
  "Bay Area permitting experience",
  "Fast turnaround and clear communication",
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/* ── HERO — full-bleed image with text overlay ── */}
      <section className="relative pt-16" style={{ minHeight: "92vh" }}>
        {/* Full-bleed image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={HERO_IMG}
            alt="Bay Area residential development under construction at golden hour"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 40%" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, oklch(0.08 0.01 50 / 0.72) 0%, oklch(0.08 0.01 50 / 0.35) 55%, oklch(0.08 0.01 50 / 0.1) 100%)" }}
          />
        </div>

        {/* Text content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 flex flex-col justify-center" style={{ minHeight: "92vh" }}>
          <div className="max-w-xl">
            <p className="eyebrow mb-6" style={{ color: "oklch(0.78 0.1 40)" }}>Bay Area Civil Engineering</p>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-white leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "-0.02em" }}
            >
              Civil Engineering for the Bay Area
            </h1>
            <p className="text-lg text-white/75 mb-10 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
              Permit-ready grading, drainage, and utility plans for ADUs and residential projects.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact#form"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium rounded-sm transition-opacity hover:opacity-85"
                style={{ backgroundColor: TERRA, color: "white", fontFamily: "'DM Sans', sans-serif" }}
              >
                Get a Quote <ArrowRight size={15} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium rounded-sm border border-white/50 text-white transition-colors hover:border-white hover:bg-white/10"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO SPLIT — image left, text right ── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative">
              <img
                src={PLANS_IMG}
                alt="Civil engineering site plans on a drafting table"
                className="w-full h-80 lg:h-[420px] object-cover rounded-sm"
              />
              {/* Floating badge */}
              <div
                className="absolute -bottom-5 -right-4 lg:-right-6 px-6 py-5 rounded-sm shadow-lg"
                style={{ backgroundColor: TERRA }}
              >
                <p className="text-3xl font-bold text-white leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>10+</p>
                <p className="text-xs text-white/80 mt-1 tracking-widest uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>Years Experience</p>
              </div>
            </div>

            {/* Text */}
            <div className="lg:pl-4">
              <p className="eyebrow mb-4">About Us</p>
              <h2
                className="text-3xl lg:text-4xl font-semibold mb-5 leading-snug"
                style={{ fontFamily: "'Playfair Display', serif", color: CHARCOAL, letterSpacing: "-0.02em" }}
              >
                Practical civil engineering for residential projects
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: BODY, fontFamily: "'DM Sans', sans-serif" }}>
                OT Civil Engineering is a Bay Area-based practice led by a licensed Professional Engineer with over 10 years of experience in both municipal and private sectors.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: BODY, fontFamily: "'DM Sans', sans-serif" }}>
                We focus on ADUs, grading, drainage, and lot splits — delivering clear, permit-ready plans with fast turnaround and responsive communication.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
                style={{ color: TERRA, fontFamily: "'DM Sans', sans-serif", textDecoration: "underline", textUnderlineOffset: "4px" }}
              >
                Learn more about us <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES — numbered grid ── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "oklch(0.97 0.008 60)" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-4">
            <div>
              <p className="eyebrow mb-4">What We Do</p>
              <h2
                className="text-3xl lg:text-5xl font-semibold leading-tight"
                style={{ fontFamily: "'Playfair Display', serif", color: CHARCOAL, letterSpacing: "-0.02em" }}
              >
                Our Services
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium self-start lg:self-auto"
              style={{ color: TERRA, fontFamily: "'DM Sans', sans-serif", textDecoration: "underline", textUnderlineOffset: "4px" }}
            >
              View all services <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((svc) => (
              <Link
                key={svc.num}
                href={`/services#${svc.anchor}`}
                className="service-card block bg-white p-8 rounded-sm border"
                style={{ borderColor: "oklch(0.9 0.005 60)" }}
              >
                <p
                  className="text-4xl font-bold mb-5 leading-none"
                  style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.88 0.01 40)" }}
                >
                  {svc.num}
                </p>
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ fontFamily: "'Playfair Display', serif", color: CHARCOAL }}
                >
                  {svc.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: MUTED, fontFamily: "'DM Sans', sans-serif" }}>
                  {svc.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US — image right, text left ── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <div>
              <p className="eyebrow mb-4">Why Choose Us</p>
              <h2
                className="text-3xl lg:text-4xl font-semibold mb-8 leading-snug"
                style={{ fontFamily: "'Playfair Display', serif", color: CHARCOAL, letterSpacing: "-0.02em" }}
              >
                Experienced, responsive, and permit-ready
              </h2>
              <ul className="space-y-4 mb-10">
                {strengths.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: TERRA }} />
                    <span className="text-base" style={{ color: BODY, fontFamily: "'DM Sans', sans-serif" }}>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact#form"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium rounded-sm transition-opacity hover:opacity-85"
                style={{ backgroundColor: TERRA, color: "white", fontFamily: "'DM Sans', sans-serif" }}
              >
                Start Your Project <ArrowRight size={15} />
              </Link>
            </div>

            {/* Image */}
            <div>
              <img
                src={ADU_IMG}
                alt="Modern ADU in a California backyard"
                className="w-full h-80 lg:h-[420px] object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section
        className="py-20 lg:py-24"
        style={{ backgroundColor: CHARCOAL }}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <p className="eyebrow mb-3" style={{ color: "oklch(0.78 0.1 40)" }}>Get Started</p>
              <h2
                className="text-3xl lg:text-4xl font-semibold text-white leading-snug"
                style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "-0.02em" }}
              >
                Have a project in mind?
              </h2>
              <p className="mt-3 text-base" style={{ color: "oklch(0.72 0.01 50)", fontFamily: "'DM Sans', sans-serif" }}>
                Reach out to discuss your project and get a quote.
              </p>
            </div>
            <Link
              href="/contact#form"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium rounded-sm transition-opacity hover:opacity-85 whitespace-nowrap self-start lg:self-auto"
              style={{ backgroundColor: TERRA, color: "white", fontFamily: "'DM Sans', sans-serif" }}
            >
              Contact Us <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
