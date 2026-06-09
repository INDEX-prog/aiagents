import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Our team went from sending 50 cold emails a day to 200 personalized ones. Response rates tripled.",
      author: "Marcus Johnson",
      role: "VP of Sales",
      company: "CloudSync",
      image: "testimonial-marcus",
    },
    {
      quote:
        "Finally, a tool that actually understands B2B sales. The AI picks up on context that matters.",
      author: "Sarah Chen",
      role: "Sales Manager",
      company: "DataFlow",
      image: "testimonial-sarah",
    },
    {
      quote:
        "We closed our largest deal because the first email felt genuinely personal. Worth every penny.",
      author: "David Park",
      role: "Account Executive",
      company: "ScaleTech",
      image: "testimonial-david",
    },
  ];

  return (
    <section className="py-24 bg-navy-dark relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-accent/5 blur-3xl rounded-full" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 mb-16">
          <div className="max-w-xl">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              Sales teams love AIAgents
            </h2>
            <p className="font-body text-muted text-lg leading-relaxed">
              Join hundreds of B2B sales professionals who use AI to have better
              conversations with their prospects.
            </p>
          </div>
          
          {/* Large metric */}
          <div className="lg:text-right">
            <p className="font-display font-bold text-5xl md:text-6xl text-accent">
              3x
            </p>
            <p className="font-body text-muted text-sm mt-1">
              average increase in response rates
            </p>
          </div>
        </div>

        {/* Testimonial cards - horizontal scroll on mobile */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background/50 border border-white/5 rounded-xl p-6 flex flex-col"
            >
              <blockquote className="font-body text-white text-base leading-relaxed mb-6 flex-grow">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <Image
                  src={`https://picsum.photos/seed/${testimonial.image}/48/48`}
                  alt={testimonial.author}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-body font-medium text-white text-sm">
                    {testimonial.author}
                  </p>
                  <p className="font-body text-muted text-xs">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
