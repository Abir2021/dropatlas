import { notFound } from "next/navigation";
import Link from "next/link";
import { getGuideBySlug, getAllGuides } from "@/data/guides";
import { formatDate } from "@/lib/utils";
import { ArrowLeft, Clock, Sparkles, Calendar, Tag } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return getAllGuides().map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const guide = getGuideBySlug(params.slug);
  if (!guide) return { title: "Guide not found" };
  return {
    title: `${guide.title} | DropAtlas`,
    description: guide.description,
  };
}

export default function GuidePage({ params }: Props) {
  const guide = getGuideBySlug(params.slug);
  if (!guide) notFound();

  return (
    <article className="min-h-screen pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Back */}
        <Link
          href="/#guides"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to guides
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              {guide.status}
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs bg-white/5 text-muted border border-white/5">
              {guide.chain}
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs bg-white/5 text-muted border border-white/5">
              {guide.category}
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs bg-white/5 text-muted border border-white/5">
              {guide.difficulty}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold leading-tight mb-5">
            {guide.title}
          </h1>

          <p className="text-lg text-muted leading-relaxed mb-6">
            {guide.description}
          </p>

          <div className="flex flex-wrap items-center gap-5 text-sm text-muted">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium">{guide.potential}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {guide.readingTime}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              Updated {formatDate(guide.updatedAt)}
            </span>
          </div>

          {guide.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mt-5">
              <Tag className="w-3.5 h-3.5 text-muted" />
              {guide.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-md text-xs bg-white/5 text-muted"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-10" />

        {/* Content */}
        <div className="prose-guide">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {guide.content}
          </ReactMarkdown>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-6 rounded-2xl border border-border bg-surface/50 text-center">
          <p className="text-muted mb-4">
            Found this useful? Share it and follow for more guides.
          </p>
          <a
            href="https://x.com/DabidWm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-5 py-2.5 rounded-full text-sm font-medium bg-primary/15 text-primary border border-primary/30 hover:bg-primary/25 transition-colors"
          >
            Follow @DabidWm on X
          </a>
        </div>
      </div>
    </article>
  );
}
