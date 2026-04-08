"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Brain, Code2, Layers, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Leverage AI to gain insights, automate processes, and drive innovation with cutting-edge machine learning solutions.",
    href: "/services/ai",
    featured: true,
  },
  {
    icon: Layers,
    title: "RAG Systems",
    description: "Build intelligent retrieval-augmented generation systems that combine your data with powerful language models.",
    href: "/services/rag",
    featured: false,
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "End-to-end application development with modern frameworks, scalable architecture, and beautiful interfaces.",
    href: "/services/fullstack",
    featured: false,
  },
  {
    icon: Lightbulb,
    title: "Discovery Workshop",
    description: "Define clear project scopes, achieve technological clarity, and develop a reliable execution strategy.",
    href: "/services/discovery",
    featured: false,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function ServicesBento() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6 text-[#1a1a1a]"
            >
              From where would you like to start your{" "}
              <span className="text-[#FF5C00]">growth.</span>
            </motion.h2>
          </div>
          <Link href="/contact" className="shrink-0">
            <button className="inline-flex items-center gap-2 bg-[#FF5C00] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#E55400] transition-colors">
              Let&apos;s Talk Growth
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </Link>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className={`group relative p-8 rounded-2xl border transition-all duration-300 ${
                  service.featured
                    ? "bg-[#FF5C00] border-[#FF5C00]"
                    : "bg-[#f8f8f8] border-[#e5e5e5] hover:border-[#FF5C00]"
                }`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    service.featured ? "bg-white/20" : "bg-[#FF5C00]/10"
                  }`}>
                    <Icon className={`w-6 h-6 ${service.featured ? "text-white" : "text-[#FF5C00]"}`} />
                  </div>
                  <Link
                    href={service.href}
                    className={`w-10 h-10 rounded-full border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity ${
                      service.featured ? "border-white/30 text-white" : "border-[#e5e5e5] text-[#1a1a1a]"
                    }`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>

                <p className={`mb-4 leading-relaxed ${
                  service.featured ? "text-white/80" : "text-[#666666]"
                }`}>
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className={`inline-flex items-center gap-2 font-semibold group-hover:gap-3 transition-all ${
                    service.featured ? "text-white" : "text-[#1a1a1a]"
                  }`}
                >
                  {service.title}
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
