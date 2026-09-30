import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Fractional DevRel for developer-tool teams. I help developers go from curious to shipped: docs, demos, onboarding, and community.";

export const metadata: Metadata = {
  metadataBase: new URL("https://devrel.van.codes"),
  title: "Vanshika Rana, fractional DevRel",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Vanshika Rana, fractional DevRel",
    description,
    url: "https://devrel.van.codes",
    siteName: "Vanshika Rana",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vanshika Rana, fractional DevRel",
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg font-sans text-ink">
        <a
          href="#content"
          className="absolute left-4 top-4 z-[60] -translate-y-24 bg-inverse px-4 py-2 text-sm text-on-inverse focus:translate-y-0"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
