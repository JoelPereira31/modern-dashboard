import { useState } from 'react'
import { Search } from 'lucide-react'
import { Badge } from './Badge'
import type { Transaction, TransactionStatus } from '../types'
import './TransactionTable.css'

interface TransactionTableProps {
  transactions: Transaction[]
}

export function TransactionTable({ transactions }: TransactionTableProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<'all' | TransactionStatus>('all')

  // Filtra transações por busca e status
  const filteredTransactions = transactions.filter((t) => {
    const matchesSearch =
      t.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.id.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === 'all' || t.status === statusFilter

    return matchesSearch && matchesStatus
  })

  // Formatador oficial de Moeda Brasileira (R$)
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)
  }

  return (
    <div className="table-card">
      <div className="table-card__header">
        <div className="table-card__title">
          <h3>Transações Recentes</h3>
          <p>Visão geral dos últimos pagamentos e assinaturas</p>
        </div>

        <div className="table-card__filters">
          <div className="table-search">
            <Search size={16} />
            <input
              type="text"
              placeholder="Buscar cliente ou ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select
            className="table-select"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as 'all' | TransactionStatus)}
          >
            <option value="all">Todos os Status</option>
            <option value="completed">Concluídos</option>
            <option value="pending">Pendentes</option>
            <option value="canceled">Cancelados</option>
          </select>
        </div>
      </div>

      <div className="table-responsive">
        {filteredTransactions.length === 0 ? (
          <div className="empty-state">
            <p>Nenhuma transação encontrada com os filtros selecionados.</p>
          </div>
        ) : (
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Cliente</th>
                <th>Categoria</th>
                <th>Data</th>
                <th>Valor</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((trx) => (
                <tr key={trx.id}>
                  <td style={{ fontFamily: 'monospace', fontWeight: 600 }}>{trx.id}</td>
                  <td>
                    <div className="customer-cell">
                      <span className="customer-name">{trx.customer}</span>
                      <span className="customer-email">{trx.email}</span>
                    </div>
                  </td>
                  <td>{trx.category}</td>
                  <td>{trx.date}</td>
                  <td className="amount-cell">{formatCurrency(trx.amount)}</td>
                  <td>
                    <Badge status={trx.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}