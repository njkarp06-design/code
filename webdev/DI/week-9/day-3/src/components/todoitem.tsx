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
