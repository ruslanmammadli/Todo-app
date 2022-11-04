import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, editTodo } from '../redux/reducers/todoReducer';
import { setInputValue } from '../redux/reducers/inputValueReducer';
import { setIsEdit } from '../redux/reducers/todoEditReducer';

const Form = () => {
    const dispatch = useDispatch();
    const { isEdit, text } = useSelector((state) => state)

    const getInputValue = e => {
        dispatch(setInputValue(e.target.value))
    }

    const addTodoItem = e => {
        e.preventDefault()
        if (text.trim().length > 0) {
            if (!isEdit) {
                dispatch(addTodo({
                    id: Date.now(),
                    text: text,
                    isComplited: false,
                }))
                dispatch(setInputValue(''))
            } else {
                dispatch(editTodo({
                    id: isEdit,
                    text
                }))
                dispatch(setInputValue(''))
                dispatch(setIsEdit(null))
            }
        } else {
            alert('Please fill input')
        }
    }

    return (
        <form onSubmit={(e) => { addTodoItem(e) }} className='mt-3.5'>
            <input
                onChange={(e) => { getInputValue(e) }}
                value={text}
                className='w-full outline-none'
                type="text"
                placeholder='Add a new task ...'
            />
        </form>
    )
}

export default Form