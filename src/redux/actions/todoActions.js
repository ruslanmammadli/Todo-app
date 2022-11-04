export const addTodoItem = (state, { payload }) => {
    state.push(payload)
    localStorage.setItem('data', JSON.stringify([...state]))
}

export const removeTodoItem = (state, { payload }) => {
    const deletedTodos = state.filter(item => {
        if (item.id !== payload) {
            return {
                ...item
            }
        } return false
    })

    localStorage.setItem('data', JSON.stringify(deletedTodos))
    return deletedTodos
}

export const removeAllItems = () => {
    localStorage.setItem('data', JSON.stringify([]))
    return []
}

export const updateTodoItem = (state, { payload }) => {
    const checkedTodos = [...state].map(item => {
        if (item.id === payload) {
            return {
                ...item,
                isComplited: !item.isComplited
            }
        } else {
            return item
        }
    })
    localStorage.setItem('data', JSON.stringify(checkedTodos))
    return checkedTodos
}

export const editTodoItem = (state, { payload }) => {
    const editedTodos = [...state].map(item => {
        if (item.id === payload.id) {
            return {
                ...item,
                text: payload.text
            }
        } else {
            return item
        }
    })
    localStorage.setItem('data', JSON.stringify(editedTodos))
    return editedTodos
}
