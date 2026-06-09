import Header from "@/components/Header";
import PricingWithCheckout from "@/components/PricingWithCheckout";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Pricing | AIAgents",
  description: "Simple, transparent pricing for AI-powered sales outreach. Start your 14-day free trial today.",
};

export default function PricingPage() {
  return (
    <main>
      <Header />
      <div className="pt-20">
        <PricingWithCheckout />
        <CTA />
      </div>
      <Footer />
    </main>
  );
}
