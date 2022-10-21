import thunk from "redux-thunk"
import { UserReducer } from "../Reducers/UserReducer"

const { configureStore } = require("@reduxjs/toolkit")



export const Store = 
    configureStore({
    reducer:{
        userReducer: UserReducer
    },middleware:[thunk]
    })
