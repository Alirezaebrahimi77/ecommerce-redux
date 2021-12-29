import React from 'react'
import "./Product.css"
import {Link } from "react-router-dom"
const Product = ({product}) => {

    const addHandler = () => {
        console.log(product);

    }
    return (
        <div className='product'>
            <Link to={`product/${product.id}`}>
            <div className="productImage">
                <img src={product.image} alt={product.title} />
            </div>
            </Link>
            <div className="productContent">
                <div className="titlePrice">
                <Link to={`product/${product.id}`} style={{textDecoration: "none"}}><p className='productTitle'>{product.title}</p></Link>
                <p className='productPrice'>{`${product.price}$`}</p>
                </div>
                <button className='addToCart' onClick={()=> addHandler(product)}>Add to Cart</button>
                

            </div>

            
        </div>
    )
}

export default Product
