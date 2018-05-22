import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <body>
        <Header />
        <Main />
        <Footer />
      </body>
    );
  }
}

export default App;
