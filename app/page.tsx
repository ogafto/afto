import type { Metadata } from "next";
import HomePage from "./components/HomePage";
import { siteConfig } from "./lib/seo";

export const metadata: Metadata = {
  title: "Start",
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} | Strony internetowe i UI/UX`,
    description: siteConfig.description,
    url: "/",
    images: [siteConfig.ogImage],
  },
};

export default function Page() {
  return <HomePage />;
}
