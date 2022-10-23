import { Types } from "../Types/Types"

export const addActiveProduct = (item)=>({
    type: Types.addActiveProduct,
    payload: {...item}
})

export const removeActiveProduct = ()=>({
        type: Types.removeActiveProduct
})