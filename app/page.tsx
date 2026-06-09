import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import PricingWithCheckout from "@/components/PricingWithCheckout";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustBadges />
      <Features />
      <HowItWorks />
      <Testimonials />
      <PricingWithCheckout />
      <CTA />
      <Footer />
    </main>
  );
}
