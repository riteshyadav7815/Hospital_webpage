import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import BackToTop from "@/components/layout/BackToTop";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: '--font-sans' });

export const metadata: Metadata = {
  title: "Prince Hospital | Advanced Multi-Specialty Care in Shekhawati",
  description: "Prince Hospital offers 700+ beds, advanced diagnostics, and 24/7 emergency services. Book appointment online or call 72300 90108.",
  keywords: ["hospital", "multi-specialty", "emergency", "Shekhawati", "Rajasthan", "healthcare"],
  authors: [{ name: "Prince Hospital" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://princehospital.in",
    title: "Prince Hospital | Advanced Multi-Specialty Care in Shekhawati",
    description: "Advanced healthcare with modern facilities in Rajasthan",
    siteName: "Prince Hospital",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", inter.variable)}>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <BackToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}