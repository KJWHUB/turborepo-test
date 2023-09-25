import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Turborepo",
  description: "Generated by create turbo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "100px 200px",
            background: "#121212",
            fontSize: "30px",
          }}
        >
          <Link href="/">Home</Link>
          <Link href="/mypage">mypage</Link>
          <Link href="/cart">cart</Link>
          <Link href="/notice">notice</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
