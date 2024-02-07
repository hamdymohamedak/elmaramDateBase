import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "El-MaramDateBase",
  description: "El-MaramDateBase",
};

export default function RootLayout({ children }) {
  return (
    <html className="html" lang="en">
      <body className={inter.className}>{children}</body>
      <Script src="dist/notiflix-confirm-aio-X.X.X.min.js"></Script>
    <Link rel="stylesheet" href="dist/notiflix-X.X.X.min.css" />
    <Script src="dist/notiflix-X.X.X.min.js"></Script>
    <Script src="dist/notiflix-aio-X.X.X.min.js"></Script>
    </html>
  );
}
