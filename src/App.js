import React, { Component } from 'react';
import ErrorBoundary from './components/error';
import Timer from './components/timer';
import Todo from './components/todo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="parent-container">
        <ErrorBoundary>
          <Timer />
          <Todo />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
