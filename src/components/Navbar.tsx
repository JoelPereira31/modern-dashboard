import { Sun, Moon, LayoutDashboard } from 'lucide-react'
import type { Theme } from '../types'
import './Navbar.css'

interface NavbarProps {
  theme: Theme
  onToggleTheme: () => void
}

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  return (
    <header className="navbar">
      <div className="navbar__brand">
        <div className="navbar__logo">
          <LayoutDashboard size={22} />
        </div>
        <span className="navbar__title">Nexus Dashboard</span>
      </div>

      <div className="navbar__actions">
        {/* Botão de Alternar Tema (Dark / Light) */}
        <button
          className="theme-toggle-btn"
          onClick={onToggleTheme}
          aria-label="Alternar tema"
          title={`Mudar para modo ${theme === 'light' ? 'escuro' : 'claro'}`}
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        {/* Perfil do Usuário */}
        <div className="user-profile">
          <div className="user-avatar">JP</div>
          <div className="user-info">
            <span className="user-name">Joel Pereira</span>
            <span className="user-role">Frontend Developer</span>
          </div>
        </div>
      </div>
    </header>
  )
}