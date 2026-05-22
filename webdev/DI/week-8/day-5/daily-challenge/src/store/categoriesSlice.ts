import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Category = {
    id: number
    name: string
}

const initialState: Category[] = [
    { id: 1, name: 'Work' },
    { id: 2, name: 'Development' },
    { id: 3, name: 'Health' }
]

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        addCategory(state, action: PayloadAction<string>) {
            state.push({ id: Date.now(), name: action.payload })
        },
        editCategory(state, action: PayloadAction<{ id: number, name: string }>) {
            const cat = state.find(c => c.id === action.payload.id)
            if (cat) cat.name = action.payload.name
        },
        deleteCategory(state, action: PayloadAction<number>) {
            return state.filter(c => c.id !== action.payload)
        }
    }
})

export const { addCategory, editCategory, deleteCategory } = categoriesSlice.actions
export default categoriesSlice.reducer
