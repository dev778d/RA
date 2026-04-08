"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { stats, team } from "@/data/content";

const values = [
  {
    title: "Innovation First",
    description: "We stay at the bleeding edge of AI technology, constantly exploring new approaches.",
  },
  {
    title: "Results-Driven",
    description: "We measure success by the tangible impact we create for our clients.",
  },
  {
    title: "Transparent Partnership",
    description: "We work as an extension of your team, not just as vendors.",
  },
  {
    title: "Ethical AI",
    description: "We build AI systems that augment human capabilities while maintaining fairness.",
  },
];

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#030304] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-1/4 w-[500px] h-[500px] rounded-full bg-[#00D9FF]/5 blur-[120px]" />
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
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#FAFAFA] mb-6">
              Building the future
              <br />
              <span className="text-gradient">of intelligent systems</span>
            </h1>
            <p className="text-lg text-[#A1A1AA] max-w-xl">
              We&apos;re a team of AI engineers and researchers passionate about
              creating systems that truly understand and augment human intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-white/[0.04] bg-[#080809]">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-[#52525B] text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section ref={containerRef} className="section bg-[#030304]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#FAFAFA] mb-6">
                Our Story
              </h2>
              <div className="space-y-5 text-[#A1A1AA] text-lg leading-relaxed">
                <p>
                  RAGRATIVE was born from a simple observation: while AI technology was
                  advancing rapidly, most businesses struggled to harness its power effectively.
                </p>
                <p>
                  Founded by engineers who&apos;ve built AI systems at leading tech companies,
                  we set out to bridge this gap. Our name combines &quot;RAG&quot; with
                  &quot;Narrative&quot; — reflecting our belief that AI should tell your
                  business&apos;s story, not override it.
                </p>
                <p>
                  Today, we work with startups and enterprises alike, building intelligent
                  systems that don&apos;t just process data but truly understand context.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#00D9FF]/20 to-[#10B981]/10 border border-white/[0.06] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-20" />
                <span className="text-[150px] font-display font-bold text-gradient opacity-80">R</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-[#080809]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block text-[#00D9FF] text-sm font-medium uppercase tracking-[0.2em] mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#FAFAFA]">
              What we stand for
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-[#111113] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.12)] transition-colors"
              >
                <h3 className="text-xl font-display font-bold text-[#FAFAFA] mb-3">
                  {value.title}
                </h3>
                <p className="text-[#A1A1AA]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-[#030304]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block text-[#00D9FF] text-sm font-medium uppercase tracking-[0.2em] mb-4">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#FAFAFA]">
              Meet the minds behind RAGRATIVE
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="rounded-2xl overflow-hidden mb-5 bg-[#111113] border border-[rgba(255,255,255,0.06)] group-hover:border-[rgba(255,255,255,0.12)] transition-colors">
                  <div className="aspect-[4/5] flex items-center justify-center bg-gradient-to-br from-[#00D9FF]/10 to-[#10B981]/10 relative">
                    <span className="text-6xl font-display font-bold text-[#FAFAFA]/20">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold text-[#FAFAFA]">
                  {member.name}
                </h3>
                <p className="text-[#00D9FF] text-sm mb-2">{member.role}</p>
                <p className="text-[#71717A] text-sm mb-4">{member.bio}</p>

                {/* Social links */}
                <div className="flex gap-2">
                  <a
                    href={member.social.linkedin}
                    className="p-2 rounded-lg bg-white/5 text-[#71717A] hover:text-[#00D9FF] transition-colors"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href={member.social.twitter}
                    className="p-2 rounded-lg bg-white/5 text-[#71717A] hover:text-[#00D9FF] transition-colors"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href={member.social.github}
                    className="p-2 rounded-lg bg-white/5 text-[#71717A] hover:text-[#00D9FF] transition-colors"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-[#080809]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#FAFAFA] mb-4">
            Want to join our team?
          </h2>
          <p className="text-[#A1A1AA] mb-8 max-w-xl mx-auto text-lg">
            We&apos;re always looking for talented engineers who are passionate about AI.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="glow" size="xl" asChild>
              <Link href="/careers" className="group">
                View Open Positions
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
