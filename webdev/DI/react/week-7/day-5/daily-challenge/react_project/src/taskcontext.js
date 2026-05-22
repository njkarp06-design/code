import { createContext, useContext, useReducer } from 'react'

const TaskContext = createContext()

function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, { id: Date.now(), text: action.text, done: false }]
            }
        case 'TOGGLE_TASK':
            return {
                ...state,
                tasks: state.tasks.map(t => t.id === action.id ? { ...t, done: !t.done } : t)
            }
        case 'EDIT_TASK':
            return {
                ...state,
                tasks: state.tasks.map(t => t.id === action.id ? { ...t, text: action.text } : t)
            }
        case 'FILTER_TASKS':
            return { ...state, filter: action.filter }
        default:
            return state
    }
}

export function TaskProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, { tasks: [], filter: 'all' })

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    )
}

export function useTask() {
    return useContext(TaskContext)
}
