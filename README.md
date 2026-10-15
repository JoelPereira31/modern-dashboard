# 📊 Nexus Dashboard — Design System & Painel Corporativo em TypeScript

Painel analítico corporativo desenvolvido com **React** e **TypeScript**, apresentando métricas financeiras em tempo real, tabela dinâmica de transações, arquitetura de **Design System modular** e suporte completo a **Modo Claro / Modo Escuro** com persistência.

> 🔗 **Deploy online:** [modern-dashboard-pi-lilac.vercel.app](https://modern-dashboard-pi-lilac.vercel.app/)

---

## 🚀 Funcionalidades

- **Design System Modular:** Componentes atômicos fortemente tipados e reutilizáveis (`Button`, `Badge`, `StatCard`).
- **Suporte a Dark Mode / Light Mode:** Alternador de tema instantâneo com variáveis CSS nativas e salvamento da preferência no `localStorage`.
- **Métricas em Tempo Real:** Cards analíticos de faturamento, novos clientes, vendas e taxas de conversão com indicadores de tendência (+14.5%, -2.4%).
- **Tabela de Transações Corporativa:**
  - Busca textual em tempo real por cliente, e-mail ou código da transação.
  - Filtro por status de pagamento (*Concluído*, *Pendente*, *Cancelado*).
  - Formatação monetária padronizada para Real Brasileiro (`Intl.NumberFormat`).
- **Tipagem Estrita com TypeScript:** Interfaces e tipos dedicados em `src/types/` garantindo previsibilidade e zero erros em tempo de execução.
- **Design Responsivo:** Adaptado para monitores ultra-wide, laptops e telas menores.

---

## 🛠️ Tecnologias Utilizadas

- **[React](https://react.dev/):** Interface de usuário baseada em componentes funcionais e hooks.
- **[TypeScript](https://www.typescriptlang.org/):** Superset tipado para JavaScript garantindo robustez de código corporativo.
- **[Vite](https://vite.dev/):** Ferramenta de build de alta performance.
- **[Lucide React](https://lucide.dev/):** Conjunto moderno de ícones vetoriais.
- **CSS3 Moderno:** Variáveis CSS (`var(--...)`), Flexbox e CSS Grid.

👨‍💻 Autor

Desenvolvido por Joel na jornada para Desenvolvedor Front-end.

---

## 📦 Como Executar Localmente

1. Clone o repositório:
```bash
git clone https://github.com/SEU_USUARIO/modern-dashboard.git

2. Entre na pasta:

cd modern-dashboard

3. Instale as dependências:

npm install

4. Execute o servidor de desenvolvimento:

npm run dev