"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "500", suffix: "+", label: "Projects Delivered" },
  { value: "50", suffix: "M+", label: "In Client Revenue" },
  { value: "36", suffix: "", label: "Month Avg Engagement" },
  { value: "98", suffix: "%", label: "Client Satisfaction" },
  { value: "15", suffix: "+", label: "Years of Experience" },
  { value: "100", suffix: "+", label: "AI Solutions Built" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Stats() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#666666] text-lg mb-6 leading-relaxed"
            >
              With 15+ years of software development experience for technological enterprises,
              successful startups, and AI-empowered companies worldwide, our developers
              demonstrate exceptional efficiency and expertise.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[#FF5C00] font-semibold"
            >
              On average, RAGRATIVE clients benefit by $600,000+ from annual savings
              as a result of our collaboration.
            </motion.p>
          </div>

          {/* Right Stats Grid */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-semibold text-[#FF5C00] uppercase tracking-wider mb-8"
            >
              Key Stats
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 gap-8"
            >
              {stats.map((stat) => (
                <motion.div key={stat.label} variants={itemVariants}>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-bold text-[#1a1a1a]">
                      {stat.value}
                    </span>
                    <span className="text-2xl md:text-3xl font-bold text-[#FF5C00]">
                      {stat.suffix}
                    </span>
                  </div>
                  <p className="text-sm text-[#888888] mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
