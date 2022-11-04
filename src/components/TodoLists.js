import React from 'react'
import EmptyList from './EmptyList'
import TodoElement from './TodoElement'
import { useSelector } from 'react-redux/es/exports'

const TodoLists = () => {
    const { todo, filter } = useSelector((state) => state);

    const todos = todo.filter(item => {
        switch (filter) {
            case 'all':
                return item

            case 'active':
                if (!item.isComplited) {
                    return item
                }
                break

            case 'completed':
                if (item.isComplited) {
                    return item
                }
                break

            default:
                break
        }
        return false
    })

    console.log(todos)

    return (
        <div className='w-full max-h-96 overflow-y-scroll custom-border none-scroll'>
            {
                todos?.length > 0
                    ? todos.map(item => {
                        return (
                            <TodoElement key={item.id} todo={item} />
                        )
                    })
                    : <EmptyList />
            }
        </div>
    )
}

export default TodoLists