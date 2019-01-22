import React from 'react';
import Person from './Person/Person'


const Persons = (props) => {
    return props.people.map((person, index) => {
        return (
            <Person
                click={() => {
                    props.clicked(person.id)}
                }
                name={person.name}
                age={person.age}
                changed={(event) => {props.changed(event.target.value, person.id)}}
                key={person.id}
            ></Person>
        );
    });
}

export default Persons;