import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension";
import { productReducers, singleProductReducers} from "./reducers/productReducers"
import { cartReducers } from "./reducers/cartReducers";
const reducer = combineReducers({
    products: productReducers,
    singleProduct: singleProductReducers,
    cartItems: cartReducers
 
})

let initialState = {}
const middleWare = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleWare)));

export default store