import { useState } from 'react'
import List from './List.tsx'

type Book = {
    id: number
    title: string
    author: string
}

const initialBooks: Book[] = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 3, title: '1984', author: 'George Orwell' }
]

function App() {
    const [books, setBooks] = useState<Book[]>(initialBooks)
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    function addBook() {
        if (!title.trim() || !author.trim()) return
        const newBook: Book = { id: Date.now(), title, author }
        setBooks([...books, newBook])
        setTitle('')
        setAuthor('')
    }

    return (
        <div style={{ fontFamily: 'Arial', maxWidth: '500px', margin: '40px auto', padding: '0 20px' }}>
            <h1>Book List</h1>

            <List
                items={books}
                renderItem={(book) => (
                    <div>
                        <strong>{book.title}</strong> — {book.author}
                    </div>
                )}
            />

            <div style={{ marginTop: '30px' }}>
                <h2>Add a Book</h2>
                <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Title"
                    style={{ display: 'block', width: '100%', padding: '8px', marginBottom: '10px', boxSizing: 'border-box', fontSize: '15px' }}
                />
                <input
                    type="text"
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                    placeholder="Author"
                    style={{ display: 'block', width: '100%', padding: '8px', marginBottom: '10px', boxSizing: 'border-box', fontSize: '15px' }}
                />
                <button
                    onClick={addBook}
                    style={{ padding: '8px 20px', fontSize: '15px', cursor: 'pointer' }}
                >
                    Add Book
                </button>
            </div>
        </div>
    )
}

export default App
