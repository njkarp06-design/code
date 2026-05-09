import './App.css'
import Greeting from './components/Greeting'
import Counter from './components/Counter'
import UserCard from './components/UserCard'
import UserList from './components/UserList'

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
