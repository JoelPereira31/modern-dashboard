// Define os possíveis status de uma transação
export type TransactionStatus = 'completed' | 'pending' | 'canceled'

// Interface que define o formato exato de uma transação financeira
export interface Transaction {
  id: string
  customer: string
  email: string
  amount: number
  status: TransactionStatus
  date: string
  category: string
}

// Interface para os cards de estatísticas do topo
export interface Metric {
  id: string
  title: string
  value: string
  change: string
  isPositive: boolean
  icon: 'dollar' | 'users' | 'cart' | 'chart'
}

// Tipo do tema
export type Theme = 'light' | 'dark'