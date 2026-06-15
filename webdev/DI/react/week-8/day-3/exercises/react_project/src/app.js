import React from 'react';
import ErrorBoundary from './errorboundary';
import './app.css';
import DailyChallenge from './dailychallenge';

// ─── Exercise 1 ────────────────────────────────────────────────────────────────

class BuggyCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({ counter }) => ({ counter: counter + 1 }));
  }

  render() {
    if (this.state.counter === 5) {
      throw new Error('I crashed!');
    }
    return (
      <h2
        onClick={this.handleClick}
        style={{ cursor: 'pointer', display: 'inline-block', userSelect: 'none' }}
        title="Click to increment"
      >
        {this.state.counter}
      </h2>
    );
  }
}

// ─── Exercise 3 – Child ────────────────────────────────────────────────────────

class Child extends React.Component {
  componentWillUnmount() {
    alert('The component named Child is unmounted.');
  }

  render() {
    return <h1>Hello World!</h1>;
  }
}

// ─── Exercise 2 + 3 – FavoriteColor ───────────────────────────────────────────

class FavoriteColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: 'red',
      show: true,
    };
    this.deleteChild = this.deleteChild.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: 'yellow' });
    }, 1000);
  }

  shouldComponentUpdate() {
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('in getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('after update');
  }

  deleteChild() {
    this.setState({ show: false });
  }

  render() {
    return (
      <div>
        <p>
          My favorite color is{' '}
          <span style={{ fontWeight: 'bold', color: this.state.favoriteColor === 'red' ? 'red' : 'goldenrod' }}>
            {this.state.favoriteColor}
          </span>
        </p>

        {this.state.show && <Child />}

        <button onClick={this.deleteChild}>Delete</button>
      </div>
    );
  }
}

// ─── App ───────────────────────────────────────────────────────────────────────

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '700px', margin: '30px auto', padding: '0 20px' }}>

      {/* ── Exercise 1 ── */}
      <h1>Exercise 1: Error Boundary Simulation</h1>
      <p style={{ color: '#555' }}>Click on a counter to increment it. When it reaches 5 it crashes.</p>

      <h2>Simulation 1 – two counters, one ErrorBoundary</h2>
      <p style={{ fontSize: '0.9em', color: '#666' }}>
        If one crashes, the boundary replaces both.
      </p>
      <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '6px', marginBottom: '20px' }}>
        <ErrorBoundary>
          <BuggyCounter />
          &nbsp;&nbsp;
          <BuggyCounter />
        </ErrorBoundary>
      </div>

      <h2>Simulation 2 – each counter in its own ErrorBoundary</h2>
      <p style={{ fontSize: '0.9em', color: '#666' }}>
        If one crashes, the other keeps working.
      </p>
      <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '6px', marginBottom: '20px', display: 'flex', gap: '20px' }}>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
      </div>

      <h2>Simulation 3 – no ErrorBoundary</h2>
      <p style={{ fontSize: '0.9em', color: '#666' }}>
        When it crashes, the whole app goes down.
      </p>
      <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '6px', marginBottom: '40px' }}>
        <BuggyCounter />
      </div>

      <hr />

      {/* ── Exercise 2 + 3 ── */}
      <h1>Exercise 2 &amp; 3: Lifecycle</h1>
      <p style={{ fontSize: '0.9em', color: '#666' }}>
        On mount the color is <strong>red</strong>. After 1 second a timer updates it to <strong>yellow</strong>.
        Check the console for lifecycle logs. Click Delete to unmount the Child component.
      </p>
      <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '6px' }}>
        <FavoriteColor />
      </div>

    <hr />
      <DailyChallenge />
    </div>
  );
}

export default App;
