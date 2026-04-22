import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
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

export const metadata: Metadata = {
  title: {
    default: "Pawbiotics | Trusted Pet Health & Probiotics for Dogs and Cats",
    template: "%s | Pawbiotics",
  },
  description:
    "Pawbiotics.us is your trusted guide to pet health, probiotics, and wellness for dogs and cats. Vet-informed, easy-to-understand advice.",
  metadataBase: new URL("https://pawbiotics.us"),
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
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
