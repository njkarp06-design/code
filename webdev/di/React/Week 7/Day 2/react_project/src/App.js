import logo from './logo.svg';
import './App.css';
import Car from './Components/Car';
import Phone from './Components/Phone';
import Color from './Components/Color';
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
