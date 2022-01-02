import { CallToActionSharp } from "@material-ui/icons";
import {ADD_TO_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, REMOVE_ITEM} from "../constants/cartConstants"


export const cartReducers = (state = {cartItems: []}, action) => {
    switch(action.type){
        case ADD_TO_CART:
            const item = {...action.payload, quantity: action.payload.quantity}
            const isItemExist = state.cartItems.find(i => i.id === item.id);




            if(isItemExist){

                return {
                    ...state,
                    cartItems: state.cartItems.map(i => i.id === isItemExist.id ? item : i)
                    // cartItems: [state.cartItems.quantity]


                }

            }else{
                return{
                    ...state,
                    cartItems: [...state.cartItems, item]
                }

            }

        case INCREASE_QUANTITY:
            const updatedCartItems = [...state.cartItems]
            const index = updatedCartItems.findIndex(i => i.id === action.payload.id)
            const updatedItem = {...updatedCartItems.find(i => i.id === action.payload.id), quantity: action.payload.newQuantity}
            updatedCartItems[index] = updatedItem

            return{
    
                cartItems: updatedCartItems

            }

        case DECREASE_QUANTITY:


            const updatedCartItemsOnDecrement = [...state.cartItems]
            const onDecrementIndex = updatedCartItemsOnDecrement.findIndex(i => i.id === action.payload.id)
            const onDecrementCartItem = {...state.cartItems.find(i => i.id === action.payload.id), quantity: action.payload.newQuantity}
            updatedCartItemsOnDecrement[onDecrementIndex] = onDecrementCartItem

            return{
                cartItems: updatedCartItemsOnDecrement
            }

        case REMOVE_ITEM:
            const updateCartItemsOnRemove = [...state.cartItems]
            // const onRemoveIndex = updateCartItemsOnRemove.findIndex(i => i.id === action.payload.id)
            const filteredItems = updateCartItemsOnRemove.filter(i => i.id !== action.payload.id)

            return{
                cartItems: filteredItems
            }

            




        default:
            return state;

    }

}