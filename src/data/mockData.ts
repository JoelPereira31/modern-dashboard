import type { Metric, Transaction } from '../types'

// Repare como o TypeScript garante que todos os campos da interface Metric sejam preenchidos!
export const initialMetrics: Metric[] = [
  {
    id: '1',
    title: 'Receita Total',
    value: 'R$ 84.250,00',
    change: '+14.5%',
    isPositive: true,
    icon: 'dollar'
  },
  {
    id: '2',
    title: 'Novos Clientes',
    value: '1.240',
    change: '+8.2%',
    isPositive: true,
    icon: 'users'
  },
  {
    id: '3',
    title: 'Vendas Realizadas',
    value: '452',
    change: '-2.4%',
    isPositive: false,
    icon: 'cart'
  },
  {
    id: '4',
    title: 'Taxa de Conversão',
    value: '4.85%',
    change: '+1.8%',
    isPositive: true,
    icon: 'chart'
  }
]

// Lista corporativa de transações tipadas
export const initialTransactions: Transaction[] = [
  {
    id: 'TRX-9821',
    customer: 'Carlos Eduardo Silva',
    email: 'carlos.silva@empresa.com',
    amount: 1450.0,
    status: 'completed',
    date: '15/10/2026',
    category: 'Assinatura Enterprise'
  },
  {
    id: 'TRX-9822',
    customer: 'Mariana Guimarães',
    email: 'mariana.g@tech.io',
    amount: 320.5,
    status: 'completed',
    date: '15/10/2026',
    category: 'Plano Pro'
  },
  {
    id: 'TRX-9823',
    customer: 'Roberto Fernandes',
    email: 'rfernandes@finance.com',
    amount: 890.0,
    status: 'pending',
    date: '14/10/2026',
    category: 'Consultoria'
  },
  {
    id: 'TRX-9824',
    customer: 'Juliana Costa',
    email: 'jucosta@design.br',
    amount: 199.9,
    status: 'canceled',
    date: '14/10/2026',
    category: 'Plano Básico'
  },
  {
    id: 'TRX-9825',
    customer: 'Lucas Albuquerque',
    email: 'lucas.alb@startup.com',
    amount: 2500.0,
    status: 'completed',
    date: '13/10/2026',
    category: 'Licença Anual'
  }
]