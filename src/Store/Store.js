import thunk from "redux-thunk"
import { UserReducer } from "../Reducers/UserReducer"
import {ProductReducer} from "../Reducers/ProductReducer"
import { Cart } from "../Reducers/Cart"
const { configureStore } = require("@reduxjs/toolkit")



export const Store = 
    configureStore({
    reducer:{
        userReducer: UserReducer,
        productReducer: ProductReducer,
        cart: Cart
    },middleware:[thunk]
    })
