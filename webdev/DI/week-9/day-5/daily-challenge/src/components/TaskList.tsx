import { useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectTasks, selectCategories, selectCompletedTasks } from '../store/selectors'
import { addTask, editTask, deleteTask, toggleTask, updateProgress } from '../store/tasksSlice'
import type { AppDispatch } from '../store/store'

type TaskListProps = {
    selectedCategoryId: number | null
}

function TaskList({ selectedCategoryId }: TaskListProps) {
    const dispatch = useDispatch<AppDispatch>()
    const allTasks = useSelector(selectTasks)
    const categories = useSelector(selectCategories)
    const completedCount = useSelector(selectCompletedTasks)

    const [newTitle, setNewTitle] = useState('')
    const [newCategoryId, setNewCategoryId] = useState<number>(categories[0]?.id ?? 1)
    const [editingId, setEditingId] = useState<number | null>(null)
    const [editText, setEditText] = useState('')

    const tasks = selectedCategoryId === null
        ? allTasks
        : allTasks.filter(t => t.categoryId === selectedCategoryId)

    function handleAdd() {
        if (!newTitle.trim()) return
        dispatch(addTask({ title: newTitle.trim(), categoryId: newCategoryId }))
        setNewTitle('')
    }

    const handleEdit = useCallback((id: number, title: string) => {
        setEditingId(id)
        setEditText(title)
    }, [])

    const handleSaveEdit = useCallback((id: number) => {
        if (!editText.trim()) return
        dispatch(editTask({ id, title: editText }))
        setEditingId(null)
    }, [dispatch, editText])

    const handleToggle = useCallback((id: number) => {
        dispatch(toggleTask(id))
    }, [dispatch])

    return (
        <div>
            <p style={{ color: '#666', marginBottom: '16px' }}>
                {completedCount} of {allTasks.length} tasks completed
            </p>

            <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
                <input
                    value={newTitle}
                    onChange={e => setNewTitle(e.target.value)}
                    placeholder="New task..."
                    style={{ flex: 1, padding: '8px', fontSize: '15px', minWidth: '160px' }}
                />
                <select
                    value={newCategoryId}
                    onChange={e => setNewCategoryId(Number(e.target.value))}
                    style={{ padding: '8px', fontSize: '15px' }}
                >
                    {categories.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                </select>
                <button onClick={handleAdd} style={{ padding: '8px 16px', background: '#3498db', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Add Task</button>
            </div>

            {tasks.length === 0 && <p style={{ color: '#999' }}>No tasks in this category.</p>}

            <ul style={{ listStyle: 'none', padding: 0 }}>
                {tasks.map(task => (
                    <li key={task.id} style={{ padding: '12px', border: '1px solid #eee', borderRadius: '8px', marginBottom: '10px', background: task.completed ? '#f9fff9' : '#fff' }}>
                        {editingId === task.id ? (
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <input
                                    value={editText}
                                    onChange={e => setEditText(e.target.value)}
                                    style={{ flex: 1, padding: '6px', fontSize: '15px' }}
                                    autoFocus
                                />
                                <button onClick={() => handleSaveEdit(task.id)} style={{ padding: '6px 12px', background: '#2ecc71', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Save</button>
                                <button onClick={() => setEditingId(null)} style={{ padding: '6px 12px', background: '#bbb', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Cancel</button>
                            </div>
                        ) : (
                            <>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                                    <input type="checkbox" checked={task.completed} onChange={() => handleToggle(task.id)} />
                                    <span style={{ flex: 1, textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? '#aaa' : '#333' }}>
                                        {task.title}
                                    </span>
                                    <span style={{ fontSize: '12px', color: '#999' }}>
                                        {categories.find(c => c.id === task.categoryId)?.name}
                                    </span>
                                    <button onClick={() => handleEdit(task.id, task.title)} style={{ padding: '4px 10px', background: '#f39c12', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '13px' }}>Edit</button>
                                    <button onClick={() => dispatch(deleteTask(task.id))} style={{ padding: '4px 10px', background: '#e74c3c', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '13px' }}>Delete</button>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{ fontSize: '13px', color: '#666', minWidth: '80px' }}>Progress: {task.progress}%</span>
                                    <input
                                        type="range"
                                        min={0}
                                        max={100}
                                        value={task.progress}
                                        onChange={e => dispatch(updateProgress({ id: task.id, progress: Number(e.target.value) }))}
                                        style={{ flex: 1 }}
                                    />
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TaskList
