import React, { Component } from 'react';
import Timer from './components/timer';
import Todo from './components/todo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="parent-container">
        <Timer />
        <Todo />
      </div>
    );
  }
}

export default App;
