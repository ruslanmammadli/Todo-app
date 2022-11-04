import { createSlice } from "@reduxjs/toolkit";
const initialState = 'all';

const filterTodoRedcuer = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filterTodo: (state, { payload }) => {
            return state = payload
        }
    }
})

export const { filterTodo } = filterTodoRedcuer.actions
export default filterTodoRedcuer.reducer