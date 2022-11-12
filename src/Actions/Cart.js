import { Types } from "../Types/Types";


export const addToCart = (item)=>({
    type: Types.addItemToCart,
    payload: item
})
export const deleteItemToCart= (item)=>({
    type: Types.deleteItemToCart
})

export const removesToCart = ()=>({
    type: Types.removeItemsToCart
})