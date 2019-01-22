import React, { Component } from 'react';
import classes from './App.module.css';
import Person from './Person/Person'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

class App extends Component {

    state = {
        people: [
            {id: 1, name: "Jean-François", age: 38},
            {id: 2, name: "Marie-Josée", age: 37},
            {id: 3, name: "Lucas", age: 6},
            {id: 4, name: "Noémie", age: 37}
        ],
        show_people: false,
        flip_list: false
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

    render() {
        let people_elements = null;

        let btnClass = classes.Person;

        if (this.state.show_people) {
            const people = this.state.flip_list ? [...this.state.people].reverse() : this.state.people;
            people_elements = (
                <div>
                    {
                        people.map((person, index) => {
                            return (
                                <ErrorBoundary key={person.id}>
                                    <Person
                                        click={() => {this.deletePersonHandler(person.id)}}
                                        name={person.name}
                                        age={person.age}
                                        changed={(event) => {this.nameChangedHandler(event.target.value, person.id)}}
                                    ></Person>
                                </ErrorBoundary>
                            );
                        })
                    }
                </div>                
            )
            btnClass = classes.RedPerson;
        }

        let text_classes = []
        if (this.state.people.length < 3) {
            text_classes.push(classes.red)
        }
        if (this.state.people.length < 2) {
            text_classes.push(classes.bold)
        }
        text_classes = text_classes.join(' ')


        return (
            <div className={classes.App}>
                <h1>Hi, I'm a React app</h1>
                <p className={classes.FlipButton}>This is really working!</p>
                <button
                    onClick={this.flipList}>Flip list
                </button>
                <button
                    className={btnClass}
                    onClick={this.togglePeopleHandler}>{this.state.show_people ? "Hide People": "Show People"}
                </button>
                {people_elements}
            </div>
        );
    }
}

export default App;
