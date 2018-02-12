import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import data from './data';
import logo from './ralphie.JPG';
import index from './index';

class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.items && this.props.items.map((item, index) =>
          <p key={index}>{item}</p>
        )}
      </div>
    )
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = { inputBox: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ inputBox: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <input type='text' onChange={this.handleChange} />

        <List items={this.state.inputBox && data.filter( word => word.includes(this.state.inputBox)).slice(0,11)} />

        <header className="App-header">

          <img src={logo} className="App-logo" alt="logo"></img>

          <h1 className="App-title">This is Auto-Complete</h1>

        </header>

      <p className = "App-intro">
        <div id='root'></div >
      </p>

        <input type='text' onChange={this.handleChange} />

        <List items={this.state.inputBox && data.filter( word => word.includes(this.state.inputBox)).slice(0,11)} />

      </div>
    );
  }
}

export default App;
