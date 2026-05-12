import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { siteConfig } from "./lib/seo";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Strony internetowe i UI/UX`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  keywords: siteConfig.keywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Strony internetowe i UI/UX`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Strony internetowe i UI/UX`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className="relative flex min-h-dvh flex-col overflow-x-hidden bg-black text-white antialiased">
        <div className="pointer-events-none fixed inset-0 -z-10 h-full w-full overflow-hidden">
          <img
            src="/bg-hero.jpg"
            alt=""
            className="h-full w-full select-none object-cover object-center"
            draggable="false"
          />
          <div className="pointer-events-none absolute inset-0 bg-black/10 sm:backdrop-blur-[1px]" />
        </div>

        <Navbar />
        <div className="min-h-0 flex-1">{children}</div>
        <Footer />
        <Analytics />
        <SpeedInsights/>
      </body>
    </html>
  );
}