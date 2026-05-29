import { Provider } from 'react-redux'
import { store } from './store/store'
import AgeDisplay from './components/AgeDisplay'
import AgeControls from './components/AgeControls'

function AgeTracker() {
    return (
        <div style={{ fontFamily: 'Arial', maxWidth: '400px', margin: '80px auto', padding: '40px', border: '1px solid #ddd', borderRadius: '12px', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '30px' }}>Age Tracker</h2>
            <AgeDisplay />
            <AgeControls />
        </div>
    )
}

function App() {
    return (
        <Provider store={store}>
            <AgeTracker />
        </Provider>
    )
}

export default App
