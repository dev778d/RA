"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute bottom-16 right-0 w-80 bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-5 shadow-[var(--shadow-xl)]"
          >
            <h4 className="text-lg font-semibold mb-2">Get in Touch</h4>
            <p className="text-sm text-[var(--text-secondary)] mb-4">
              Ready to transform your business with AI?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 w-full justify-center bg-[var(--accent)] text-[var(--bg-deep)] py-3 px-4 rounded-xl font-semibold text-sm hover:bg-[var(--accent-hover)] transition-colors"
            >
              <Send className="w-4 h-4" />
              Start a Conversation
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[var(--accent)] text-[var(--bg-deep)] rounded-full flex items-center justify-center shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-glow-lg)] transition-shadow cursor-pointer"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>
    </div>
  );
}
