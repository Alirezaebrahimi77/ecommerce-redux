import axios from "axios"
import {PRODUCTS_REQUEST, PRODUCTS_SUCCESS, PRODUCTS_FAIL, CLEAR_ERRORS} from "../constants/productConstants"

export const getProducts = () => async (dispatch) => {
    try{
        dispatch({type: PRODUCTS_REQUEST})

        const {data} = await axios.get("https://fakestoreapi.com/products");

        dispatch({
            type: PRODUCTS_SUCCESS,
            payload: data
        })

    }catch(error){
        dispatch({
            type: PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}

// clear errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}