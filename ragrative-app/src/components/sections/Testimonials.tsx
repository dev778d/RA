"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "RAGRATIVE transformed our business with their AI solutions. The team is incredibly skilled and professional.",
    author: "Sarah Chen",
    role: "CTO, TechVentures",
    rating: 5,
  },
  {
    quote: "Their RAG system implementation exceeded our expectations. Our customer support efficiency improved by 300%.",
    author: "Michael Rodriguez",
    role: "VP Engineering, DataFlow",
    rating: 5,
  },
  {
    quote: "Working with RAGRATIVE was a game-changer. They delivered a complex AI platform on time and under budget.",
    author: "Emily Watson",
    role: "CEO, InnovateCorp",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="section bg-[#1a1a1a]">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-[#FF5C00] uppercase tracking-wider mb-4"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white"
          >
            What our clients{" "}
            <span className="text-[#FF5C00]">say</span>
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-[#2a2a2a] border border-[#333]"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FF5C00] text-[#FF5C00]" />
                ))}
              </div>
              <p className="text-white/70 mb-8 leading-relaxed italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-sm text-white/50">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
