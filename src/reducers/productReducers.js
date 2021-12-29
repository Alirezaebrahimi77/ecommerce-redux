import {PRODUCTS_REQUEST, PRODUCTS_SUCCESS, PRODUCTS_FAIL, CLEAR_ERRORS, PRODUCTS_DETAILS_REQUEST, PRODUCTS_DETAILS_SUCCESS, PRODUCTS_DETAILS_FAIL} from "../constants/productConstants"
export const productReducers = (state = {products: []}, action) => {
    switch(action.type){
        case PRODUCTS_REQUEST:
                return{
                    loading: true,
                    products: []
                }
        case PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload,
                productsCount: action.payload.length
            }
        case PRODUCTS_FAIL:
            return{
                loading: false,
                error: action.payload

            }
        case CLEAR_ERRORS:
            return{
                ...state,
                error: null
            }
        default:
            return state
    }



}

export const singleProductReducers = (state={singleProduct: {}}, action) => {

    switch(action.type){
        case PRODUCTS_DETAILS_REQUEST:
            return{
                ...state,
                loading: true,
            }
        case PRODUCTS_DETAILS_SUCCESS:
            return{
                loading: false,
                singleProduct: action.payload
            }
        case PRODUCTS_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return{
                ...state,
                error: null
            }
        default:
            return state
    }

}