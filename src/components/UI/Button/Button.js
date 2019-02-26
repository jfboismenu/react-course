import React from 'react';
import classes from './Button.module.css'

export const Cancel = (props) => {
    return (
        <button className={[classes.Button, classes.Danger].join(" ")} onClick={props.clicked}>Cancel</button>

    );
};

export const Continue = (props) => {
    return (
        <button className={[classes.Button, classes.Success].join(" ")} onClick={props.clicked}>Continue</button>
    );
};

