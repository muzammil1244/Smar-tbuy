import { ADD_TO_CART, REMOVE_TO_CART } from "./actionsname";

 export const ADDCART=(item)=>({

type:ADD_TO_CART,
data:item


})

export const REMOVECART=(item)=>({

    type:REMOVE_TO_CART,
    data:item
})

