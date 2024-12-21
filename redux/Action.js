import { ADD_TO_CART, REMOVE_TO_CART, ADD_TO_LIKE, REMOVE_TO_LIKE } from "./actionsname";

export const ADDCART = (item) => ({
  type: ADD_TO_CART,
  data: item,
});

export const REMOVECART = (item) => ({
  type: REMOVE_TO_CART,
  data: item,
});

export const ADDLIKE = (item) => ({ // New Action for Add to Like
  type: ADD_TO_LIKE,
  data: item,
});

export const REMOVELIKE = (item) => ({ // New Action for Remove from Like
  type: REMOVE_TO_LIKE,
  data: item,
});
