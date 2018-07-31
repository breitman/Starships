import axios from "axios";

import {addedToCart,
    removedFromCart,
    changedQuantity,
    gotCart,
    gotSubtotal,
    gotShipCount

} from './actionCreator'

    export const priceChanging = (ships) => {

        let totalCount = 0
        let totalPrice = 0
        ships.forEach((el)=>{
            totalCount += el.quantity
            totalPrice += el.quantity * el.starship.price
        })
        return {
            totalCount,
            totalPrice
        }
    }

    export const changingQuantity = (shipId,userId,quantity) => {
        return async dispatch => {
            try {
                if(userId){
                    await axios.put(`/api/cart/${userId}`,{
                        quantity,
                        shipId
                    })
                    const {data} = await axios.get(`/api/cart/${userId}`)
                    const newSubTotal = priceChanging(data)
                    dispatch(gotSubtotal(newSubTotal.totalPrice))
                    dispatch(gotShipCount(newSubTotal.totalCount))
                    dispatch(changedQuantity(data))
                }
            } catch (error) {
                next(error)
            }
        }
    }

    export const getCartCount = (userId) =>{
        return async dispatch => {
            try{
                const {data} = await axios.get(`/api/cart/${userId}`)
                const newSubTotal = priceChanging(data)
                dispatch(gotShipCount(newSubTotal.totalCount))
            }
            catch(error){
               console.log(error)
            }
        }
    }


    export const putInCart = (ship,user,quantity=0) => {
        return async dispatch => {
            //first checks if there is a user logged in
            try {
                if(user){
                    await axios.post('/api/cart',{
                    "starshipId" : ship,
                    "userId" : user,
                    "quantity": quantity
                    })
                    const {data} = await axios.get(`/api/cart/${user}`)
                    await dispatch(addedToCart(data))
                    await getSubtotal(user)
                }
            } catch (error) {
                console.log(error)
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
                    subtotal += (ship.starship.price * ship.quantity)
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
                totalShipsCount += (ship.starship.price * ship.quantity)
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
