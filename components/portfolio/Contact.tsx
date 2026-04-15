// components/portfolio/Contact.tsx
"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");

    // Simulate sending — replace with real API call later
    await new Promise((res) => setTimeout(res, 1500));
    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="section bg-white dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-green-500 font-mono text-sm">07.</span>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Contact
          </h2>
          <div className="flex-1 h-px bg-gray-200 dark:bg-[#1f1f1f]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left — Info */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Let's Work Together
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                I'm currently open to new opportunities. Whether you have a
                project in mind, want to collaborate, or just want to say hi —
                my inbox is always open!
              </p>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col gap-4">
              {[
                { icon: "📧", label: "Email", value: portfolioData.personal.email, href: `mailto:${portfolioData.personal.email}` },
                { icon: "📞", label: "Phone", value: portfolioData.personal.phone, href: `tel:${portfolioData.personal.phone}` },
                { icon: "📍", label: "Location", value: portfolioData.personal.address, href: null },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-[#1f1f1f] rounded-xl hover:border-green-500/40 transition-all"
                >
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <p className="text-xs font-mono text-gray-400 mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-gray-700 dark:text-gray-300 hover:text-green-500 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { label: "GitHub", href: portfolioData.personal.github },
                { label: "LinkedIn", href: portfolioData.personal.linkedin },
                { label: "LeetCode", href: portfolioData.personal.leetcode },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-gray-200 dark:border-[#2a2a2a] rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:border-green-500 hover:text-green-500 transition-all font-mono"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-[#1f1f1f] rounded-xl p-6 flex flex-col gap-4">

            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
              <span className="ml-2 text-xs font-mono text-gray-400">
                send_message.sh
              </span>
            </div>

            {/* Fields */}
            {[
              { name: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
              { name: "email", label: "Your Email", type: "email", placeholder: "john@example.com" },
              { name: "subject", label: "Subject", type: "text", placeholder: "Project Inquiry" },
            ].map((field) => (
              <div key={field.name} className="flex flex-col gap-1.5">
                <label className="text-xs font-mono text-gray-500 dark:text-gray-400">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={form[field.name as keyof FormData]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-2.5 bg-white dark:bg-[#0d0d0d] border border-gray-200 dark:border-[#2a2a2a] rounded-lg text-sm text-gray-700 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-green-500 transition-colors font-mono"
                />
              </div>
            ))}

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-mono text-gray-500 dark:text-gray-400">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={4}
                className="w-full px-4 py-2.5 bg-white dark:bg-[#0d0d0d] border border-gray-200 dark:border-[#2a2a2a] rounded-lg text-sm text-gray-700 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-green-500 transition-colors font-mono resize-none"
              />
            </div>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={status === "sending"}
              className="w-full py-3 bg-green-500 hover:bg-green-400 disabled:opacity-60 text-black font-semibold rounded-lg transition-all text-sm font-mono"
            >
              {status === "idle" && "Send Message →"}
              {status === "sending" && "Sending..."}
              {status === "success" && "✅ Message Sent!"}
              {status === "error" && "❌ Failed. Try again."}
            </button>
          </div>
        </div>
      </div>
        </section>
  );
}