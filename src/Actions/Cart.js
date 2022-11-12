import { Types } from "../Types/Types";


export const addToCart = (item, cant = 1)=>({
    type: Types.addItemToCart,
    payload: {item: item, cant: cant }
})
export const deleteItemToCart= (item)=>({
    type: Types.deleteItemToCart,
    payload: item
})

export const removesToCart = ()=>({
    type: Types.removeItemsToCart
})