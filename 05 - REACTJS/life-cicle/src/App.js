import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      clock: 1000,
      copo: 'água'
    }
  }
  
  componentDidMount() {
    window.setTimeout(() => {
      
      this.setState({
        copo: 'suco'
      })
    
    },5000)
  }

  // this is a bad practice update this directly
  alterarCopo = () => {
    this.setState({
      copo: 'refrigerante'
    })
  }

  render() {
    const { clock , copo } = this.state
    return(
      <div>
        <h1>{clock}</h1>
        <button onClick={() => this.alterarCopo()}>{copo}</button>
      </div>
    ) 

  }
}


export default App;
