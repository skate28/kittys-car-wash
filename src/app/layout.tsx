import type { Metadata, Viewport } from "next";
import { Bowlby_One, Shrikhand, Work_Sans } from "next/font/google";
import type { CSSProperties, ReactNode } from "react";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { MobileBar } from "@/components/mobile-bar";
import { focusRing } from "@/components/styles";
import { SudsBubbleOverlay } from "@/components/suds-bubbles";
import { site } from "@/content";
import type { Palette } from "@/content/types";
import { cn } from "@/lib/cn";
import { allowIndexing } from "@/lib/indexing";
import { primaryNav } from "@/lib/nav";
import { getSiteUrl } from "@/lib/site-url";

import "./globals.css";

const display = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display-face",
  display: "swap",
});

const sans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans-face",
  display: "swap",
});

const script = Shrikhand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script-face",
  display: "swap",
});

function paletteStyle(palette: Palette | undefined): CSSProperties | undefined {
  if (!palette) return undefined;
  return {
    "--fs-ink": palette.ink,
    "--fs-brand": palette.brand,
    "--fs-brand-deep": palette.brandDeep,
    "--fs-teal": palette.accent,
    "--fs-mustard": palette.mustard,
    "--fs-cream": palette.cream,
    "--fs-paper": palette.paper,
  } as CSSProperties;
}

const title = site.seo.title.trim() || site.name;
const description = site.seo.description.trim() || site.description;

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: { default: title, template: `%s · ${site.name}` },
  description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    title,
    description,
    url: "/",
  },
  twitter: { card: "summary_large_image", title, description },
  alternates: { canonical: "/" },
  robots: allowIndexing()
    ? { index: true, follow: true }
    : { index: false, follow: false, googleBot: { index: false, follow: false } },
  formatDetection: { telephone: true, address: true },
};

export const viewport: Viewport = {
  themeColor: site.palette?.brand ?? "#0077b6",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={cn(display.variable, sans.variable, script.variable, "h-full")}
      style={paletteStyle(site.palette)}
    >
      <body className="min-h-full overflow-x-clip bg-cream font-sans text-ink antialiased">
        <a
          href="#content"
          className={cn(
            "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-ink focus:px-4 focus:py-3 focus:text-cream",
            focusRing,
          )}
        >
          Skip to content
        </a>
        <Header links={primaryNav()} />
        {children}
        <Footer />
        <SudsBubbleOverlay />
        <MobileBar />
        <JsonLd />
      </body>
    </html>
  );
}
