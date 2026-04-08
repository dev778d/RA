"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  ArrowRight,
  Calendar,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@ragrative.com",
    href: "mailto:hello@ragrative.com",
    description: "Send us an email anytime",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
    description: "Mon-Fri from 9am to 6pm",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: "#",
    description: "Remote-first team globally",
  },
];

const serviceOptions = [
  "RAG Systems",
  "Agentic AI",
  "Full-Stack Development",
  "AI Consulting",
  "Other",
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[#030304] relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-1/4 w-[500px] h-[500px] rounded-full bg-[#00D9FF]/5 blur-[120px]" />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6">
              <MessageSquare className="h-4 w-4 text-[#00D9FF]" />
              <span className="text-sm text-[#A1A1AA]">Let&apos;s Talk</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#FAFAFA] mb-6">
              Start a
              <span className="text-gradient"> Conversation</span>
            </h1>
            <p className="text-lg text-[#A1A1AA] max-w-xl mx-auto">
              Ready to transform your business with AI? Get in touch and let&apos;s
              discuss how we can help build something intelligent together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={containerRef} className="section bg-[#080809]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex items-center justify-center min-h-[500px]"
                >
                  <div className="text-center max-w-md">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#22C55E]/20 border border-[#22C55E]/30 mb-6">
                      <CheckCircle2 className="h-10 w-10 text-[#22C55E]" />
                    </div>
                    <h3 className="text-3xl font-display font-bold text-[#FAFAFA] mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-[#A1A1AA] mb-8">
                      Thank you for reaching out. We&apos;ll review your message and
                      get back to you within 24 hours.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormState({
                          name: "",
                          email: "",
                          company: "",
                          service: "",
                          budget: "",
                          message: "",
                        });
                      }}
                    >
                      Send Another Message
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <div className="bg-[#111113] border border-[rgba(255,255,255,0.06)] rounded-2xl p-8 lg:p-10">
                  <h2 className="text-2xl font-display font-bold text-[#FAFAFA] mb-2">
                    Tell us about your project
                  </h2>
                  <p className="text-[#71717A] mb-8">
                    Fill out the form below and we&apos;ll get back to you shortly.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-[#FAFAFA] mb-2"
                        >
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3.5 rounded-xl bg-[#080809] border border-[rgba(255,255,255,0.08)] text-[#FAFAFA] placeholder:text-[#52525B] focus:outline-none focus:border-[#00D9FF]/50 transition-colors"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-[#FAFAFA] mb-2"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3.5 rounded-xl bg-[#080809] border border-[rgba(255,255,255,0.08)] text-[#FAFAFA] placeholder:text-[#52525B] focus:outline-none focus:border-[#00D9FF]/50 transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-[#FAFAFA] mb-2"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#080809] border border-[rgba(255,255,255,0.08)] text-[#FAFAFA] placeholder:text-[#52525B] focus:outline-none focus:border-[#00D9FF]/50 transition-colors"
                        placeholder="Your Company"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="service"
                          className="block text-sm font-medium text-[#FAFAFA] mb-2"
                        >
                          Service Interested In *
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formState.service}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3.5 rounded-xl bg-[#080809] border border-[rgba(255,255,255,0.08)] text-[#FAFAFA] focus:outline-none focus:border-[#00D9FF]/50 transition-colors appearance-none cursor-pointer"
                        >
                          <option value="" className="bg-[#111113]">Select a service</option>
                          {serviceOptions.map((option) => (
                            <option key={option} value={option} className="bg-[#111113]">
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="budget"
                          className="block text-sm font-medium text-[#FAFAFA] mb-2"
                        >
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formState.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 rounded-xl bg-[#080809] border border-[rgba(255,255,255,0.08)] text-[#FAFAFA] focus:outline-none focus:border-[#00D9FF]/50 transition-colors appearance-none cursor-pointer"
                        >
                          <option value="" className="bg-[#111113]">Select budget range</option>
                          <option value="10k-25k" className="bg-[#111113]">$10,000 - $25,000</option>
                          <option value="25k-50k" className="bg-[#111113]">$25,000 - $50,000</option>
                          <option value="50k-100k" className="bg-[#111113]">$50,000 - $100,000</option>
                          <option value="100k+" className="bg-[#111113]">$100,000+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-[#FAFAFA] mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#080809] border border-[rgba(255,255,255,0.08)] text-[#FAFAFA] placeholder:text-[#52525B] focus:outline-none focus:border-[#00D9FF]/50 transition-colors resize-none"
                        placeholder="Tell us about your project, goals, and timeline..."
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="glow"
                      size="xl"
                      className="w-full"
                      loading={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      {!isSubmitting && <Send className="h-4 w-4" />}
                    </Button>

                    <p className="text-xs text-[#52525B] text-center">
                      By submitting this form, you agree to our{" "}
                      <a href="/privacy" className="text-[#00D9FF] hover:underline">
                        Privacy Policy
                      </a>
                      .
                    </p>
                  </form>
                </div>
              )}
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Quick Connect Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#00D9FF]/10 to-[#10B981]/10 border border-[#00D9FF]/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#00D9FF]/20">
                    <Calendar className="h-5 w-5 text-[#00D9FF]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#FAFAFA]">Prefer a call?</h3>
                    <p className="text-sm text-[#71717A]">Book a free consultation</p>
                  </div>
                </div>
                <Button variant="glow" size="lg" className="w-full" asChild>
                  <a href="#schedule" className="group">
                    Schedule a Meeting
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <h3 className="text-lg font-display font-bold text-[#FAFAFA]">
                  Get in Touch
                </h3>
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-start gap-4 p-4 rounded-xl bg-[#111113] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.12)] transition-colors group"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#080809] border border-[rgba(255,255,255,0.06)]">
                      <info.icon className="h-5 w-5 text-[#00D9FF]" />
                    </div>
                    <div>
                      <div className="text-xs text-[#52525B] uppercase tracking-wider mb-1">
                        {info.label}
                      </div>
                      <div className="text-[#FAFAFA] font-medium group-hover:text-[#00D9FF] transition-colors">
                        {info.value}
                      </div>
                      <div className="text-xs text-[#71717A] mt-0.5">
                        {info.description}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Response Time */}
              <div className="p-6 rounded-2xl bg-[#111113] border border-[rgba(255,255,255,0.06)]">
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles className="h-5 w-5 text-[#F5A623]" />
                  <span className="text-sm font-semibold text-[#FAFAFA]">Fast Response</span>
                </div>
                <p className="text-sm text-[#71717A]">
                  We typically respond within <span className="text-[#00D9FF] font-medium">24 hours</span> during
                  business days. For urgent matters, please call us directly.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
