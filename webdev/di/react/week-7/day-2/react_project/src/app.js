import logo from './logo.svg';
import './app.css';
import Car from './components/car';
import Phone from './components/phone';
import Color from './components/color';
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
