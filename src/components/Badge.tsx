import type { TransactionStatus } from '../types'
import './Badge.css'

interface BadgeProps {
  status: TransactionStatus
}

const statusLabels: Record<TransactionStatus, string> = {
  completed: 'Concluído',
  pending: 'Pendente',
  canceled: 'Cancelado'
}

export function Badge({ status }: BadgeProps) {
  return (
    <span className={`badge badge--${status}`}>
      ● {statusLabels[status]}
    </span>
  )
}