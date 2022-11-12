import { Types } from "../Types/Types";



const initialState = {
    cart: []
 }
 
 export const Cart = (state = initialState, action) =>{
     switch (action.type) {
         case Types.addItemToCart:
             return{
                 ...state,
                 cart: [...state.cart, action.payload]
             }
        case Types.deleteItemToCart:    
             const aux = state.cart.filter(el=> el.item !== action.payload)
           return{
               ...state,
               cart: aux
           }
        case Types.removeItemsToCart:
           return{
               ...state,
               cart: []
           }
         default:
             return  state;
     }
 
 }