import React from 'react'
import { Link} from 'react-router-dom';
import logo from '../slike/logo.png'


function Nav() {
  return (
    <nav className="nav">
      <div className="nav-logo">
      <img src={logo} alt="logo" />
      </div>
      <div className="nav-links">
      <Link to="/">Početna</Link>
      <Link to="/asortiman">Asortiman</Link>
      <Link to="/akcije">Akcije</Link>
      <Link to="/prodajniobjekti">Prodajni objekti</Link>
      <Link to="/onama">O nama</Link>
      <Link to="/kontakt">Kontakt</Link>
      </div>
    </nav>
  )
}

export default Nav