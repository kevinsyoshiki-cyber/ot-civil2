/**
 * Contact Page V2 — OT Civil Engineering
 * Design: Modern Editorial — centered form as focal point, info strip below
 */
import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, Clock, MessageSquare, Tag } from "lucide-react";

const TERRA = "oklch(0.55 0.13 40)";
const CHARCOAL = "oklch(0.18 0.01 50)";
const BODY = "oklch(0.38 0.01 50)";
const MUTED = "oklch(0.55 0.01 50)";

const projectTypes = [
  { value: "adu", label: "ADU Civil Engineering" },
  { value: "grading", label: "Grading & Drainage" },
  { value: "utility", label: "Utility Plans" },
  { value: "sb9", label: "SB9 Lot Split" },
  { value: "other", label: "Other" },
];

const trustPoints = [
  { icon: Clock, text: "Quick response within 1 business day" },
  { icon: MessageSquare, text: "Free initial project consultation" },
  { icon: Tag, text: "Clear quote with no hidden fees" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
   const [error, setError] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", projectType: "", message: "" });
const [loading, setLoading] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setLoading(true);
  setError(false);

  try {
    const res = await fetch("https://formsubmit.co/ajax/info@otcivileng.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        phone: form.phone,
        projectType: form.projectType,
        message: form.message,
      }),
    });

    if (res.ok) {
      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);

    } else {
      setError(true);
    }

  } catch (err) {
    setError(true);
  } finally {
    setLoading(false);
  }
};
  const fieldStyle = {
    borderColor: "oklch(0.88 0.005 60)",
    fontFamily: "'DM Sans', sans-serif",
    color: CHARCOAL,
    backgroundColor: "white",
    fontSize: "0.875rem",
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/* ── PAGE HEADER ── */}
      <section className="pt-32 pb-12" style={{ borderBottom: "1px solid oklch(0.9 0.005 60)" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-10 text-center">
          <p className="eyebrow justify-center mb-5">Get in Touch</p>
          <h1
            className="text-4xl lg:text-6xl font-semibold leading-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: CHARCOAL, letterSpacing: "-0.02em" }}
          >
            Contact Us
          </h1>
          <p className="text-base leading-relaxed max-w-md mx-auto" style={{ color: BODY, fontFamily: "'DM Sans', sans-serif" }}>
            Tell us about your project and we'll get back to you within 1 business day.
          </p>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section className="py-8" style={{ backgroundColor: "oklch(0.97 0.008 60)", borderBottom: "1px solid oklch(0.9 0.005 60)" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            {trustPoints.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2.5">
                <Icon size={15} className="shrink-0" style={{ color: TERRA }} />
                <span className="text-sm font-medium" style={{ color: BODY, fontFamily: "'DM Sans', sans-serif" }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CENTERED FORM ── */}
      <section id="form" className="py-16 lg:py-24 flex-1">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          {submitted ? (
            <div
              className="rounded-sm p-12 text-center"
              style={{ backgroundColor: "oklch(0.97 0.008 60)", border: "1px solid oklch(0.9 0.005 60)" }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "oklch(0.9 0.06 40 / 0.25)" }}
              >
                <ArrowRight size={22} style={{ color: TERRA }} />
              </div>
              <h3 className="text-2xl font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif", color: CHARCOAL }}>
                Message received
              </h3>
              <p className="text-sm" style={{ color: MUTED, fontFamily: "'DM Sans', sans-serif" }}>
                Thank you for reaching out. We'll be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: MUTED, fontFamily: "'DM Sans', sans-serif" }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-sm border focus:outline-none focus:ring-1"
                    style={{ ...fieldStyle, outlineColor: TERRA }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: MUTED, fontFamily: "'DM Sans', sans-serif" }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-sm border focus:outline-none focus:ring-1"
                    style={{ ...fieldStyle, outlineColor: TERRA }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: MUTED, fontFamily: "'DM Sans', sans-serif" }}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(555) 000-0000"
                    className="w-full px-4 py-3 rounded-sm border focus:outline-none focus:ring-1"
                    style={{ ...fieldStyle, outlineColor: TERRA }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: MUTED, fontFamily: "'DM Sans', sans-serif" }}>
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-sm border focus:outline-none focus:ring-1"
                    style={{ ...fieldStyle, outlineColor: TERRA }}
                  >
                    <option value="">Select a service</option>
                    {projectTypes.map((pt) => (
                      <option key={pt.value} value={pt.value}>{pt.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: MUTED, fontFamily: "'DM Sans', sans-serif" }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Describe your project — location, scope, and any questions you have."
                  className="w-full px-4 py-3 rounded-sm border focus:outline-none focus:ring-1 resize-none"
                  style={{ ...fieldStyle, outlineColor: TERRA }}
                />
              </div>

              <button
  type="submit"
  disabled={loading}
  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium rounded-sm transition-opacity hover:opacity-85 disabled:opacity-60"
  style={{ backgroundColor: TERRA, color: "white", fontFamily: "'DM Sans', sans-serif" }}
>
  {loading ? "Sending..." : "Send Message"} <ArrowRight size={15} />
</button>
               {error && (
                <p className="text-sm" style={{ color: "oklch(0.55 0.22 25)", fontFamily: "'DM Sans', sans-serif" }}>
                  Sorry, something went wrong sending your message. Please email us directly at info@otcivileng.com.
                </p>
              )}
            </form>
          )}
        </div>
      </section>

      {/* ── CONTACT INFO STRIP ── */}
      <section className="py-12 lg:py-14" style={{ backgroundColor: CHARCOAL }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
              <div className="w-8 h-8 rounded-sm flex items-center justify-center shrink-0" style={{ backgroundColor: "oklch(1 0 0 / 0.08)" }}>
                <MapPin size={15} style={{ color: "oklch(0.78 0.1 40)" }} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "oklch(0.78 0.1 40)", fontFamily: "'DM Sans', sans-serif" }}>Address</p>
                <p className="text-sm leading-relaxed text-white/70" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  809 Cuesta Drive Suite B PMB 1037<br />Mountain View, CA 94040
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
              <div className="w-8 h-8 rounded-sm flex items-center justify-center shrink-0" style={{ backgroundColor: "oklch(1 0 0 / 0.08)" }}>
                <Phone size={15} style={{ color: "oklch(0.78 0.1 40)" }} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "oklch(0.78 0.1 40)", fontFamily: "'DM Sans', sans-serif" }}>Phone</p>
                <a href="tel:+14084756303" className="text-sm text-white/70 hover:text-white transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  (408) 475-6303
                </a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
              <div className="w-8 h-8 rounded-sm flex items-center justify-center shrink-0" style={{ backgroundColor: "oklch(1 0 0 / 0.08)" }}>
                <Mail size={15} style={{ color: "oklch(0.78 0.1 40)" }} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "oklch(0.78 0.1 40)", fontFamily: "'DM Sans', sans-serif" }}>Email</p>
                <a href="mailto:info@otcivileng.com" className="text-sm text-white/70 hover:text-white transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  info@otcivileng.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
