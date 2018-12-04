import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

    state = {
        people: [
            {name: "Jean-François", age: 38},
            {name: "Marie-Josée", age: 37},
            {name: "Lucas", age: 6},
            {name: "Noémie", age: 37}
        ]
    }

    switchNameHandler = (name) => {
        // console.log("Was clicked!");
        // this.state.people[0].name = "JF";
        let people = [...this.state.people];
        people[0] = {...people[0]};
        people[0].name = name;
        this.setState({people: people});
    }

    nameChangedHandler = (event) => {
        console.log("Named chnage");
        this.setState({
            people: [
                {name: "Jean-François", age: 38},
                {name: event.target.value, age: 37},
                {name: "Lucas", age: 6},
                {name: "Noémie", age: 37}
            ]
        })   
    }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }
        return (
            <div className="App">
                <h1>Hi, I'm a React app</h1>
                <p>This is really working!</p>
                <button
                    style={style}
                    onClick={() => this.switchNameHandler("JF")}>Switch name
                </button>
                <Person 
                    name={this.state.people[0].name}
                    age={this.state.people[0].age}
                    click={this.switchNameHandler.bind(this, "Jean-François")}
                    changed={this.nameChangedHandler}
                >
                    My Hobbies: Videogames
                </Person>
                <Person 
                    name={this.state.people[1].name}
                    age={this.state.people[1].age}
                    click={this.switchNameHandler}
                    changed={this.nameChangedHandler}/>
                <Person 
                    name={this.state.people[2].name}
                    age={this.state.people[2].age}
                    click={this.switchNameHandler}
                    changed={this.nameChangedHandler}/>
                <Person
                    name={this.state.people[3].name}
                    age={this.state.people[3].age}
                    click={this.switchNameHandler}
                    changed={this.nameChangedHandler}/>
            </div>
        );
    }
}

export default App;
