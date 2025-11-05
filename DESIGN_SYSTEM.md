# 🎨 Design System - Documentação

## Visão Geral

Este Design System foi desenvolvido para garantir consistência visual e facilitar a reutilização de componentes em toda a aplicação de gerenciamento financeiro.

## 🎯 Princípios

1. **Consistência**: Todos os componentes seguem os mesmos padrões visuais
2. **Reutilização**: Componentes podem ser usados em qualquer parte da aplicação
3. **Acessibilidade**: Suporte completo a navegação por teclado e leitores de tela
4. **Responsividade**: Funciona perfeitamente em todos os tamanhos de tela

## 📦 Componentes

### Button

Componente de botão com múltiplas variantes e tamanhos.

**Props:**

```typescript
interface ButtonProps {
  variant?: "primary" | "secondary" | "success" | "danger" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  children: ReactNode;
  // + todas as props padrão de HTMLButtonElement
}
```

**Exemplos de Uso:**

```tsx
// Botão primário padrão
<Button variant="primary" size="md">
  Clique aqui
</Button>

// Botão de sucesso full width
<Button variant="success" fullWidth>
  Salvar
</Button>

// Botão outline pequeno
<Button variant="outline" size="sm">
  Cancelar
</Button>

// Botão com ícone
<Button variant="primary">
  <Plus size={20} />
  Adicionar
</Button>
```

**Variantes:**

- `primary`: Azul, para ações principais
- `secondary`: Cinza, para ações secundárias
- `success`: Verde, para ações de confirmação
- `danger`: Vermelho, para ações destrutivas
- `outline`: Apenas borda, para ações alternativas

---

### Input

Componente de campo de entrada com label, validação e mensagens.

**Props:**

```typescript
interface InputProps {
  label?: string;
  error?: string;
  helperText?: string;
  // + todas as props padrão de HTMLInputElement
}
```

**Exemplos de Uso:**

```tsx
// Input simples com label
<Input
  label="Nome"
  placeholder="Digite seu nome"
/>

// Input com erro
<Input
  label="Email"
  type="email"
  error="Email inválido"
/>

// Input com helper text
<Input
  label="Senha"
  type="password"
  helperText="Mínimo 8 caracteres"
/>

// Input numérico
<Input
  label="Valor"
  type="number"
  step="0.01"
/>
```

**Estados:**

- Normal
- Focus (borda azul)
- Error (borda vermelha)
- Disabled (fundo cinza)

---

### Card

Componente de container com estilização consistente.

**Props:**

```typescript
interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
  shadow?: "none" | "sm" | "md" | "lg";
}
```

**Exemplos de Uso:**

```tsx
// Card padrão
<Card>
  <h3>Título</h3>
  <p>Conteúdo</p>
</Card>

// Card sem padding
<Card padding="none">
  <img src="..." />
</Card>

// Card com shadow grande
<Card shadow="lg">
  Destaque
</Card>

// Card com classe customizada
<Card className="bg-gradient-to-br from-blue-500 to-blue-700">
  Card colorido
</Card>
```

---

### Modal

Componente de modal/dialog sobreposto.

**Props:**

```typescript
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
}
```

**Exemplos de Uso:**

```tsx
const [isOpen, setIsOpen] = useState(false);

// Modal básico
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirmar ação"
>
  <p>Deseja continuar?</p>
  <Button onClick={() => setIsOpen(false)}>
    Sim
  </Button>
</Modal>

// Modal grande com formulário
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Nova transação"
  size="lg"
>
  <TransactionForm />
</Modal>
```

**Características:**

- Overlay escuro com backdrop
- Bloqueia scroll do body quando aberto
- Botão X para fechar
- Click fora fecha o modal
- ESC fecha o modal (pode ser implementado)

---

### TransactionForm

Formulário especializado para transações financeiras.

**Props:**

```typescript
interface TransactionFormProps {
  initialData?: Transaction;
  onSubmit: (data: Omit<Transaction, "id">) => void;
  onCancel: () => void;
  submitLabel?: string;
}
```

**Exemplos de Uso:**

```tsx
// Formulário para nova transação
<TransactionForm
  onSubmit={handleAdd}
  onCancel={handleCancel}
  submitLabel="Adicionar"
/>

// Formulário para edição
<TransactionForm
  initialData={transaction}
  onSubmit={handleUpdate}
  onCancel={handleCancel}
  submitLabel="Atualizar"
/>
```

