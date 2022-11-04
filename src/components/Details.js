import React from 'react'
import Form from './Form'
import { today } from '../helper'
import { removeAll } from '../redux/reducers/todoReducer'
import { useDispatch, useSelector } from 'react-redux'
import { filterTodo } from '../redux/reducers/filterTodoReducer'

const Details = () => {
    const dispatch = useDispatch();
    const { todo, filter } = useSelector((state) => state)

    return (
        <div className='px-5 pt-5 pb-2.5'>
            <h1 className='text-xl font-semibold mb-3'>{today()}</h1>
            <div className='flex justify-between items-center'>
                <p className='text-sm text-[#8a9ca5]'>{todo?.length} tasks</p>
                <div className='flex my-1'>
                    <button
                        onClick={() => { dispatch(filterTodo('all')) }}
                        className={` ${filter === 'all' && 'active'} text-[#8a9ca5] text-sm py-0.5 px-2`}>
                        All
                    </button>
                    <button
                        onClick={() => { dispatch(filterTodo('active')) }}
                        className={` ${filter === 'active' && 'active'} text-[#8a9ca5] text-sm py-0.5 px-2`}>
                        Active
                    </button>
                    <button
                        onClick={() => { dispatch(filterTodo('completed')) }}
                        className={` ${filter === 'completed' && 'active'} text-[#8a9ca5] text-sm py-0.5 px-2`}>
                        Completed
                    </button>
                </div>
                <div className='flex'>
                    <button
                        onClick={() => { dispatch(removeAll()) }}
                        className={`${todo.length === 0 && 'no-drop'} text-[#8a9ca5] text-sm py-0.5 px-2`}>
                        Clear All
                    </button>
                </div>
            </div>
            <Form />
        </div>
    )
}

export default Details