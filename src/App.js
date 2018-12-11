import React, { Component } from 'react';
import Radium from 'radium';
import './App.css';
import Person from './Person/Person'

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
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
        }
        const show_style = {
            backgroundColor: 'green',
            font: 'inherit',
            border: '1px solid blue',
            color: 'white',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        }
        let people_elements = null;
        if (this.state.show_people) {
            const people = this.state.flip_list ? [...this.state.people].reverse() : this.state.people;
            people_elements = (
                <div>
                    {
                        people.map((person, index) => {
                            return (
                                <Person
                                    click={() => {this.deletePersonHandler(person.id)}}
                                    name={person.name}
                                    age={person.age}
                                    changed={(event) => {this.nameChangedHandler(event.target.value, person.id)}}
                                    key={person.id}
                                ></Person>
                            );
                        })
                    }
                </div>                
            )
        }

        let classes = []
        if (this.state.people.length < 3) {
            classes.push('red')
        }
        if (this.state.people.length < 2) {
            classes.push('bold')
        }
        classes = classes.join(' ')

        if (this.state.show_people) {
            show_style.backgroundColor = 'red'
            show_style[':hover'].backgroundColor = 'salmon'
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React app</h1>
                <p className={classes}>This is really working!</p>
                <button
                    style={style}
                    onClick={this.flipList}>Flip list
                </button>
                <button
                    style={show_style}
                    onClick={this.togglePeopleHandler}>{this.state.show_people ? "Hide People": "Show People"}
                </button>
                {people_elements}
            </div>
        );
    }
}

export default Radium(App);
