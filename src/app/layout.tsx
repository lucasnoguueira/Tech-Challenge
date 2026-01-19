import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gerenciamento Financeiro - Tech Challenge Fase 2",
  description:
    "Sistema completo de gestão financeira pessoal com gráficos, filtros e analytics",
  keywords: ["finanças", "gestão financeira", "orçamento", "transações"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen bg-gray-50">
            <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
              <div className="container mx-auto px-4 py-6">
                <h1 className="text-2xl font-bold">
                  💰 Gerenciamento Financeiro
                </h1>
                <p className="text-blue-100 text-sm mt-1">
                  Controle suas finanças de forma simples e eficiente
                </p>
              </div>
            </header>

            <main className="container mx-auto px-4 py-8">{children}</main>

            <footer className="bg-gray-800 text-white mt-12">
              <div className="container mx-auto px-4 py-6 text-center">
                <p className="text-sm">
                  © 2024 Gerenciamento Financeiro - Tech Challenge Fase 2 |
                  POSTECH
                </p>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
