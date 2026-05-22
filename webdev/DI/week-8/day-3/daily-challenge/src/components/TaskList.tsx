import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { editTask, deleteTask } from '../store/plannerSlice'
import type { RootState, AppDispatch } from '../store/store'

type TaskListProps = {
    selectedDay: string
}

function TaskList({ selectedDay }: TaskListProps) {
    const dispatch = useDispatch<AppDispatch>()
    const tasks = useSelector((state: RootState) => state.planner.tasks[selectedDay] ?? [])
    const [editingId, setEditingId] = useState<number | null>(null)
    const [editText, setEditText] = useState('')

    function startEdit(id: number, text: string) {
        setEditingId(id)
        setEditText(text)
    }

    function saveEdit(id: number) {
        if (!editText.trim()) return
        dispatch(editTask({ day: selectedDay, id, text: editText }))
        setEditingId(null)
    }

    if (tasks.length === 0) return <p style={{ color: '#999' }}>No tasks for this day.</p>

    return (
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {tasks.map(task => (
                <li key={task.id} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 0', borderBottom: '1px solid #eee' }}>
                    {editingId === task.id ? (
                        <>
                            <input
                                value={editText}
                                onChange={e => setEditText(e.target.value)}
                                style={{ flex: 1, padding: '6px', fontSize: '15px' }}
                                autoFocus
                            />
                            <button onClick={() => saveEdit(task.id)} style={{ padding: '6px 12px', background: '#3498db', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Save</button>
                            <button onClick={() => setEditingId(null)} style={{ padding: '6px 12px', background: '#bbb', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Cancel</button>
                        </>
                    ) : (
                        <>
                            <span style={{ flex: 1 }}>{task.text}</span>
                            <button onClick={() => startEdit(task.id, task.text)} style={{ padding: '6px 12px', background: '#f39c12', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Edit</button>
                            <button onClick={() => dispatch(deleteTask({ day: selectedDay, id: task.id }))} style={{ padding: '6px 12px', background: '#e74c3c', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Delete</button>
                        </>
                    )}
                </li>
            ))}
        </ul>
    )
}

export default TaskList
