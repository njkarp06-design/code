import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/todoSlice'
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
