import "./globals.css";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import HomeLoader from "./components/HomeLoader.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hamstrong Realty",
  description:
    "Your Number One Destination for All Your Home Essentials, Where Comfort and Quality Meet",
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
