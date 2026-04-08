"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Analytics Platform",
    category: "Artificial Intelligence",
    description: "Built a real-time analytics dashboard with predictive insights using machine learning.",
    image: "/projects/project-1.jpg",
    href: "/work/analytics-platform",
  },
  {
    title: "Enterprise RAG System",
    category: "RAG Systems",
    description: "Developed a retrieval-augmented generation system for enterprise knowledge management.",
    image: "/projects/project-2.jpg",
    href: "/work/rag-system",
  },
  {
    title: "SaaS Product Redesign",
    category: "Full-Stack Development",
    description: "Complete redesign and rebuild of a B2B SaaS platform serving 100K+ users.",
    image: "/projects/project-3.jpg",
    href: "/work/saas-redesign",
  },
];

export function FeaturedWork() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-semibold text-[#FF5C00] uppercase tracking-wider mb-4"
            >
              Featured Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-[#1a1a1a]"
            >
              Projects that drive{" "}
              <span className="text-[#FF5C00]">results</span>
            </motion.h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-[#666666] hover:text-[#FF5C00] transition-colors group"
          >
            View all projects
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={project.href} className="group block">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-[#f8f8f8]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF5C00]/10 to-[#FF8C00]/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-bold text-[#1a1a1a]/10">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="absolute inset-0 bg-[#1a1a1a]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#FF5C00] flex items-center justify-center">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#FF5C00] uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-3 text-[#1a1a1a] group-hover:text-[#FF5C00] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#666666] text-sm">
                  {project.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
