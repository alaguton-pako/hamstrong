import "./globals.css";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import HomeLoader from "./components/HomeLoader.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hamstrong Realty Limited",
  description:
    "Hamstrong Realty Limited is a leading real estate development company dedicated to delivering exceptional residential and commercial properties that exceed our clients expectations with a passion for innovative craftiness",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<HomeLoader />}>{children}</Suspense>
      </body>
    </html>
  );
}
