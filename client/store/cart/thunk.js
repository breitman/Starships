import axios from "axios";

import {addedToCart,
    removedFromCart,
    changedQuantity,
    gotCart,
    gotSubtotal,
    gotShipCount

} from './actionCreator'

    export const putInCart = (ship,user) => {
        return async dispatch => {
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
            if(userId){
                const {data} = await axios.get(`/api/cart/${userId}`)
                dispatch(gotCart(data))
                let subtotal = 0
                let totalShipsCount = 0 
                data.forEach((ship)=>{
                    subtotal += (ship.starship.price)
                    totalShipsCount  += ship.quantity
                })
                dispatch(gotSubtotal(subtotal))
                dispatch(gotShipCount(totalShipsCount))

            }
        }
    }

    export const getSubtotal = (userCart) => {
        return async dispatch => {
            //we can get total ships and subtotal
            let subtotal = 0
            let totalShipsCount = 0 
            userCart.forEach((ship)=>{
                totalShipsCount += (ship.starship.price)
                subtotal += ship.quantity
            })
            dispatch(gotSubtotal(subtotal))
            dispatch(gotShipCount(totalShipsCount))
            }
    }

    export const removeShip = (shipId,userId) =>{
        return async dispatch => {
            await axios.delete(`/api/cart/${userId}/${shipId}`)
            const {data} = await axios.get(`/api/cart/${userId}`)
            dispatch(removedFromCart(data))
        }
    }
    