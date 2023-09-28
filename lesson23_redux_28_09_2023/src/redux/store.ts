import { combineReducers } from 'redux';
import { createStore } from 'redux';
import counterReducer from './counterReducer';
import productReducer from './productReducer';

const store = createStore(combineReducers({
    counter: counterReducer,
    product: productReducer
}));

export default store;
export type RootState = ReturnType<typeof store.getState>