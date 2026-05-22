import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCategories } from '../store/selectors'
import { addCategory, deleteCategory } from '../store/categoriesSlice'
import type { AppDispatch } from '../store/store'

type CategorySelectorProps = {
    selectedId: number | null
    onSelect: (id: number | null) => void
}

function CategorySelector({ selectedId, onSelect }: CategorySelectorProps) {
    const dispatch = useDispatch<AppDispatch>()
    const categories = useSelector(selectCategories)
    const [newName, setNewName] = useState('')

    function handleAdd() {
        if (!newName.trim()) return
        dispatch(addCategory(newName.trim()))
        setNewName('')
    }

    return (
        <div style={{ marginBottom: '24px' }}>
            <h3>Categories</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
                <button
                    onClick={() => onSelect(null)}
                    style={{ padding: '6px 14px', borderRadius: '6px', border: 'none', cursor: 'pointer', background: selectedId === null ? '#3498db' : '#eee', color: selectedId === null ? '#fff' : '#333' }}
                >
                    All
                </button>
                {categories.map(cat => (
                    <div key={cat.id} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <button
                            onClick={() => onSelect(cat.id)}
                            style={{ padding: '6px 14px', borderRadius: '6px', border: 'none', cursor: 'pointer', background: selectedId === cat.id ? '#3498db' : '#eee', color: selectedId === cat.id ? '#fff' : '#333' }}
                        >
                            {cat.name}
                        </button>
                        <button
                            onClick={() => dispatch(deleteCategory(cat.id))}
                            style={{ padding: '4px 8px', background: '#e74c3c', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}
                        >
                            ×
                        </button>
                    </div>
                ))}
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
                <input
                    value={newName}
                    onChange={e => setNewName(e.target.value)}
                    placeholder="New category..."
                    style={{ padding: '6px', fontSize: '14px', flex: 1 }}
                />
                <button onClick={handleAdd} style={{ padding: '6px 14px', background: '#2ecc71', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Add</button>
            </div>
        </div>
    )
}

export default CategorySelector
