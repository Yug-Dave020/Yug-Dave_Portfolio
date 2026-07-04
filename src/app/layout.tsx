import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { ContentProtection } from "@/components/ContentProtection";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Yug Dave - Full-stack Engineer",
  description: "Personal portfolio of Yug Dave, Full-stack engineer building AI-native products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${robotoMono.variable} font-sans antialiased bg-background text-foreground min-h-screen selection:bg-accent/30`}
      >
        <ContentProtection />
        {children}
      </body>
    </html>
  );
}
