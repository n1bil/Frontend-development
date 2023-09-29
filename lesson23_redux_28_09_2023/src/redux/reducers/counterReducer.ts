import Action from "../types/Action";
import { CounterState } from "../types/state";

const initialState: CounterState = {
    value: 0
}

export default function counterReducer(
    state: CounterState = initialState,
    action: Action
): CounterState {
    switch (action.type) {
        case 'counter/minus':
            return {...state, value: state.value - 1};
        case 'counter/plus':
            return {...state, value: state.value + action.payload};
        default:
            return state;
    }
}