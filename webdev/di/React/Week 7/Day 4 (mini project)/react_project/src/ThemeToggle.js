import React from 'react';
import { useTheme } from './ThemeContext';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const btnStyle = {
    padding: '8px 18px',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '0.9rem',
    background: theme === 'light' ? '#222' : '#e0e0e0',
    color: theme === 'light' ? '#fff' : '#222',
    transition: 'background 0.3s, color 0.3s',
  };

  return (
    <button onClick={toggleTheme} style={btnStyle}>
      {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
  );
}

export default ThemeToggle;
