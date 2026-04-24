import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import AppShell from "@/components/AppShell";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const GA_MEASUREMENT_ID = "G-GZNDP4W4JD";

export const metadata: Metadata = {
  title: {
    default: "Pawbiotics | Trusted Pet Health & Probiotics for Dogs and Cats",
    template: "%s | Pawbiotics",
  },
  description:
    "Pawbiotics.us is your trusted guide to pet health, probiotics, and wellness for dogs and cats. Vet-informed, easy-to-understand advice.",
  metadataBase: new URL("https://pawbiotics.us"),
  verification: {
    google: "_Z4XXvEQxL7T8cK1dPSaoMn9m9XA1MRzwxF3pmuXvjI",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${playfairDisplay.variable} flex min-h-screen flex-col`}
      >
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
