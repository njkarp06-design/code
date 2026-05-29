import { useState } from 'react'

function App() {
    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [operation, setOperation] = useState('add')
    const [result, setResult] = useState(null)

    function calculate() {
        const a = parseFloat(num1)
        const b = parseFloat(num2)

        if (isNaN(a) || isNaN(b)) return

        if (operation === 'add') setResult(a + b)
        if (operation === 'subtract') setResult(a - b)
        if (operation === 'multiply') setResult(a * b)
        if (operation === 'divide') setResult(b === 0 ? 'Cannot divide by zero' : a / b)
    }

    const operationLabels = {
        add: '+',
        subtract: '-',
        multiply: '×',
        divide: '÷'
    }

    return (
        <div style={{ fontFamily: 'Arial', maxWidth: '400px', margin: '60px auto', padding: '30px', border: '1px solid #ddd', borderRadius: '10px' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Calculator</h1>

            <div style={{ marginBottom: '15px' }}>
                <input
                    type="number"
                    value={num1}
                    onChange={e => setNum1(e.target.value)}
                    placeholder="First number"
                    style={{ width: '100%', padding: '10px', fontSize: '16px', boxSizing: 'border-box' }}
                />
            </div>

            <div style={{ marginBottom: '15px' }}>
                <select
                    value={operation}
                    onChange={e => setOperation(e.target.value)}
                    style={{ width: '100%', padding: '10px', fontSize: '16px' }}
                >
                    <option value="add">Addition (+)</option>
                    <option value="subtract">Subtraction (-)</option>
                    <option value="multiply">Multiplication (×)</option>
                    <option value="divide">Division (÷)</option>
                </select>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <input
                    type="number"
                    value={num2}
                    onChange={e => setNum2(e.target.value)}
                    placeholder="Second number"
                    style={{ width: '100%', padding: '10px', fontSize: '16px', boxSizing: 'border-box' }}
                />
            </div>

            <button
                onClick={calculate}
                style={{ width: '100%', padding: '12px', fontSize: '16px', background: '#3498db', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
            >
                Add Them
            </button>

            {result !== null && (
                <p style={{ textAlign: 'center', fontSize: '22px', marginTop: '20px' }}>
                    {num1} {operationLabels[operation]} {num2} = <strong>{result}</strong>
                </p>
            )}
        </div>
    )
}

export default App
