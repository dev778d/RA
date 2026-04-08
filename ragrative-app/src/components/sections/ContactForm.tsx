"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui";
import { Send, CheckCircle } from "lucide-react";

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="section bg-[#f8f8f8]">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a1a1a]">
              How can we help you grow?
            </h2>
            <p className="text-[#666666]">
              Tell us about your project and we will get back to you within 24 hours.
            </p>
          </motion.div>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <CheckCircle className="w-16 h-16 text-[#22C55E] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-[#1a1a1a]">Thank you!</h3>
              <p className="text-[#666666]">
                We will be in touch with you shortly.
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-[#1a1a1a]">
                    Name <span className="text-[#FF5C00]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#e5e5e5] text-[#1a1a1a] placeholder:text-[#aaaaaa] focus:border-[#FF5C00] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-[#1a1a1a]">
                    Email <span className="text-[#FF5C00]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#e5e5e5] text-[#1a1a1a] placeholder:text-[#aaaaaa] focus:border-[#FF5C00] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-[#1a1a1a]">Organization</label>
                  <input
                    type="text"
                    placeholder="Your Company"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#e5e5e5] text-[#1a1a1a] placeholder:text-[#aaaaaa] focus:border-[#FF5C00] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-[#1a1a1a]">Phone</label>
                  <input
                    type="tel"
                    placeholder="+1 555 000-0000"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#e5e5e5] text-[#1a1a1a] placeholder:text-[#aaaaaa] focus:border-[#FF5C00] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-[#1a1a1a]">Project Description</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#e5e5e5] text-[#1a1a1a] placeholder:text-[#aaaaaa] focus:border-[#FF5C00] focus:outline-none transition-colors resize-none"
                />
              </div>

              <Button type="submit" variant="orange" size="lg" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Submit
              </Button>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
}
