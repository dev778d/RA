"use client";

import { motion } from "framer-motion";

const clients = [
  "Microsoft",
  "Google",
  "Amazon",
  "Meta",
  "OpenAI",
  "Stripe",
  "Vercel",
  "Shopify",
];

export function ClientLogos() {
  return (
    <section className="py-16 bg-white border-y border-[#e5e5e5] overflow-hidden">
      <div className="container-custom mb-8">
        <p className="text-center text-sm text-[#888888] uppercase tracking-wider">
          Trusted by industry leaders
        </p>
      </div>

      <div className="relative">
        <div className="flex animate-marquee">
          {[...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-12 flex items-center justify-center"
            >
              <span className="text-2xl font-bold text-[#cccccc] hover:text-[#666666] transition-colors">
                {client}
              </span>
            </div>
          ))}
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
