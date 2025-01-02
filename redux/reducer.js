
import { ADD_TO_CART, REMOVE_TO_CART, ADD_TO_LIKE, REMOVE_TO_LIKE, SELECT_ADDS } from "./actionsname";

const initialState = {
  cart: [],
  likes: [],
  ADDRS:[],
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.data],
      };

    case REMOVE_TO_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.data),
      };

    case ADD_TO_LIKE: // Add to Like
      return {
        ...state,
        likes: [...state.likes, action.data],
      };

    case REMOVE_TO_LIKE: // Remove from Like
      return {
        ...state,
        likes: state.likes.filter((item) => item.id !== action.data),
      };

      case SELECT_ADDS:
        return {
          ...state,
          ADDRS: action.data,
      };
      
        
        

    default:
      return state;
  }
};
