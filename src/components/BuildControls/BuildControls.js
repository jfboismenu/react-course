import React from 'react'

import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.module.css'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
]

const buildControls = (props) => {
    console.log(props)
    return (
        <div className={classes.BuildControls}>
            <p>Price: <strong>{props.price.toFixed(2)}</strong></p>
            {
                controls.map(
                    ( ctrl ) => <BuildControl 
                                    lessPressed={props.lessPressed}
                                    morePressed={props.morePressed}
                                    key={ctrl.label}
                                    label={ctrl.label}
                                    type={ctrl.type}
                                    disabled={props.disabled[ctrl.type]}
                                />
                )
            }
            <button 
                className={classes.OrderButton}
                disabled={!props.purchasable}
                onClick={props.purchaseHandler}
            >ORDER NOW</button>
        </div>
    )
}


export default buildControls;