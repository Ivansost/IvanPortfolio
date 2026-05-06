import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMonoSans = JetBrains_Mono({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Ivan Sostaric Portfolio",
  title: {
    default: "Ivan Sostaric | Computer Science Portfolio",
    template: "%s | Ivan Sostaric",
  },
  description:
    "Portfolio of Ivan Sostaric, a University of Guelph Computer Science student focused on software engineering, data analytics, machine learning, and full-stack development.",
  keywords: [
    "Ivan Sostaric",
    "computer science portfolio",
    "software engineering",
    "data analytics",
    "machine learning",
    "full-stack development",
  ],
  authors: [{ name: "Ivan Sostaric" }],
  creator: "Ivan Sostaric",
  openGraph: {
    title: "Ivan Sostaric | Computer Science Portfolio",
    description:
      "Selected projects, experience, and technical work by Ivan Sostaric.",
    type: "website",
    siteName: "Ivan Sostaric Portfolio",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ivan Sostaric | Computer Science Portfolio",
    description:
      "Selected projects, experience, and technical work by Ivan Sostaric.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html
        lang="en"
        className={`${jetbrainsMonoSans.variable} ${jetbrainsMono.variable} dark h-full antialiased`}
      >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
