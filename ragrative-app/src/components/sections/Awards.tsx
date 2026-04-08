"use client";

import { motion } from "framer-motion";

const awards = [
  "Forbes Business Council Member",
  "Recognized by TechCrunch",
  "Top AI Innovators 2024",
  "Best AI Startup Award",
];

export function Awards() {
  return (
    <section className="py-16 bg-white border-y border-[#e5e5e5] overflow-hidden">
      <div className="container-custom mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-center mb-4 text-[#1a1a1a]"
        >
          Awards & Certifications
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-[#666666] max-w-xl mx-auto"
        >
          We are proud of the recognition we have received demonstrating our industry leading practices.
        </motion.p>
      </div>

      <div className="relative mt-12">
        <div className="flex animate-marquee">
          {[...awards, ...awards, ...awards, ...awards].map((award, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-4 flex items-center"
            >
              <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#f8f8f8] border border-[#e5e5e5]">
                <span className="text-[#FF5C00]">★</span>
                <span className="text-sm font-medium text-[#666666] whitespace-nowrap">
                  {award}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
