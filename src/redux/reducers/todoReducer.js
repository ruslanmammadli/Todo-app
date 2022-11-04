import { createSlice } from "@reduxjs/toolkit";
import {
    addTodoItem,
    removeTodoItem,
    removeAllItems,
    updateTodoItem,
    editTodoItem,
} from "../actions/todoActions";

const initialState = JSON.parse(localStorage.getItem('data')) || [];

const todoReducer = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: addTodoItem,
        removeTodo: removeTodoItem,
        removeAll: removeAllItems,
        updateTodo: updateTodoItem,
        editTodo: editTodoItem,
    }
})

export const { addTodo, removeTodo, removeAll, updateTodo, editTodo } = todoReducer.actions
export default todoReducer.reducer