import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Unlock the Power of Home Buyer Insights | OpenHouse.ai",
  description:
    "With accurate demand prediction and on-demand intelligence, we help you understand buyers' needs like no one else, empowering confident decisions and predictable operations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background antialiased font-popins">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
