import {ADD_TO_CART, 
    REMOVE_FROM_CART, 
    CHANGE_QUANTITY,
    GET_CART,
    GET_SUBTOTAL,
    GET_SHIP_COUNT
} from './actions'

const initState = {
    cart : [],
    subtotal : 0,
    shipCount : 0 
}

    const cartReducer = (cartState = initState, action) =>{
        switch(action.type){
            case ADD_TO_CART:
            return {...cartState, cart : action.payload}

            case GET_CART:
            return {...cartState, cart : action.payload}

            case GET_SUBTOTAL:
            return {...cartState, subtotal : action.payload}

            case GET_SHIP_COUNT:
            return {...cartState, shipCount : action.payload}

            default : 
            return cartState
        }
    }

    export default cartReducer;