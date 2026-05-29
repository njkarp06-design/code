import { useState } from 'react'
import quotes from './quotes'

const bgColors = ['#16213e', '#0f3460', '#533483', '#1b4332', '#6d3b3b', '#1a1a2e', '#2d6a4f', '#3a0ca3', '#7b2d8b', '#c0392b']
const quoteColors = ['#f1c40f', '#e74c3c', '#1abc9c', '#3498db', '#9b59b6', '#e67e22', '#2ecc71', '#e91e63', '#00bcd4', '#ff5722']
const btnColors = ['#e94560', '#f77f00', '#2196f3', '#4caf50', '#9c27b0', '#ff5722', '#00bcd4', '#8bc34a', '#ff9800', '#e91e63']

function App() {
    const [index, setIndex] = useState(0)
    const [bgColor, setBgColor] = useState(bgColors[0])
    const [quoteColor, setQuoteColor] = useState(quoteColors[0])
    const [btnColor, setBtnColor] = useState(btnColors[0])

    function newQuote() {
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * quotes.length)
        } while (newIndex === index)

        setIndex(newIndex)
        setBgColor(bgColors[Math.floor(Math.random() * bgColors.length)])
        setQuoteColor(quoteColors[Math.floor(Math.random() * quoteColors.length)])
        setBtnColor(btnColors[Math.floor(Math.random() * btnColors.length)])
    }

    return (
        <div style={{
            background: bgColor,
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.5s',
            padding: '20px'
        }}>
            <div style={{
                maxWidth: '600px',
                width: '100%',
                textAlign: 'center',
                padding: '40px',
                borderRadius: '12px',
                background: 'rgba(255,255,255,0.05)'
            }}>
                <h1 style={{ color: quoteColor, fontSize: '24px', lineHeight: '1.5', marginBottom: '20px', transition: 'color 0.5s' }}>
                    "{quotes[index].text}"
                </h1>
                <p style={{ color: '#ffffff', fontSize: '18px', marginBottom: '40px' }}>
                    - {quotes[index].author}
                </p>
                <button
                    onClick={newQuote}
                    style={{
                        background: btnColor,
                        color: '#fff',
                        border: 'none',
                        padding: '12px 30px',
                        fontSize: '16px',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        transition: 'background 0.5s'
                    }}
                >
                    New Quote
                </button>
            </div>
        </div>
    )
}

export default App
