import { useState } from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store'
import Calendar from './components/Calendar'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'

function Planner() {
    const today = new Date().toISOString().split('T')[0]
    const [selectedDay, setSelectedDay] = useState(today)

    return (
        <div style={{ fontFamily: 'Arial', maxWidth: '650px', margin: '40px auto', padding: '0 20px' }}>
            <h1>Daily Planner</h1>
            <Calendar selectedDay={selectedDay} onSelectDay={setSelectedDay} />
            <h2>Tasks for {selectedDay}</h2>
            <AddTask selectedDay={selectedDay} />
            <TaskList selectedDay={selectedDay} />
        </div>
    )
}

function App() {
    return (
        <Provider store={store}>
            <Planner />
        </Provider>
    )
}

export default App
