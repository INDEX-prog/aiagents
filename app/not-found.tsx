import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main>
      <Header />
      <section className="min-h-[80vh] pt-32 pb-24 flex items-center justify-center">
        <div className="mx-auto max-w-xl px-6 text-center">
          <p className="font-display font-bold text-8xl text-accent mb-4">
            404
          </p>
          <h1 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
            Page not found
          </h1>
          <p className="font-body text-muted text-lg mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-block bg-accent hover:bg-accent/90 text-white font-body font-semibold text-sm px-6 py-3 rounded-lg transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
