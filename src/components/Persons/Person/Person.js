import React, { Component } from 'react';
import classes from './Person.module.css';
import Aux from '../../../hoc/aux'
import withClass from '../../../hoc/withClass'
import PropTypes from 'prop-types';


class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElement = React.createRef()
    }

    focusInput() {
        this.inputElement.current.focus();
    }

    render() {
        return (
            <Aux>
                <p>{this.props.name} is {this.props.age} years old. </p>
                <p>{this.props.children}</p>
                <input
                    ref={this.inputElement}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
                <button onClick={this.props.click}>Delete me!</button>
            </Aux>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person);