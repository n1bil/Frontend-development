import Action from "./type/Action";
import CounterState from "./type/CounterState";

const initialState: CounterState = {
    value: 0,
    text: 'initialText'
};

export default function counterReducer(
    state: CounterState = initialState,
    action: Action
): CounterState {
    switch (action.type) {
        case 'payload/plus':
            return {...state, value: state.value + action.payload};
        case 'payload/minus':
            return {...state, value: state.value - action.payload};
        case 'deleteText':
            return {...state, text: ''};
        case 'changeText':
            return {...state, text: action.payload};
        default:
            return state;
    }
}