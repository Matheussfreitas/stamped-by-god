import type { Metadata } from "next";
import { Pacifico, Poppins, Original_Surfer } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poppins",
});

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
});

const surfer = Original_Surfer({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-original-surfer",
});

export const metadata: Metadata = {
  title: "Stamped By God - Surfboards",
  description: "Carimbados por Deus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.variable} ${pacifico.variable} ${surfer.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
