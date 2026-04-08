import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/effects/SmoothScroll";
import { FloatingContact } from "@/components/effects/FloatingContact";
import "./globals.css";

// Primary body font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Display/heading font
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

// Monospace font for code/technical elements
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#030304",
};

export const metadata: Metadata = {
  title: {
    default: "RAGRATIVE | AI-First Full Stack Engineering Agency",
    template: "%s | RAGRATIVE",
  },
  description:
    "We build intelligent systems. Specializing in RAG, Agentic AI, and Full-Stack Development. Transform your business with cutting-edge AI solutions.",
  keywords: [
    "AI Agency",
    "RAG Systems",
    "Retrieval Augmented Generation",
    "Agentic AI",
    "Full Stack Development",
    "AI Consulting",
    "Machine Learning",
    "LLM Development",
    "AI Solutions",
  ],
  authors: [{ name: "RAGRATIVE" }],
  creator: "RAGRATIVE",
  publisher: "RAGRATIVE",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ragrative.com",
    siteName: "RAGRATIVE",
    title: "RAGRATIVE | AI-First Full Stack Engineering Agency",
    description:
      "We build intelligent systems. Specializing in RAG, Agentic AI, and Full-Stack Development.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RAGRATIVE - AI-First Engineering Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RAGRATIVE | AI-First Full Stack Engineering Agency",
    description:
      "We build intelligent systems. Specializing in RAG, Agentic AI, and Full-Stack Development.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[#030304] text-[#FAFAFA] antialiased">
        {/* Smooth Scroll Provider */}
        <SmoothScroll>
          {/* Noise texture overlay */}
          <div className="noise pointer-events-none fixed inset-0 z-[9998]" />

          {/* Main content */}
          <main className="relative z-10">{children}</main>

          {/* Floating contact button */}
          <FloatingContact />
        </SmoothScroll>
      </body>
    </html>
  );
}
