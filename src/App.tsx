import { useState, useEffect } from 'react'
import { Plus, Download } from 'lucide-react'
import { Navbar } from './components/Navbar'
import { StatCard } from './components/StatCard'
import { TransactionTable } from './components/TransactionTable'
import { Button } from './components/Button'
import { initialMetrics, initialTransactions } from './data/mockData'
import type { Theme } from './types'
import './App.css'

function App() {
  // Inicializa o tema buscando do localStorage ou padrão 'light'
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as Theme
    return savedTheme || 'light'
  })

  // Aplica a classe .dark no HTML sempre que o tema mudar
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <div className="dashboard-container">
      {/* Barra de Navegação com Alternador de Tema */}
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main className="dashboard-main">
        {/* Cabeçalho de Boas-Vindas */}
        <section className="dashboard-header">
          <div className="dashboard-header__text">
            <h1>Visão Geral da Empresa 📊</h1>
            <p>Acompanhe em tempo real a saúde financeira, vendas e novos clientes.</p>
          </div>

          <div className="dashboard-header__actions">
            <Button
              variant="secondary"
              icon={<Download size={16} />}
              onClick={() => alert('Relatório exportado com sucesso!')}
            >
              Exportar
            </Button>
            <Button
              variant="primary"
              icon={<Plus size={16} />}
              onClick={() => alert('Modal de Nova Venda em desenvolvimento!')}
            >
              Nova Venda
            </Button>
          </div>
        </section>

        {/* Grade de Métricas (StatCards) */}
        <section className="metrics-grid">
          {initialMetrics.map((metric) => (
            <StatCard key={metric.id} metric={metric} />
          ))}
        </section>

        {/* Tabela de Transações com Busca e Filtros */}
        <section>
          <TransactionTable transactions={initialTransactions} />
        </section>
      </main>

      <footer className="dashboard-footer">
        <p>Nexus Dashboard • Desenvolvido com React, TypeScript e Design System modular.</p>
      </footer>
    </div>
  )
}

export default App