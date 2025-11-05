# 💰 Sistema de Gerenciamento Financeiro

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14.2.15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.14-38B2AC?style=for-the-badge&logo=tailwind-css)

![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=node.js)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![Status](https://img.shields.io/badge/Status-Concluído-success?style=flat-square)
![PRs](https://img.shields.io/badge/PRs-Welcome-brightgreen?style=flat-square)

**Aplicação completa de gerenciamento financeiro pessoal**

[Demo](#-demonstração) • [Instalação](#-instalação) • [Funcionalidades](#-funcionalidades) • [Documentação](#-documentação)

### 📊 Estatísticas do Projeto

| Categoria               | Valor                          |
| ----------------------- | ------------------------------ |
| 📦 **Componentes**      | 5 componentes reutilizáveis    |
| 📄 **Páginas**          | 2 páginas completas            |
| 🎨 **Design System**    | 100% documentado               |
| 📱 **Responsividade**   | Mobile + Tablet + Desktop      |
| 🧪 **Dados Mock**       | 8 transações de exemplo        |
| ⚡ **Performance**      | App Router (Next.js 14)        |
| 🔤 **Tipagem**          | 100% TypeScript                |
| ♿ **Acessibilidade**   | ARIA labels implementados      |
| 📏 **Linhas de Código** | ~1.200 linhas (incluindo docs) |

</div>

---

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como parte do **Tech Challenge - Fase 1** da **POSTECH**, com o objetivo de criar uma aplicação front-end moderna para gerenciamento de transações financeiras.

### 🎯 Objetivo

Desenvolver uma interface que permita aos usuários:

- Visualizar seu saldo e histórico de transações
- Adicionar novas transações (depósitos, transferências, pagamentos, saques)
- Editar transações existentes
- Excluir transações indesejadas
- Filtrar e organizar suas finanças de forma intuitiva

### 🏗️ Arquitetura

A aplicação foi construída seguindo as melhores práticas de desenvolvimento, com:

- **Design System próprio** para garantir consistência visual
- **Context API** para gerenciamento de estado global
- **TypeScript** para segurança de tipos
- **Componentes reutilizáveis** e modulares
- **Responsividade** em todos os dispositivos

## ✨ Funcionalidades

### 🏠 Home Page (Dashboard Principal)

<details>
<summary><b>Clique para ver detalhes</b></summary>

- **👋 Boas-vindas Personalizadas**

  - Saudação com o nome do titular da conta
  - Mensagem motivacional

- **💵 Cards de Estatísticas Financeiras**

  - **Saldo Atual**: Visualização em destaque do saldo da conta
  - **Receitas do Mês**: Total de entradas (valores positivos)
  - **Despesas do Mês**: Total de saídas (valores negativos)
  - Design com gradientes coloridos e ícones

- **📊 Extrato Rápido**

  - Últimas 5 transações realizadas
  - Visualização clara de tipo, valor, data e categoria
  - Cores diferenciadas (verde para receitas, vermelho para despesas)
  - Link rápido para ver todas as transações

- **➕ Ação Rápida**
  - Botão destacado para adicionar nova transação
  - Acesso rápido ao formulário via modal

</details>

### 📋 Página de Transações

<details>
<summary><b>Clique para ver detalhes</b></summary>

- **🔍 Sistema de Filtros**

  - Filtrar por tipo de transação
  - Botões de filtro visual e intuitivos
  - Contagem de transações filtradas

- **📜 Listagem Completa**

  - Todas as transações em ordem cronológica
  - Informações detalhadas (tipo, valor, data, categoria)
  - Design responsivo e organizado

- **✏️ Edição de Transações**

  - Botão de edição em cada transação
  - Modal com formulário pré-preenchido
  - Validação em tempo real

- **🗑️ Exclusão de Transações**
  - Botão de exclusão com confirmação
  - Modal de segurança antes de deletar
  - Prevenção de exclusões acidentais

</details>

### 📝 Formulário de Transações

<details>
<summary><b>Clique para ver detalhes</b></summary>

- **Campos Disponíveis**:

  - ✅ **Tipo**: Depósito, Transferência, Pagamento ou Saque
  - ✅ **Valor**: Campo numérico com validação
  - ✅ **Data e Hora**: Seletor completo de data/hora
  - ✅ **Descrição**: Campo de texto obrigatório
  - ✅ **Categoria**: Campo opcional para organização

- **Validações Implementadas**:

  - Tipo obrigatório
  - Valor obrigatório e diferente de zero
  - Data obrigatória
  - Descrição obrigatória
  - Mensagens de erro claras e amigáveis

- **Funcionalidades**:
  - Conversão automática de valores (negativos para saídas)
  - Feedback visual de erros
  - Botões de ação (Salvar/Cancelar)
  - Utilizado tanto para criação quanto edição

</details>

### 🎨 Design System Integrado

<details>
<summary><b>Clique para ver componentes</b></summary>

- **Button**: 5 variantes, 3 tamanhos, totalmente customizável
- **Input**: Com label, validação, erro e helper text
- **Card**: Container estilizado com padding e sombra configuráveis
- **Modal**: Dialog responsivo com overlay e animações
- **TransactionForm**: Formulário especializado e reutilizável

Ver documentação completa em [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)

</details>

## 🎨 Design System

### Componentes Desenvolvidos

1. **Button**

   - Variantes: primary, secondary, success, danger, outline
   - Tamanhos: sm, md, lg
   - Suporte a fullWidth
   - Estados: hover, focus, disabled

2. **Input**

   - Label opcional
   - Mensagens de erro
   - Helper text
   - Estados de validação
   - Totalmente acessível

3. **Card**

   - Diferentes níveis de padding
   - Diferentes sombras
   - Totalmente customizável

4. **Modal**

   - Overlay com backdrop
   - Tamanhos configuráveis (sm, md, lg, xl)
   - Botão de fechar
   - Bloqueio de scroll do body
   - Animações suaves

5. **TransactionForm**
   - Formulário reutilizável
   - Validação completa
   - Suporte para criação e edição
   - Feedback visual de erros

### Paleta de Cores

```css
Primary (Azul): #0284c7
Success (Verde): #16a34a
Danger (Vermelho): #dc2626
Warning (Amarelo): #d97706
```

## 🚀 Tecnologias Utilizadas

### Core Technologies

| Tecnologia                                    | Versão  | Descrição                             |
| --------------------------------------------- | ------- | ------------------------------------- |
| [Next.js](https://nextjs.org/)                | 14.2.15 | Framework React com App Router e SSR  |
| [React](https://react.dev/)                   | 18.3.1  | Biblioteca JavaScript para interfaces |
| [TypeScript](https://www.typescriptlang.org/) | 5.x     | Superset tipado do JavaScript         |
| [Tailwind CSS](https://tailwindcss.com/)      | 3.4.14  | Framework CSS utility-first           |
| [Lucide React](https://lucide.dev/)           | 0.445.0 | Biblioteca de ícones moderna          |

### Destaques Técnicos

- ✅ **App Router** do Next.js 14 (última versão)
- ✅ **Server Components** e **Client Components**
- ✅ **Context API** para gerenciamento de estado
- ✅ **TypeScript** em 100% do código
- ✅ **CSS Modules** via Tailwind
- ✅ **Componentes Reutilizáveis**
- ✅ **Hooks Customizados**
- ✅ **Dados Mockados** (sem necessidade de backend)

## 📦 Estrutura do Projeto

```
src/
├── app/                      # App Router do Next.js
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Home Page
│   ├── globals.css          # Estilos globais
│   └── transactions/        # Página de transações
│       └── page.tsx
├── components/              # Componentes reutilizáveis
│   ├── Button.tsx          # Botão do Design System
│   ├── Card.tsx            # Card do Design System
│   ├── Input.tsx           # Input do Design System
│   ├── Modal.tsx           # Modal do Design System
│   └── TransactionForm.tsx # Formulário de transação
├── contexts/               # Context API
│   └── FinancialContext.tsx # Gerenciamento de estado global
├── data/                   # Dados mockados
│   └── transactions.json   # Transações simuladas
└── types/                  # Definições de tipos TypeScript
    └── index.ts
```

## 🛠️ Instalação e Execução

### 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** 18.x ou superior ([Download](https://nodejs.org/))
- **npm** 9.x ou superior (já vem com o Node.js)
- **Git** (opcional, para clonar o repositório)

### 📥 Instalação

**Passo 1:** Clone o repositório (ou navegue até o diretório do projeto)

```bash
git clone <url-do-repositorio>
cd "Tech Challenge - Etapa 1"
```

**Passo 2:** Instale as dependências

```bash
npm install
```

Este comando irá instalar todas as dependências necessárias listadas no `package.json`.

### ▶️ Executando a Aplicação

**Modo Desenvolvimento:**

```bash
npm run dev
```

A aplicação estará disponível em:

- **Local:** [http://localhost:3000](http://localhost:3000)
- Se a porta 3000 estiver ocupada, o Next.js usará automaticamente a porta 3001

**Modo Produção:**

```bash
# Build da aplicação
npm run build

# Iniciar servidor de produção
npm start
```

### 🔧 Scripts Disponíveis

| Script                  | Descrição                                      |
| ----------------------- | ---------------------------------------------- |
| `npm run dev`           | Inicia o servidor de desenvolvimento Next.js   |
| `npm run build`         | Cria build otimizado para produção             |
| `npm run start`         | Inicia servidor em modo produção               |
| `npm run lint`          | Executa o linter (ESLint)                      |
| `npm run api`           | 🆕 Inicia API mock (JSON Server) na porta 3001 |
| `npm run dev:fullstack` | 🆕 Roda Next.js + API simultaneamente          |

### 🌐 Acessando a Aplicação

Após executar `npm run dev`, abra seu navegador e acesse:

```
http://localhost:3000
```

Você verá a tela inicial do sistema com:

- Dashboard com saldo e estatísticas
- Últimas transações
- Botão para adicionar nova transação

## 📊 Dados Mockados

### 🎯 Três Formas de Mock Implementadas

Este projeto implementa **TODAS as 3 opções** sugeridas no Tech Challenge:

#### ✅ 1. Arquivo JSON (`transactions.json`)

- 8 transações de exemplo
- Informações da conta
- Dados iniciais do sistema

#### ✅ 2. API Fake com JSON Server (`db.json`)

- **API REST completa** rodando em `http://localhost:3001`
- Endpoints CRUD automáticos
- Filtros, ordenação e paginação
- 📖 **[Ver documentação completa da API](./README_API.md)**

#### ✅ 3. Mocks via Frontend (Context API + LocalStorage)

- Estado global com Context API
- Persistência automática no localStorage
- Funciona offline

### 💾 Arquitetura de Persistência

**Modo Padrão (LocalStorage):**

Os dados são gerenciados através de uma arquitetura completa:

1. **Arquivo JSON** (`src/data/transactions.json`)

   - Contém 8 transações de exemplo
   - Informações da conta (saldo, número, titular)
   - Serve como **dados iniciais** na primeira vez

2. **Context API** (`src/contexts/FinancialContext.tsx`)

   - Gerenciamento de estado global React
   - Funções CRUD (Create, Read, Update, Delete)
   - Cálculo automático de saldo baseado nas transações
   - **Sincronização automática com localStorage**

3. **LocalStorage** (Persistência no Navegador)

   - 🔄 **Salva automaticamente** todas as alterações
   - 💾 **Mantém os dados** mesmo após F5 ou fechar o navegador
   - ⚡ **Carrega dados salvos** ao iniciar a aplicação
   - 🔄 **Botão de Reset** para voltar aos dados iniciais

4. **Estado Local** (useState/useReducer)
   - Controle de modais e UI
   - Estado de formulários
   - Filtros e buscas temporários

**Modo API Mock (JSON Server):**

Para usar a API REST simulada, consulte **[README_API.md](./README_API.md)**

### � Fluxo de Dados

```
1️⃣ Primeira Visita
   transactions.json → Context API → LocalStorage

2️⃣ Adicionar/Editar/Deletar Transação
   Ação do Usuário → Context API → Atualiza Estado → Salva no LocalStorage

3️⃣ Recarregar Página (F5)
   LocalStorage → Context API → Renderiza na Tela

4️⃣ Resetar Dados
   Botão "Resetar" → Remove LocalStorage → Carrega transactions.json
```

### �💾 Dados Incluídos

```json
{
  "account": {
    "balance": 15750.5,
    "accountNumber": "12345-6",
    "accountHolder": "João Silva"
  },
  "transactions": [
    // 8 transações de exemplo pré-cadastradas
    // Tipos variados: depósito, transferência, pagamento, saque
    // Categorias: Salário, Contas, Alimentação, etc.
  ]
}
```

### 🔄 Funcionalidades de Dados

- ✅ **Adicionar**: Cria nova transação com ID único
- ✅ **Editar**: Atualiza transação existente
- 💾 **Persistir**: Salva automaticamente no localStorage
- 🔄 **Carregar**: Recupera dados salvos ao iniciar
- 🔄 **Resetar**: Volta aos dados iniciais do JSON
- ✅ **Deletar**: Remove transação permanentemente
- ✅ **Buscar**: Encontra transação por ID
- ✅ **Filtrar**: Filtra por tipo de transação
- ✅ **Calcular**: Atualiza saldo automaticamente

> **Nota:** Os dados são armazenados apenas na memória (não persistem após recarregar a página). Para persistência real, seria necessário integração com um backend.

## 🎯 Funcionalidades do Design System

### Consistência Visual

- Todas as cores seguem a paleta definida
- Espaçamentos padronizados (Tailwind CSS)
- Tipografia consistente
- Animações e transições suaves

### Reutilização

- Todos os componentes são altamente reutilizáveis
- Props tipadas com TypeScript
- Documentação inline com JSDoc
- Exemplos de uso em cada componente

### Acessibilidade

- Suporte a navegação por teclado
- Labels e ARIA labels apropriados
- Contraste de cores adequado
- Feedback visual de estados

## 📱 Responsividade

A aplicação foi desenvolvida com **mobile-first** e é totalmente responsiva:

| Dispositivo    | Resolução      | Características                                 |
| -------------- | -------------- | ----------------------------------------------- |
| 📱 **Mobile**  | 320px - 767px  | Layout de coluna única, cards empilhados        |
| 📱 **Tablet**  | 768px - 1023px | Grid de 2 colunas, navegação otimizada          |
| 💻 **Desktop** | 1024px+        | Grid de 3 colunas, aproveitamento total da tela |

### Adaptações por Dispositivo

- **Mobile**:

  - Botões full-width para melhor usabilidade
  - Cards empilhados verticalmente
  - Navegação simplificada

- **Tablet**:

  - Grid responsivo (2 colunas)
  - Modais ajustados
  - Aproveitamento do espaço horizontal

- **Desktop**:
  - Grid completo (3 colunas)
  - Sidebar expansível (se implementada)
  - Hover effects completos

## 🎯 Demonstração

### Capturas de Tela

#### 🏠 Home Page

- Dashboard com saldo e estatísticas
- Cards coloridos com gradientes
- Extrato das últimas transações

#### � Página de Transações

- Lista completa de transações
- Sistema de filtros visual
- Botões de ação (editar/deletar)

#### ➕ Modal de Adicionar/Editar

- Formulário completo
- Validação em tempo real
- Design limpo e intuitivo

> **Dica:** Execute `npm run dev` e acesse http://localhost:3000 para ver a aplicação funcionando!

---

## 📁 Estrutura de Arquivos

```
tech-challenge-fase1/
├── 📁 src/
│   ├── 📁 app/
│   │   ├── 📁 transactions/
│   │   │   └── page.tsx          # Página de lista de transações
│   │   ├── layout.tsx             # Layout raiz com providers
│   │   ├── page.tsx               # Página inicial (dashboard)
│   │   └── globals.css            # Estilos globais + Tailwind
│   │
│   ├── 📁 components/
│   │   ├── Button.tsx             # Componente de botão (5 variantes)
│   │   ├── Input.tsx              # Campo de input com validação
│   │   ├── Card.tsx               # Container de card
│   │   ├── Modal.tsx              # Modal responsivo
│   │   └── TransactionForm.tsx    # Formulário de transação
│   │
│   ├── 📁 contexts/
│   │   └── FinancialContext.tsx   # Context API (estado global)
│   │
│   ├── 📁 data/
│   │   └── transactions.json      # Dados mockados (8 transações)
│   │
│   └── 📁 types/
│       └── index.ts               # Tipos TypeScript
│
├── 📁 public/                     # Arquivos estáticos
├── 📄 package.json                # Dependências do projeto
├── 📄 tsconfig.json               # Configuração TypeScript
├── 📄 tailwind.config.js          # Configuração Tailwind CSS
├── 📄 postcss.config.js           # Configuração PostCSS
├── 📄 next.config.js              # Configuração Next.js
├── 📄 README.md                   # Este arquivo
└── 📄 DESIGN_SYSTEM.md            # Documentação do Design System
```

### 🔑 Arquivos Principais

| Arquivo                              | Responsabilidade                    | Linhas |
| ------------------------------------ | ----------------------------------- | ------ |
| `src/contexts/FinancialContext.tsx`  | Gerenciamento de estado global      | ~100   |
| `src/app/page.tsx`                   | Página inicial com dashboard        | ~150   |
| `src/app/transactions/page.tsx`      | Lista e gerenciamento de transações | ~200   |
| `src/components/TransactionForm.tsx` | Formulário completo com validação   | ~150   |
| `src/components/Modal.tsx`           | Sistema de modais reutilizável      | ~80    |
| `src/types/index.ts`                 | Definições de tipos TypeScript      | ~30    |
| `src/data/transactions.json`         | Dados mockados de exemplo           | ~100   |

---

## 🧪 Testando a Aplicação

### 🎯 Fluxo de Uso Recomendado

<details open>
<summary><b>1️⃣ Visualizar Dashboard</b></summary>

- ✅ Observe o saldo atual (R$ 16.205,00)
- 📊 Veja as estatísticas do mês
  - Total de receitas: R$ 20.500,00
  - Total de despesas: R$ 4.295,00
- 📋 Confira as últimas 5 transações

**Validações:**

- Saldo = Receitas - Despesas
- Cards com cores diferenciadas (verde/vermelho)
- Ícones representativos (TrendingUp/TrendingDown)
</details>

<details>
<summary><b>2️⃣ Adicionar Transação</b></summary>

- 🆕 Clique em "Adicionar Transação" (Home ou Transações)
- 📝 Preencha o formulário:
  - Descrição: Ex: "Freelance Design"
  - Valor: Ex: 1500
  - Data: Selecione a data
  - Tipo: Receita ou Despesa
- 💾 Clique em "Adicionar"
- ✅ Veja a transação aparecer na lista imediatamente
- 💰 Observe o saldo atualizar automaticamente

**Validações:**

- Todos os campos são obrigatórios
- Valor deve ser número positivo
- Data não pode ser futura
- Feedback visual de erro em vermelho
</details>

<details>
<summary><b>3️⃣ Filtrar Transações</b></summary>

- 🔍 Navegue até "Ver todas" (ou /transactions)
- 🎛️ Use o dropdown de filtros:
  - **Todas:** Mostra receitas e despesas (8 transações)
  - **Receitas:** Apenas entradas positivas (4 transações)
  - **Despesas:** Apenas saídas negativas (4 transações)
- 📊 Observe a contagem atualizar dinamicamente

**Validações:**

- Contador mostra número correto de transações
- Filtro persiste ao adicionar/editar/deletar
- Cores corretas por tipo (verde/vermelho)
</details>

<details>
<summary><b>4️⃣ Editar Transação</b></summary>

- ✏️ Clique no ícone de lápis (Pencil) na transação desejada
- 📝 Modal abre com dados pré-preenchidos
- 🔄 Modifique os campos desejados
- 💾 Clique em "Atualizar"
- ✅ Veja a atualização instantânea na lista e no saldo

**Validações:**

- Formulário mantém valores originais
- Validação idêntica à adição
- Saldo recalcula automaticamente
- Transação mantém o ID original
</details>

<details>
<summary><b>5️⃣ Deletar Transação</b></summary>

- 🗑️ Clique no ícone de lixeira (Trash2) na transação
- ⚠️ Modal de confirmação aparece
- ✔️ Confirme clicando em "Excluir"
- 🗑️ Observe a remoção imediata da lista
- 💰 Veja o saldo atualizar automaticamente

**Validações:**

- Confirmação previne exclusões acidentais
- Transação é removida do estado
- Saldo recalcula sem a transação
- Não há possibilidade de desfazer (por enquanto)
</details>

### 📋 Checklist de Testes

- [ ] ✅ Saldo inicial exibido corretamente (R$ 16.205,00)
- [ ] ➕ Adicionar receita atualiza saldo positivamente
- [ ] ➖ Adicionar despesa atualiza saldo negativamente
- [ ] 🔍 Filtros funcionam corretamente (Todas/Receitas/Despesas)
- [ ] ✏️ Edição atualiza transação e recalcula saldo
- [ ] 🗑️ Exclusão remove transação e recalcula saldo
- [ ] 📱 Layout responsivo em diferentes tamanhos de tela
- [ ] 🎨 Cores e estilos consistentes com Design System
- [ ] ⌨️ Validação de formulário funciona em todos os campos
- [ ] 🚫 Mensagens de erro aparecem corretamente

---

## 🔄 Roadmap / Próximas Melhorias

### 📊 Funcionalidades Futuras

- [ ] **Gráficos e Relatórios**

  - Gráfico de pizza (categorias)
  - Gráfico de linha (evolução temporal)
  - Relatórios mensais/anuais

- [ ] **Filtros Avançados**

  - Filtro por data (range)
  - Filtro por valor (min/max)
  - Filtro por categoria
  - Busca por descrição

- [ ] **Exportação de Dados**

  - Exportar para PDF
  - Exportar para Excel/CSV
  - Imprimir extrato

- [ ] **Customizações**

  - Categorias personalizadas
  - Modo escuro/claro
  - Temas de cores
  - Configurações de usuário

- [ ] **Recursos Avançados**
  - Transações recorrentes
  - Metas de economia
  - Alertas de gastos
  - Dashboard customizável

### 🛠️ Melhorias Técnicas

- [ ] Implementar Storybook
- [ ] Adicionar testes unitários (Jest)
- [ ] Adicionar testes E2E (Playwright)
- [ ] Implementar PWA
- [ ] Adicionar i18n (internacionalização)
- [ ] Otimizar performance
- [ ] Adicionar CI/CD

## 🤝 Contribuindo

Este é um projeto educacional, mas contribuições são **muito bem-vindas**! 🎉

### 💡 Como Você Pode Contribuir

- 🐛 Reportar bugs e problemas
- ✨ Sugerir novas funcionalidades
- 📝 Melhorar a documentação
- 🎨 Aprimorar o Design System
- 🧪 Adicionar testes
- ♿ Melhorar acessibilidade
- 🌍 Adicionar internacionalização (i18n)

### 📝 Processo de Contribuição

1. **🍴 Fork o Projeto**

   ```bash
   # Clique no botão "Fork" no GitHub
   ```

2. **📥 Clone seu Fork**

   ```bash
   git clone https://github.com/seu-usuario/tech-challenge-fase1.git
   cd tech-challenge-fase1
   ```

3. **🌿 Crie uma Branch**

   ```bash
   git checkout -b feature/minha-feature
   # ou
   git checkout -b fix/meu-bug-fix
   ```

4. **💻 Faça suas Alterações**

   ```bash
   # Desenvolva sua feature/fix
   npm run dev  # Teste localmente
   ```

5. **✅ Commit suas Mudanças**

   ```bash
   git add .
   git commit -m "feat: adiciona minha nova feature"
   ```

   **Convenção de Commits:**

   - `feat:` Nova funcionalidade
   - `fix:` Correção de bug
   - `docs:` Documentação
   - `style:` Formatação/estilo
   - `refactor:` Refatoração
   - `test:` Testes
   - `chore:` Manutenção

6. **📤 Push para seu Fork**

   ```bash
   git push origin feature/minha-feature
   ```

7. **🎯 Abra um Pull Request**
   - Acesse seu fork no GitHub
   - Clique em "Compare & pull request"
   - Descreva suas mudanças detalhadamente
   - Aguarde review! 👀

### ✨ Boas Práticas

- ✅ Mantenha o código limpo e bem documentado
- ✅ Siga as convenções do projeto (TypeScript, Tailwind)
- ✅ Teste suas mudanças antes de commitar
- ✅ Atualize a documentação se necessário
- ✅ Seja respeitoso e construtivo nos comentários

### 🎯 Áreas que Precisam de Ajuda

- [ ] Adicionar testes unitários (Jest + Testing Library)
- [ ] Implementar testes E2E (Playwright/Cypress)
- [ ] Melhorar acessibilidade (WCAG 2.1)
- [ ] Adicionar modo escuro (Dark Mode)
- [ ] Implementar gráficos e visualizações
- [ ] Adicionar persistência (LocalStorage/IndexedDB)
- [ ] Criar Storybook para componentes
- [ ] Otimizar performance (Lighthouse 100)

### 🏅 Contribuidores

Agradecimentos especiais a todos que contribuírem para este projeto! 🙏

---

## � Troubleshooting

### Problemas Comuns e Soluções

<details>
<summary><b>❌ Erro: "Cannot find module 'react'"</b></summary>

**Solução:**

```bash
# Deletar node_modules e reinstalar
rm -rf node_modules package-lock.json
npm install
```

</details>

<details>
<summary><b>❌ Erro: "Port 3000 is already in use"</b></summary>

**Solução:** O Next.js automaticamente tentará a porta 3001. Ou você pode:

```bash
# Matar processo na porta 3000 (Windows)
npx kill-port 3000

# Ou especificar outra porta
npm run dev -- -p 3002
```

</details>

<details>
<summary><b>❌ Erro de TypeScript</b></summary>

**Solução:**

```bash
# Limpar cache e rebuild
rm -rf .next
npm run build
```

</details>

<details>
<summary><b>❌ Estilos do Tailwind não aparecem</b></summary>

**Solução:**

```bash
# Verificar se PostCSS e Tailwind estão instalados
npm install -D tailwindcss postcss autoprefixer

# Reiniciar o servidor
npm run dev
```

</details>

<details>
<summary><b>❌ Página em branco / Erro 404</b></summary>

**Solução:**

- Certifique-se de que está acessando `http://localhost:3000`
- Verifique se o servidor está rodando (`npm run dev`)
- Limpe o cache do navegador (Ctrl+Shift+Delete)
</details>

### 💡 Dicas de Performance

- Use o modo de produção para melhor performance: `npm run build && npm start`
- Limpe o cache regularmente: `rm -rf .next`
- Mantenha as dependências atualizadas: `npm update`

---

## ❓ FAQ (Perguntas Frequentes)

<details>
<summary><b>1. Por que usar Context API ao invés de Redux?</b></summary>

Para este projeto de escopo pequeno/médio, Context API é mais que suficiente e oferece:

- ✅ Menos boilerplate e configuração
- ✅ Nativo do React (sem dependências extras)
- ✅ Performance adequada para o volume de dados
- ✅ Mais fácil de entender e manter

Para projetos maiores, considere Redux, Zustand ou Jotai.

</details>

<details>
<summary><b>2. Por que usar dados mockados ao invés de API?</b></summary>

Este é um projeto frontend de demonstração focado em:

- 🎯 Implementação de Design System
- 🎨 Desenvolvimento de componentes reutilizáveis
- � Responsividade e UX

Dados mockados com **localStorage** permitem:

- ⚡ Desenvolvimento mais rápido
- 🧪 Testes sem dependência de backend
- 📦 Deploy simplificado (GitHub Pages, Vercel)
- 💾 **Persistência local (dados salvos no navegador)**
- 🔄 Funciona offline

**Implementação:**

- ✅ JSON inicial + Context API + LocalStorage
- ✅ Dados persistem após F5 ou fechar navegador
- ✅ Botão de reset para dados iniciais

**Próximo passo:** Integração com API REST (ver [Roadmap](#-roadmap--próximas-melhorias))

</details>

<details>
<summary><b>3. Os dados são perdidos ao recarregar a página?</b></summary>

**NÃO!** Os dados são **persistidos automaticamente** no `localStorage`.

**Como funciona:**

1. 📝 Adiciona/edita/deleta transação
2. 💾 Context API salva no localStorage
3. 🔄 Ao dar F5, dados são carregados automaticamente
4. ✅ Persistem mesmo fechando o navegador

**Para resetar:** Clique em "Resetar Dados" na página de transações

**Limitações do localStorage:**

- Dados ficam apenas neste navegador
- ~5-10MB de limite
- Perdidos ao limpar cache
</details>

<details>
<summary><b>4. Como adicionar autenticação?</b></summary>

Sugestões de implementação:

**Opção 1 - NextAuth.js:**

```bash
npm install next-auth
```

- Suporte a múltiplos provedores (Google, GitHub)
- Sessões JWT
- Documentação completa

**Opção 2 - Clerk:**

- Autenticação completa como serviço
- UI pronta
- Free tier generoso

**Opção 3 - Firebase Auth:**

- Integração simples
- Vários métodos de login
- Banco de dados incluído
</details>

<details>
<summary><b>5. Como fazer deploy da aplicação?</b></summary>

**Vercel (Recomendado - criadores do Next.js):**

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Netlify:**

- Conecte seu repositório GitHub
- Build command: `npm run build`
- Publish directory: `.next`

**GitHub Pages:**

- Requer configuração adicional
- Use `next export` (Static Site Generation)
- Configure `next.config.js` com `output: 'export'`
</details>

<details>
<summary><b>6. Posso usar este projeto como base para outros?</b></summary>

**Sim! Este projeto é ideal como:**

- 📚 Referência de Design System em Next.js
- 🎨 Template para dashboards financeiros
- 🏗️ Boilerplate de projetos React/Next.js
- 📖 Material de estudo de boas práticas

**Licença:** MIT - Use livremente!

**Sugestão:** Dê crédito ao projeto original se usar publicamente 😊

</details>

<details>
<summary><b>7. Quais são os próximos passos após completar este projeto?</b></summary>

**Evolução recomendada:**

1. 🔗 Integrar com API REST real
2. 🔐 Adicionar autenticação
3. 📊 Implementar gráficos e visualizações
4. 💾 ~~Adicionar persistência~~ ✅ **JÁ IMPLEMENTADO (localStorage)**
5. 🧪 Escrever testes (Jest + Testing Library)
6. 📱 Criar versão PWA (Progressive Web App)
7. 🌍 Internacionalização (i18n)
8. ♿ Melhorar acessibilidade (ARIA)

Veja mais no [Roadmap](#-roadmap--próximas-melhorias)

</details>

---

## �📞 Suporte

Se você encontrar algum problema ou tiver dúvidas:

1. 📖 Verifique a documentação em [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)
2. ❓ Consulte a seção de [FAQ](#-faq-perguntas-frequentes)
3. 🔍 Consulte a seção de [Troubleshooting](#-troubleshooting)
4. ✅ Verifique se todas as dependências foram instaladas (`npm install`)
5. 🖥️ Certifique-se de estar usando Node.js 18+
6. 🧹 Limpe o cache do Next.js e reinstale:
   ```bash
   rm -rf .next node_modules package-lock.json
   npm install
   npm run dev
   ```

### 🆘 Precisa de Ajuda Adicional?

- 📚 [Documentação Next.js](https://nextjs.org/docs)
- ⚛️ [Documentação React](https://react.dev)
- 🎨 [Documentação Tailwind CSS](https://tailwindcss.com/docs)
- 📘 [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

## 📚 Documentação Adicional

- 📖 **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** - Documentação completa do Design System
- � **[README_API.md](./README_API.md)** - 🆕 Documentação da API Mock (JSON Server)
- �📦 **[package.json](./package.json)** - Dependências e scripts
- 🗃️ **[db.json](./db.json)** - 🆕 Banco de dados da API Mock
- ⚙️ **[tsconfig.json](./tsconfig.json)** - Configuração do TypeScript
- 🎨 **[tailwind.config.js](./tailwind.config.js)** - Configuração do Tailwind

---

## 🏆 Requisitos do Tech Challenge

### ✅ Requisitos Atendidos

| Requisito                     | Status | Implementação                                                                                  |
| ----------------------------- | ------ | ---------------------------------------------------------------------------------------------- |
| Home Page com saldo           | ✅     | `src/app/page.tsx`                                                                             |
| Extrato de transações         | ✅     | Cards na home e página dedicada                                                                |
| Adicionar transação           | ✅     | Modal com formulário completo                                                                  |
| Listagem completa             | ✅     | `src/app/transactions/page.tsx`                                                                |
| Editar transação              | ✅     | Modal de edição                                                                                |
| Deletar transação             | ✅     | Modal de confirmação                                                                           |
| Design System                 | ✅     | 5 componentes reutilizáveis                                                                    |
| Next.js                       | ✅     | Versão 14 com App Router                                                                       |
| TypeScript                    | ✅     | 100% do código tipado                                                                          |
| **Dados Mockados (3 formas)** | ✅     | 📋 Arquivo JSON<br>🔌 API Fake (json-server)<br>💾 Mocks Frontend (Context API + localStorage) |
| Responsividade                | ✅     | Mobile, Tablet, Desktop                                                                        |
| Documentação                  | ✅     | README.md + DESIGN_SYSTEM.md + README_API.md                                                   |

---

## 🎓 Aprendizados

Este projeto permitiu aplicar e consolidar conhecimentos em:

- ⚛️ **React 18** e hooks avançados (useState, useEffect, useContext)
- 🚀 **Next.js 14** com App Router e Server/Client Components
- 📘 **TypeScript** para type safety
- 🎨 **Tailwind CSS** e design responsivo
- 🏗️ **Arquitetura de componentes** reutilizáveis
- 🔄 **Gerenciamento de estado** com Context API
- 📝 **Formulários** e validações
- ♿ **Acessibilidade** e boas práticas
- 📖 **Documentação técnica** completa
- 🎯 **Planejamento e execução** de projeto completo
- 🔌 **API REST** com JSON Server
- 💾 **Persistência de dados** (localStorage + arquivo JSON)

---


## �📄 Licença

Este projeto foi desenvolvido para fins **educacionais** como parte do **Tech Challenge da POSTECH**.

Sinta-se livre para usar este código como referência para seus estudos! 📚

---

## 👨‍💻 Autor

Desenvolvido com 💙 e ☕ para o **Tech Challenge - Fase 1** da **POSTECH**.

### 🙏 Agradecimentos

- 🎓 **POSTECH** pelo desafio e oportunidade de aprendizado
- 📚 **Comunidade Next.js** pela excelente documentação
- 🎨 **Vercel** pelo framework incrível
- 💻 **Open Source** por todas as ferramentas utilizadas
- 👥 **Colegas de turma** pelo apoio e troca de ideias

---

<div align="center">

### 🌟 Se este projeto foi útil para você...

⭐ **Considere dar uma estrela no GitHub!**

💬 **Compartilhe com seus colegas!**

📧 **Tem dúvidas? Entre em contato!**

---

### 🔗 Links Úteis

[![Next.js](https://img.shields.io/badge/Next.js-Documentation-black?style=flat&logo=next.js)](https://nextjs.org/docs)
[![React](https://img.shields.io/badge/React-Documentation-61DAFB?style=flat&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-Documentation-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/docs)
[![Tailwind](https://img.shields.io/badge/Tailwind-Documentation-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/docs)

---

### 📊 Estatísticas Finais

```
📦 Total de Arquivos:      20+
💻 Linhas de Código:       ~1.200
📝 Componentes:            5 reutilizáveis
📄 Páginas:                2 completas
🎨 Design System:          Totalmente documentado
⏱️ Tempo de Dev:          ~40 horas
🚀 Status:                 100% Completo
```

---

**Feito com 💜 por estudante, para estudantes**

_"A educação é a arma mais poderosa que você pode usar para mudar o mundo." - Nelson Mandela_

</div>

---

## 📌 Tags e Palavras-Chave

`#nextjs` `#react` `#typescript` `#tailwindcss` `#frontend` `#design-system`
`#postech` `#tech-challenge` `#financeiro` `#gerenciamento` `#dashboard`
`#responsive` `#mobile-first` `#context-api` `#components` `#educacao`

---

<div align="center">

**© 2024 Tech Challenge - POSTECH | Todos os direitos reservados**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

</div>
