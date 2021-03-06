import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../components/hoc/Aux'
import withClass from '../components/hoc/withClass';

import classes from './App.module.css';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: "Lu", age: 25 },
      { id: '2', name: "Manu", age: 29 },
      { id: '3', name: "Stephanie", age: 27 }
    ],
    showPersons: false,
    changeCounter: 0
  };

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
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
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

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
        </div>
      )
    }

    return (
      <Aux >
        <Cockpit
          appTitle={this.props.appTitle}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.switchTogglePersons} />
        {persons}
      </Aux >
    );
  }
}

export default withClass(App, classes.App);
