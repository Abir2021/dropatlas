"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowUpRight, Sparkles } from "lucide-react";
import { Guide } from "@/data/guides";
import { formatDate, cn } from "@/lib/utils";

const statusColors: Record<Guide["status"], string> = {
  Active: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  Confirmed: "bg-primary/15 text-primary border-primary/30",
  Rumored: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  Ended: "bg-white/5 text-muted border-white/10",
};

const difficultyColors: Record<Guide["difficulty"], string> = {
  Easy: "text-emerald-400",
  Medium: "text-amber-400",
  Hard: "text-rose-400",
};

type Props = {
  guide: Guide;
  index?: number;
};

export default function GuideCard({ guide, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link href={`/guides/${guide.slug}`} className="block group h-full">
        <article
          className={cn(
            "relative h-full rounded-2xl overflow-hidden border border-border",
            "bg-surface/80 hover:bg-surface-elevated transition-all duration-300",
            "hover:border-primary/30 hover:shadow-glow hover:-translate-y-1"
          )}
        >
          {/* Gradient header */}
          <div
            className={cn(
              "h-28 relative overflow-hidden bg-gradient-to-br",
              guide.coverGradient
            )}
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
            <div className="absolute top-3 left-3 flex gap-2">
              <span
                className={cn(
                  "px-2.5 py-0.5 rounded-full text-[11px] font-medium border",
                  statusColors[guide.status]
                )}
              >
                {guide.status}
              </span>
            </div>
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          <div className="p-5">
            <div className="flex items-center gap-2 mb-3 text-xs text-muted">
              <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5">
                {guide.chain}
              </span>
              <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5">
                {guide.category}
              </span>
              <span className={cn("ml-auto font-medium", difficultyColors[guide.difficulty])}>
                {guide.difficulty}
              </span>
            </div>

            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
              {guide.title}
            </h3>

            <p className="text-sm text-muted line-clamp-2 mb-4 leading-relaxed">
              {guide.description}
            </p>

            <div className="flex items-center justify-between text-xs text-muted pt-3 border-t border-border">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-primary/70" />
                <span className="text-primary/90 font-medium">{guide.potential}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {guide.readingTime}
                </span>
                <span>{formatDate(guide.updatedAt)}</span>
              </div>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
