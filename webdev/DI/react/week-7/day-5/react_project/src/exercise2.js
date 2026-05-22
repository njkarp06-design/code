import { useRef, useState } from 'react'

function CharacterCounter() {
    const inputRef = useRef(null)
    const [count, setCount] = useState(0)

    function handleInput() {
        setCount(inputRef.current.value.length)
    }

    return (
        <div style={{ marginTop: '40px' }}>
            <h2>Character Counter</h2>
            <input
                ref={inputRef}
                type="text"
                onInput={handleInput}
                placeholder="Type something..."
                style={{ padding: '8px', fontSize: '16px', width: '300px' }}
            />
            <p>Characters typed: <strong>{count}</strong></p>
        </div>
    )
}

export default CharacterCounter
