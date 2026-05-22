import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

type AgeState = {
    age: number
    loading: boolean
}

const initialState: AgeState = {
    age: 25,
    loading: false
}

export const ageUpAsync = createAsyncThunk('age/ageUp', async () => {
    await new Promise(resolve => setTimeout(resolve, 1500))
    return 1
})

export const ageDownAsync = createAsyncThunk('age/ageDown', async () => {
    await new Promise(resolve => setTimeout(resolve, 1500))
    return -1
})

const ageSlice = createSlice({
    name: 'age',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(ageUpAsync.pending, (state) => { state.loading = true })
            .addCase(ageUpAsync.fulfilled, (state, action) => {
                state.age += action.payload
                state.loading = false
            })
            .addCase(ageDownAsync.pending, (state) => { state.loading = true })
            .addCase(ageDownAsync.fulfilled, (state, action) => {
                state.age += action.payload
                state.loading = false
            })
    }
})

export default ageSlice.reducer
