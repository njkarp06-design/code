import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Task = {
    id: number
    title: string
    categoryId: number
    completed: boolean
    progress: number
}

const initialState: Task[] = [
    { id: 1, title: 'Write project proposal', categoryId: 1, completed: false, progress: 40 },
    { id: 2, title: 'Review pull requests', categoryId: 2, completed: true, progress: 100 },
    { id: 3, title: 'Go for a run', categoryId: 3, completed: false, progress: 0 }
]

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask(state, action: PayloadAction<{ title: string, categoryId: number }>) {
            state.push({ id: Date.now(), title: action.payload.title, categoryId: action.payload.categoryId, completed: false, progress: 0 })
        },
        editTask(state, action: PayloadAction<{ id: number, title: string }>) {
            const task = state.find(t => t.id === action.payload.id)
            if (task) task.title = action.payload.title
        },
        deleteTask(state, action: PayloadAction<number>) {
            return state.filter(t => t.id !== action.payload)
        },
        toggleTask(state, action: PayloadAction<number>) {
            const task = state.find(t => t.id === action.payload)
            if (task) {
                task.completed = !task.completed
                task.progress = task.completed ? 100 : task.progress
            }
        },
        updateProgress(state, action: PayloadAction<{ id: number, progress: number }>) {
            const task = state.find(t => t.id === action.payload.id)
            if (task) task.progress = action.payload.progress
        }
    }
})

export const { addTask, editTask, deleteTask, toggleTask, updateProgress } = tasksSlice.actions
export default tasksSlice.reducer
