import logo from './logo.svg';
import './App.css';
import Button from './Button'
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';

const soma = (a,b) => {
  alert (a + b)
}

function App() {
  
  return (
    <div className="App">
      Hello World!
      <Button onClick={() => soma(10, 20)} name='Well Lopes'/>
      <ComponentA>
        <ComponentB>
          <Button onClick={() => soma(40, 25)} name='Kelly Lopes'/>
        </ComponentB>
      </ComponentA>
    </div>
  );
}

export default App;
