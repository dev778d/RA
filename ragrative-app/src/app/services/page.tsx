"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Database,
  Bot,
  Code2,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  Rocket,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "rag-systems",
    title: "RAG Systems",
    description:
      "Custom Retrieval-Augmented Generation systems that connect your AI to your proprietary data, enabling accurate and contextual responses.",
    features: [
      "Custom knowledge base integration",
      "Semantic search optimization",
      "Multi-source data fusion",
      "Real-time data updates",
      "Enterprise-grade security",
    ],
    icon: Database,
    color: "#00D9FF",
  },
  {
    id: "agentic-ai",
    title: "Agentic AI",
    description:
      "Autonomous AI agents that can reason, plan, and execute complex multi-step tasks with minimal human intervention.",
    features: [
      "Multi-agent orchestration",
      "Tool use & API integration",
      "Decision-making workflows",
      "Self-improving systems",
      "Human-in-the-loop controls",
    ],
    icon: Bot,
    color: "#F5A623",
  },
  {
    id: "full-stack",
    title: "Full-Stack Development",
    description:
      "Modern web applications built with cutting-edge technologies, designed for scale, performance, and exceptional user experience.",
    features: [
      "Next.js & React applications",
      "Node.js & Python backends",
      "Cloud-native architecture",
      "Real-time features",
      "Mobile-responsive design",
    ],
    icon: Code2,
    color: "#10B981",
  },
  {
    id: "ai-consulting",
    title: "AI Consulting",
    description:
      "Strategic guidance on AI implementation, architecture design, and roadmap planning to transform your business with intelligent systems.",
    features: [
      "AI strategy development",
      "Technology assessment",
      "Implementation roadmaps",
      "Team training & upskilling",
      "Ongoing technical advisory",
    ],
    icon: Lightbulb,
    color: "#00D9FF",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We dive deep into your business to understand your challenges and opportunities.",
    icon: MessageSquare,
  },
  {
    step: "02",
    title: "Strategy",
    description: "Our team designs a tailored solution architecture aligned with your goals.",
    icon: Lightbulb,
  },
  {
    step: "03",
    title: "Development",
    description: "We build using best practices with regular demos and feedback loops.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Launch",
    description: "Your system goes live with comprehensive testing and ongoing support.",
    icon: Rocket,
  },
];

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[#030304] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-1/3 w-[500px] h-[500px] rounded-full bg-[#00D9FF]/5 blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#10B981]/5 blur-[100px]" />
          <div className="absolute inset-0 bg-grid opacity-20" />
        </div>

        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block text-[#00D9FF] text-sm font-medium uppercase tracking-[0.2em] mb-4">
              Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#FAFAFA] mb-6">
              AI solutions that
              <br />
              <span className="text-gradient">drive results</span>
            </h1>
            <p className="text-lg text-[#A1A1AA] max-w-xl mx-auto">
              From custom RAG systems to autonomous AI agents, we build
              intelligent solutions tailored to your unique business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section ref={containerRef} className="section bg-[#080809]">
        <div className="container-custom">
          <div className="space-y-32">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={cn(
                    "grid lg:grid-cols-2 gap-12 lg:gap-20 items-center",
                    !isEven && "lg:grid-flow-dense"
                  )}
                >
                  {/* Content */}
                  <div className={cn(!isEven && "lg:col-start-2")}>
                    <div
                      className="inline-flex items-center justify-center rounded-xl p-4 mb-6"
                      style={{
                        background: `${service.color}15`,
                        border: `1px solid ${service.color}25`,
                      }}
                    >
                      <service.icon className="h-8 w-8" style={{ color: service.color }} />
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#FAFAFA] mb-5">
                      {service.title}
                    </h2>

                    <p className="text-lg text-[#A1A1AA] mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-10">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-[#A1A1AA]"
                        >
                          <CheckCircle2
                            className="h-5 w-5 mt-0.5 flex-shrink-0"
                            style={{ color: service.color }}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button variant="outlineAccent" size="lg" asChild>
                      <Link href="/contact" className="group">
                        Get Started
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>

                  {/* Visual */}
                  <div className={cn(!isEven && "lg:col-start-1")}>
                    <div
                      className="aspect-square rounded-2xl overflow-hidden border border-white/[0.06] relative"
                      style={{
                        background: `linear-gradient(135deg, ${service.color}15 0%, ${service.color}05 50%, transparent 100%)`,
                      }}
                    >
                      <div className="absolute inset-0 bg-grid opacity-20" />
                      <div className="w-full h-full flex items-center justify-center">
                        <service.icon
                          className="h-32 w-32 opacity-20"
                          style={{ color: service.color }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-[#030304]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block text-[#00D9FF] text-sm font-medium uppercase tracking-[0.2em] mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#FAFAFA]">
              How we work
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="p-8 rounded-2xl bg-[#111113] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.12)] transition-colors h-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#00D9FF]/10 border border-[#00D9FF]/20 mb-6">
                    <step.icon className="h-5 w-5 text-[#00D9FF]" />
                  </div>
                  <span className="absolute top-6 right-6 text-5xl font-display font-bold text-white/[0.03]">
                    {step.step}
                  </span>
                  <h3 className="text-xl font-display font-bold text-[#FAFAFA] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#71717A] text-sm">
                    {step.description}
                  </p>
                </div>

                {/* Connector */}
                {index < process.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 items-center justify-center rounded-full bg-[#030304] border border-white/10">
                    <ArrowRight className="h-3 w-3 text-[#52525B]" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[#080809]">
        <div className="container-custom">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00D9FF] to-[#10B981]" />
            <div className="absolute inset-0 bg-grid opacity-10" />

            <div className="relative z-10 px-8 py-20 md:px-16 md:py-24 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#030304] mb-5">
                Ready to transform your business?
              </h2>
              <p className="text-lg text-black/70 mb-10 max-w-xl mx-auto">
                Let&apos;s discuss how our AI solutions can help you achieve your
                goals and stay ahead of the competition.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="dark" size="xl" asChild>
                  <Link href="/contact" className="group">
                    Schedule a Consultation
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  size="xl"
                  className="bg-white/20 text-black border border-black/20 hover:bg-white/30"
                  asChild
                >
                  <Link href="/work">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
