import { ADD_TO_CART, REMOVE_TO_CART } from "./actionsname";

export const Reducer = (state = [], action) => {

    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.data]


        case REMOVE_TO_CART:
            const updatedState = state.filter((item) => item.id !== action.data);

            return updatedState



        default:
            return state







    }
}