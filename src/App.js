import React, { Component } from "react";
import logo from "./logo.svg";
import trees from "./tree.jpg";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
  }
  render() {
    let { message } = this.state;

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
          <h1 className='' >Fance</h1>
          <h1 className=''>Fancy</h1>
          <h1 className=''>Fanciest</h1>
        </div>
        <div className="container ">
          <div className="container grid1">
            <div className="box">
              <h1 class="child-title">A</h1>
            </div>
            <div className="box">
              <h1 class="child-title">B</h1>
            </div>
            <div className="box">
              <h1 class="child-title">C</h1>
            </div>
            <div className="box">
              <h1 class="child-title">D</h1>
            </div>
            <div className="box">
              <h1 class="child-title">E</h1>
            </div>
            <div className="box">
              <h1 class="child-title">F</h1>
            </div>
          </div>
          <div className="container grid2">
            <input
              type="text"
              className="test1"
              placeholder='ellipsis example'
              onChange={e => this.setState({ message: e.target.value })}
            />
            <div className="box">
              <h1 className="child-title">{message}</h1>
            </div>
            <input
              type="text"
              className=""
              onChange={e => this.setState({ message: e.target.value })}
            />
            <div className="box">
              <h1 className="child-title">{message}</h1>
            </div>
          </div>
          <div className="container grid1">
            <div className="box">
              <h1 class="child-title">A</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
