import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems'
import Logo from '../../Logo/Logo'
import classes from './SideDrawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Aux'

const SideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close]
    if (props.isOpened) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }
    attachedClasses = attachedClasses.join(" ")

    return (
        <Aux>
            <Backdrop show={props.isOpened} clicked={props.closed}/>
            <div className={attachedClasses}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <NavigationItems/>
            </div>
        </Aux>
    );
};

export default SideDrawer;