import React, { Component } from 'react';
import Person from './Person/Person'

import classes from './App.module.css';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: "Lu", age: 25 },
      { id: '2', name: "Manu", age: 29 },
      { id: '3', name: "Stephanie", age: 27 }
    ],
    showPersons: false
  }

  switchTogglePersons = () => {
    const showPersonsState = this.state.showPersons;
    this.setState({
      showPersons: !showPersonsState
    });
  }

  nameChangedHandler = (event, personsId) => {
    const personsIndex = this.state.persons.findIndex(p => {
      return p.id === personsId;
    });

    const person = {
      ...this.state.persons[personsIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personsIndex] = person;
    this.setState({ persons: persons });
  }

  deletePersonHandler = (personsIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personsIndex, 1);
    this.setState({
      persons: persons
    });
  }

  render() {
    let persons = null;
    let btnClasses = [classes.Button];

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              key={person.id}
              name={person.name}
              age={person.age} />
          })}
        </div>
      )

      btnClasses.push(classes.Red);
    }

    const pClasses = [];
    if (this.state.persons.length <= 2) {
      pClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      pClasses.push(classes.bold);
    }

    return (
      <div className={classes.App} >
        <h1> Hi, I'm a react APP!</h1>
        <p className={pClasses.join(" ")}>This is really working!</p>
        <button className={btnClasses.join(" ")} onClick={this.switchTogglePersons}>Toggle Persons</button>
        {persons}
      </div >
    );
  }
}

export default App;
