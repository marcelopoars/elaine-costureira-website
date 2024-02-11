import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { Footer, Header } from "./ui";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Elaine Costureira | Confecções, montagem e reformas em geral",
  description:
    "Costureira com mais de 30 anos de experiência em confecções, montagem e reformas em geral.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className="text-gray-900 text-balance antialiased scroll-smooth"
    >
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
