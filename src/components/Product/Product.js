import React from 'react'
import "./Product.css"
import {Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { addToCart } from '../../actions/cartActions'
const Product = ({product}) => {

    const dispatch = useDispatch()
    const addToCartHandler= (id) => {
        dispatch(addToCart(id))
          console.log(id);
  
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
                <button className='addToCart' onClick={()=> addToCartHandler(product.id)}>Add to Cart</button>
                

            </div>

            
        </div>
    )
}

export default Product
