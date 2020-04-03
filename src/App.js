import React, { useState } from 'react';
import Person from './Person/Person'
import './App.css';

const App = () => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Lu", age: 25 }
    ]
  });

  const [otherState,] = useState(
    "other state"
  );

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: "Lu", age: 18 }
      ]
    });
  };

  console.log(otherState);

  return (
    <div className="App" >
      <h1> Hi, world!</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
    </div>
  );
};

export default App;
