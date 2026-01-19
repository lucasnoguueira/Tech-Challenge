"use client";

import { useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import Button from "./Button";

interface TransactionFiltersProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  filterType: string | null;
  onFilterTypeChange: (type: string | null) => void;
  filterCategory: string | null;
  onFilterCategoryChange: (category: string | null) => void;
  sortBy: "date" | "amount";
  onSortByChange: (sortBy: "date" | "amount") => void;
  sortOrder: "asc" | "desc";
  onSortOrderChange: (order: "asc" | "desc") => void;
  onReset: () => void;
  categories: string[];
}

export default function TransactionFilters({
  searchTerm,
  onSearchChange,
  filterType,
  onFilterTypeChange,
  filterCategory,
  onFilterCategoryChange,
  sortBy,
  onSortByChange,
  sortOrder,
  onSortOrderChange,
  onReset,
  categories,
}: TransactionFiltersProps) {
  const [showFilters, setShowFilters] = useState(false);

  const transactionTypes = [
    { value: "deposito", label: "Depósito" },
    { value: "transferencia", label: "Transferência" },
    { value: "pagamento", label: "Pagamento" },
    { value: "saque", label: "Saque" },
  ];

  const hasActiveFilters = filterType || filterCategory || searchTerm;

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="flex gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar por descrição, categoria ou tipo..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            aria-label="Buscar transações"
          />
        </div>

        <Button
          variant={showFilters ? "primary" : "outline"}
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2"
          aria-label="Filtros avançados"
          aria-expanded={showFilters}
        >
          <SlidersHorizontal className="w-5 h-5" />
          Filtros
        </Button>

        {hasActiveFilters && (
          <Button
            variant="outline"
            onClick={onReset}
            className="flex items-center gap-2"
            aria-label="Limpar filtros"
          >
            <X className="w-5 h-5" />
            Limpar
          </Button>
        )}
      </div>

      {/* Advanced Filters */}
      {showFilters && (
        <div
          className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200"
          role="region"
          aria-label="Filtros avançados"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Filter by Type */}
            <div>
              <label
                htmlFor="filter-type"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Tipo de Transação
              </label>
              <select
                id="filter-type"
                value={filterType || ""}
                onChange={(e) => onFilterTypeChange(e.target.value || null)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">Todos os tipos</option>
                {transactionTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Filter by Category */}
            <div>
              <label
                htmlFor="filter-category"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Categoria
              </label>
              <select
                id="filter-category"
                value={filterCategory || ""}
                onChange={(e) => onFilterCategoryChange(e.target.value || null)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">Todas as categorias</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label
                htmlFor="sort-by"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Ordenar por
              </label>
              <select
                id="sort-by"
                value={sortBy}
                onChange={(e) =>
                  onSortByChange(e.target.value as "date" | "amount")
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="date">Data</option>
                <option value="amount">Valor</option>
              </select>
            </div>

            {/* Sort Order */}
            <div>
              <label
                htmlFor="sort-order"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Ordem
              </label>
              <select
                id="sort-order"
                value={sortOrder}
                onChange={(e) =>
                  onSortOrderChange(e.target.value as "asc" | "desc")
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="desc">Decrescente</option>
                <option value="asc">Crescente</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
