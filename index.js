import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import ToDoList from './ToDoList'
import NewFile from './NewFile'
import FormDemo from './FormDemo'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
      
      <FormDemo/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
