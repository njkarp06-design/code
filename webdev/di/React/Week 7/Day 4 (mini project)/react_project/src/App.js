import React from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';
import ThemeToggle from './ThemeToggle';
import CharacterCounter from './CharacterCounter';
import './App.css';

const themeStyles = {
  light: {
    pageBg: '#f9f9f9',
    text: '#222',
    subText: '#555',
    cardBg: '#fff',
    border: '1px solid #ddd',
    divider: '#ddd',
    codeColor: '#c0392b',
  },
  dark: {
    pageBg: '#1e1e2e',
    text: '#e0e0e0',
    subText: '#aaa',
    cardBg: '#2a2a3e',
    border: '1px solid #444',
    divider: '#444',
    codeColor: '#e07b54',
  },
};

// ─── Page content lives inside the provider so it can read the theme ──────────

function PageContent() {
  const { theme } = useTheme();
  const s = themeStyles[theme];

  return (
    <div
      style={{
        minHeight: '100vh',
        background: s.pageBg,
        color: s.text,
        fontFamily: 'sans-serif',
        transition: 'background 0.3s, color 0.3s',
      }}
    >
      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '30px 20px' }}>
        <h1>Week 7 – Day 4 Mini Project</h1>

        {/* ── Exercise 1 ── */}
        <h2>Exercise 1: Theme Switcher</h2>
        <p style={{ color: s.subText }}>
          Uses <code style={{ color: s.codeColor }}>useContext</code> and{' '}
          <code style={{ color: s.codeColor }}>useState</code> to manage the current
          theme. Any component inside the provider can read and change it.
        </p>
        <p style={{ color: s.subText }}>
          Current theme: <strong>{theme}</strong>
        </p>

        <div
          style={{
            padding: '20px',
            border: s.border,
            borderRadius: '8px',
            background: s.cardBg,
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
          }}
        >
          <span>Toggle the theme:</span>
          <ThemeToggle />
        </div>

        <hr style={{ borderColor: s.divider, margin: '40px 0' }} />

        {/* ── Exercise 2 ── */}
        <h2>Exercise 2: Character Counter</h2>
        <p style={{ color: s.subText }}>
          Uses <code style={{ color: s.codeColor }}>useRef</code> to hold a reference
          to the input element. The handler reads{' '}
          <code style={{ color: s.codeColor }}>inputRef.current.value.length</code>{' '}
          on every keystroke to keep the counter in sync.
        </p>

        <div
          style={{
            padding: '20px',
            border: s.border,
            borderRadius: '8px',
            background: s.cardBg,
          }}
        >
          <CharacterCounter theme={theme} />
        </div>
      </div>
    </div>
  );
}

// ─── App wraps everything in the ThemeProvider ────────────────────────────────

function App() {
  return (
    <ThemeProvider>
      <PageContent />
    </ThemeProvider>
  );
}

export default App;
