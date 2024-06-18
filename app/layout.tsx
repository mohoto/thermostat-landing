import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '900'],
});

export const metadata: Metadata = {
  title: "Prime coup de pouce chauffage - LIIA ENERGIES",
  description: "Profitez d'une installation gratuite de thermostats connectés avec LIIA ENERGIES et réalisez jusqu'à 15 % d'économies sur votre chauffage. Bénéficiez de la prime « Coup de Pouce Chauffage » sans conditions de revenus et anticipez l'obligation de 2027.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={poppins.className}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}

