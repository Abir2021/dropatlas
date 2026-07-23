"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: "Guides" },
    { href: "/#featured", label: "Featured" },
    { href: "/#categories", label: "Categories" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "glass-strong py-3 shadow-lg shadow-black/20"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-glow">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-secondary blur-md opacity-40 group-hover:opacity-70 transition-opacity" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight">
              <span className="text-white">Drop</span>
              <span className="text-gradient">Atlas</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-muted hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://x.com/DabidWm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-primary transition-colors"
            >
              @DabidWm
            </a>
            <Link
              href="/#guides"
              className="px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 text-primary hover:from-primary/30 hover:to-secondary/30 transition-all"
            >
              Browse Guides
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-muted hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-72 glass-strong p-6 pt-20 flex flex-col gap-2"
            >
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-lg text-white/90 hover:text-primary hover:bg-white/5 rounded-xl transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-auto pt-6 border-t border-border">
                <a
                  href="https://x.com/DabidWm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-muted hover:text-primary"
                >
                  Follow @DabidWm
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
