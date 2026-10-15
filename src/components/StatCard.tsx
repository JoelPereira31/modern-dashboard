import { DollarSign, Users, ShoppingCart, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react'
import type { Metric } from '../types'
import './StatCard.css'

interface StatCardProps {
  metric: Metric
}

export function StatCard({ metric }: StatCardProps) {
  // Mapeia o ícone correspondente
  const renderIcon = () => {
    switch (metric.icon) {
      case 'dollar': return <DollarSign size={20} />
      case 'users': return <Users size={20} />
      case 'cart': return <ShoppingCart size={20} />
      case 'chart': return <TrendingUp size={20} />
    }
  }

  return (
    <div className="stat-card">
      <div className="stat-card__top">
        <span className="stat-card__title">{metric.title}</span>
        <div className="stat-card__icon">{renderIcon()}</div>
      </div>

      <div className="stat-card__value">{metric.value}</div>

      <div className={`stat-card__trend ${metric.isPositive ? 'stat-card__trend--positive' : 'stat-card__trend--negative'}`}>
        {metric.isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
        <span>{metric.change}</span>
        <span className="stat-card__trend-label">vs. mês anterior</span>
      </div>
    </div>
  )
}