import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/NavbarNew";
import { Footer } from "@/components/layout/FooterNew";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { SnapScrollProvider } from "@/components/providers/SnapScrollProvider";
import BackToTop from "@/components/layout/BackToTop";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: '--font-sans' });

export const metadata: Metadata = {
  title: "Prince Hospital | Next-Gen Healthcare Excellence",
  description: "Experience the future of healthcare. Advanced multi-specialty hospital with 700+ beds, expert doctors, and 24/7 emergency services.",
  keywords: ["hospital", "healthcare", "emergency", "specialists", "medical care"],
  authors: [{ name: "Prince Hospital" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://princehospital.in",
    title: "Prince Hospital | Next-Gen Healthcare Excellence",
    description: "Advanced healthcare with cutting-edge facilities and compassionate care",
    siteName: "Prince Hospital",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans scroll-smooth", inter.variable)}>
      <body className={cn(inter.className, "bg-slate-950 text-white")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SnapScrollProvider>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
              <BackToTop />
            </div>
          </SnapScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
