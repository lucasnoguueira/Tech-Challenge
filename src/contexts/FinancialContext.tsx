"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Transaction, Account } from "@/types";
import transactionsData from "@/data/transactions.json";

interface FinancialContextType {
  account: Account;
  transactions: Transaction[];
  addTransaction: (transaction: Omit<Transaction, "id">) => void;
  updateTransaction: (id: string, transaction: Partial<Transaction>) => void;
  deleteTransaction: (id: string) => void;
  getTransactionById: (id: string) => Transaction | undefined;
  resetToInitialData: () => void;
}

const FinancialContext = createContext<FinancialContextType | undefined>(
  undefined
);

const STORAGE_KEY = "@financial-app:transactions";
const ACCOUNT_KEY = "@financial-app:account";

export const FinancialProvider = ({ children }: { children: ReactNode }) => {
  const [account, setAccount] = useState<Account>(
    transactionsData.account as Account
  );
  const [transactions, setTransactions] = useState<Transaction[]>(
    transactionsData.transactions as Transaction[]
  );
  const [isLoaded, setIsLoaded] = useState(false);

  // Carrega os dados do localStorage na inicialização
  useEffect(() => {
    try {
      const storedTransactions = localStorage.getItem(STORAGE_KEY);
      const storedAccount = localStorage.getItem(ACCOUNT_KEY);

      if (storedTransactions) {
        const parsedTransactions = JSON.parse(storedTransactions);
        setTransactions(parsedTransactions);
      }

      if (storedAccount) {
        const parsedAccount = JSON.parse(storedAccount);
        setAccount(parsedAccount);
      }
    } catch (error) {
      console.error("Erro ao carregar dados do localStorage:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Salva as transações no localStorage sempre que mudam
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
      } catch (error) {
        console.error("Erro ao salvar transações no localStorage:", error);
      }
    }
  }, [transactions, isLoaded]);

  // Atualiza o saldo da conta sempre que as transações mudam
  useEffect(() => {
    const totalBalance = transactions.reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0);

    const updatedAccount = { ...account, balance: totalBalance };
    setAccount(updatedAccount);

    // Salva a conta atualizada no localStorage
    if (isLoaded) {
      try {
        localStorage.setItem(ACCOUNT_KEY, JSON.stringify(updatedAccount));
      } catch (error) {
        console.error("Erro ao salvar conta no localStorage:", error);
      }
    }
  }, [transactions, isLoaded]);

  const addTransaction = (newTransaction: Omit<Transaction, "id">) => {
    const transaction: Transaction = {
      ...newTransaction,
      id: Date.now().toString(),
    };

    setTransactions((prev) => [transaction, ...prev]);
  };

  const updateTransaction = (id: string, updatedData: Partial<Transaction>) => {
    setTransactions((prev) =>
      prev.map((transaction) =>
        transaction.id === id ? { ...transaction, ...updatedData } : transaction
      )
    );
  };

  const deleteTransaction = (id: string) => {
    setTransactions((prev) =>
      prev.filter((transaction) => transaction.id !== id)
    );
  };

  const getTransactionById = (id: string) => {
    return transactions.find((transaction) => transaction.id === id);
  };

  const resetToInitialData = () => {
    try {
      // Remove dados do localStorage
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(ACCOUNT_KEY);

      // Restaura dados iniciais do JSON
      setTransactions(transactionsData.transactions as Transaction[]);
      setAccount(transactionsData.account as Account);

      console.log("Dados resetados para o estado inicial!");
    } catch (error) {
      console.error("Erro ao resetar dados:", error);
    }
  };

  return (
    <FinancialContext.Provider
      value={{
        account,
        transactions,
        addTransaction,
        updateTransaction,
        deleteTransaction,
        getTransactionById,
        resetToInitialData,
      }}
    >
      {children}
    </FinancialContext.Provider>
  );
};

export const useFinancial = () => {
  const context = useContext(FinancialContext);
  if (!context) {
    throw new Error("useFinancial must be used within a FinancialProvider");
  }
  return context;
};
