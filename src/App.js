import React, { Component } from 'react';
import logo from './logo.svg';
import trees from "./tree.jpg";

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="box_model">
          <p className="filthyCasualP">content</p>
        </div>
        <div className="backgroundImg">hi</div>
        <div className="flex relative">
          <div className="shape blue relative">
            <h1>relative</h1>
          </div>
          <div className="shape red absolute">
            <h1>absolute</h1>
          </div>
          <div className="shape yellow fixed">
            <h1>fixed</h1>
          </div>
          <div className="shapes">
            <div className="shape green sticky">
              <h1>sticky</h1>
            </div>
          </div>
        </div>
        <img src={trees} height="6000" width="100%" />
        <div>
          <h1>Fance</h1>
          <h1>Fancy</h1>
          <h1>Fanciest</h1>
          <div className="backgroundImg">hi</div>
        </div>
      </div>
    );
  }
}

export default App;
