import React from 'react';
import './Person.css';
import Radium from 'radium'

const person = (props) => {
    console.log(props)
    return (
        <div className="Person" >
            <p>{props.name} is {props.age} years old. </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
            <button onClick={props.click}>Delete me!</button>
        </div>
    );
}

export default Radium(person);