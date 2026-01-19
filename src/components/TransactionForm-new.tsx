"use client";

import React, { useState, useEffect } from "react";
import { Transaction, TransactionType, Attachment } from "@/types";
import Input from "./Input";
import Button from "./Button";
import FileUpload from "./FileUpload";

interface TransactionFormProps {
  initialData?: Transaction;
  onSubmit: (data: Omit<Transaction, "id">) => void;
  onCancel: () => void;
  submitLabel?: string;
}

// Categorias sugeridas por tipo de transação
const categorySuggestions: Record<TransactionType, string[]> = {
  deposito: ["Salário", "Freelance", "Investimentos", "Rendimentos", "Outros"],
  transferencia: ["Entre contas", "Pagamento", "Outros"],
  pagamento: [
    "Alimentação",
    "Transporte",
    "Moradia",
    "Saúde",
    "Educação",
    "Lazer",
    "Outros",
  ],
  saque: ["Dinheiro", "Emergência", "Outros"],
};

const TransactionForm: React.FC<TransactionFormProps> = ({
  initialData,
  onSubmit,
  onCancel,
  submitLabel = "Salvar",
}) => {
  const [formData, setFormData] = useState({
    type: (initialData?.type || "deposito") as TransactionType,
    amount: initialData?.amount ? Math.abs(initialData.amount).toString() : "",
    date: initialData?.date
      ? new Date(initialData.date).toISOString().slice(0, 16)
      : new Date().toISOString().slice(0, 16),
    description: initialData?.description || "",
    category: initialData?.category || "",
  });

  const [attachments, setAttachments] = useState<Attachment[]>(
    initialData?.attachments || []
  );

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showCategorySuggestions, setShowCategorySuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  // Atualizar sugestões de categoria quando o tipo ou categoria mudar
  useEffect(() => {
    const suggestions = categorySuggestions[formData.type] || [];

    if (formData.category) {
      const filtered = suggestions.filter((cat) =>
        cat.toLowerCase().includes(formData.category.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions(suggestions);
    }
  }, [formData.type, formData.category]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.type) {
      newErrors.type = "Tipo é obrigatório";
    }

    const amount = parseFloat(formData.amount);
    if (!formData.amount || isNaN(amount) || amount <= 0) {
      newErrors.amount = "Valor deve ser um número positivo";
    } else if (amount > 1000000) {
      newErrors.amount = "Valor não pode exceder R$ 1.000.000,00";
    }

    if (!formData.date) {
      newErrors.date = "Data é obrigatória";
    } else {
      const selectedDate = new Date(formData.date);
      const now = new Date();
      if (selectedDate > now) {
        newErrors.date = "Data não pode ser futura";
      }
    }

    if (!formData.description.trim()) {
      newErrors.description = "Descrição é obrigatória";
    } else if (formData.description.trim().length < 3) {
      newErrors.description = "Descrição deve ter pelo menos 3 caracteres";
    } else if (formData.description.trim().length > 100) {
      newErrors.description = "Descrição não pode exceder 100 caracteres";
    }

    if (formData.category && formData.category.length > 50) {
      newErrors.category = "Categoria não pode exceder 50 caracteres";
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
      description: formData.description.trim(),
      category: formData.category.trim() || undefined,
      attachments: attachments.length > 0 ? attachments : undefined,
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Limpar erro do campo quando o usuário começar a digitar
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const selectSuggestion = (suggestion: string) => {
    handleChange("category", suggestion);
    setShowCategorySuggestions(false);
  };

  const formatAmountPreview = () => {
    const amount = parseFloat(formData.amount);
    if (isNaN(amount)) return "";

    const formatted = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(amount);

    return formData.type === "deposito" ? `+${formatted}` : `-${formatted}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Tipo de Transação */}
      <div>
        <label
          htmlFor="transaction-type"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Tipo de Transação <span className="text-red-500">*</span>
        </label>
        <select
          id="transaction-type"
          value={formData.type}
          onChange={(e) => handleChange("type", e.target.value)}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
            errors.type ? "border-red-500" : "border-gray-300"
          }`}
          aria-required="true"
          aria-invalid={!!errors.type}
          aria-describedby={errors.type ? "type-error" : undefined}
        >
          <option value="deposito">💰 Depósito</option>
          <option value="transferencia">🔄 Transferência</option>
          <option value="pagamento">💳 Pagamento</option>
          <option value="saque">🏧 Saque</option>
        </select>
        {errors.type && (
          <p id="type-error" className="mt-1 text-sm text-red-500" role="alert">
            {errors.type}
          </p>
        )}
      </div>

      {/* Valor */}
      <div>
        <label
          htmlFor="transaction-amount"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Valor <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
            R$
          </span>
          <Input
            id="transaction-amount"
            type="number"
            step="0.01"
            min="0.01"
            max="1000000"
            value={formData.amount}
            onChange={(e) => handleChange("amount", e.target.value)}
            className={`pl-12 ${errors.amount ? "border-red-500" : ""}`}
            placeholder="0,00"
            required
            aria-required="true"
            aria-invalid={!!errors.amount}
            aria-describedby={errors.amount ? "amount-error" : "amount-preview"}
          />
        </div>
        {formData.amount && !errors.amount && (
          <p id="amount-preview" className="mt-1 text-sm text-gray-500">
            Será registrado como:{" "}
            <span className="font-semibold">{formatAmountPreview()}</span>
          </p>
        )}
        {errors.amount && (
          <p
            id="amount-error"
            className="mt-1 text-sm text-red-500"
            role="alert"
          >
            {errors.amount}
          </p>
        )}
      </div>

      {/* Data e Hora */}
      <div>
        <label
          htmlFor="transaction-date"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Data e Hora <span className="text-red-500">*</span>
        </label>
        <Input
          id="transaction-date"
          type="datetime-local"
          value={formData.date}
          onChange={(e) => handleChange("date", e.target.value)}
          max={new Date().toISOString().slice(0, 16)}
          className={errors.date ? "border-red-500" : ""}
          required
          aria-required="true"
          aria-invalid={!!errors.date}
          aria-describedby={errors.date ? "date-error" : undefined}
        />
        {errors.date && (
          <p id="date-error" className="mt-1 text-sm text-red-500" role="alert">
            {errors.date}
          </p>
        )}
      </div>

      {/* Descrição */}
      <div>
        <label
          htmlFor="transaction-description"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Descrição <span className="text-red-500">*</span>
        </label>
        <Input
          id="transaction-description"
          type="text"
          value={formData.description}
          onChange={(e) => handleChange("description", e.target.value)}
          placeholder="Ex: Compra no supermercado"
          maxLength={100}
          className={errors.description ? "border-red-500" : ""}
          required
          aria-required="true"
          aria-invalid={!!errors.description}
          aria-describedby={
            errors.description ? "description-error" : "description-count"
          }
        />
        <div className="flex justify-between mt-1">
          {errors.description ? (
            <p
              id="description-error"
              className="text-sm text-red-500"
              role="alert"
            >
              {errors.description}
            </p>
          ) : (
            <span className="text-sm text-gray-500">Mínimo 3 caracteres</span>
          )}
          <span id="description-count" className="text-sm text-gray-500">
            {formData.description.length}/100
          </span>
        </div>
      </div>

      {/* Categoria com sugestões */}
      <div className="relative">
        <label
          htmlFor="transaction-category"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Categoria (opcional)
        </label>
        <Input
          id="transaction-category"
          type="text"
          value={formData.category}
          onChange={(e) => handleChange("category", e.target.value)}
          onFocus={() => setShowCategorySuggestions(true)}
          onBlur={() =>
            setTimeout(() => setShowCategorySuggestions(false), 200)
          }
          placeholder="Ex: Alimentação"
          maxLength={50}
          className={errors.category ? "border-red-500" : ""}
          aria-invalid={!!errors.category}
          aria-describedby={errors.category ? "category-error" : undefined}
          aria-autocomplete="list"
          aria-controls="category-suggestions"
          aria-expanded={showCategorySuggestions}
        />

        {/* Sugestões de categoria */}
        {showCategorySuggestions && filteredSuggestions.length > 0 && (
          <div
            id="category-suggestions"
            className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto"
            role="listbox"
          >
            {filteredSuggestions.map((suggestion, index) => (
              <button
                key={index}
                type="button"
                onClick={() => selectSuggestion(suggestion)}
                className="w-full px-4 py-2 text-left hover:bg-primary-50 hover:text-primary-700 transition-colors"
                role="option"
                aria-selected={formData.category === suggestion}
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}

        {errors.category && (
          <p
            id="category-error"
            className="mt-1 text-sm text-red-500"
            role="alert"
          >
            {errors.category}
          </p>
        )}
      </div>

      {/* Upload de Anexos */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Anexos (opcional)
        </label>
        <FileUpload
          attachments={attachments}
          onAttachmentsChange={setAttachments}
          maxFiles={5}
          maxSize={5}
        />
      </div>

      {/* Botões de ação */}
      <div className="flex gap-3 pt-4">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          className="flex-1"
        >
          Cancelar
        </Button>
        <Button type="submit" variant="primary" className="flex-1">
          {submitLabel}
        </Button>
      </div>
    </form>
  );
};

export default TransactionForm;
