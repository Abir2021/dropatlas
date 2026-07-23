"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import GuideCard from "@/components/GuideCard";
import { getAllGuides, Guide } from "@/data/guides";
import { cn } from "@/lib/utils";

const categories: (Guide["category"] | "All")[] = [
  "All",
  "L1",
  "L2",
  "DeFi",
  "Infrastructure",
  "NFT",
  "Social",
];

export default function HomePage() {
  const allGuides = getAllGuides();
  const [activeCategory, setActiveCategory] = useState<Guide["category"] | "All">("All");

  const filtered =
    activeCategory === "All"
      ? allGuides
      : allGuides.filter((g) => g.category === activeCategory);

  const featured = allGuides.slice(0, 3);

  return (
    <>
      <Hero />

      {/* Featured */}
      <section id="featured" className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-3">
            Featured <span className="text-gradient">Guides</span>
          </h2>
          <p className="text-muted max-w-xl">
            Highest potential or most actively updated strategies right now.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((guide, i) => (
            <GuideCard key={guide.slug} guide={guide} index={i} />
          ))}
        </div>
      </section>

      {/* All Guides */}
      <section id="guides" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-3">
            All <span className="text-gradient">Guides</span>
          </h2>
          <p className="text-muted">
            Filter by category. Everything is written to be actionable.
          </p>
        </motion.div>

        {/* Category pills */}
        <div id="categories" className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
                activeCategory === cat
                  ? "bg-primary/20 text-primary border border-primary/40 shadow-glow"
                  : "bg-white/5 text-muted border border-transparent hover:border-white/10 hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((guide, i) => (
            <GuideCard key={guide.slug} guide={guide} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted">
            No guides in this category yet. Check back soon.
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl p-10 sm:p-14 overflow-hidden border border-border"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4">
              New guides drop regularly
            </h2>
            <p className="text-muted mb-8 max-w-md mx-auto">
              Follow on X for the latest strategies and early alerts on high-potential opportunities.
            </p>
            <a
              href="https://x.com/DabidWm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-background font-semibold hover:bg-primary hover:text-background transition-colors"
            >
              Follow @DabidWm
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
