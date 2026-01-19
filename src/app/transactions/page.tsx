"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useFinancialStore } from "@/store/useFinancialStore";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import TransactionForm from "@/components/TransactionForm";
import TransactionFilters from "@/components/TransactionFilters";
import {
  Pencil,
  Trash2,
  ArrowLeft,
  RotateCcw,
  FileText,
  Loader2,
} from "lucide-react";
import { Transaction } from "@/types";
import { formatCurrency, formatDateTime } from "@/lib/utils";

const ITEMS_PER_PAGE = 10;

export default function TransactionsPage() {
  const {
    transactions,
    filteredTransactions,
    updateTransaction,
    deleteTransaction,
    getTransactionById,
    resetToInitialData,
    searchTerm,
    setSearchTerm,
    filterType,
    setFilterType,
    filterCategory,
    setFilterCategory,
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder,
    resetFilters,
  } = useFinancialStore();

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedTransactionId, setSelectedTransactionId] = useState<
    string | null
  >(null);

  // Infinite scroll state
  const [displayedCount, setDisplayedCount] = useState(ITEMS_PER_PAGE);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Intersection observer for infinite scroll
  const { ref: loadMoreRef, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const selectedTransaction = selectedTransactionId
    ? getTransactionById(selectedTransactionId)
    : null;

  // Get unique categories for filter
  const categories = useMemo(() => {
    const cats = new Set<string>();
    transactions.forEach((t) => {
      if (t.category) cats.add(t.category);
    });
    return Array.from(cats).sort();
  }, [transactions]);

  // Visible transactions with infinite scroll
  const visibleTransactions = filteredTransactions.slice(0, displayedCount);
  const hasMore = displayedCount < filteredTransactions.length;

  // Load more when scrolling into view
  useEffect(() => {
    if (inView && hasMore && !isLoadingMore) {
      setIsLoadingMore(true);
      // Simulate loading delay for better UX
      setTimeout(() => {
        setDisplayedCount((prev) =>
          Math.min(prev + ITEMS_PER_PAGE, filteredTransactions.length)
        );
        setIsLoadingMore(false);
      }, 500);
    }
  }, [inView, hasMore, isLoadingMore, filteredTransactions.length]);

  // Reset displayed count when filters change
  useEffect(() => {
    setDisplayedCount(ITEMS_PER_PAGE);
  }, [searchTerm, filterType, filterCategory, sortBy, sortOrder]);

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  const handleFilterTypeChange = (type: string | null) => {
    setFilterType(type);
  };

  const handleFilterCategoryChange = (category: string | null) => {
    setFilterCategory(category);
  };

  const handleSortByChange = (newSortBy: "date" | "amount") => {
    setSortBy(newSortBy);
  };

  const handleSortOrderChange = (order: "asc" | "desc") => {
    setSortOrder(order);
  };

  const handleResetFilters = () => {
    resetFilters();
  };

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
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Todas as Transações
          </h1>
          <p className="text-gray-600">
            Gerencie todas as suas transações financeiras
          </p>
        </div>
        <div className="flex gap-3">
          <Link href="/">
            <Button variant="outline">
              <ArrowLeft size={20} className="mr-2" />
              Voltar
            </Button>
          </Link>
          <Button
            variant="outline"
            onClick={resetToInitialData}
            title="Restaurar dados originais"
          >
            <RotateCcw size={20} className="mr-2" />
            Restaurar
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <TransactionFilters
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          filterType={filterType}
          onFilterTypeChange={handleFilterTypeChange}
          filterCategory={filterCategory}
          onFilterCategoryChange={handleFilterCategoryChange}
          sortBy={sortBy}
          onSortByChange={handleSortByChange}
          sortOrder={sortOrder}
          onSortOrderChange={handleSortOrderChange}
          onReset={handleResetFilters}
          categories={categories}
        />
      </Card>

      {/* Transactions List */}
      <Card className="p-0">
        {filteredTransactions.length === 0 ? (
          <div className="text-center py-12 px-4">
            <p className="text-gray-500 mb-4">
              Nenhuma transação encontrada com os filtros aplicados
            </p>
            <Button variant="outline" onClick={handleResetFilters}>
              Limpar filtros
            </Button>
          </div>
        ) : (
          <>
            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Data
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tipo
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Descrição
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Categoria
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Valor
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {visibleTransactions.map((transaction) => (
                    <tr
                      key={transaction.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {formatDateTime(transaction.date)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-xs font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded">
                          {getTransactionTypeLabel(transaction.type)}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        <div className="flex items-center gap-2">
                          {transaction.description}
                          {transaction.attachments &&
                            transaction.attachments.length > 0 && (
                              <FileText
                                className="w-4 h-4 text-gray-400"
                                aria-label="Possui anexos"
                              />
                            )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {transaction.category || "-"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <span
                          className={`text-sm font-semibold ${
                            transaction.amount > 0
                              ? "text-success-600"
                              : "text-danger-600"
                          }`}
                        >
                          {transaction.amount > 0 ? "+" : ""}
                          {formatCurrency(transaction.amount)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleEdit(transaction.id)}
                            title="Editar transação"
                          >
                            <Pencil size={16} />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(transaction.id)}
                            className="text-danger-600 hover:text-danger-700 hover:bg-danger-50"
                            title="Excluir transação"
                          >
                            <Trash2 size={16} />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden divide-y divide-gray-200">
              {visibleTransactions.map((transaction) => (
                <div key={transaction.id} className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded">
                          {getTransactionTypeLabel(transaction.type)}
                        </span>
                        {transaction.attachments &&
                          transaction.attachments.length > 0 && (
                            <FileText className="w-4 h-4 text-gray-400" />
                          )}
                      </div>
                      <p className="font-medium text-gray-900 mb-1">
                        {transaction.description}
                      </p>
                      {transaction.category && (
                        <p className="text-xs text-gray-500 mb-1">
                          {transaction.category}
                        </p>
                      )}
                      <p className="text-xs text-gray-500">
                        {formatDateTime(transaction.date)}
                      </p>
                    </div>
                    <span
                      className={`text-lg font-bold ${
                        transaction.amount > 0
                          ? "text-success-600"
                          : "text-danger-600"
                      }`}
                    >
                      {transaction.amount > 0 ? "+" : ""}
                      {formatCurrency(transaction.amount)}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(transaction.id)}
                      className="flex-1"
                    >
                      <Pencil size={16} className="mr-2" />
                      Editar
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(transaction.id)}
                      className="flex-1 text-danger-600 hover:text-danger-700 hover:bg-danger-50 border-danger-200"
                    >
                      <Trash2 size={16} className="mr-2" />
                      Excluir
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Loading indicator and infinite scroll trigger */}
            {hasMore && (
              <div
                ref={loadMoreRef}
                className="py-8 flex justify-center items-center"
              >
                {isLoadingMore ? (
                  <div className="flex items-center gap-2 text-gray-600">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span className="text-sm">
                      Carregando mais transações...
                    </span>
                  </div>
                ) : (
                  <div className="text-sm text-gray-500">
                    Scroll para carregar mais
                  </div>
                )}
              </div>
            )}

            {/* Skeleton loading for new items */}
            {isLoadingMore && (
              <>
                {/* Desktop skeleton */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full">
                    <tbody className="bg-white divide-y divide-gray-200">
                      {[1, 2, 3].map((i) => (
                        <tr key={`skeleton-${i}`} className="animate-pulse">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="h-4 bg-gray-200 rounded w-24"></div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="h-6 bg-gray-200 rounded w-16"></div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="h-4 bg-gray-200 rounded w-48"></div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="h-4 bg-gray-200 rounded w-20"></div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right">
                            <div className="h-4 bg-gray-200 rounded w-20 ml-auto"></div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="h-8 bg-gray-200 rounded w-20 ml-auto"></div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile skeleton */}
                <div className="md:hidden divide-y divide-gray-200">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={`skeleton-mobile-${i}`}
                      className="p-4 animate-pulse"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="h-6 bg-gray-200 rounded w-16 mb-2"></div>
                          <div className="h-5 bg-gray-200 rounded w-40 mb-2"></div>
                          <div className="h-4 bg-gray-200 rounded w-24"></div>
                        </div>
                        <div className="h-6 bg-gray-200 rounded w-20"></div>
                      </div>
                      <div className="flex gap-2">
                        <div className="h-9 bg-gray-200 rounded flex-1"></div>
                        <div className="h-9 bg-gray-200 rounded flex-1"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* End of list message */}
            {!hasMore && visibleTransactions.length > 0 && (
              <div className="py-8 text-center">
                <p className="text-sm text-gray-500">
                  Todas as {filteredTransactions.length} transações foram
                  carregadas
                </p>
              </div>
            )}
          </>
        )}
      </Card>

      {/* Edit Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Editar Transação"
        size="md"
      >
        {selectedTransaction && (
          <TransactionForm
            initialData={selectedTransaction}
            onSubmit={handleUpdateTransaction}
            onCancel={() => setIsEditModalOpen(false)}
            submitLabel="Salvar Alterações"
          />
        )}
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title="Confirmar Exclusão"
        size="sm"
      >
        <div className="space-y-4">
          <p className="text-gray-600">
            Tem certeza que deseja excluir esta transação? Esta ação não pode
            ser desfeita.
          </p>
          {selectedTransaction && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-medium text-gray-900 mb-1">
                {selectedTransaction.description}
              </p>
              <p className="text-sm text-gray-600">
                {formatCurrency(selectedTransaction.amount)}
              </p>
            </div>
          )}
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={() => setIsDeleteModalOpen(false)}
              className="flex-1"
            >
              Cancelar
            </Button>
            <Button
              variant="primary"
              onClick={confirmDelete}
              className="flex-1 bg-danger-600 hover:bg-danger-700"
            >
              Excluir
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
