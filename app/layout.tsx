import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AIAgents | Boost B2B Sales with Specialized AI Agents",
  description:
    "Transform your sales process with AI agents that personalize outreach and boost conversion rates. Built for mid-sized B2B tech and SaaS sales teams.",
  keywords: ["AI", "B2B sales", "sales automation", "outreach personalization", "SaaS"],
  openGraph: {
    title: "AIAgents | Boost B2B Sales with Specialized AI Agents",
    description:
      "Transform your sales process with AI agents that personalize outreach and boost conversion rates.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${sora.variable} ${plusJakarta.variable}`}>
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
