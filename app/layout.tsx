import type { Metadata } from "next";
import "./globals.scss";
import { inter } from "./fonts";

export const metadata: Metadata = {
  title: "CRM example",
  description: "CRM for study",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} >{children}</body>
    </html>
  );
}
