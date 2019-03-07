import React, { Component } from 'react';
// import Gun from 'gun/gun'
import Todos from './Todos'
import Sign from './Sign'
import Chat from './Chat'
import Json from './Json'
import logo from './logo.svg';
import './App.css';
import Entity from './Entity';

class App extends Component {
  constructor() {
    super();
     console.log("dbg", 'origin=' + window.location.origin + ". port=" + window.location.port);

    var newloc = window.location.origin;
    if (window.location.port !== '8765') {
      newloc = window.location.protocol + "//" 
        + window.location.hostname 
        + (window.location.port ? ':' + '8765' : '');
    }

    // console.log("dbg", 'origin=' + newloc + ". port=" + window.location.port);
    // this.gun = Gun(newloc + '/gun')
    // this.gun = Gun('http://localhost:8765' + '/gun')
    this.entity = new Entity(newloc + '/gun');

  }
  render() {
   console.log("dbg", 'render in APP');
  return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <h2>Sign</h2>
        <Sign entity={this.entity} />
        <br />

        
        <hr />
        <h2>Chat</h2>
        <Chat entity={this.entity} />
        <br />
        <hr />
        {/* <h2>Json</h2>
        <Json gun={this.gun} /> */}
      </div>
    );
  }
}

export default App;
