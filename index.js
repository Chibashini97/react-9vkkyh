import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import ToDoList from './ToDoList'

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
       <ToDoList/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
