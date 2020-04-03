import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: "Lu", age: 25 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 27 }
    ]
  }

  switchNameHandler = (newname) => {
    this.setState({
      persons: [
        { name: newname, age: 25 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 27 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Lu", age: 25 },
        { name: event.target.value, age: 29 },
        { name: "Stephanie", age: 27 }
      ]
    });
  }

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
        <h1> Hi, world!</h1>
        <p>This is really working!</p>
        <button style={style} onClick={() => this.switchNameHandler("lulu")}>Switch Name</button>
        <Person
          click={this.switchNameHandler.bind(this, "lu")}
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} >
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}>
          My Hobby: Racing!
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}>
        </Person>
      </div >
    );
  }
}

export default App;
