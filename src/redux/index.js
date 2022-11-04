import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todoReducer";
import todoEditReducer from "./reducers/todoEditReducer";
import inputValueReducer from "./reducers/inputValueReducer";
import filterTodoRedcuer from "./reducers/filterTodoReducer"

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        isEdit: todoEditReducer,
        text: inputValueReducer,
        filter: filterTodoRedcuer,
    }
})