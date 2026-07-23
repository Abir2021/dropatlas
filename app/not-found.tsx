import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-display font-bold text-gradient mb-4">404</h1>
        <p className="text-muted mb-8">This guide doesn't exist (yet).</p>
        <Link
          href="/"
          className="px-6 py-3 rounded-full bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30 transition-colors"
        >
          Back to all guides
        </Link>
      </div>
    </div>
  );
}
