import React from 'react'
import { useDispatch } from 'react-redux'
import { setIsEdit } from '../redux/reducers/todoEditReducer';
import { removeTodo, updateTodo } from '../redux/reducers/todoReducer';
import { setInputValue } from '../redux/reducers/inputValueReducer';

const TodoElement = ({ todo }) => {
    const dispatch = useDispatch();

    const editTodoItem = () => {
        dispatch(setIsEdit(todo.id))
        dispatch(setInputValue(todo.text))
    }

    return (
        <div className={`${todo.isComplited && 'active-task'} task-list flex items-center justify-between px-5 py-2.5 cursor-pointer`}>
            <div className='flex items-center'>
                <input
                    onClick={() => { dispatch(updateTodo(todo.id)) }}
                    className={`${todo.isComplited && 'active-checkbox'} task-status`}
                    type="checkbox"
                />
                <label className='mt-0.5'>{todo.text}</label>
            </div>
            <div className='flex items-center'>
                <button onClick={() => { editTodoItem() }} className='editBtn mr-2'></button>
                <button onClick={() => { dispatch(removeTodo(todo.id)) }} className='deleteBtn'></button>
            </div>
        </div>
    )
}

export default TodoElement