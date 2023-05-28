import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/img/logo.png'

export function AppHeader() {
  return (
    <header className="app-header full main-layout">
      <div className="header-container">
        <div className="header-logo">
          <Link to="/">
            <img src={logo} alt="logo-img" />
          </Link>
        </div>
        <nav className="app-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/toy">Toys</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/dashboard">dashboard</NavLink>
        </nav>
      </div>
    </header>
  )
}
