/**
 * Contact Page V2 — OT Civil Engineering
 * Design: Modern Editorial — centered form as focal point, info strip below
 */
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/* HEADER */}
      <section className="pt-32 pb-12 text-center">
        <h1 className="text-4xl font-semibold mb-4">Contact Us</h1>
        <p className="text-gray-600">
          Tell us about your project and we’ll get back to you within 1 business day.
        </p>
      </section>

      {/* FORM */}
      <section className="py-16 flex-1">
        <div className="max-w-xl mx-auto px-6">

          <form
            action="https://formsubmit.co/info@otcivileng.com"
            method="POST"
            onSubmit={() => setSubmitting(true)}
            className="space-y-5"
          >

            {/* hidden fields */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://otcivileng.com" />

            {/* name + email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full px-4 py-3 border"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="w-full px-4 py-3 border"
              />
            </div>

            {/* phone */}
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="w-full px-4 py-3 border"
            />

            {/* project type */}
            <select
              name="projectType"
              className="w-full px-4 py-3 border"
            >
              <option value="">Select project type</option>
              <option value="adu">ADU Civil Engineering</option>
              <option value="grading">Grading & Drainage</option>
              <option value="utility">Utility Plans</option>
              <option value="sb9">SB9 Lot Split</option>
            </select>

            {/* message */}
            <textarea
              name="message"
              placeholder="Describe your project..."
              required
              rows={5}
              className="w-full px-4 py-3 border"
            />

            {/* button */}
            <button
              type="submit"
              className="w-full py-4 bg-black text-white flex items-center justify-center gap-2"
            >
              {submitting ? "Sending..." : "Send Message"}
              <ArrowRight size={16} />
            </button>

          </form>

        </div>
      </section>

    </div>
  );
}
