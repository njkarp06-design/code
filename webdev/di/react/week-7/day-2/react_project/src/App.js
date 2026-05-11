import logo from './logo.svg';
import './App.css';
import Car from './components/Car';
import Phone from './components/Phone';
import Color from './components/Color';
const carinfo = {name: "Ford", model: "Mustang"};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Car carInfo={carinfo} />
        </p>
        <Phone />
        <Color />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
