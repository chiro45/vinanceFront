import thunk from "redux-thunk"
import { UserReducer } from "../Reducers/UserReducer"
import {ProductReducer} from "../Reducers/ProductReducer"
const { configureStore } = require("@reduxjs/toolkit")



export const Store = 
    configureStore({
    reducer:{
        userReducer: UserReducer,
        productReducer: ProductReducer
    },middleware:[thunk]
    })
