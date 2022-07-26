import logo from './logo.svg';
import './App.css';

function sum (a, b) {
  return a + b
}

function primerioJSX() {
  return (
    <div class="teste">
      Well Lopes - First React APP
      <h1>Soma: {sum(10, 20)}</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {primerioJSX()}
        </p>
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
