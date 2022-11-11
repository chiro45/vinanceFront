import { Types } from "../Types/Types";



const initialState = {
    userName:  null,
    avatar: "",
    rol: ""
 }
 
 //handle audio status
 export const UserReducer = (state = initialState, action) =>{
   
     switch (action.type) {
         case Types.addUser:
             return{
                 ...state,
                 userName: action.payload.user,
                 rol: action.payload.rol
             }
             case Types.removeUser:
                return{
                    ...state,
                    userName: null,
                    rol: null
                }
         default:
             return  state;
     }
 }

export const handleAddUser = (user, rol)=>({
    type: Types.addUser,
    payload: {
        user: user,
        rol: rol
    }
})

export const  removeUser  = ()=>({
    type: Types.removeUser 
})