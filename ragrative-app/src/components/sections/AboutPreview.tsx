"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Users, Target, Rocket, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  { icon: Target, title: "Results-Driven", description: "We measure success by impact." },
  { icon: Users, title: "Collaborative", description: "We work as your team extension." },
  { icon: Rocket, title: "Innovative", description: "Cutting-edge AI technology." },
  { icon: Shield, title: "Reliable", description: "Enterprise-grade solutions." },
];

export function AboutPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <section ref={containerRef} className="section bg-[#080809]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              {/* Animated rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute w-full h-full rounded-full border border-white/[0.04]"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[80%] h-[80%] rounded-full border border-white/[0.06]"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[60%] h-[60%] rounded-full border border-[#00D9FF]/20"
                />
                <div className="absolute w-[40%] h-[40%] rounded-full bg-gradient-to-br from-[#00D9FF]/10 to-[#10B981]/10 blur-xl" />
              </div>

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-display font-bold text-gradient">
                    AI
                  </div>
                  <div className="text-sm text-[#52525B] uppercase tracking-[0.2em]">
                    First Engineering
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
                className="absolute top-8 right-8 px-3 py-1.5 rounded-full bg-[#00D9FF]/10 border border-[#00D9FF]/20 text-xs text-[#00D9FF]"
              >
                AI Native
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
                className="absolute bottom-12 left-4 px-3 py-1.5 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/20 text-xs text-[#F5A623]"
              >
                Enterprise Ready
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-[#00D9FF] text-sm font-medium uppercase tracking-[0.2em] mb-4"
            >
              About Us
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#FAFAFA] mb-6"
            >
              Engineers who believe in
              <span className="text-gradient"> augmenting </span>
              human intelligence
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#A1A1AA] mb-10 text-lg leading-relaxed"
            >
              We&apos;re a team of AI engineers and builders passionate about creating
              intelligent systems that empower businesses. Our approach combines
              cutting-edge AI with practical engineering.
            </motion.p>

            {/* Values Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 gap-4 mb-10"
            >
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="p-5 rounded-xl bg-[#111113] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.1)] transition-colors duration-300"
                >
                  <value.icon className="h-5 w-5 text-[#00D9FF] mb-3" />
                  <h4 className="font-semibold text-[#FAFAFA] text-sm mb-1">
                    {value.title}
                  </h4>
                  <p className="text-xs text-[#71717A]">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button variant="outlineAccent" size="lg" asChild>
                <Link href="/about" className="group">
                  Learn More About Us
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
