// =====================================
// START: src/components/greeting.tsx
// =====================================
interface GreetingProps {
  name: string
  messageCount: number
}

function Greeting({ name, messageCount }: GreetingProps) {
  return (
    <div style={{ padding: '12px', background: '#f0f4ff', borderRadius: '6px', marginBottom: '12px' }}>
      <h2>Hello, {name}!</h2>
      <p>You have {messageCount} new message{messageCount !== 1 ? 's' : ''}.</p>
    </div>
  )
}

export default Greeting
// =====================================
// END: src/components/greeting.tsx
// =====================================


// =====================================
// START: src/components/counter.tsx
// =====================================
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  const [lastAction, setLastAction] = useState('None')

  const increment = () => {
    setCount(count + 1)
    setLastAction('Incremented')
  }

  const decrement = () => {
    setCount(count - 1)
    setLastAction('Decremented')
  }

  return (
    <div style={{ padding: '12px', border: '2px solid #ddd', borderRadius: '6px', marginBottom: '12px' }}>
      <h2>Counter</h2>
      <p>Count: <strong>{count}</strong></p>
      <p>Last action: {lastAction}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment} style={{ marginLeft: '8px' }}>+</button>
    </div>
  )
}

export default Counter
// =====================================
// END: src/components/counter.tsx
// =====================================


// =====================================
// START: src/components/usercard.tsx
// =====================================
interface UserCardProps {
  name?: string
  age?: number
  role?: string
}

function UserCard({ name = 'Unknown User', age, role = 'No role assigned' }: UserCardProps) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <h3>{name}</h3>
      <p>Age: {age !== undefined ? age : 'N/A'}</p>
      <p>Role: {role}</p>
    </div>
  )
}

export default UserCard
// =====================================
// END: src/components/usercard.tsx
// =====================================


// =====================================
// START: src/components/userlist.tsx
// =====================================
import { useState, useEffect } from 'react'

interface User {
  id: number
  name: string
  email: string
  phone: string
  website: string
}

function UserList() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch users')
        return res.json()
      })
      .then((data: User[]) => {
        setUsers(data)
        setLoading(false)
      })
      .catch((err: Error) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div>
      <h2>Users</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {users.map(user => (
          <li key={user.id} style={{ borderBottom: '1px solid #eee', paddingBottom: '8px', marginBottom: '8px' }}>
            <strong>{user.name}</strong> — {user.email}
            <br />
            <small>{user.phone} | {user.website}</small>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
// =====================================
// END: src/components/userlist.tsx
// =====================================


// =====================================
// START: src/app.tsx
// =====================================
import './app.css'
import Greeting from './components/greeting'
import Counter from './components/counter'
import UserCard from './components/usercard'
import UserList from './components/userlist'

function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '0 16px' }}>
      <h1>Day 2 Exercises</h1>

      <Greeting name="Alice" messageCount={5} />
      <Greeting name="Bob" messageCount={1} />

      <Counter />

      <UserCard name="Jane Doe" age={28} role="Frontend Developer" />
      <UserCard name="John" role="Designer" />
      <UserCard />

      <UserList />
    </div>
  )
}

export default App
// =====================================
// END: src/app.tsx
// =====================================


// =====================================
// START: src/main.tsx
// =====================================
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// =====================================
// END: src/main.tsx
// =====================================
