import "./globals.css";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import HomeLoader from "./components/HomeLoader.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Hamstrong Realty Limited",
    template: "%s - Hamstrong Realty Limited",
  },
  description:
    "Hamstrong Realty Limited is a leading real estate development company dedicated to delivering exceptional residential and commercial properties that exceed our clients expectations with a passion for innovative craftiness",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer position="top-right" autoClose={3000} />
        <Suspense fallback={<HomeLoader />}>{children}</Suspense>
      </body>
    </html>
  );
}
