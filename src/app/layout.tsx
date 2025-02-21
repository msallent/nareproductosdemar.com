import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const helveticaNeue = localFont({
  src: [
    {
      path: "../assets/fonts/HelveticaNeueLight.woff2",
      style: "normal",
      weight: "300",
    },
    {
      path: "../assets/fonts/HelveticaNeueMedium.woff2",
      style: "normal",
      weight: "500",
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
    <html className="h-full" lang="es">
      <body className={`${helveticaNeue.variable} font-primary h-full antialiased`}>
        {children}
      </body>
    </html>
  );
}
