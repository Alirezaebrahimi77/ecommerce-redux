import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import "./Nav.css"

const Nav = () => {
    return (
        <header>
            <Link to="./" style={{textDecoration: "none"}}>
            <div>
                <p>Epro Living</p>
            </div>
            
            </Link>
            <nav>
                <ul>
                <li><NavLink to="/" className={({ isActive }) => isActive ? 'activeLink' : ''}>Home</NavLink></li>
                <li><NavLink to="/cart" className={({ isActive }) => isActive ? 'activeLink' : ''}>Cart</NavLink></li> 
                </ul>
            </nav>
        </header>
    )
}

export default Nav
