import { useTheme } from './themecontext'

function ThemeSwitcher() {
    const { theme, toggleTheme } = useTheme()

    return (
        <button onClick={toggleTheme} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
    )
}

function ThemedBox() {
    const { theme } = useTheme()

    const styles = {
        background: theme === 'light' ? '#ffffff' : '#222222',
        color: theme === 'light' ? '#000000' : '#ffffff',
        padding: '30px',
        borderRadius: '8px',
        border: '1px solid #ccc',
        marginTop: '20px'
    }

    return (
        <div style={styles}>
            <p>Current theme: <strong>{theme}</strong></p>
            <p>This box changes style based on the active theme.</p>
            <ThemeSwitcher />
        </div>
    )
}

export default ThemedBox
