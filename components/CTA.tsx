import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 bg-navy-mid relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
          Ready to transform your sales outreach?
        </h2>
        <p className="font-body text-muted text-lg max-w-2xl mx-auto mb-10">
          Join 200+ sales teams using AI to write better emails and close more
          deals. Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#pricing"
            className="bg-accent hover:bg-accent/90 text-white font-body font-semibold text-base px-8 py-4 rounded-lg transition-colors"
          >
            Start Free 14-Day Trial
          </Link>
          <Link
            href="#contact"
            className="border border-white/20 hover:border-white/40 text-white font-body font-medium text-base px-8 py-4 rounded-lg transition-colors"
          >
            Schedule a Demo
          </Link>
        </div>

        <p className="mt-6 font-body text-muted text-sm">
          No credit card required. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
