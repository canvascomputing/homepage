import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "../config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${siteConfig.name} - ${siteConfig.tagline}`,
  description: siteConfig.description,
  keywords: "AI security, cybersecurity, democracy protection, malware analysis, threat detection, open-source security",
  authors: [{ name: siteConfig.founder.name }, { name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    type: "website",
    url: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b-4 border-[#374049] z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-3">
                <img src="/logo.png" alt="Canvas Computing" className="h-10 w-10" />
                <span className="text-xl font-bold text-[#374049]">{siteConfig.name}</span>
              </div>
              <div className="flex items-center space-x-6">
                <img src="/europe.png" alt="European Union" className="h-6 w-9" />
                <nav className="hidden md:flex space-x-8">
                <a href="#malwi" className="text-[#3D709B] hover:text-[#374049] font-medium transition-colors">malwi</a>
                <a href="#contact" className="text-[#3D709B] hover:text-[#374049] font-medium transition-colors">Contact</a>
                <a href={siteConfig.githubUrl} target="_blank" rel="noopener noreferrer" className="text-[#3D709B] hover:text-[#374049] font-medium transition-colors">GitHub</a>
              </nav>
              </div>
            </div>
          </div>
        </header>
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
