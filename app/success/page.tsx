import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Welcome to AIAgents | Your Trial Has Started",
  description: "Your 14-day free trial is now active. Get started with AI-powered sales outreach.",
};

export default function SuccessPage() {
  return (
    <main>
      <Header />
      <section className="min-h-[80vh] pt-32 pb-24 flex items-center justify-center">
        <div className="mx-auto max-w-xl px-6 text-center">
          {/* Success icon */}
          <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-8">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-accent"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>

          <h1 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            Welcome to AIAgents!
          </h1>
          <p className="font-body text-muted text-lg leading-relaxed mb-8">
            Your 14-day free trial is now active. We&apos;ve sent setup instructions to your email.
          </p>

          <div className="bg-navy-mid/50 border border-white/10 rounded-xl p-6 mb-8">
            <h2 className="font-display font-semibold text-lg text-white mb-4">
              Next steps
            </h2>
            <ul className="space-y-3 text-left">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="font-display font-bold text-accent text-xs">1</span>
                </span>
                <span className="font-body text-white text-sm">
                  Check your email for login credentials
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="font-display font-bold text-accent text-xs">2</span>
                </span>
                <span className="font-body text-white text-sm">
                  Upload your first batch of leads
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="font-display font-bold text-accent text-xs">3</span>
                </span>
                <span className="font-body text-white text-sm">
                  Watch the AI generate personalized messages
                </span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-accent hover:bg-accent/90 text-white font-body font-semibold text-sm px-6 py-3 rounded-lg transition-colors"
            >
              Go to Dashboard
            </Link>
            <Link
              href="/"
              className="border border-white/20 hover:border-white/40 text-white font-body font-medium text-sm px-6 py-3 rounded-lg transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
