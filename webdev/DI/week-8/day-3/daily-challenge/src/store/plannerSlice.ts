import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Task = {
    id: number
    text: string
}

type PlannerState = {
    tasks: Record<string, Task[]>
}

const initialState: PlannerState = {
    tasks: {
        '2026-05-22': [{ id: 1, text: 'Team standup at 9am' }],
        '2026-05-23': [{ id: 2, text: 'Submit weekly report' }]
    }
}

const plannerSlice = createSlice({
    name: 'planner',
    initialState,
    reducers: {
        addTask(state, action: PayloadAction<{ day: string, text: string }>) {
            const { day, text } = action.payload
            if (!state.tasks[day]) state.tasks[day] = []
            state.tasks[day].push({ id: Date.now(), text })
        },
        editTask(state, action: PayloadAction<{ day: string, id: number, text: string }>) {
            const { day, id, text } = action.payload
            const task = state.tasks[day]?.find(t => t.id === id)
            if (task) task.text = text
        },
        deleteTask(state, action: PayloadAction<{ day: string, id: number }>) {
            const { day, id } = action.payload
            state.tasks[day] = state.tasks[day]?.filter(t => t.id !== id) ?? []
        }
    }
})

export const { addTask, editTask, deleteTask } = plannerSlice.actions
export default plannerSlice.reducer
