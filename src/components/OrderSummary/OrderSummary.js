import React from 'react'
import Aux from '../../hoc/Aux'
import {Cancel, Continue} from '../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(
        (name) => {
            return (
                <li key={name}>
                    <span style={{ textTransform: 'capitalize' }}>{name}</span><span>: {props.ingredients[name]}</span>
                </li>
            );
        }
    )

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
            <Cancel/>
            <Continue/>
        </Aux>    
    )
};

export default orderSummary;