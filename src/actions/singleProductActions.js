import axios from "axios";
import {CLEAR_ERRORS, PRODUCTS_DETAILS_REQUEST, PRODUCTS_DETAILS_SUCCESS, PRODUCTS_DETAILS_FAIL} from "../constants/productConstants"


export const getSingleProduct = (id) => async (dispatch) => {
    try{
        dispatch({
            type: PRODUCTS_DETAILS_REQUEST
        })

        const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`)
        dispatch({
            type: PRODUCTS_DETAILS_SUCCESS,
            payload: data

        })

    }catch(error){
        dispatch({
            type: PRODUCTS_DETAILS_FAIL,
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