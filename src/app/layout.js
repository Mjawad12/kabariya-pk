import Navbar from "@/Components/Navbar";
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

const midan = localFont({
  src: [
    {
      path: "./fonts/Midan-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--Font-Urdu",
});

const openSans = localFont({
  src: [
    {
      path: "./fonts/OpenSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--Font-openSans",
});
const nastaleeq = localFont({
  src: [
    {
      path: "./fonts/JameelNooriNastaleeq.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--Font-Nast",
});

export const metadata = {
  title: "Kabariya",
  description:
    "Kabariya is a secure online platform dedicated to the selling of scrap materials. Our mission is to minimize the accumulation of unwanted and non-essential metals through recycling.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${pacifico.variable} ${inter.variable} ${midan.variable} ${openSans.variable} ${nastaleeq.variable}`}
      >
        <Navbar />

        {children}
      </body>
    </html>
  );
}
