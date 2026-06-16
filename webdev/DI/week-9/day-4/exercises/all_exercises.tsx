// src/store/userSlice.ts
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


// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


// src/components/UserData.tsx
import { useSelector, useDispatch } from 'react-redux'
import type { RootState, AppDispatch } from '../store/store'
import { fetchUser, clearUser } from '../store/userSlice'

function UserData() {
  const dispatch = useDispatch<AppDispatch>()
  const { data, loading, error } = useSelector((state: RootState) => state.user)

  function handleFetch() {
    dispatch(fetchUser(1))
  }

  function handleClear() {
    dispatch(clearUser())
  }

  return (
    <div className="user-card">
      <h2>User Profile</h2>

      <div className="btn-group">
        <button onClick={handleFetch} disabled={loading}>
          {loading ? 'Loading...' : 'Fetch User'}
        </button>
        <button onClick={handleClear} className="secondary">
          Clear
        </button>
      </div>

      {error && (
        <p className="error-msg">Error: {error}</p>
      )}

      {data && (
        <table className="user-table">
          <tbody>
            <tr>
              <td>Name</td>
              <td>{data.name}</td>
            </tr>
            <tr>
              <td>Username</td>
              <td>@{data.username}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{data.email}</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>{data.phone}</td>
            </tr>
            <tr>
              <td>Website</td>
              <td>{data.website}</td>
            </tr>
            <tr>
              <td>City</td>
              <td>{data.address.city}</td>
            </tr>
            <tr>
              <td>Company</td>
              <td>{data.company.name}</td>
            </tr>
          </tbody>
        </table>
      )}

      {!data && !loading && !error && (
        <p className="hint">Click "Fetch User" to load data from the API.</p>
      )}
    </div>
  )
}

export default UserData


// src/app.tsx
import './app.css'
import UserData from './components/UserData'

function App() {
  return (
    <div className="app-wrapper">
      <h1>Day 4 — Redux Thunk</h1>
      <p className="subtitle">Exercise 1: Fetching User Data with Redux Thunk</p>
      <UserData />
    </div>
  )
}

export default App


// src/main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/store'
import './index.css'
import App from './app.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
