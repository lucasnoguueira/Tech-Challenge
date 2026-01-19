"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface ExpensesByCategoryProps {
  transactions: Array<{
    amount: number;
    category?: string;
    type: string;
  }>;
}

export default function ExpensesByCategory({
  transactions,
}: ExpensesByCategoryProps) {
  // Filtrar apenas despesas
  const expenses = transactions.filter((t) => t.amount < 0);

  // Agrupar por categoria
  const categoryData = expenses.reduce((acc, transaction) => {
    const category = transaction.category || "Sem categoria";
    acc[category] = (acc[category] || 0) + Math.abs(transaction.amount);
    return acc;
  }, {} as Record<string, number>);

  const data = {
    labels: Object.keys(categoryData),
    datasets: [
      {
        label: "Despesas por Categoria",
        data: Object.values(categoryData),
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(255, 159, 64, 0.8)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const label = context.label || "";
            const value = new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(context.parsed);
            return `${label}: ${value}`;
          },
        },
      },
    },
  };

  if (Object.keys(categoryData).length === 0) {
    return (
      <div className="h-64 flex items-center justify-center text-gray-500">
        Nenhuma despesa registrada
      </div>
    );
  }

  return (
    <div className="h-64">
      <Doughnut data={data} options={options} />
    </div>
  );
}
