import type { ReactNode } from 'react'

type ListProps<T> = {
    items: T[]
    renderItem: (item: T) => ReactNode
}

function List<T>({ items, renderItem }: ListProps<T>) {
    return (
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {items.map((item, i) => (
                <li key={i} style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
                    {renderItem(item)}
                </li>
            ))}
        </ul>
    )
}

export default List
