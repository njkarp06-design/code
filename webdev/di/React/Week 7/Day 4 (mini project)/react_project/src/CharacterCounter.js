import React, { useRef, useState } from 'react';

function CharacterCounter({ theme }) {
  const inputRef = useRef(null);
  const [count, setCount] = useState(0);

  function handleInput() {
    setCount(inputRef.current.value.length);
  }

  const inputStyle = {
    padding: '8px 12px',
    fontSize: '1rem',
    width: '100%',
    borderRadius: '4px',
    outline: 'none',
    border: theme === 'dark' ? '1px solid #555' : '1px solid #ccc',
    background: theme === 'dark' ? '#333' : '#fff',
    color: theme === 'dark' ? '#e0e0e0' : '#222',
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        onInput={handleInput}
        placeholder="Type something..."
        style={inputStyle}
      />
      <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>
        Characters typed: <strong>{count}</strong>
      </p>
    </div>
  );
}

export default CharacterCounter;
