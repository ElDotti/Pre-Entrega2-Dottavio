import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

const Navbar = () => {
  return (<>
  
    <nav className="navbar">
        <Link to="/" className="logo"><h1>D'or</h1></Link>
        
        <ul className="menu">
            <li><Link className="menu-link" to="/category/Mujer">Perfumes de mujer</Link></li>
            <li><Link className="menu-link" to="/category/Hombre">Perfumes de hombre</Link></li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar