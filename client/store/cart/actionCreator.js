import {ADD_TO_CART, 
    REMOVE_FROM_CART, 
    CHANGE_QUANTITY,
    GET_CART
} from './actions'


    export const addedToCart = (payload) => {
        return {type: ADD_TO_CART,
        payload}
    }
    export const removedFromCart = (payload) =>{
        return {type: REMOVE_FROM_CART,
        payload}
    }
    export const changedQuantity = (payload)=>{
        return {type: CHANGE_QUANTITY,
        payload}
    }
    export const gotCart = (payload) =>{
        return {
            type : GET_CART,
            payload
        }
    }