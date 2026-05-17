import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeScript } from "./components/theme-script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nur Ain Najwa | Mobile & Web Developer",
  description:
    "Final-year Netcentric Computing student (CGPA 3.71) seeking Software Developer internship Sep–Dec 2026. Flutter, Firebase, Next.js portfolio.",
  keywords: [
    "software developer internship",
    "Flutter developer Malaysia",
    "mobile developer",
    "UiTM",
    "Nur Ain Najwa",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <ThemeScript />
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
