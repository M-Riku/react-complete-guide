import React from 'react';
import PropsTypes from 'prop-types';
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

person.propTypes = {
    name: PropsTypes.string,
    age: PropsTypes.number,
    clicked: PropsTypes.func,
    changed: PropsTypes.func
};

export default withClass(person, classes.Person);