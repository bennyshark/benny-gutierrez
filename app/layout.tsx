import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "../components/common/Navbar";
import BgOrbs from "../components/common/BgOrbs";
import GridBackground from "../components/common/GridBackground";
import { LightboxProvider } from "../components/common/LightboxProvider";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Benedict Gutierrez - Web & ML Developer",
  description: "Portfolio of Benedict Gutierrez - Web Developer and Machine Learning Engineer specializing in scalable applications and AI integrations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} antialiased bg-bg-base text-text-primary font-body`}
      >
        <LightboxProvider>
          <GridBackground />
          <BgOrbs />
          <Navbar />
          <main className="relative z-10">
            {children}
          </main>
        </LightboxProvider>
      </body>
    </html>
  );
}
