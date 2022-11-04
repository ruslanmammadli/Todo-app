import { createSlice } from "@reduxjs/toolkit";
const initialState = null;

const todoEditReducer = createSlice({
    name: 'isEdit',
    initialState,
    reducers: {
        setIsEdit: (state, { payload }) => {
            return state = payload
        }
    }
})

export const { setIsEdit } = todoEditReducer.actions
export default todoEditReducer.reducer