import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Transaction, Account } from "@/types";
import transactionsData from "@/data/transactions.json";

interface FinancialState {
  account: Account;
  transactions: Transaction[];
  filteredTransactions: Transaction[];
  searchTerm: string;
  filterType: string | null;
  filterCategory: string | null;
  sortBy: "date" | "amount";
  sortOrder: "asc" | "desc";

  // Actions
  setAccount: (account: Account) => void;
  setTransactions: (transactions: Transaction[]) => void;
  addTransaction: (transaction: Omit<Transaction, "id">) => void;
  updateTransaction: (id: string, transaction: Partial<Transaction>) => void;
  deleteTransaction: (id: string) => void;
  setSearchTerm: (term: string) => void;
  setFilterType: (type: string | null) => void;
  setFilterCategory: (category: string | null) => void;
  setSortBy: (sortBy: "date" | "amount") => void;
  setSortOrder: (order: "asc" | "desc") => void;
  applyFilters: () => void;
  resetFilters: () => void;
  resetToInitialData: () => void;
  getTransactionById: (id: string) => Transaction | undefined;
}

export const useFinancialStore = create<FinancialState>()(
  persist(
    (set, get) => ({
      account: transactionsData.account as Account,
      transactions: transactionsData.transactions as Transaction[],
      filteredTransactions: transactionsData.transactions as Transaction[],
      searchTerm: "",
      filterType: null,
      filterCategory: null,
      sortBy: "date",
      sortOrder: "desc",

      setAccount: (account) => set({ account }),

      setTransactions: (transactions) => {
        set({ transactions });
        get().applyFilters();
      },

      addTransaction: (newTransaction) => {
        const transaction: Transaction = {
          ...newTransaction,
          id: Date.now().toString(),
        };

        const transactions = [transaction, ...get().transactions];
        const totalBalance = transactions.reduce((acc, t) => acc + t.amount, 0);

        set({
          transactions,
          account: { ...get().account, balance: totalBalance },
        });

        get().applyFilters();
      },

      updateTransaction: (id, updatedData) => {
        const transactions = get().transactions.map((t) =>
          t.id === id ? { ...t, ...updatedData } : t
        );

        const totalBalance = transactions.reduce((acc, t) => acc + t.amount, 0);

        set({
          transactions,
          account: { ...get().account, balance: totalBalance },
        });

        get().applyFilters();
      },

      deleteTransaction: (id) => {
        const transactions = get().transactions.filter((t) => t.id !== id);
        const totalBalance = transactions.reduce((acc, t) => acc + t.amount, 0);

        set({
          transactions,
          account: { ...get().account, balance: totalBalance },
        });

        get().applyFilters();
      },

      setSearchTerm: (term) => {
        set({ searchTerm: term });
        get().applyFilters();
      },

      setFilterType: (type) => {
        set({ filterType: type });
        get().applyFilters();
      },

      setFilterCategory: (category) => {
        set({ filterCategory: category });
        get().applyFilters();
      },

      setSortBy: (sortBy) => {
        set({ sortBy });
        get().applyFilters();
      },

      setSortOrder: (order) => {
        set({ sortOrder: order });
        get().applyFilters();
      },

      applyFilters: () => {
        const {
          transactions,
          searchTerm,
          filterType,
          filterCategory,
          sortBy,
          sortOrder,
        } = get();

        let filtered = [...transactions];

        // Aplicar busca
        if (searchTerm) {
          const term = searchTerm.toLowerCase();
          filtered = filtered.filter(
            (t) =>
              t.description.toLowerCase().includes(term) ||
              t.category?.toLowerCase().includes(term) ||
              t.type.toLowerCase().includes(term)
          );
        }

        // Aplicar filtro de tipo
        if (filterType) {
          filtered = filtered.filter((t) => t.type === filterType);
        }

        // Aplicar filtro de categoria
        if (filterCategory) {
          filtered = filtered.filter((t) => t.category === filterCategory);
        }

        // Aplicar ordenação
        filtered.sort((a, b) => {
          const aValue =
            sortBy === "date" ? new Date(a.date).getTime() : a.amount;
          const bValue =
            sortBy === "date" ? new Date(b.date).getTime() : b.amount;

          return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
        });

        set({ filteredTransactions: filtered });
      },

      resetFilters: () => {
        set({
          searchTerm: "",
          filterType: null,
          filterCategory: null,
          sortBy: "date",
          sortOrder: "desc",
        });
        get().applyFilters();
      },

      resetToInitialData: () => {
        set({
          account: transactionsData.account as Account,
          transactions: transactionsData.transactions as Transaction[],
        });
        get().applyFilters();
      },

      getTransactionById: (id) => {
        return get().transactions.find((t) => t.id === id);
      },
    }),
    {
      name: "financial-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
