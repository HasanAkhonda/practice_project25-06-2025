import type { Metadata } from "next";
import "./globals.css";
import { AppConfig } from "@/config/app.config";
import Footer from "@/components/footer/Footer";
import Topbar from "@/components/Home/topbar/Topbar";

export const metadata: Metadata = {
  title: AppConfig().app.name,
  description: AppConfig().app.slogan,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Topbar />
      <body>{children}</body>
      <Footer />
    </html>
  );
}
