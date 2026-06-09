import Image from "next/image";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Upload your leads",
      description:
        "Import from CSV or connect your CRM. We support Salesforce, HubSpot, and more.",
    },
    {
      number: "02",
      title: "AI analyzes each prospect",
      description:
        "Our agents research company data, LinkedIn profiles, and recent news automatically.",
    },
    {
      number: "03",
      title: "Get personalized messages",
      description:
        "Review AI-generated outreach tailored to each lead's context and pain points.",
    },
    {
      number: "04",
      title: "Send and track results",
      description:
        "Launch campaigns and monitor opens, replies, and conversions in real-time.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-background relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="https://picsum.photos/seed/aiagents-process/560/420"
                alt="AIAgents workflow interface"
                width={560}
                height={420}
                className="w-full h-auto"
              />
            </div>
            
            {/* Stats card */}
            <div className="absolute -bottom-6 -right-6 bg-navy-mid border border-white/10 rounded-xl p-5 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-accent"
                  >
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <div>
                  <p className="font-display font-bold text-2xl text-white">
                    85%
                  </p>
                  <p className="font-body text-muted text-sm">Time saved</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Steps */}
          <div className="order-1 lg:order-2">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-12">
              From lead list to personalized outreach in minutes
            </h2>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-5">
                  <div className="flex-shrink-0">
                    <span className="font-display font-bold text-accent text-lg">
                      {step.number}
                    </span>
                  </div>
                  <div className="pt-0.5">
                    <h3 className="font-display font-semibold text-lg text-white mb-1">
                      {step.title}
                    </h3>
                    <p className="font-body text-muted text-sm leading-relaxed max-w-[45ch]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
