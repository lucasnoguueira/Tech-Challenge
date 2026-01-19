"use client";

import { useState } from "react";
import Link from "next/link";
import { useFinancial } from "@/contexts/FinancialContext";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import TransactionForm from "@/components/TransactionForm";
import {
  Plus,
  TrendingUp,
  TrendingDown,
  DollarSign,
  ArrowRight,
} from "lucide-react";
import { Transaction } from "@/types";

export default function Home() {
  const { account, transactions, addTransaction } = useFinancial();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Últimas 5 transações
  const recentTransactions = transactions.slice(0, 5);

  // Calcular receitas e despesas do mês
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const monthTransactions = transactions.filter((t) => {
    const date = new Date(t.date);
    return (
      date.getMonth() === currentMonth && date.getFullYear() === currentYear
    );
  });

  const income = monthTransactions
    .filter((t) => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const expenses = Math.abs(
    monthTransactions
      .filter((t) => t.amount < 0)
      .reduce((acc, t) => acc + t.amount, 0)
  );

  const handleAddTransaction = (data: Omit<Transaction, "id">) => {
    addTransaction(data);
    setIsModalOpen(false);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const formatDate = (dateString: string) => {
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(dateString));
  };

  const getTransactionTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      deposito: "Depósito",
      transferencia: "Transferência",
      pagamento: "Pagamento",
      saque: "Saque",
    };
    return labels[type] || type;
  };

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Bem-vindo, {account.accountHolder}! 👋
        </h2>
        <p className="text-gray-600">
          Gerencie suas transações financeiras de forma simples e eficiente
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Saldo */}
        <Card className="bg-gradient-to-br from-primary-500 to-primary-700 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-primary-100 text-sm mb-1">Saldo Atual</p>
              <p className="text-3xl font-bold">
                {formatCurrency(account.balance)}
              </p>
              <p className="text-primary-200 text-xs mt-1">
                Conta: {account.accountNumber}
              </p>
            </div>
            <div className="bg-white bg-opacity-20 p-3 rounded-full">
              <DollarSign size={32} />
            </div>
          </div>
        </Card>

        {/* Receitas do Mês */}
        <Card className="bg-gradient-to-br from-success-500 to-success-700 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-success-100 text-sm mb-1">Receitas do Mês</p>
              <p className="text-3xl font-bold">{formatCurrency(income)}</p>
              <p className="text-success-200 text-xs mt-1">Entradas</p>
            </div>
            <div className="bg-white bg-opacity-20 p-3 rounded-full">
              <TrendingUp size={32} />
            </div>
          </div>
        </Card>

        {/* Despesas do Mês */}
        <Card className="bg-gradient-to-br from-danger-500 to-danger-700 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-danger-100 text-sm mb-1">Despesas do Mês</p>
              <p className="text-3xl font-bold">{formatCurrency(expenses)}</p>
              <p className="text-danger-200 text-xs mt-1">Saídas</p>
            </div>
            <div className="bg-white bg-opacity-20 p-3 rounded-full">
              <TrendingDown size={32} />
            </div>
          </div>
        </Card>
      </div>

      {/* Nova Transação */}
      <Card>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-900">
            Nova Transação
          </h3>
        </div>
        <p className="text-gray-600 mb-4">
          Adicione uma nova transação ao seu extrato bancário
        </p>
        <Button
          variant="primary"
          size="lg"
          onClick={() => setIsModalOpen(true)}
          className="w-full md:w-auto"
        >
          <Plus size={20} className="mr-2" />
          Adicionar Transação
        </Button>
      </Card>

      {/* Últimas Transações */}
      <Card>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">
            Últimas Transações
          </h3>
          <Link href="/transactions">
            <Button variant="outline" size="sm">
              Ver todas
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>

        {recentTransactions.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">Nenhuma transação encontrada</p>
            <Button onClick={() => setIsModalOpen(true)}>
              Adicionar primeira transação
            </Button>
          </div>
        ) : (
          <div className="space-y-3">
            {recentTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-medium text-gray-500 bg-white px-2 py-1 rounded">
                      {getTransactionTypeLabel(transaction.type)}
                    </span>
                    {transaction.category && (
                      <span className="text-xs text-gray-500">
                        {transaction.category}
                      </span>
                    )}
                  </div>
                  <p className="font-medium text-gray-900">
                    {transaction.description}
                  </p>
                  <p className="text-sm text-gray-500">
                    {formatDate(transaction.date)}
                  </p>
                </div>
                <div className="text-right">
                  <p
                    className={`text-xl font-bold ${
                      transaction.amount > 0
                        ? "text-success-600"
                        : "text-danger-600"
                    }`}
                  >
                    {transaction.amount > 0 ? "+" : ""}
                    {formatCurrency(transaction.amount)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>

      {/* Modal de Nova Transação */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Adicionar Nova Transação"
        size="md"
      >
        <TransactionForm
          onSubmit={handleAddTransaction}
          onCancel={() => setIsModalOpen(false)}
          submitLabel="Adicionar"
        />
      </Modal>
    </div>
  );
}
