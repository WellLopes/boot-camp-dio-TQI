import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const element = 'Digital Innovation One'
const element2 = <h1>Olá mundo!</h1>

function App2() {
  return (
    <div>
      {element}
      {element2}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App2 />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
