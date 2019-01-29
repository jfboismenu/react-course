import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../hoc/withClass'
import Aux from '../hoc/aux'

export const AuthContext = React.createContext(false)

class App extends Component {

    state = {
        people: [
            {id: 1, name: "Jean-François", age: 38},
            {id: 2, name: "Marie-Josée", age: 37},
            {id: 3, name: "Lucas", age: 6},
            {id: 4, name: "Noémie", age: 37}
        ],
        show_people: false,
        flip_list: false,
        authenticated: false
    }

    flipList = () => {
        this.setState({flip_list: !this.state.flip_list})
    }

    findPersonIndexById = (id) => {
        return this.state.people.findIndex((person) => {
            return person.id === id
        });
    }

    nameChangedHandler = (name, id) => {
        const index = this.findPersonIndexById(id);

        const person = {...this.state.people[index]}
        person.name = name;

        const people = [...this.state.people];
        people[index] = person;

        this.setState({people: people});
    }

    togglePeopleHandler = () => {
        this.setState({
            show_people: !this.state["show_people"]
        })
    }

    deletePersonHandler = (id) => {
        const index = this.findPersonIndexById(id);
        const people = [...this.state.people]
        people.splice(index, 1)
        this.setState({people: people})
    }

    loginHandler = () => {
        this.setState( prevState => {return { authenticated: !prevState.authenticated }} );
    }


    render() {
        let persons = null;


        if (this.state.show_people) {
            const people = this.state.flip_list ? [...this.state.people].reverse() : this.state.people;
            persons = <Persons
                        people={people}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler}/>
        }
        return (
            <Aux>
                <Cockpit
                    people={this.state.people}
                    show_people={this.state.show_people}
                    flip_clicked={this.flipList}
                    login={this.loginHandler}
                    toggle_clicked={this.togglePeopleHandler}
                />
                <AuthContext.Provider value={this.state.authenticated}>
                    {persons}
                </AuthContext.Provider>
            </Aux>
        );
    }
}

export default withClass(App, classes.App);
