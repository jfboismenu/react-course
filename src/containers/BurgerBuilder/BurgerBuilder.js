import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.75,
    cheese: 0.80,
    meat: 1.50
}

class BurgerBuilder extends Component {

    constructor(props) {
        super()
        let state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            price: this.computePrice({}),
            purchasing: false
        }
        state["purchasable"] = this.isPurchasable(state.ingredients)
        this.state = state
    }

    isPurchasable(ingredients) {
        for(let name in ingredients) {
            if (ingredients[name] > 0) {
                return true
            }
        }
        return false
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    addIngredientHandler = (type) => {
        let ingredientsCopy = {...this.state.ingredients}
        ingredientsCopy[type] += 1
        this.setState({
            ingredients: ingredientsCopy,
            price: this.computePrice(ingredientsCopy),
            purchasable: this.isPurchasable(ingredientsCopy)
        })
    }

    removeIngredientHandler = (type) => {
        let ingredientsCopy = {...this.state.ingredients}
        ingredientsCopy[type] = Math.max(0, ingredientsCopy[type] - 1)
        this.setState({
            ingredients: ingredientsCopy,
            price: this.computePrice(ingredientsCopy),
            purchasable: this.isPurchasable(ingredientsCopy)
        })
    }

    computePrice = (ingredients) => {
        let price = 1.50;
        for (let name in ingredients) {
            price += ingredients[name] * INGREDIENT_PRICES[name]
        }
        return price;
    }

    render () {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing}>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    lessPressed={this.removeIngredientHandler}
                    morePressed={this.addIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.price}
                    purchasable={this.state.purchasable}
                    purchaseHandler={this.purchaseHandler}
                />
                
            </Aux>

        );
    }
}

export default BurgerBuilder;