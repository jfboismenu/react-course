import React from 'react';
import classes from './Button.module.css'

const button = (style, clickHandler, children) => {
    return (<button className={[classes.Button, style].join(" ")} onClick={clickHandler}>{children}</button>)
}

export const Danger = (props) => {
    return button(classes.Danger, props.clicked, props.children)
};

export const Success = (props) => {
    return button(classes.Success, props.clicked, props.children)
};

