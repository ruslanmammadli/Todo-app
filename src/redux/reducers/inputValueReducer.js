import { createSlice } from "@reduxjs/toolkit";
const initialState = '';

const inputValueReducer = createSlice({
    name: 'inputValue',
    initialState,
    reducers: {
        setInputValue: (state, { payload }) => {
            return state = payload
        }
    }
})

export const { setInputValue } = inputValueReducer.actions
export default inputValueReducer.reducer