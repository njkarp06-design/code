import { useState, useRef } from 'react'
import { TaskProvider, useTask } from './taskcontext'

function AddTask() {
    const { dispatch } = useTask()
    const [text, setText] = useState('')

    function handleAdd(e) {
        e.preventDefault()
        if (!text.trim()) return
        dispatch({ type: 'ADD_TASK', text })
        setText('')
    }

    return (
        <form onSubmit={handleAdd} style={{ marginBottom: '20px' }}>
            <input
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Add a task..."
                style={{ padding: '8px', fontSize: '16px', marginRight: '10px' }}
            />
            <button type="submit">Add</button>
        </form>
    )
}

function FilterButtons() {
    const { state, dispatch } = useTask()

    return (
        <div style={{ marginBottom: '20px' }}>
            {['all', 'active', 'completed'].map(f => (
                <button
                    key={f}
                    onClick={() => dispatch({ type: 'FILTER_TASKS', filter: f })}
                    style={{
                        marginRight: '8px',
                        padding: '6px 14px',
                        fontWeight: state.filter === f ? 'bold' : 'normal',
                        background: state.filter === f ? '#3b82f6' : '#eee',
                        color: state.filter === f ? 'white' : 'black',
                        border: 'none',
                        cursor: 'pointer',
                        borderRadius: '4px'
                    }}
                >
                    {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
            ))}
        </div>
    )
}

function TaskItem({ task }) {
    const { dispatch } = useTask()
    const [editing, setEditing] = useState(false)
    const editRef = useRef(null)

    function saveEdit() {
        dispatch({ type: 'EDIT_TASK', id: task.id, text: editRef.current.value })
        setEditing(false)
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <input
                type="checkbox"
                checked={task.done}
                onChange={() => dispatch({ type: 'TOGGLE_TASK', id: task.id })}
            />
            {editing ? (
                <>
                    <input
                        ref={editRef}
                        defaultValue={task.text}
                        style={{ padding: '4px', fontSize: '15px', flex: 1 }}
                        autoFocus
                    />
                    <button onClick={saveEdit}>Save</button>
                </>
            ) : (
                <>
                    <span style={{ flex: 1, textDecoration: task.done ? 'line-through' : 'none', color: task.done ? '#aaa' : 'inherit' }}>
                        {task.text}
                    </span>
                    <button onClick={() => setEditing(true)}>Edit</button>
                </>
            )}
        </div>
    )
}

function TaskList() {
    const { state } = useTask()

    let filtered = state.tasks
    if (state.filter === 'active') filtered = state.tasks.filter(t => !t.done)
    if (state.filter === 'completed') filtered = state.tasks.filter(t => t.done)

    return (
        <div>
            {filtered.length === 0 && <p>No tasks to show.</p>}
            {filtered.map(task => (
                <TaskItem key={task.id} task={task} />
            ))}
        </div>
    )
}

function DailyChallenge() {
    return (
        <TaskProvider>
            <div style={{ marginTop: '60px' }}>
                <h1>Daily Challenge: Task Manager</h1>
                <FilterButtons />
                <AddTask />
                <TaskList />
            </div>
        </TaskProvider>
    )
}

export default DailyChallenge
