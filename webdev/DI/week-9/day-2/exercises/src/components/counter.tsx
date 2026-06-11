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
