import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "David Bello | Full-stack Engineer & Founder",
  description: "Personal portfolio of David Bello, Full-stack Software Engineer and Founder of DBMansionlabs.",
  icons: {
    icon: '/trans-logo.png',
    shortcut: '/trans-logo.png',
    apple: '/trans-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="container main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
