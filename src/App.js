import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
import Welcome from './components/welcome';
import Greet from './components/Greet';
import Counter from './components/Counter';

//function App() {
  class App extends Component {
    render () {
      return (
        <div className="App">
       
        <Welcome name="Hamdy" /> 
        <Greet  name="Folly"/>
        <Counter />
        
        </div>
      );
    }
 
}

export default App;
