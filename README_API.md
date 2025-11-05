# 🔌 API Mock com JSON Server

Este projeto inclui uma **API REST simulada** usando `json-server` para demonstrar integração com backend.

## 🚀 Como Usar

### Opção 1: Rodar Apenas a API Mock

```bash
npm run api
```

A API estará disponível em: `http://localhost:3001`

### Opção 2: Rodar Frontend + API Simultaneamente

```bash
npm run dev:fullstack
```

Isso iniciará:

- ✅ Next.js em `http://localhost:3000`
- ✅ JSON Server API em `http://localhost:3001`

## 📡 Endpoints Disponíveis

### 📊 Account (Conta)

```bash
# GET - Buscar dados da conta
GET http://localhost:3001/account

# PUT/PATCH - Atualizar conta
PUT http://localhost:3001/account
Content-Type: application/json

{
  "balance": 20000.00,
  "accountHolder": "João Silva"
}
```

### 💸 Transactions (Transações)

```bash
# GET - Listar todas as transações
GET http://localhost:3001/transactions

# GET - Buscar transação por ID
GET http://localhost:3001/transactions/1

# POST - Criar nova transação
POST http://localhost:3001/transactions
Content-Type: application/json

{
  "description": "Salário",
  "amount": 5000.00,
  "date": "2024-03-01T10:00:00.000Z",
  "type": "deposito",
  "category": "Salário"
}

# PUT - Atualizar transação completa
PUT http://localhost:3001/transactions/1
Content-Type: application/json

{
  "id": "1",
  "description": "Salário Atualizado",
  "amount": 5500.00,
  "date": "2024-03-01T10:00:00.000Z",
  "type": "deposito",
  "category": "Salário"
}

# PATCH - Atualizar parcialmente
PATCH http://localhost:3001/transactions/1
Content-Type: application/json

{
  "amount": 5500.00
}

# DELETE - Deletar transação
DELETE http://localhost:3001/transactions/1
```

## 🔍 Filtros e Queries

### Filtrar por tipo

```bash
GET http://localhost:3001/transactions?type=deposito
GET http://localhost:3001/transactions?type=pagamento
```

### Ordenar resultados

```bash
# Ordem crescente por data
GET http://localhost:3001/transactions?_sort=date&_order=asc

# Ordem decrescente por valor
GET http://localhost:3001/transactions?_sort=amount&_order=desc
```

### Paginação

```bash
# Página 1, 5 items por página
GET http://localhost:3001/transactions?_page=1&_limit=5

# Página 2
GET http://localhost:3001/transactions?_page=2&_limit=5
```

### Busca (Full-text search)

```bash
GET http://localhost:3001/transactions?q=salário
```

### Filtros avançados

```bash
# Maior que (gte) e menor que (lte)
GET http://localhost:3001/transactions?amount_gte=1000&amount_lte=5000

# Não igual (ne)
GET http://localhost:3001/transactions?type_ne=pagamento
```

## 🧪 Testando com cURL

```bash
# Listar todas as transações
curl http://localhost:3001/transactions

# Criar nova transação
curl -X POST http://localhost:3001/transactions \
  -H "Content-Type: application/json" \
  -d '{
    "description": "Freelance",
    "amount": 1500.00,
    "date": "2024-03-20T10:00:00.000Z",
    "type": "deposito",
    "category": "Trabalho"
  }'

# Deletar transação
curl -X DELETE http://localhost:3001/transactions/1
```

## 🧪 Testando com Postman/Insomnia

1. Importe a collection abaixo ou crie manualmente
2. Base URL: `http://localhost:3001`
3. Teste os endpoints CRUD

## 📝 Estrutura do Banco (db.json)

```json
{
  "account": {
    "id": 1,
    "balance": 16205.0,
    "accountNumber": "12345-6",
    "accountHolder": "João Silva"
  },
  "transactions": [
    {
      "id": "1",
      "description": "Salário",
      "amount": 5000.0,
      "date": "2024-03-01T10:00:00.000Z",
      "type": "deposito",
      "category": "Salário"
    }
    // ... mais transações
  ]
}
```

## 🔄 Resetar Dados

Para voltar aos dados iniciais:

1. Pare o servidor (Ctrl+C)
2. Restaure o arquivo `db.json` do backup ou do git
3. Reinicie o servidor (`npm run api`)

Ou simplesmente faça:

```bash
git checkout db.json
npm run api
```

## 🌐 Integração com Frontend

Para usar a API no lugar do localStorage:

1. Crie um service em `src/services/api.ts`:

```typescript
const API_URL = "http://localhost:3001";

export const api = {
  // Transactions
  getTransactions: () => fetch(`${API_URL}/transactions`).then((r) => r.json()),

  createTransaction: (data: any) =>
    fetch(`${API_URL}/transactions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((r) => r.json()),

  updateTransaction: (id: string, data: any) =>
    fetch(`${API_URL}/transactions/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((r) => r.json()),

  deleteTransaction: (id: string) =>
    fetch(`${API_URL}/transactions/${id}`, {
      method: "DELETE",
    }),

  // Account
  getAccount: () => fetch(`${API_URL}/account`).then((r) => r.json()),

  updateAccount: (data: any) =>
    fetch(`${API_URL}/account`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((r) => r.json()),
};
```

2. Modifique o `FinancialContext.tsx` para usar a API ao invés de localStorage

## 🎯 Vantagens do JSON Server

- ✅ API REST completa em segundos
- ✅ CRUD automático (Create, Read, Update, Delete)
- ✅ Filtros, ordenação e paginação built-in
- ✅ Persistência automática em arquivo JSON
- ✅ Perfeito para prototipagem e desenvolvimento
- ✅ Simula comportamento real de backend

## 📚 Documentação Oficial

- [JSON Server GitHub](https://github.com/typicode/json-server)
- [JSON Server NPM](https://www.npmjs.com/package/json-server)

## 🔗 Recursos Adicionais

- Use **Thunder Client** (extensão VS Code) para testar
- Use **REST Client** (extensão VS Code) para criar arquivos `.http`
- Configure CORS se necessário para produção

---

**💡 Dica:** O JSON Server é perfeito para desenvolvimento, mas use um backend real (Node.js + Express, NestJS, etc.) em produção!
