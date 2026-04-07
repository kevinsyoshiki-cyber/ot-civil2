/**
 * Services Page V2 — OT Civil Engineering
 * Design: Modern Editorial — clean list layout, terracotta accents, Playfair headings
 */
import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const TERRA = "oklch(0.55 0.13 40)";
const CHARCOAL = "oklch(0.18 0.01 50)";
const BODY = "oklch(0.38 0.01 50)";
const MUTED = "oklch(0.55 0.01 50)";

const SITE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663470081773/jDbSv5mR6LAKncvi4hBttC/v2-site-Y9djCp8yH8o2hup2T9TGn4.webp";

const services = [
  {
    id: "adu",
    num: "01",
    title: "ADU Civil Plans & Engineering",
    desc: "We provide civil engineering plans to support ADU permit applications, including grading, drainage, and utility connections.",
    items: ["Site grading plans", "Drainage design", "Utility connections (water, sewer, storm)", "Coordination with city requirements"],
  },
  {
    id: "grading",
    num: "02",
    title: "Grading & Drainage",
    desc: "Grading and drainage plans designed to manage site runoff and meet local requirements.",
    items: ["Spot elevations", "Drainage flow direction", "Stormwater management", "Erosion control considerations"],
  },
  {
    id: "utility",
    num: "03",
    title: "Utility Plans",
    desc: "Design of utility connections for residential and development projects.",
    items: ["Sewer lateral design", "Water service connections", "Storm drain systems", "Coordination with agencies"],
  },
  {
    id: "sb9",
    num: "04",
    title: "SB9 Lot Splits",
    desc: "Civil engineering support for small subdivisions and lot splits under California SB9.",
    items: ["Site layout support", "Utility coordination", "Basic civil design for approvals"],
  },
];

const clients = ["Homeowners", "Architects & Designers", "Contractors", "Small Developers"];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/* ── PAGE HEADER ── */}
      <section className="pt-32 pb-16" style={{ borderBottom: "1px solid oklch(0.9 0.005 60)" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <p className="eyebrow mb-5">What We Offer</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <h1
              className="text-4xl lg:text-6xl font-semibold leading-tight"
              style={{ fontFamily: "'Playfair Display', serif", color: CHARCOAL, letterSpacing: "-0.02em" }}
            >
              Civil Engineering Services
            </h1>
            <p className="text-base leading-relaxed lg:pb-2" style={{ color: BODY, fontFamily: "'DM Sans', sans-serif" }}>
              Permit-ready plans for ADUs, grading, drainage, utilities, and lot splits in the Bay Area.
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICES LIST ── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="divide-y" style={{ borderColor: "oklch(0.92 0.005 60)" }}>
            {services.map((svc) => (
              <div key={svc.id} id={svc.id} className="py-12 lg:py-16" style={{ scrollMarginTop: "80px" }}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                  {/* Number */}
                  <div className="lg:col-span-1">
                    <p
                      className="text-5xl font-bold leading-none"
                      style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.88 0.01 40)" }}
                    >
                      {svc.num}
                    </p>
                  </div>

                  {/* Title + desc */}
                  <div className="lg:col-span-5">
                    <h2
                      className="text-2xl lg:text-3xl font-semibold mb-4 leading-snug"
                      style={{ fontFamily: "'Playfair Display', serif", color: CHARCOAL }}
                    >
                      {svc.title}
                    </h2>
                    <p className="text-base leading-relaxed mb-6" style={{ color: BODY, fontFamily: "'DM Sans', sans-serif" }}>
                      {svc.desc}
                    </p>
                    <Link
                      href="/contact#form"
                      className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
                      style={{ color: TERRA, fontFamily: "'DM Sans', sans-serif", textDecoration: "underline", textUnderlineOffset: "4px" }}
                    >
                      Get a quote <ArrowRight size={13} />
                    </Link>
                  </div>

                  {/* Includes list */}
                  <div className="lg:col-span-6">
                    <p
                      className="text-xs font-semibold tracking-widest uppercase mb-4"
                      style={{ color: TERRA, fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Includes
                    </p>
                    <ul className="space-y-2.5">
                      {svc.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <CheckCircle2 size={15} className="mt-0.5 shrink-0" style={{ color: TERRA }} />
                          <span className="text-sm" style={{ color: BODY, fontFamily: "'DM Sans', sans-serif" }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE WORK WITH — image + list ── */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: "oklch(0.97 0.008 60)" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="eyebrow mb-5">Our Clients</p>
              <h2
                className="text-3xl lg:text-4xl font-semibold mb-8 leading-snug"
                style={{ fontFamily: "'Playfair Display', serif", color: CHARCOAL, letterSpacing: "-0.02em" }}
              >
                Who we work with
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {clients.map((c) => (
                  <div
                    key={c}
                    className="bg-white px-5 py-4 rounded-sm border"
                    style={{ borderColor: "oklch(0.9 0.005 60)" }}
                  >
                    <p className="text-sm font-medium" style={{ color: CHARCOAL, fontFamily: "'DM Sans', sans-serif" }}>{c}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src={SITE_IMG}
                alt="Freshly graded residential lot with survey stakes"
                className="w-full h-72 lg:h-96 object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: CHARCOAL }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <p className="eyebrow mb-3" style={{ color: "oklch(0.78 0.1 40)" }}>Ready to Start?</p>
              <h2
                className="text-3xl lg:text-4xl font-semibold text-white leading-snug"
                style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "-0.02em" }}
              >
                Have a project in mind?
              </h2>
            </div>
            <Link
              href="/contact#form"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium rounded-sm transition-opacity hover:opacity-85 whitespace-nowrap self-start lg:self-auto"
              style={{ backgroundColor: TERRA, color: "white", fontFamily: "'DM Sans', sans-serif" }}
            >
              Request a Quote <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
