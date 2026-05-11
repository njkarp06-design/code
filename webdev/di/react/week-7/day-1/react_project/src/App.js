import logo from './logo.svg';
import './App.css';
import UserFavoriteAnimals from './UserFavoriteAnimals';
import Exercise from './Exercise3';
const myelement = <h1>"I love JSX!"</h1>;
const sum = 5 + 5; 
const multipleElement = <p>"React is {sum} times better with JSX"</p>;
const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <p>"Hello World!"</p>
          {myelement}
          {multipleElement}
          <h3>{user.firstName} {user.lastName}</h3>
       </p>
        <UserFavoriteAnimals favAnimals={user.favAnimals} />
        <Exercise />
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
