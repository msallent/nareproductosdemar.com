import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const helveticaNeue = localFont({
  src: [
    {
      path: "../assets/fonts/HelveticaNeue-Light.woff2",
      style: "normal",
      weight: "300",
    },
    {
      path: "../assets/fonts/HelveticaNeue-Regular.woff2",
      style: "normal",
      weight: "400",
    },
    {
      path: "../assets/fonts/HelveticaNeue-Medium.woff2",
      style: "normal",
      weight: "500",
    },
    {
      path: "../assets/fonts/HelveticaNeue-Bold.woff2",
      style: "normal",
      weight: "700",
    },
  ],
  variable: "--font-helvetica-neue",
});

export const metadata: Metadata = {
  title: "nare productos de mar",
  description: "Desarrollo de productos de mar",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body className={`${helveticaNeue.variable} font-primary antialiased`}>
        {children}
      </body>
    </html>
  );
}
