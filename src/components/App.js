import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MyRouter from '../router'

import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MyRouter/>
      </BrowserRouter>
    );
  }
}

export default App;
