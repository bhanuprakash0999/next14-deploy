import type { Metadata } from "next";
// import Head from "next/head";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    absolute: "Amura Health - Web",
    default: "default main",
    template: "route"
  },
  description: "Amura can help you get healthy and stay healthy in a way that has not been possible before this. Get Healthy Now",
  openGraph : {
    images: "https://amura.ai/wp-content/uploads/2022/11/amura-logo.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
