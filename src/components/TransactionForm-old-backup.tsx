"use client";

import React, { useState, useEffect } from "react";
import { Transaction, TransactionType } from "@/types";
import Input from "./Input";
import Button from "./Button";

interface TransactionFormProps {
  initialData?: Transaction;
  onSubmit: (data: Omit<Transaction, "id">) => void;
  onCancel: () => void;
  submitLabel?: string;
}

const TransactionForm: React.FC<TransactionFormProps> = ({
  initialData,
  onSubmit,
  onCancel,
  submitLabel = "Salvar",
}) => {
  const [formData, setFormData] = useState({
    type: (initialData?.type || "deposito") as TransactionType,
    amount: initialData?.amount?.toString() || "",
    date: initialData?.date
      ? new Date(initialData.date).toISOString().slice(0, 16)
      : "",
    description: initialData?.description || "",
    category: initialData?.category || "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.type) {
      newErrors.type = "Tipo é obrigatório";
    }

    if (!formData.amount || parseFloat(formData.amount) === 0) {
      newErrors.amount = "Valor é obrigatório e deve ser diferente de zero";
    }

    if (!formData.date) {
      newErrors.date = "Data é obrigatória";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Descrição é obrigatória";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    let amount = parseFloat(formData.amount);

    // Valores negativos para saídas
    if (formData.type !== "deposito" && amount > 0) {
      amount = -amount;
    }

    onSubmit({
      type: formData.type,
      amount,
      date: new Date(formData.date).toISOString(),
      description: formData.description,
      category: formData.category,
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Limpar erro do campo quando o usuário começar a digitar
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Tipo de Transação *
        </label>
        <select
          value={formData.type}
          onChange={(e) => handleChange("type", e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <option value="deposito">Depósito</option>
          <option value="transferencia">Transferência</option>
          <option value="pagamento">Pagamento</option>
          <option value="saque">Saque</option>
        </select>
        {errors.type && (
          <p className="mt-1 text-sm text-danger-600">{errors.type}</p>
        )}
      </div>

      <Input
        label="Valor *"
        type="number"
        step="0.01"
        placeholder="0.00"
        value={formData.amount}
        onChange={(e) => handleChange("amount", e.target.value)}
        error={errors.amount}
      />

      <Input
        label="Data e Hora *"
        type="datetime-local"
        value={formData.date}
        onChange={(e) => handleChange("date", e.target.value)}
        error={errors.date}
      />

      <Input
        label="Descrição *"
        type="text"
        placeholder="Ex: Salário, Conta de luz, etc."
        value={formData.description}
        onChange={(e) => handleChange("description", e.target.value)}
        error={errors.description}
      />

      <Input
        label="Categoria (opcional)"
        type="text"
        placeholder="Ex: Alimentação, Transporte, etc."
        value={formData.category}
        onChange={(e) => handleChange("category", e.target.value)}
      />

      <div className="flex gap-3 pt-4">
        <Button type="submit" variant="primary" fullWidth>
          {submitLabel}
        </Button>
        <Button type="button" variant="outline" fullWidth onClick={onCancel}>
          Cancelar
        </Button>
      </div>
    </form>
  );
};

export default TransactionForm;
