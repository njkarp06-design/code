import { ThemeProvider } from './themecontext'
import ThemedBox from './exercise1'
import CharacterCounter from './exercise2'

function App() {
    return (
        <ThemeProvider>
            <div style={{ fontFamily: 'Arial', maxWidth: '600px', margin: '40px auto', padding: '0 20px' }}>
                <h1>Exercise 1: Theme Switcher</h1>
                <ThemedBox />

                <h1 style={{ marginTop: '60px' }}>Exercise 2: Character Counter</h1>
                <CharacterCounter />
            </div>
        </ThemeProvider>
    )
}

export default App
