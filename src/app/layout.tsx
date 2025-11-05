import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FinancialProvider } from "@/contexts/FinancialContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gerenciamento Financeiro",
  description: "Aplicação de gerenciamento financeiro pessoal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <FinancialProvider>
          <div className="min-h-screen bg-gray-50">
            <header className="bg-primary-600 text-white shadow-lg">
              <div className="container mx-auto px-4 py-6">
                <h1 className="text-2xl font-bold">
                  💰 Gerenciamento Financeiro
                </h1>
                <p className="text-primary-100 text-sm mt-1">
                  Controle suas finanças de forma simples e eficiente
                </p>
              </div>
            </header>

            <main className="container mx-auto px-4 py-8">{children}</main>

            <footer className="bg-gray-800 text-white mt-12">
              <div className="container mx-auto px-4 py-6 text-center">
                <p className="text-sm">
                  © 2024 Gerenciamento Financeiro - Tech Challenge Fase 1
                </p>
              </div>
            </footer>
          </div>
        </FinancialProvider>
      </body>
    </html>
  );
}
