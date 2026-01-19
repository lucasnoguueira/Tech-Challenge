"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface BalanceTrendProps {
  transactions: Array<{
    amount: number;
    date: string;
  }>;
}

export default function BalanceTrend({ transactions }: BalanceTrendProps) {
  // Ordenar transações por data
  const sortedTransactions = [...transactions].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  // Calcular saldo acumulado
  let balance = 0;
  const balanceData = sortedTransactions.map((t) => {
    balance += t.amount;
    return {
      date: new Date(t.date).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "short",
      }),
      balance: balance,
    };
  });

  // Pegar apenas os últimos 30 registros
  const last30 = balanceData.slice(-30);

  const data = {
    labels: last30.map((d) => d.date),
    datasets: [
      {
        label: "Saldo",
        data: last30.map((d) => d.balance),
        fill: true,
        backgroundColor: "rgba(99, 102, 241, 0.1)",
        borderColor: "rgba(99, 102, 241, 1)",
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            return new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(context.parsed.y);
          },
        },
      },
    },
    scales: {
      y: {
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
      x: {
        ticks: {
          maxRotation: 45,
          minRotation: 45,
        },
      },
    },
    interaction: {
      intersect: false,
      mode: "index" as const,
    },
  };

  if (balanceData.length === 0) {
    return (
      <div className="h-64 flex items-center justify-center text-gray-500">
        Nenhuma transação registrada
      </div>
    );
  }

  return (
    <div className="h-64">
      <Line data={data} options={options} />
    </div>
  );
}
