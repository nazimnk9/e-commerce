import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Overlays from "@/components/Overlays";
import TapTop from "@/components/TapTop";
import SubscribeBox from "@/components/SubscribeBox";
import LoaderSkeleton from "@/components/LoaderSkeleton";
import ThemeScripts from "@/components/ThemeScripts";
import PageAssets from "@/components/PageAssets";
import ThemeSettings from "@/components/ThemeSettings";
import PreviewBadge from "@/components/PreviewBadge";

export const metadata: Metadata = {
  title: "Multikart - Multi-purpose E-commerce Html Template",
  description: "multikart",
  keywords: "multikart",
  authors: [{ name: "multikart" }],
  icons: {
    icon: "/assets/images/gradient/favicon.png",
    shortcut: "/assets/images/gradient/favicon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" type="text/css" href="/assets/css/vendors/font-awesome.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/vendors/remixicon.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/vendors/slick.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/vendors/animate.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/vendors/themify-icons.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/vendors/bootstrap.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/vendors/price-range.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/vendors/magnific-popup.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/vendors/prism.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/vendors/date-picker.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/pages/elements.css" />
      </head>
      <body className="theme-color-29">
        <LoaderSkeleton />
        <Header />
        {children}
        <Footer />
        <SubscribeBox />
        <Overlays />
        <ThemeSettings />
        <PreviewBadge />
        <TapTop />
        <PageAssets />
        <ThemeScripts />
      </body>
    </html>
  );
}