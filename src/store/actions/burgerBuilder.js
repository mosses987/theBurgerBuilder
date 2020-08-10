import * as actionTypes from './actionTypes'

export const addIngridient = (name)=>{
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    }
}

export const removeIngridient = (name)=>{
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
}