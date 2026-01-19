"use client";

import { useState } from "react";
import Link from "next/link";
import { useFinancial } from "@/contexts/FinancialContext";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import TransactionForm from "@/components/TransactionForm";
import { Pencil, Trash2, ArrowLeft, Filter, RotateCcw } from "lucide-react";
import { Transaction } from "@/types";

export default function TransactionsPage() {
  const {
    transactions,
    updateTransaction,
    deleteTransaction,
    getTransactionById,
    resetToInitialData,
  } = useFinancial();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedTransactionId, setSelectedTransactionId] = useState<
    string | null
  >(null);
  const [filterType, setFilterType] = useState<string>("all");

  const selectedTransaction = selectedTransactionId
    ? getTransactionById(selectedTransactionId)
    : null;

  // Filtrar transações
  const filteredTransactions =
    filterType === "all"
      ? transactions
      : transactions.filter((t) => t.type === filterType);

  const handleEdit = (id: string) => {
    setSelectedTransactionId(id);
    setIsEditModalOpen(true);
  };

  const handleDelete = (id: string) => {
    setSelectedTransactionId(id);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (selectedTransactionId) {
      deleteTransaction(selectedTransactionId);
      setIsDeleteModalOpen(false);
      setSelectedTransactionId(null);
    }
  };

  const handleUpdateTransaction = (data: Omit<Transaction, "id">) => {
    if (selectedTransactionId) {
      updateTransaction(selectedTransactionId, data);
      setIsEditModalOpen(false);
      setSelectedTransactionId(null);
    }
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
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Todas as Transações
          </h2>
          <p className="text-gray-600">
            Gerencie todas as suas transações financeiras
          </p>
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={resetToInitialData}
            title="Resetar dados para o estado inicial"
          >
            <RotateCcw size={20} className="mr-2" />
            Resetar Dados
          </Button>
          <Link href="/">
            <Button variant="outline">
              <ArrowLeft size={20} className="mr-2" />
              Voltar
            </Button>
          </Link>
        </div>
      </div>

      {/* Filtros */}
      <Card>
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <Filter size={20} className="text-gray-500" />
            <span className="font-medium text-gray-700">Filtrar por:</span>
          </div>
          <div className="flex gap-2 flex-wrap">
            <Button
              variant={filterType === "all" ? "primary" : "outline"}
              size="sm"
              onClick={() => setFilterType("all")}
            >
              Todas
            </Button>
            <Button
              variant={filterType === "deposito" ? "primary" : "outline"}
              size="sm"
              onClick={() => setFilterType("deposito")}
            >
              Depósitos
            </Button>
            <Button
              variant={filterType === "transferencia" ? "primary" : "outline"}
              size="sm"
              onClick={() => setFilterType("transferencia")}
            >
              Transferências
            </Button>
            <Button
              variant={filterType === "pagamento" ? "primary" : "outline"}
              size="sm"
              onClick={() => setFilterType("pagamento")}
            >
              Pagamentos
            </Button>
            <Button
              variant={filterType === "saque" ? "primary" : "outline"}
              size="sm"
              onClick={() => setFilterType("saque")}
            >
              Saques
            </Button>
          </div>
        </div>
      </Card>

      {/* Lista de Transações */}
      <Card>
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            Exibindo {filteredTransactions.length} transação(ões)
          </p>
        </div>

        {filteredTransactions.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">Nenhuma transação encontrada</p>
            <Link href="/">
              <Button>Voltar para Home</Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-medium text-gray-500 bg-white px-3 py-1 rounded-full">
                      {getTransactionTypeLabel(transaction.type)}
                    </span>
                    {transaction.category && (
                      <span className="text-xs text-gray-500 bg-white px-3 py-1 rounded-full">
                        {transaction.category}
                      </span>
                    )}
                  </div>
                  <p className="font-semibold text-gray-900 text-lg mb-1">
                    {transaction.description}
                  </p>
                  <p className="text-sm text-gray-500">
                    {formatDate(transaction.date)}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <p
                    className={`text-2xl font-bold ${
                      transaction.amount > 0
                        ? "text-success-600"
                        : "text-danger-600"
                    }`}
                  >
                    {transaction.amount > 0 ? "+" : ""}
                    {formatCurrency(transaction.amount)}
                  </p>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(transaction.id)}
                      className="hover:bg-primary-50 hover:text-primary-600"
                    >
                      <Pencil size={16} />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(transaction.id)}
                      className="hover:bg-danger-50 hover:text-danger-600"
                    >
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>

      {/* Modal de Edição */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedTransactionId(null);
        }}
        title="Editar Transação"
        size="md"
      >
        {selectedTransaction && (
          <TransactionForm
            initialData={selectedTransaction}
            onSubmit={handleUpdateTransaction}
            onCancel={() => {
              setIsEditModalOpen(false);
              setSelectedTransactionId(null);
            }}
            submitLabel="Atualizar"
          />
        )}
      </Modal>

      {/* Modal de Confirmação de Exclusão */}
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setSelectedTransactionId(null);
        }}
        title="Confirmar Exclusão"
        size="sm"
      >
        <div className="space-y-4">
          <p className="text-gray-700">
            Tem certeza que deseja excluir esta transação? Esta ação não pode
            ser desfeita.
          </p>
          {selectedTransaction && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-900">
                {selectedTransaction.description}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                {formatCurrency(selectedTransaction.amount)}
              </p>
            </div>
          )}
          <div className="flex gap-3">
            <Button variant="danger" fullWidth onClick={confirmDelete}>
              Sim, excluir
            </Button>
            <Button
              variant="outline"
              fullWidth
              onClick={() => {
                setIsDeleteModalOpen(false);
                setSelectedTransactionId(null);
              }}
            >
              Cancelar
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
