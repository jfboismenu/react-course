import React from 'react'
import classes from './Cockpit.module.css';

const Cockpit = (props) => {

    let text_classes = []
    if (props.people.length < 3) {
        text_classes.push(classes.red)
    }
    if (props.people.length < 2) {
        text_classes.push(classes.bold)
    }
    text_classes = text_classes.join(' ')

    let btnClass = '';
    if (props.show_people) {
        btnClass = classes.ShowHideRed;
    } else {
        btnClass = classes.ShowHide;
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React app</h1>
            <p className={text_classes}>This is really working!</p>
            <button
                className={classes.FlipButton}
                onClick={props.flip_clicked}>Flip list
            </button>
            <button
                className={btnClass}
                onClick={props.toggle_clicked}>{props.show_people ? "Hide People": "Show People"}
            </button>
        </div>
    )
}

export default Cockpit;