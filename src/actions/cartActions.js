import axios from "axios"
import { ADD_TO_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, REMOVE_ITEM } from "../constants/cartConstants"


export const addToCart = (id, quantity) => async (dispatch) =>{
    const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`)
    dispatch({
        type: ADD_TO_CART,
        payload: {
            id: data.id,
            title: data.title,
            price: data.price,
            image: data.image,
            quantity: 1
        }
    })
}

export const addQuantity = (id, newQuantity) =>{
    return{
        type: INCREASE_QUANTITY,
        payload: {
            id: id,
            newQuantity: newQuantity
        }
    }

}

export const decreaseQuantity = (id, newQuantity) => {
    return {
        type: DECREASE_QUANTITY,
        payload: {
            id: id,
            newQuantity: newQuantity
        }
    }
}


export const removeCartItem = (id, itemQuantity) => {
    return {
        type: REMOVE_ITEM,
        payload: {
            id: id,
            itemQuantity: itemQuantity
        }
    }
}