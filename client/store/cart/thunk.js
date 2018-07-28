import axios from "axios";

import {addedToCart,
    removedFromCart,
    changedQuantity,
    gotCart
} from './actionCreator'

    export const putInCart = (ship,user) => {
        return async dispatch => {
            console.log(`adding ${ship} to the user ${user}` )
            //first checks if there is a user logged in
            if(user){
                await axios.post('/api/cart',{
                "starshipId" : ship,
                "userId" : user
                })
                const {data} = await axios.get(`/api/cart/${user}`)
            dispatch(addedToCart(data))
            }

        }
    }

    export const getCart = (userId) => {
        return async dispatch => {
            console.log('Getting UserIds cart ' + userId)
            if(userId){
                const {data} = await axios.get(`/api/cart/${userId}`)
                dispatch(gotCart(data))
            }
        }
    }
    