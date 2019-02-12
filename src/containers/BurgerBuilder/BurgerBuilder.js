import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger.js'
import BuildControls from '../../components/BuildControls/BuildControls.js'


class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    addIngredientHandler = (type) => {
        let ingredientsCopy = {...this.state.ingredients}
        ingredientsCopy[type] += 1
        this.setState({ingredients: ingredientsCopy})
    }

    removeIngredientHandler = (type) => {
        let ingredientsCopy = {...this.state.ingredients}
        ingredientsCopy[type] = Math.max(0, ingredientsCopy[type] - 1)
        this.setState({ingredients: ingredientsCopy})
    }

    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    lessPressed={this.removeIngredientHandler}
                    morePressed={this.addIngredientHandler}
                />
            </Aux>

        );
    }
}

export default BurgerBuilder;