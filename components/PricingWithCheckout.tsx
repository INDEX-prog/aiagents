"use client";

import { useState } from "react";
import SignupModal from "./SignupModal";

export default function PricingWithCheckout() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("starter");
  const [loading, setLoading] = useState<string | null>(null);

  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small sales teams getting started with AI outreach.",
      features: [
        "Up to 10 users",
        "500 personalized messages/month",
        "LinkedIn + company data",
        "Email support",
        "Basic analytics",
      ],
      cta: "Start Free Trial",
      popular: true,
      planId: "starter",
    },
    {
      name: "Growth",
      price: "$249",
      period: "/month",
      description: "For scaling teams that need more volume and advanced features.",
      features: [
        "Up to 25 users",
        "2,000 personalized messages/month",
        "CRM integrations",
        "Priority support",
        "Advanced analytics",
        "Custom templates",
      ],
      cta: "Contact Sales",
      popular: false,
      planId: "growth",
    },
  ];

  const handleSelectPlan = (planId: string): void => {
    setSelectedPlan(planId);
    setModalOpen(true);
  };

  return (
    <>
      <section id="pricing" className="py-24 bg-background relative">
        <div className="mx-auto max-w-5xl px-6">
          {/* Section header - centered for pricing */}
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              Simple, transparent pricing
            </h2>
            <p className="font-body text-muted text-lg max-w-xl mx-auto">
              Start with a 14-day free trial. No credit card required.
            </p>
          </div>

          {/* Pricing cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 ${
                  plan.popular
                    ? "bg-accent/10 border-2 border-accent"
                    : "bg-navy-mid/50 border border-white/10"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white font-body font-medium text-xs px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}

                <div className="mb-6">
                  <h3 className="font-display font-semibold text-xl text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="font-body text-muted text-sm">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  <span className="font-display font-bold text-4xl text-white">
                    {plan.price}
                  </span>
                  <span className="font-body text-muted text-sm">
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-accent flex-shrink-0 mt-0.5"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="font-body text-white text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleSelectPlan(plan.planId)}
                  disabled={loading === plan.planId}
                  className={`w-full py-3 rounded-lg font-body font-semibold text-sm transition-colors ${
                    plan.popular
                      ? "bg-accent hover:bg-accent/90 text-white"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>

          {/* Enterprise note */}
          <div className="mt-12 text-center">
            <p className="font-body text-muted text-sm">
              Need more than 25 users?{" "}
              <a href="#contact" className="text-accent hover:underline">
                Contact us for Enterprise pricing
              </a>
            </p>
          </div>
        </div>
      </section>

      <SignupModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        planId={selectedPlan}
      />
    </>
  );
}
