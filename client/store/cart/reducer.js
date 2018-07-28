import {ADD_TO_CART, 
    REMOVE_FROM_CART, 
    CHANGE_QUANTITY,
    GET_CART
} from './actions'

    const cartReducer = (cartState = [], action) =>{
        switch(action.type){
            case ADD_TO_CART:
            return action.payload

            case GET_CART:
            return action.payload

            default : 
            return cartState
        }
    }

    export default cartReducer;