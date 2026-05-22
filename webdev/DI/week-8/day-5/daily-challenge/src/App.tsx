import { useState } from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store'
import CategorySelector from './components/CategorySelector'
import TaskList from './components/TaskList'

function Tracker() {
    const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null)

    return (
        <div style={{ fontFamily: 'Arial', maxWidth: '700px', margin: '40px auto', padding: '0 20px' }}>
            <h1>Productivity Tracker</h1>
            <CategorySelector selectedId={selectedCategoryId} onSelect={setSelectedCategoryId} />
            <TaskList selectedCategoryId={selectedCategoryId} />
        </div>
    )
}

function App() {
    return (
        <Provider store={store}>
            <Tracker />
        </Provider>
    )
}

export default App
