import type { Metadata } from "next";
import { Poppins as Font } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const font = Font({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body className={font.className}>{children}</body>
      </html>
    </Providers>
  );
}
