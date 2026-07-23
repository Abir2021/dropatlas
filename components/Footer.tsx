import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-display font-bold">
              <span className="text-white">Drop</span>
              <span className="text-gradient">Atlas</span>
            </span>
          </div>

          <p className="text-sm text-muted text-center max-w-md">
            Educational airdrop guides only. Not financial advice. Always DYOR.
            Strategies change — check official sources.
          </p>

          <div className="flex items-center gap-4 text-sm text-muted">
            <a
              href="https://x.com/DabidWm"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Twitter / X
            </a>
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted/60">
          Built for the community · Updated regularly · © {new Date().getFullYear()} DropAtlas
        </div>
      </div>
    </footer>
  );
}
