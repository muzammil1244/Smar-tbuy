import { ADD_TO_CART, REMOVE_TO_CART, ADD_TO_LIKE, REMOVE_TO_LIKE,SELECT_ADDS } from "./actionsname";

export const ADDCART = (item) => ({
  type: ADD_TO_CART,
  data: item,
});

export const REMOVECART = (item) => ({
  type: REMOVE_TO_CART,
  data: item,
});

export const ADDLIKE = (item) => ({ 
  type: ADD_TO_LIKE,
  data: item,
});

export const REMOVELIKE = (item) => ({ 
  type: REMOVE_TO_LIKE,
  data: item,
});

export const SELECTADDS = (item)=>({

  type : SELECT_ADDS,
  data : item



})