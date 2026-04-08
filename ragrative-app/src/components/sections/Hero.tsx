"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui";
import { ArrowDown } from "lucide-react";

interface HeroProps {
  videoSrc?: string;
}

export function Hero({ videoSrc }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video/Gradient */}
      <div className="absolute inset-0 z-0">
        {videoSrc ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-40"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[var(--bg-deep)] via-[#0a1628] to-[var(--bg-deep)]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-deep)] via-transparent to-[var(--bg-deep)]/50" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 container-custom text-center pt-32 pb-20"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--bg-surface)] border border-[var(--border)] mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--success)] animate-pulse" />
          <span className="text-sm text-[var(--text-secondary)]">Available for new projects</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="hero-text-lg mb-6"
        >
          <span className="block">Replacing Manual Labor</span>
          <span className="block text-gradient">with AI Employees.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10"
        >
          We build intelligent systems with RAG, Agentic AI, and Full-Stack Development 
          to transform your business operations.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/contact">
            <Button variant="orange" size="xl" showArrow>
              Let us Talk Growth
            </Button>
          </Link>
          <Link href="/work">
            <Button variant="secondary" size="xl">
              View Our Work
            </Button>
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-[var(--text-muted)]"
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Award badges */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="container-custom py-8 border-t border-[var(--border)]">          <div className="flex items-center justify-between gap-8 overflow-x-auto">
            <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] whitespace-nowrap">
              <span className="text-[var(--gold)]">★</span> AWARDS
            </div>
            <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] whitespace-nowrap">
              <span className="text-[var(--gold)]">★</span> FEATURED CLIENTS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
