import React from 'react'

import classes from './Cockpit.module.css'

const cockpit = (props) => {
    const pClasses = [];
    let btnClasses = "";

    if (props.persons.length <= 2) {
        pClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        pClasses.push(classes.bold);
    }

    if (props.showPersons) {
        btnClasses = classes.Red;
    }

    return (
        <div className={classes.Cockpit}>
            <h1> {props.appTitle}</h1>
            <p className={pClasses.join(" ")}>This is really working!</p>
            <button className={btnClasses} onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;