**Campos:**

- Tipo de transação (select)
- Valor (number)
- Data e hora (datetime-local)
- Descrição (text)
- Categoria (text, opcional)

**Validações:**

- Tipo: obrigatório
- Valor: obrigatório e diferente de zero
- Data: obrigatória
- Descrição: obrigatória
- Categoria: opcional

---

## 🎨 Paleta de Cores

### Primary (Azul)

```css
primary-50:  #f0f9ff
primary-100: #e0f2fe
primary-500: #0ea5e9
primary-600: #0284c7 /* Cor principal */
primary-700: #0369a1
```

**Uso:** Botões primários, links, highlights

### Success (Verde)

```css
success-50:  #f0fdf4
success-100: #dcfce7
success-500: #22c55e
success-600: #16a34a /* Cor principal */
```

**Uso:** Confirmações, valores positivos, receitas

### Danger (Vermelho)

```css
danger-50:  #fef2f2
danger-100: #fee2e2
danger-500: #ef4444
danger-600: #dc2626 /* Cor principal */
```

**Uso:** Erros, exclusões, valores negativos, despesas

### Warning (Amarelo)

```css
warning-50:  #fffbeb
warning-100: #fef3c7
warning-500: #f59e0b
warning-600: #d97706 /* Cor principal */
```

**Uso:** Alertas, avisos

### Neutros (Cinza)

```css
gray-50:  #f9fafb
gray-100: #f3f4f6
gray-500: #6b7280
gray-600: #4b5563
gray-900: #111827
```

**Uso:** Textos, bordas, fundos

---

## 📏 Espaçamentos

Utilizamos o sistema de espaçamento do Tailwind CSS:

```
p-1  = 4px
p-2  = 8px
p-3  = 12px
p-4  = 16px
p-6  = 24px
p-8  = 32px
p-12 = 48px
```

**Padrões:**

- Padding de Cards: `p-6` (24px)
- Gap entre elementos: `gap-4` (16px)
- Margin entre seções: `space-y-8` (32px)

---

## 🔤 Tipografia

**Fonte:** Inter (Google Fonts)

**Tamanhos:**

```css
text-xs   = 12px
text-sm   = 14px
text-base = 16px
text-lg   = 18px
text-xl   = 20px
text-2xl  = 24px
text-3xl  = 30px
```

**Pesos:**

```css
font-normal   = 400
font-medium   = 500
font-semibold = 600
font-bold     = 700
```

---

## 🎭 Estados e Interações

### Hover

Todos os elementos interativos têm estado hover:

```css
hover:bg-primary-700
hover:shadow-lg
transition-colors
```

### Focus

Indicador visual para navegação por teclado:

```css
focus:outline-none
focus:ring-2
focus:ring-primary-500
focus:ring-offset-2
```

### Disabled

Estado desabilitado:

```css
disabled:opacity-50
disabled:cursor-not-allowed
```

---

## 📱 Breakpoints

```css
sm:  640px   /* Mobile landscape */
md:  768px   /* Tablet */
lg:  1024px  /* Desktop */
xl:  1280px  /* Large desktop */
```

**Exemplos:**

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* 1 coluna no mobile, 2 no tablet, 3 no desktop */}
</div>
```

---

## ✅ Checklist de Acessibilidade

- ✅ Contraste de cores adequado (WCAG AA)
- ✅ Labels em todos os inputs
- ✅ Estados de focus visíveis
- ✅ Navegação por teclado
- ✅ Mensagens de erro descritivas
- ✅ Textos alternativos (quando aplicável)
- ✅ Estrutura semântica HTML

---

## 🚀 Como Usar

1. **Importe o componente:**

```tsx
import Button from "@/components/Button";
```

2. **Use com as props necessárias:**

```tsx
<Button variant="primary" onClick={handleClick}>
  Clique aqui
</Button>
```

3. **Customize com classes Tailwind (quando necessário):**

```tsx
<Button className="mt-4 shadow-xl">Botão customizado</Button>
```

---

## 📚 Recursos Adicionais

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev/)
- [Lucide Icons](https://lucide.dev/)

---

**Desenvolvido para o Tech Challenge - Fase 1**
