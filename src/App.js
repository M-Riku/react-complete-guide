import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: "Lu", age: 25 }
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: "Lu", age: 18 }
      ]
    });
  }

  render() {
    return (
      <div className="App" >
        <h1> Hi, world!</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
      </div>
    );
  }
}

export default App;
