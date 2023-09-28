import Action from "./types/Action";
import { ProductState } from "./types/productState";


const initialState: ProductState = {
    value: ''
}

export default function productReducer(
    state: ProductState = initialState,
    action: Action
): ProductState {
    switch (action.type) {
        case 'addBread':
            return {...state, value: state.value + action.payload};
        case 'addCheese':
            return {...state, value: state.value + action.payload};
        case 'addHam':
            return {...state, value: state.value + action.payload};
        default:
            return state;
    }
}