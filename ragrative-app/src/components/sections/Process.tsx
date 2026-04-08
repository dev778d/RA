"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We dive deep into understanding your business, goals, and challenges to create a tailored strategy.",
  },
  {
    number: "02",
    title: "Kickoff",
    description: "Assemble the right team, establish workflows, and set clear milestones for project success.",
  },
  {
    number: "03",
    title: "Execute",
    description: "Agile development with continuous feedback loops ensuring quality and alignment with your vision.",
  },
  {
    number: "04",
    title: "Deliver",
    description: "Launch with confidence, backed by thorough testing, documentation, and ongoing support.",
  },
];

export function Process() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-[#1a1a1a]"
          >
            How We{" "}
            <span className="text-[#FF5C00]">Work</span>
          </motion.h2>
          <Link href="/contact">
            <Button variant="orange" showArrow>
              Let us Talk Growth
            </Button>
          </Link>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-[#1a1a1a] border border-[#333] hover:border-[#FF5C00] transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl font-bold text-white/20 group-hover:text-[#FF5C00] transition-colors">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
