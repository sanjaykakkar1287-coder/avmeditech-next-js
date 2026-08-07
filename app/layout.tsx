import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../Components/layout/footer/footer.css";
import Header from "../Components/layout/header/Header";
import Footer from "../Components/layout/footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from "@/Components/layout/modal/Modal";
import BootstrapProvider from "./BootstrapProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "AV Meditech",
    template: "%s | AV Meditech",
  },
  description: "Leading Ophthalmic Solutions",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
          <BootstrapProvider />
        <Header />
        {children}
        <Footer />
        <Modal />
      </body>
    </html>
  );
}
