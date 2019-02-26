import React from 'react'
import Aux from '../../hoc/Aux'
import {Danger, Success} from '../UI/Button/Button'

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
            <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Danger clicked={props.cancelled}>CANCEL</Danger>
            <Success clicked={props.continued}>CONTINUE</Success>
        </Aux>    
    )
};

export default orderSummary;