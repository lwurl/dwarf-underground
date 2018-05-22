import React, { Component } from 'react';
//import logo from './logo.svg';
import Header from './Header';
import Article from './Article';
import Ad from './Ad';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Article />
        <Ad />
      </div>
    );
  }
}

export default App;
