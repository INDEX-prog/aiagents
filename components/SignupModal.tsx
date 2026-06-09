"use client";

import { useState, useEffect } from "react";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  planId: string;
}

export default function SignupModal({ isOpen, onClose, planId }: SignupModalProps) {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Basic validation
    if (!email || !name || !company) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      setLoading(false);
      return;
    }

    try {
      // Simulate API call - in production, this would:
      // 1. Create user account
      // 2. Create Stripe checkout session
      // 3. Redirect to Stripe
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setSuccess(true);
      
      // In production: redirect to Stripe checkout
      // window.location.href = stripeCheckoutUrl;
      
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-navy-mid border border-white/10 rounded-2xl p-8 w-full max-w-md mx-4 shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {success ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
              <svg
                width="32"
                height="32"
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
            <h3 className="font-display font-bold text-2xl text-white mb-2">
              You're all set!
            </h3>
            <p className="font-body text-muted text-sm mb-6">
              Check your email for next steps to activate your account.
            </p>
            <button
              onClick={onClose}
              className="bg-accent hover:bg-accent/90 text-white font-body font-semibold text-sm px-6 py-3 rounded-lg transition-colors"
            >
              Got it
            </button>
          </div>
        ) : (
          <>
            <h3 className="font-display font-bold text-2xl text-white mb-2">
              Start your free trial
            </h3>
            <p className="font-body text-muted text-sm mb-6">
              {planId === "starter"
                ? "Get started with the Starter plan. $99/month after trial."
                : "Contact us about the Growth plan."}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block font-body text-white text-sm mb-1.5"
                >
                  Full name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 font-body text-white text-sm placeholder:text-muted focus:border-accent focus:outline-none transition-colors"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-body text-white text-sm mb-1.5"
                >
                  Work email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 font-body text-white text-sm placeholder:text-muted focus:border-accent focus:outline-none transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block font-body text-white text-sm mb-1.5"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 font-body text-white text-sm placeholder:text-muted focus:border-accent focus:outline-none transition-colors"
                  placeholder="Acme Inc"
                />
              </div>

              {error && (
                <p className="font-body text-red-400 text-sm">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-accent hover:bg-accent/90 text-white font-body font-semibold text-sm py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-2"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "Start 14-Day Free Trial"
                )}
              </button>
            </form>

            <p className="mt-4 font-body text-muted text-xs text-center">
              By signing up, you agree to our Terms of Service and Privacy
              Policy.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
