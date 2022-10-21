import { Types } from "../Types/Types";



const initialState = {
    user: null,
    avatar: ""
 }
 
 //handle audio status
 export const UserReducer = (state = initialState, action) =>{
     switch (action.type) {
         case Types.login:
             return{
                 ...state,
                 user: action.payload.user,
                 avatar: action.payload.avatar
             }
         default:
             return  state;
     }
 
 
 
 
 
 
 
 }