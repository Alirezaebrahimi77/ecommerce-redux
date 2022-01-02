import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import "./Nav.css"
import {AiOutlineShoppingCart} from "react-icons/ai"
import { useSelector } from 'react-redux'
const Nav = () => {

    const {cartItems} = useSelector(state => state.cartItems)
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
                <li className='cartIcon'><NavLink to="/cart" className={({ isActive }) => isActive ? 'activeLink' : ''}><AiOutlineShoppingCart />{cartItems.length > 0 && <div className="cartItemCounter">{cartItems.length}</div> }</NavLink></li> 
                </ul>
            </nav>
        </header>


    )
}

export default Nav
