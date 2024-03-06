"use client";
import "./globals.css";
import localFont from "next/font/local";

const inter = localFont({
  src: [
    {
      path: "./fonts/Inter-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Inter-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Inter-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Inter-Medium.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Inter-Regular.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Inter-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Inter-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--Font-Primary",
});

const pacifico = localFont({
  src: [
    {
      path: "./fonts/Pacifico-Regular.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--Font-Secondary",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${pacifico.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
