import { useState } from 'react'
import quotes from './quotes'
import './App.css'

const colors = ['#16213e', '#0f3460', '#1b4332', '#4a1942', '#1d3557', '#3d405b']

function App() {
  const [index, setIndex] = useState(0)
  const [color, setColor] = useState(colors[0])

  function handleNewQuote() {
    let newIndex = Math.floor(Math.random() * quotes.length)
    while (newIndex === index) {
      newIndex = Math.floor(Math.random() * quotes.length)
    }

    let newColor = colors[Math.floor(Math.random() * colors.length)]
    while (newColor === color) {
      newColor = colors[Math.floor(Math.random() * colors.length)]
    }

    setIndex(newIndex)
    setColor(newColor)
  }

  const currentQuote = quotes[index]

  return (
    <div className="page" style={{ backgroundColor: color }}>
      <div className="card">
        <h1 className="quote" style={{ color: color }}>
          "{currentQuote.quote}"
        </h1>
        <p className="author">- {currentQuote.author}</p>
        <button
          className="btn"
          style={{ backgroundColor: color }}
          onClick={handleNewQuote}
        >
          New Quote
        </button>
      </div>
    </div>
  )
}

export default App
