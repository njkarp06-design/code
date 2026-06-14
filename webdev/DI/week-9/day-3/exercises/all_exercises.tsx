// =====================================
// START: src/store/todoslice.ts
// =====================================
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Todo {
  id: number
  text: string
  completed: boolean
}

interface TodoState {
  todos: Todo[]
}

const initialState: TodoState = {
  todos: [
    { id: 1, text: 'Learn Redux Toolkit', completed: false },
    { id: 2, text: 'Build a todo app', completed: false },
  ],
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      }
      state.todos.push(newTodo)
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find(t => t.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(t => t.id !== action.payload)
    },
  },
})

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer
// =====================================
// END: src/store/todoslice.ts
// =====================================


// =====================================
// START: src/store/store.ts
// =====================================
import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoslice'

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
// =====================================
// END: src/store/store.ts
// =====================================


// =====================================
// START: src/components/addtodo.tsx
// =====================================
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/todoslice'
import { AppDispatch } from '../store/store'

function AddTodo() {
  const [text, setText] = useState('')
  const dispatch = useDispatch<AppDispatch>()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim() === '') return
    dispatch(addTodo(text.trim()))
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter a new todo..."
        style={{ flexGrow: 1, padding: '6px' }}
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default AddTodo
// =====================================
// END: src/components/addtodo.tsx
// =====================================


// =====================================
// START: src/components/todoitem.tsx
// =====================================
import { useDispatch } from 'react-redux'
import { toggleTodo, removeTodo } from '../store/todoslice'
import { AppDispatch } from '../store/store'

interface TodoItemProps {
  id: number
  text: string
  completed: boolean
}

function TodoItem({ id, text, completed }: TodoItemProps) {
  const dispatch = useDispatch<AppDispatch>()

  return (
    <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodo(id))}
      />
      <span style={{ textDecoration: completed ? 'line-through' : 'none', flexGrow: 1 }}>
        {text}
      </span>
      <button onClick={() => dispatch(removeTodo(id))}>Remove</button>
    </li>
  )
}

export default TodoItem
// =====================================
// END: src/components/todoitem.tsx
// =====================================


// =====================================
// START: src/components/todolist.tsx
// =====================================
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import TodoItem from './todoitem'

function TodoList() {
  const todos = useSelector((state: RootState) => state.todos.todos)

  if (todos.length === 0) {
    return <p>No todos yet. Add one above!</p>
  }

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
        />
      ))}
    </ul>
  )
}

export default TodoList
// =====================================
// END: src/components/todolist.tsx
// =====================================


// =====================================
// START: src/app.tsx
// =====================================
import './app.css'
import AddTodo from './components/addtodo'
import TodoList from './components/todolist'

function App() {
  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', padding: '0 16px' }}>
      <h1>Day 3 - Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  )
}

export default App
// =====================================
// END: src/app.tsx
// =====================================


// =====================================
// START: src/main.tsx
// =====================================
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
// =====================================
// END: src/main.tsx
// =====================================
