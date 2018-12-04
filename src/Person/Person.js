import React from 'react';
import './Person.css';

const person = (props) => {
    console.log(props)
    return (
        <div className="Person" onClick={props.click}>

            <p>{props.name} is {props.age} years old. </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
}

export default person;