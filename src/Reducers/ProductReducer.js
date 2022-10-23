import { Types } from "../Types/Types";



const initialState = {
    productActive: null
 }
 
 export const ProductReducer = (state = initialState, action) =>{
     switch (action.type) {
         case Types.addActiveProduct:
             return{
                 ...state,
                 productActive: action.payload
             }
             case Types.removeActiveProduct:
                return{
                    ...state,
                    productActive: null
                }
         default:
             return  state;
     }
 
 
 
 
 
 
 
 }