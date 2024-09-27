import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/navbar/Header";
import StairTransition from "@/components/animation/StairTransition";
import PageTransition from "@/components/animation/PageTransition";

export const metadata: Metadata = {
  title: "Green Threads",
  description: "A website help reduce waste from manufacturing and increase profits of the manufacturer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-primary text-white">
        <Header />
        <StairTransition />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
      </body>
    </html>
  );
}
