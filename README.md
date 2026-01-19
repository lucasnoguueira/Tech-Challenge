# 💰 Sistema de Gerenciamento Financeiro

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14.2.15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.14-38B2AC?style=for-the-badge&logo=tailwind-css)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker)

![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=flat-square&logo=node.js)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![Status](https://img.shields.io/badge/Status-Concluído-success?style=flat-square)

**Aplicação completa de gerenciamento financeiro pessoal com gráficos interativos, autenticação e containerização**

[Demo](#-demonstração) • [Instalação](#-instalação-e-execução) • [Funcionalidades](#-funcionalidades) • [Documentação](#-documentação-adicional)

### 📊 Estatísticas do Projeto

| Categoria               | Valor                             |
| ----------------------- | --------------------------------- |
| 📦 **Componentes**      | 15+ componentes reutilizáveis     |
| 📄 **Páginas**          | 4 páginas completas               |
| 📊 **Gráficos**         | 3 gráficos interativos (Chart.js) |
| 🎨 **Design System**    | 100% documentado                  |
| 📱 **Responsividade**   | Mobile + Tablet + Desktop         |
| ⚡ **Performance**      | SSR/SSG + Lazy Loading            |
| 🔤 **Tipagem**          | 100% TypeScript                   |
| ♿ **Acessibilidade**   | WCAG 2.1 Level AA                 |
| 🐳 **Docker**           | Multi-stage build                 |
| 🔐 **Autenticação**     | NextAuth.js                       |
| 📏 **Linhas de Código** | ~3.500+ linhas                    |

</div>

---

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como parte do **Tech Challenge - Fase 2** da **POSTECH**, implementando um sistema completo de gerenciamento financeiro com recursos avançados de visualização, filtros, autenticação e containerização.

### 🎯 Objetivo

Desenvolver uma aplicação completa de gerenciamento financeiro com:

- Dashboard com gráficos interativos e analytics
- Sistema de filtros avançados e busca em tempo real
- Scroll infinito para listagem de transações
- Upload de anexos (recibos e documentos)
- Validação avançada de formulários
- Autenticação segura com NextAuth.js
- Containerização completa com Docker
- Deploy pronto para cloud (Vercel, AWS, Azure)

### 🏗️ Arquitetura

A aplicação foi construída seguindo as melhores práticas de desenvolvimento:

- **Zustand** para gerenciamento de estado global
- **TypeScript** para segurança de tipos em 100% do código
- **Chart.js** para visualização de dados interativa
- **Next.js 14 App Router** com SSR/SSG
- **Componentes modulares** e reutilizáveis
- **Docker** com multi-stage build
- **NextAuth.js** para autenticação
- **React Hook Form + Zod** para validação avançada
- **Tailwind CSS** para estilização
- **Responsividade** completa (mobile-first)

---

## ✨ Funcionalidades

### 🔐 Sistema de Autenticação

- Login com email e senha (NextAuth.js)
- Proteção de rotas com middleware
- Sessão persistente
- Credenciais de demonstração:
  - Email: `demo@financeiro.com`
  - Senha: `demo123`

### 📊 Dashboard com Gráficos Interativos

**1. Evolução do Saldo (Line Chart)**

- Visualização da evolução do saldo ao longo do tempo
- Cores dinâmicas (verde para saldo positivo, vermelho para negativo)
- Tooltip com valores detalhados

**2. Despesas por Categoria (Doughnut Chart)**

- Distribuição percentual das despesas
- Cores distintas para cada categoria
- Tooltip com valores e percentuais

**3. Balanço Mensal (Bar Chart)**

- Comparação de receitas vs despesas por mês
- Barras empilhadas com cores diferenciadas
- Visualização clara do resultado mensal

### 📋 Lista de Transações com Scroll Infinito

- Carregamento progressivo (10 itens por vez)
- Intersection Observer para detecção automática
- Skeleton loading durante carregamento
- Indicador visual de "fim da lista"
- Performance otimizada com Lazy Loading

### 🔍 Filtros Avançados

- Filtro por tipo (Todas, Receitas, Despesas)
- Filtro por categoria (Alimentação, Transporte, Saúde, etc.)
- Busca por descrição em tempo real
- Filtros combinados
- Botão para resetar todos os filtros

### ✏️ Formulário de Transação com Validação

- Validação em tempo real com Zod
- React Hook Form para melhor performance
- Feedback visual de erros campo a campo
- Campos obrigatórios com indicador visual
- Tipos: Depósito, Transferência, Pagamento, Saque
- Categorias dinâmicas baseadas no tipo selecionado
- Formatação automática de valores monetários

### 📎 Upload de Anexos

- Drag & drop de arquivos
- Visualização de arquivos selecionados
- Validação de tamanho máximo e tipo de arquivo
- Suporte para múltiplos arquivos
- Remoção individual de anexos
- Preview de arquivos de imagem

### 💾 Gerenciamento de Estado com Zustand

- Estado global leve e performático
- Persistência automática em localStorage
- Sincronização em tempo real entre componentes
- DevTools integrado para debugging

### 🎨 Design System Completo

- Componentes reutilizáveis (Button, Card, Input, Modal)
- Paleta de cores consistente e profissional
- Responsividade mobile-first
- Animações e transições suaves
- Acessibilidade (WCAG 2.1 Level AA)

---

## 🚀 Tecnologias Utilizadas

### Core Technologies

| Tecnologia                                                                               | Versão  | Descrição                             |
| ---------------------------------------------------------------------------------------- | ------- | ------------------------------------- |
| [Next.js](https://nextjs.org/)                                                           | 14.2.15 | Framework React com App Router e SSR  |
| [React](https://react.dev/)                                                              | 18.3.1  | Biblioteca JavaScript para interfaces |
| [TypeScript](https://www.typescriptlang.org/)                                            | 5.x     | Superset tipado do JavaScript         |
| [Tailwind CSS](https://tailwindcss.com/)                                                 | 3.4.14  | Framework CSS utility-first           |
| [Zustand](https://zustand-demo.pmnd.rs/)                                                 | 4.4.7   | Gerenciamento de estado leve          |
| [Chart.js](https://www.chartjs.org/)                                                     | 4.4.1   | Biblioteca de gráficos interativos    |
| [react-chartjs-2](https://react-chartjs-2.js.org/)                                       | 5.2.0   | Wrapper React para Chart.js           |
| [NextAuth.js](https://next-auth.js.org/)                                                 | 4.24.5  | Autenticação para Next.js             |
| [Zod](https://zod.dev/)                                                                  | 3.22.4  | Validação TypeScript-first            |
| [React Hook Form](https://react-hook-form.com/)                                          | 7.49.3  | Gerenciamento de formulários          |
| [react-dropzone](https://react-dropzone.js.org/)                                         | 14.2.3  | Upload de arquivos drag & drop        |
| [react-intersection-observer](https://www.npmjs.com/package/react-intersection-observer) | 9.5.3   | Infinite scroll                       |
| [Lucide React](https://lucide.dev/)                                                      | 0.445.0 | Biblioteca de ícones moderna          |
| [JSON Server](https://github.com/typicode/json-server)                                   | 0.17.4  | API REST mock                         |

### Destaques Técnicos

- ✅ **App Router** do Next.js 14 (SSR/SSG)
- ✅ **Server Components** e **Client Components**
- ✅ **Zustand** para gerenciamento de estado global
- ✅ **Chart.js** para visualização de dados
- ✅ **NextAuth.js** para autenticação segura
- ✅ **TypeScript** em 100% do código
- ✅ **Docker** com multi-stage build
- ✅ **Componentes Reutilizáveis** e modulares
- ✅ **Scroll Infinito** com Intersection Observer
- ✅ **Validação Avançada** com Zod + React Hook Form
- ✅ **Upload de Arquivos** com react-dropzone
- ✅ **Skeleton Loading** para melhor UX

---

## 📦 Estrutura do Projeto

```
src/
├── app/                      # App Router do Next.js
│   ├── api/
│   │   └── auth/            # NextAuth API routes
│   │       └── [...nextauth]/
│   │           └── route.ts # Configuração NextAuth
│   ├── auth/                # Páginas de autenticação
│   │   └── signin/          # Página de login
│   │       └── page.tsx
│   ├── layout.tsx           # Layout principal com SessionProvider
│   ├── page.tsx             # Dashboard com gráficos
│   ├── providers.tsx        # Providers (NextAuth)
│   ├── globals.css          # Estilos globais + Tailwind
│   └── transactions/        # Página de transações
│       └── page.tsx         # Lista com scroll infinito
├── components/              # Componentes reutilizáveis
│   ├── charts/             # Componentes de gráficos
│   │   ├── BalanceTrend.tsx         # Gráfico de linha (saldo)
│   │   ├── ExpensesByCategory.tsx   # Gráfico de rosca (categorias)
│   │   └── MonthlyBalance.tsx       # Gráfico de barras (mensal)
│   ├── Button.tsx          # Botão do Design System
│   ├── Card.tsx            # Card do Design System
│   ├── Input.tsx           # Input do Design System
│   ├── Modal.tsx           # Modal do Design System
│   ├── FileUpload.tsx      # Upload de anexos (drag & drop)
│   ├── Pagination.tsx      # Paginação
│   ├── TransactionFilters.tsx # Filtros avançados
│   ├── TransactionForm.tsx # Formulário com validação
│   └── InfiniteScrollHelpers.tsx # Skeleton loading
├── store/                  # Zustand store
│   └── useFinancialStore.ts # Estado global
├── lib/                    # Utilitários
│   └── utils.ts            # Funções auxiliares
├── data/                   # Dados mockados
│   └── transactions.json   # Transações simuladas
├── types/                  # Definições de tipos TypeScript
│   └── index.ts
└── middleware.ts           # Middleware de autenticação
```

---

## 🛠️ Instalação e Execução

### 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** 20.x ou superior ([Download](https://nodejs.org/))
- **npm** 9.x ou superior (já vem com o Node.js)
- **Git** (opcional, para clonar o repositório)
- **Docker** (opcional, para execução com containers)

### 📥 Passo 1: Clone o Repositório

```bash
git clone https://github.com/seu-usuario/Tech-Challenge.git
cd Tech-Challenge
```

### 📦 Passo 2: Instale as Dependências

```bash
npm install
```

Este comando irá instalar todas as dependências necessárias (~577 pacotes).

### 🔧 Passo 3: Configure as Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=tech-challenge-2024-secret-key-change-in-production
NEXT_PUBLIC_API_URL=http://localhost:3001
```

**Não precisa alterar nada para rodar localmente!**

### ▶️ Passo 4: Execute a Aplicação

#### Opção 1: Frontend + Backend juntos (Recomendado)

```bash
npm run dev:fullstack
```

Este comando inicia:

- **Frontend Next.js** na porta **3000**
- **Backend JSON Server** na porta **3001**

#### Opção 2: Executar separadamente

```bash
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend (JSON Server)
npm run api
```

### 🌐 Passo 5: Acesse a Aplicação

Abra seu navegador e acesse:

- **Aplicação**: http://localhost:3000
- **API**: http://localhost:3001

### 🔐 Credenciais de Acesso

Para fazer login na aplicação, use:

```
Email: demo@financeiro.com
Senha: demo123
```

---

### 🐳 Executar com Docker (Alternativa)

Se preferir usar Docker, execute:

```bash
# Build e executar
docker-compose up --build

# Ou em background
docker-compose up -d

# Parar containers
docker-compose down
```

Acesse: http://localhost:3000

---

### 📝 Scripts Disponíveis

```bash
npm run dev              # Inicia apenas o frontend
npm run api              # Inicia apenas o backend (JSON Server)
npm run dev:fullstack    # Frontend + Backend juntos ⭐
npm run build            # Build de produção
npm start                # Executa build de produção
npm run lint             # Verifica código com ESLint
npm run docker:build     # Build da imagem Docker
npm run docker:run       # Executa com Docker Compose
npm run docker:stop      # Para containers Docker
```

---

## 🎯 Demonstração

### Fluxo de Uso Recomendado

**1️⃣ Login**

- Acesse http://localhost:3000
- Faça login com as credenciais de demonstração
- Você será redirecionado para o dashboard

**2️⃣ Visualizar Dashboard**

- Observe os 3 gráficos interativos
- Veja as estatísticas gerais (saldo, receitas, despesas)
- Confira as últimas transações

**3️⃣ Adicionar Transação**

- Clique em "Adicionar Transação"
- Preencha o formulário com validação em tempo real
- Faça upload de anexos (opcional)
- Salve e veja a transação aparecer instantaneamente

**4️⃣ Filtrar Transações**

- Navegue até a página de transações
- Use os filtros por tipo ou categoria
- Busque por descrição
- Veja o scroll infinito em ação

**5️⃣ Editar/Deletar**

- Clique no ícone de lápis para editar
- Use o ícone de lixeira para deletar (com confirmação)

---

## 📊 Dados Mockados

### 🎯 Três Formas de Mock Implementadas

Este projeto implementa **TODAS as 3 opções** sugeridas no Tech Challenge:

#### ✅ 1. Arquivo JSON (`transactions.json`)

- Transações de exemplo para desenvolvimento
- Dados iniciais do sistema

#### ✅ 2. API Fake com JSON Server (`db.json`)

- **API REST completa** rodando em `http://localhost:3001`
- Endpoints CRUD automáticos
- Filtros, ordenação e paginação
- 📖 **[Ver documentação completa da API](./README_API.md)**

#### ✅ 3. Mocks via Frontend (Zustand + LocalStorage)

- Estado global com Zustand
- Persistência automática no localStorage
- Funciona offline

---

## 🏆 Requisitos do Tech Challenge

### ✅ Fase 2 - Requisitos Atendidos

| Requisito                    | Status | Implementação                                 |
| ---------------------------- | ------ | --------------------------------------------- |
| **Gráficos e Visualizações** | ✅     | 3 gráficos interativos (Chart.js)             |
| **Filtros Avançados**        | ✅     | Tipo, categoria, busca, filtros combinados    |
| **Scroll Infinito**          | ✅     | Intersection Observer + skeleton loading      |
| **Validação de Formulários** | ✅     | Zod + React Hook Form + sugestões automáticas |
| **Upload de Anexos**         | ✅     | react-dropzone com drag & drop                |
| **Autenticação**             | ✅     | NextAuth.js com credentials provider          |
| **Containerização (Docker)** | ✅     | Multi-stage build + docker-compose            |
| **Deploy na Cloud**          | ✅     | Pronto para Vercel, AWS, Azure                |

### ✅ Fase 1 - Requisitos Atendidos

| Requisito                 | Status | Implementação                                |
| ------------------------- | ------ | -------------------------------------------- |
| Home Page com saldo       | ✅     | Dashboard completo                           |
| Extrato de transações     | ✅     | Página dedicada                              |
| Adicionar transação       | ✅     | Modal com formulário completo                |
| Editar transação          | ✅     | Modal de edição                              |
| Deletar transação         | ✅     | Modal de confirmação                         |
| Design System             | ✅     | 5+ componentes reutilizáveis                 |
| Next.js                   | ✅     | Versão 14 com App Router                     |
| TypeScript                | ✅     | 100% do código tipado                        |
| Dados Mockados (3 formas) | ✅     | JSON + API Fake + Frontend Mocks             |
| Responsividade            | ✅     | Mobile, Tablet, Desktop                      |
| Documentação              | ✅     | README.md + DESIGN_SYSTEM.md + README_API.md |

---

## 📱 Responsividade

A aplicação foi desenvolvida com **mobile-first** e é totalmente responsiva:

| Dispositivo    | Resolução      | Características                                 |
| -------------- | -------------- | ----------------------------------------------- |
| 📱 **Mobile**  | 320px - 767px  | Layout de coluna única, cards empilhados        |
| 📱 **Tablet**  | 768px - 1023px | Grid de 2 colunas, navegação otimizada          |
| 💻 **Desktop** | 1024px+        | Grid de 3 colunas, aproveitamento total da tela |

---

## 🔄 Roadmap / Próximas Melhorias

### 📊 Funcionalidades Futuras

- [ ] **Mais Gráficos**

  - Gráfico de área (tendências)
  - Gráfico de dispersão (anomalias)
  - Comparação anual

- [ ] **Exportação de Dados**

  - Exportar para PDF
  - Exportar para Excel/CSV
  - Imprimir extrato

- [ ] **Recursos Avançados**
  - Transações recorrentes
  - Metas de economia
  - Alertas de gastos
  - Dashboard customizável
  - Modo escuro

### 🛠️ Melhorias Técnicas

- [ ] Implementar Storybook
- [ ] Adicionar testes unitários (Jest)
- [ ] Adicionar testes E2E (Playwright)
- [ ] Implementar PWA
- [ ] Adicionar i18n (internacionalização)

---

## 📚 Documentação Adicional

- 📖 **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** - Documentação completa do Design System
- 🔌 **[README_API.md](./README_API.md)** - Documentação da API Mock (JSON Server)
- 📦 **[package.json](./package.json)** - Dependências e scripts
- 🗃️ **[db.json](./db.json)** - Banco de dados da API Mock
- ⚙️ **[tsconfig.json](./tsconfig.json)** - Configuração do TypeScript
- 🎨 **[tailwind.config.js](./tailwind.config.js)** - Configuração do Tailwind
- 🐳 **[Dockerfile](./Dockerfile)** - Configuração Docker
- 🐳 **[docker-compose.yml](./docker-compose.yml)** - Docker Compose

---

## 🤝 Contribuindo

Este é um projeto educacional, mas contribuições são **muito bem-vindas**! 🎉

### 💡 Como Você Pode Contribuir

- 🐛 Reportar bugs e problemas
- ✨ Sugerir novas funcionalidades
- 📝 Melhorar a documentação
- 🎨 Aprimorar o Design System
- 🧪 Adicionar testes
- ♿ Melhorar acessibilidade

---

## 🎓 Aprendizados

Este projeto permitiu aplicar e consolidar conhecimentos em:

- ⚛️ **React 18** e hooks avançados
- 🚀 **Next.js 14** com App Router e Server/Client Components
- 📘 **TypeScript** para type safety
- 🎨 **Tailwind CSS** e design responsivo
- 🏗️ **Arquitetura de componentes** reutilizáveis
- 🔄 **Gerenciamento de estado** com Zustand
- 📝 **Formulários** e validações avançadas
- 📊 **Visualização de dados** com Chart.js
- 🔐 **Autenticação** com NextAuth.js
- 🐳 **Containerização** com Docker
- ♿ **Acessibilidade** e boas práticas
- 📖 **Documentação técnica** completa

---

## 📄 Licença

Este projeto foi desenvolvido para fins **educacionais** como parte do **Tech Challenge da POSTECH**.

Sinta-se livre para usar este código como referência para seus estudos! 📚

---

## 👨‍💻 Autor

Desenvolvido com 💙 e ☕ para o **Tech Challenge - Fase 2** da **POSTECH**.

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

---

**© 2024 Tech Challenge - POSTECH | Todos os direitos reservados**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

</div>
