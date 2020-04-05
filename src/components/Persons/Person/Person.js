import React from 'react';
import Aux from '../../hoc/Aux'
import withClass from '../../hoc/withClass'

import classes from './Person.module.css'

const person = (props) => {
    return (
        <Aux>
            <p onClick={props.clicked} > I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </Aux>
    )
};

export default withClass(person, classes.Person);