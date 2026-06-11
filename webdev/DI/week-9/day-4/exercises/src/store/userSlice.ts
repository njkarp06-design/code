import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
}

interface Company {
  name: string
}

interface User {
  id: number
  name: string
  username: string
  email: string
  phone: string
  website: string
  address: Address
  company: Company
}

interface UserState {
  data: User | null
  loading: boolean
  error: string | null
}

const initialState: UserState = {
  data: null,
  loading: false,
  error: null,
}

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (userId: number, { rejectWithValue }) => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      if (!res.ok) throw new Error(`Request failed with status ${res.status}`)
      const json = await res.json()
      return json as User
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong'
      return rejectWithValue(message)
    }
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUser(state) {
      state.data = null
      state.error = null
      state.loading = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export const { clearUser } = userSlice.actions
export default userSlice.reducer
