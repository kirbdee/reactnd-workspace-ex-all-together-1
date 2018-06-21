import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Gamers from './Gamers';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Gamers/>
      </div>
    );
  }
}

export default App;
