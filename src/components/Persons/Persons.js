import React, { PureComponent } from 'react';
import Person from './Person/Person'


class Persons extends PureComponent {
    constructor( props ) {
        super( props );
        this.lastPersonRef = React.createRef();
    }

    componentDidMount() {
        this.lastPersonRef.current.focusInput();
    }

    render() {
        return this.props.people.map((person, index) => {
            return (
                <Person
                    click={() => {
                        this.props.clicked(person.id)}
                    }
                    ref={this.lastPersonRef}
                    name={person.name}
                    age={person.age}
                    changed={(event) => {this.props.changed(event.target.value, person.id)}}
                    key={person.id}
                ></Person>
            );
        });
    }
}

export default Persons;