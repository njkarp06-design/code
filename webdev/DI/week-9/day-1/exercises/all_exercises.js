// =====================================
// START: src/quotes.js
// =====================================
const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
    { text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", author: "Mother Teresa" },
    { text: "When you reach the end of your rope, tie a knot in it and hang on.", author: "Franklin D. Roosevelt" },
    { text: "Always remember that you are absolutely unique. Just like everyone else.", author: "Margaret Mead" },
    { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
    { text: "You will face many defeats in life, but never let yourself be defeated.", author: "Maya Angelou" },
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { text: "In the end, it's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln" },
    { text: "Never let the fear of striking out keep you from playing the game.", author: "Babe Ruth" },
    { text: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
    { text: "Many of life's failures are people who did not realize how close they were to success when they gave up.", author: "Thomas A. Edison" },
    { text: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.", author: "Dr. Seuss" },
    { text: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
    { text: "If you look at what you have in life, you'll always have more.", author: "Oprah Winfrey" },
    { text: "If you want to live a happy life, tie it to a goal, not to people or things.", author: "Albert Einstein" }
]

export default quotes
// =====================================
// END: src/quotes.js
// =====================================


// =====================================
// START: src/App.js
// =====================================
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
// =====================================
// END: src/App.js
// =====================================


// =====================================
// START: src/index.js
// =====================================
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
// =====================================
// END: src/index.js
// =====================================
