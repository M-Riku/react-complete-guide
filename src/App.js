import React, { Component } from 'react';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'
import './App.css';

class App extends Component {
  state = {
    username: "Lu",
  };

  userNameChangeHandler = (event) => {
    this.setState(
      { username: event.target.value },
    );
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: 'pointer'
    };

    return (
      <div className="App" >
        <h1>Assignment 1 by lulu</h1>
        <UserOutput username={this.state.username} />
        <UserInput changed={this.userNameChangeHandler} value={this.state.username} />
        <UserOutput style={style} username="mune" />
      </div >
    );
  }
}

export default App;
