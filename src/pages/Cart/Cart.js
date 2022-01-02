import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import {addQuantity, decreaseQuantity, removeCartItem} from "../../actions/cartActions"
import {BsTrash} from "react-icons/bs"
const Cart = () => {

    const {cartItems} = useSelector(state => state.cartItems)
    const dispatch = useDispatch()

    // Increase quantity on click event
    const increaseQty = (id, itemQuantity) => {

        const newQty = itemQuantity + 1;
        dispatch(addQuantity(id, newQty))
        
    } 
    // Decrease quantity on click event
    const decreaseQty = (id, itemQuantity) => {

        if(itemQuantity <= 1){
            dispatch(removeCartItem(id, itemQuantity))
        }else{
            const newQty = itemQuantity - 1;
            dispatch(decreaseQuantity(id, newQty))

        }
    }


  return (
    <section className="cartWrapper">
      <div className="shoppingCart">
        <div className="shoppingCartHeader">
          <h1>Shopping Cart</h1>
          <p className="cartTotalNum">{cartItems && cartItems.length} Items</p>
        </div>
        <hr />

        <div className="shoppingCartHeading">
          <div className="cartHeadProductName">
            <p>Product</p>
          </div>
          <div className="cartHeadProductQauntity">
            <p>Quantity</p>
          </div>
          <div className="cartHeadProductPrice">
            <p>Price</p>
          </div>
          <div className="cartHeadProductTotal">
            <p>Total</p>
          </div>
        </div>

        {!cartItems.length && <h2>There is no product in the cart</h2> }
        {cartItems && cartItems.map(item => (
            <CartItem key={item.id} item={item} onIncrement={increaseQty} onDecrement={decreaseQty}/>

        ))}
      </div>
      <div className="orderSummary">
        {/* <h2 className='orderSummaryText'>Order Summary</h2>
         */}
        <h3 className="orderSummaryText">Order Summary</h3>
        <hr />
      </div>
    </section>
  );
};

export default Cart;

const CartItem = ({item, onIncrement, onDecrement}) => {
 
  return (
    <div className="cartItem">
      <div className="cartItemProductName">
        <div className="cartItemImageWrapper">
            <div className="cartItemImage">
                <img src={item.image} alt={item.title} />
            </div>
            <div className="cartItemTitle">
            <p>{item.title}</p>
            </div>
        </div>
      </div>
      <div className="cartItemProductQauntity">
        <div className="cartItemQuantity">
            <button className="cartItemBtn" onClick={() => onDecrement(item.id, item.quantity)}>{item.quantity === 1 ? <BsTrash style={{fontSize: "16px"}}/> : "-"}</button>
            <span className="count">{item.quantity}</span>
            <button className="cartItemBtn" onClick={() => onIncrement(item.id, item.quantity)}>+</button>
        </div>
      </div>
      <div className="cartItemProductPrice">
        <p>{`${item.price} $`}</p>
      </div>
      <div className="cartItemProductTotal">
        <p>{`${item.price * item.quantity} $`}</p>
      </div>
    </div>
  );
};
