import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'

// redux-thunk is included by default in configureStore
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
