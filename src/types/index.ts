export type TransactionType =
  | "deposito"
  | "transferencia"
  | "pagamento"
  | "saque";

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  date: string;
  description: string;
  category?: string;
}

export interface Account {
  balance: number;
  accountNumber: string;
  accountHolder: string;
}
