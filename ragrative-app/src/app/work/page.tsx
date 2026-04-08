"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Filter, Star, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: "enterprise-knowledge-base",
    title: "Enterprise Knowledge Base",
    client: "Fortune 500 Tech",
    category: "RAG Systems",
    description: "Custom RAG system processing 10M+ documents with semantic search and real-time updates.",
    tags: ["RAG", "LangChain", "Vector DB", "React"],
    stats: { value: "95%", label: "Faster retrieval" },
    featured: true,
    color: "#00D9FF",
  },
  {
    id: "autonomous-support-agent",
    title: "Autonomous Support Agent",
    client: "SaaS Startup",
    category: "Agentic AI",
    description: "Multi-agent system handling 80% of support tickets autonomously with human escalation.",
    tags: ["Multi-Agent", "GPT-4", "Slack", "Node.js"],
    stats: { value: "80%", label: "Resolution rate" },
    featured: true,
    color: "#F5A623",
  },
  {
    id: "ai-analytics-dashboard",
    title: "AI Analytics Dashboard",
    client: "Healthcare Provider",
    category: "Full-Stack",
    description: "Real-time analytics platform with AI-powered clinical insights and predictions.",
    tags: ["Next.js", "Python", "TensorFlow", "AWS"],
    stats: { value: "3x", label: "Faster decisions" },
    featured: false,
    color: "#10B981",
  },
  {
    id: "smart-document-processor",
    title: "Smart Document Processor",
    client: "Legal Firm",
    category: "RAG Systems",
    description: "Intelligent document analysis with 99% extraction accuracy for legal documents.",
    tags: ["OCR", "NLP", "RAG", "FastAPI"],
    stats: { value: "99%", label: "Accuracy" },
    featured: false,
    color: "#00D9FF",
  },
];

const categories = ["All", "RAG Systems", "Agentic AI", "Full-Stack"];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[#030304] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-[#00D9FF]/5 blur-[120px]" />
          <div className="absolute inset-0 bg-grid opacity-20" />
        </div>

        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-[#00D9FF] text-sm font-medium uppercase tracking-[0.2em] mb-4">
              Our Work
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#FAFAFA] mb-6">
              Projects that push
              <br />
              <span className="text-gradient">boundaries</span>
            </h1>
            <p className="text-lg text-[#A1A1AA] max-w-xl">
              Explore our portfolio of AI solutions, from intelligent RAG systems
              to autonomous agents that transform how businesses operate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-6 border-y border-white/[0.04] bg-[#080809]">
        <div className="container-custom">
          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar">
            <Filter className="h-4 w-4 text-[#52525B] flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300",
                  activeCategory === category
                    ? "bg-[#00D9FF] text-[#030304]"
                    : "bg-white/5 text-[#A1A1AA] hover:text-[#FAFAFA] border border-white/[0.06] hover:border-white/[0.12]"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={containerRef} className="section bg-[#030304]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link
                    href={`/work/${project.id}`}
                    className="group block"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="relative rounded-2xl border border-[rgba(255,255,255,0.06)] overflow-hidden bg-[#111113] hover:border-[rgba(255,255,255,0.12)] transition-all duration-500">
                      {/* Project Image Area */}
                      <div className="aspect-[16/10] relative overflow-hidden">
                        <div
                          className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                          style={{
                            background: `linear-gradient(135deg, ${project.color}15 0%, ${project.color}05 50%, transparent 100%)`,
                          }}
                        />
                        <div className="absolute inset-0 bg-grid opacity-20" />

                        {/* Centered icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div
                            className="w-20 h-20 rounded-2xl border flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                            style={{
                              borderColor: `${project.color}30`,
                              background: `${project.color}10`,
                            }}
                          >
                            <span
                              className="text-4xl font-display font-bold opacity-50"
                              style={{ color: project.color }}
                            >
                              {project.title.charAt(0)}
                            </span>
                          </div>
                        </div>

                        {/* Featured Badge */}
                        {project.featured && (
                          <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F5A623]/20 border border-[#F5A623]/30 backdrop-blur-sm">
                            <Star className="h-3 w-3 text-[#F5A623] fill-[#F5A623]" />
                            <span className="text-xs font-semibold text-[#F5A623]">Featured</span>
                          </div>
                        )}

                        {/* Category Badge */}
                        <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                          <span className="text-xs font-medium text-white/70">{project.category}</span>
                        </div>

                        {/* Hover overlay */}
                        <motion.div
                          initial={false}
                          animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                          className="absolute inset-0 bg-gradient-to-t from-[#030304] via-[#030304]/50 to-transparent flex items-center justify-center"
                        >
                          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
                            <span className="text-sm font-medium text-white">View Project</span>
                            <ExternalLink className="h-4 w-4 text-white" />
                          </div>
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div>
                            <h3 className="text-lg font-display font-bold text-[#FAFAFA] mb-1 group-hover:text-[#00D9FF] transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-sm text-[#71717A]">{project.client}</p>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <div className="text-2xl font-display font-bold" style={{ color: project.color }}>
                              {project.stats.value}
                            </div>
                            <div className="text-xs text-[#52525B]">{project.stats.label}</div>
                          </div>
                        </div>

                        <p className="text-sm text-[#A1A1AA] mb-4 line-clamp-2">
                          {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 rounded-md bg-white/5 text-xs text-[#71717A] border border-white/5"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-16"
          >
            <p className="text-[#71717A] mb-4">
              Have a project in mind?
            </p>
            <Button variant="glow" size="xl" asChild>
              <Link href="/contact" className="group">
                Start a Conversation
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
