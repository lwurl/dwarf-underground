import React, { Component } from 'react';
//import logo from './logo.svg';
import Header from './Header';
import ArticleInfo from './ArticleInfo'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ArticleInfo />
      </div>
    );
  }
}

export default App;
