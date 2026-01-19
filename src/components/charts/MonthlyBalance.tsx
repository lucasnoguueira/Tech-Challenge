"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface MonthlyBalanceProps {
  transactions: Array<{
    amount: number;
    date: string;
  }>;
}

export default function MonthlyBalance({ transactions }: MonthlyBalanceProps) {
  // Processar dados dos últimos 6 meses
  const months: string[] = [];
  const income: number[] = [];
  const expenses: number[] = [];

  const now = new Date();
  for (let i = 5; i >= 0; i--) {
    const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const monthName = date.toLocaleDateString("pt-BR", {
      month: "short",
      year: "numeric",
    });
    months.push(monthName);

    const monthTransactions = transactions.filter((t) => {
      const tDate = new Date(t.date);
      return (
        tDate.getMonth() === date.getMonth() &&
        tDate.getFullYear() === date.getFullYear()
      );
    });

    const monthIncome = monthTransactions
      .filter((t) => t.amount > 0)
      .reduce((sum, t) => sum + t.amount, 0);

    const monthExpenses = Math.abs(
      monthTransactions
        .filter((t) => t.amount < 0)
        .reduce((sum, t) => sum + t.amount, 0)
    );

    income.push(monthIncome);
    expenses.push(monthExpenses);
  }

  const data = {
    labels: months,
    datasets: [
      {
        label: "Receitas",
        data: income,
        backgroundColor: "rgba(34, 197, 94, 0.8)",
        borderColor: "rgba(34, 197, 94, 1)",
        borderWidth: 1,
      },
      {
        label: "Despesas",
        data: expenses,
        backgroundColor: "rgba(239, 68, 68, 0.8)",
        borderColor: "rgba(239, 68, 68, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const label = context.dataset.label || "";
            const value = new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(context.parsed.y);
            return `${label}: ${value}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value: any) {
            return new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
              notation: "compact",
            }).format(value);
          },
        },
      },
    },
  };

  return (
    <div className="h-64">
      <Bar data={data} options={options} />
    </div>
  );
}
