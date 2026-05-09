import type { Metadata } from "next";
import PortfolioGrid from "../components/PortfolioGrid";
import { siteConfig } from "../lib/seo";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Przegladaj portfolio realizacji Aftobrowser: strony internetowe, branding i projekty wizualne.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: `Portfolio | ${siteConfig.name}`,
    description: "Realizacje i case studies projektow Aftobrowser.",
    url: "/portfolio",
    images: [siteConfig.ogImage],
  },
};

export default function PortfolioPage() {
  return (
    <main className="flex min-h-full flex-col pt-4 sm:pt-6 lg:pt-[32px]">
      <PortfolioGrid />
    </main>
  );
}
