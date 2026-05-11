import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

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
