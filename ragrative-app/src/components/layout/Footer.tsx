import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Work", href: "/work" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
  ],
  services: [
    { label: "AI Development", href: "/services/ai" },
    { label: "RAG Systems", href: "/services/rag" },
    { label: "Full-Stack Dev", href: "/services/fullstack" },
    { label: "Consulting", href: "/services/consulting" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "GitHub", href: "https://github.com" },
];

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] border-t border-[#333]">
      <div className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-[#FF5C00] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">R</span>
                </div>
                <span className="text-xl font-bold tracking-tight text-white">RAGRATIVE</span>
              </div>
              <p className="text-white/60 mb-6 max-w-sm">
                We build intelligent systems. Specializing in RAG, Agentic AI, and Full-Stack Development.
              </p>
              <Link href="/contact">
                <Button variant="orange" showArrow>
                  Let us Talk Growth
                </Button>
              </Link>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-sm font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-[#FF5C00] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-sm font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-[#FF5C00] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-sm font-semibold mb-4 text-white">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-white/60">
                  <Mail className="w-4 h-4 text-[#FF5C00]" />
                  hello@ragrative.com
                </li>
                <li className="flex items-center gap-2 text-sm text-white/60">
                  <Phone className="w-4 h-4 text-[#FF5C00]" />
                  +1 (555) 123-4567
                </li>
              </ul>
              <div className="flex gap-4 mt-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-[#FF5C00] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-[#333] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/40">
              © 2026 RAGRATIVE. All rights reserved.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/40 hover:text-white/60 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
