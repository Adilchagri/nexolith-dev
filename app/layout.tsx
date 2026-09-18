import type { Metadata } from "next";
import { Space_Grotesk, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ClientShell } from "@/components/navigation/ClientShell";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic", "normal"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nexolith.dev'),
  title: "NEXOLITH DEV — Digital Products, Web, Mobile & AI",
  description:
    "NEXOLITH DEV conçoit et développe des sites web d'exception, applications mobiles et solutions intelligentes. Three engineers from nowhere, building something for everywhere.",
  keywords: [
    "NEXOLITH DEV",
    "Digital Studio",
    "Web Development",
    "Mobile Apps",
    "Computer Vision",
    "Deep Learning",
    "UI/UX Design",
    "Next.js",
    "React Native",
  ],
  authors: [{ name: "NEXOLITH DEV (Adil Chagri & Amine Bazaoui)" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "NEXOLITH DEV — Digital Products, Web, Mobile & AI",
    description:
      "Studio d'ingénierie digitale et d'intelligence artificielle. Des idées. Des solutions. Un impact réel.",
    url: "https://nexolith.dev",
    siteName: "NEXOLITH DEV",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/brand/nexolith-badge.jpg",
        width: 1200,
        height: 630,
        alt: "NEXOLITH DEV — Digital Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXOLITH DEV — Digital Products, Web, Mobile & AI",
    description:
      "Three engineers from nowhere, building something for everywhere.",
    images: ["/brand/nexolith-badge.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${spaceGrotesk.variable} ${inter.variable} ${playfair.variable} scroll-smooth dark`}
    >
      <body className="font-sans antialiased bg-nexolith-dark text-nexolith-white min-h-screen">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
