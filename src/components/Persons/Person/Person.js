import React from 'react';
import classes from './Person.module.css';

const person = (props) => {
    return (
        <div className={classes.Person}>
            <p>{props.name} is {props.age} years old. </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
            <button onClick={props.click}>Delete me!</button>
        </div>
    );
}

export default person;