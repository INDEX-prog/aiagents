import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20 flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-background to-navy-mid" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Content */}
          <div className="max-w-xl">
            <p className="text-accent font-body font-medium text-sm mb-4 tracking-wide">
              AI-POWERED SALES OUTREACH
            </p>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] text-white mb-6">
              Personalize outreach.
              <br />
              <span className="text-accent">Close more deals.</span>
            </h1>
            <p className="font-body text-muted text-lg leading-relaxed mb-8 max-w-[50ch]">
              AI agents that write personalized messages for every lead. 
              Built for B2B sales teams who want to convert faster.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#pricing"
                className="bg-accent hover:bg-accent/90 text-white font-body font-semibold text-base px-7 py-3.5 rounded-lg transition-colors text-center"
              >
                Start 14-Day Free Trial
              </Link>
              <Link
                href="#how-it-works"
                className="border border-white/20 hover:border-white/40 text-white font-body font-medium text-base px-7 py-3.5 rounded-lg transition-colors text-center"
              >
                See How It Works
              </Link>
            </div>

            {/* Social proof */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <div className="flex items-center gap-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <Image
                      key={i}
                      src={`https://picsum.photos/seed/avatar${i}/40/40`}
                      alt="User avatar"
                      width={40}
                      height={40}
                      className="rounded-full border-2 border-background"
                    />
                  ))}
                </div>
                <div>
                  <p className="font-body text-white text-sm font-medium">
                    Trusted by 200+ sales teams
                  </p>
                  <p className="font-body text-muted text-sm">
                    Average 3x faster response rates
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Visual */}
          <div className="relative lg:ml-auto">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-navy-mid/50 backdrop-blur-sm shadow-2xl">
              <Image
                src="https://picsum.photos/seed/aiagents-dashboard/600/450"
                alt="AIAgents dashboard showing personalized outreach"
                width={600}
                height={450}
                className="w-full h-auto"
                priority
              />
              
              {/* Floating card overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      width="20"
                      height="20"
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
                  <div>
                    <p className="font-body text-white text-sm font-medium">
                      Message personalized
                    </p>
                    <p className="font-body text-muted text-xs mt-0.5">
                      Ready to send to Sarah Chen at TechCorp
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
