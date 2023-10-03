import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    value: ''
}

export const sandWichSlice = createSlice({
    name: 'sandwich',
    initialState: initialState,
    reducers: {
        addIngredient: (state, action: PayloadAction<string>) =>{
            state.value += action.payload;
        },
        clear: (state) => {
            state.value = '';
        },
    },
});

export const { addIngredient, clear } = sandWichSlice.actions;
export default sandWichSlice.reducer;