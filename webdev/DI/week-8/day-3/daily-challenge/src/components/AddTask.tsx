import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../store/plannerSlice'
import type { AppDispatch } from '../store/store'

type AddTaskProps = {
    selectedDay: string
}

function AddTask({ selectedDay }: AddTaskProps) {
    const dispatch = useDispatch<AppDispatch>()
    const [text, setText] = useState('')

    function handleAdd() {
        if (!text.trim()) return
        dispatch(addTask({ day: selectedDay, text }))
        setText('')
    }

    return (
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            <input
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Add a task..."
                style={{ flex: 1, padding: '8px', fontSize: '15px' }}
            />
            <button
                onClick={handleAdd}
                style={{ padding: '8px 16px', background: '#2ecc71', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '15px' }}
            >
                Add
            </button>
        </div>
    )
}

export default AddTask
