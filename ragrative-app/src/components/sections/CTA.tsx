"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CTA() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-[#FF5C00] p-12 md:p-16"
        >
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              One Mission
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Provide Growth
            </h3>
            <p className="text-lg text-white/90 mb-4 font-semibold">
              AI - Powered
            </p>
            <p className="text-white/80 mb-8 max-w-xl leading-relaxed">
              Our mission is to harness the power of AI-driven innovation to create
              intelligent, user-centric digital solutions that transform businesses
              and enhance experiences.
            </p>
            <Link href="/contact">
              <button className="inline-flex items-center gap-2 bg-white text-[#FF5C00] px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-colors">
                Let&apos;s Talk Growth
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
