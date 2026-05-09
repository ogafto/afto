import type { Metadata } from "next";
import KontaktPageClient from "../components/KontaktPageClient";
import { siteConfig } from "../lib/seo";

export const metadata: Metadata = {
  title: "afto.works - Kontakt",
  description: "Masz pomysł na projekt? Skontaktuj się i umów konsultację designu strony, UI/UX lub brandingu.",
  alternates: {
    canonical: "/kontakt",
  },
  openGraph: {
    title: `Kontakt – ${siteConfig.name}`,
    description: "Porozmawiajmy o Twoim projekcie i zamieńmy pomysł w dopracowany design.",
    url: "/kontakt",
    images: [siteConfig.ogImage],
  },
};

export default function KontaktPage() {
  return <KontaktPageClient />;
}
