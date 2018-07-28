import axios from "axios";



export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const addToCart = (productId) => ({
  type: ADD_TO_CART,
  payload: productId
});

export const removeFromCart = productId => ({
  type: 'REMOVE_FROM_CART',
  payload: productId
});



export const putInCart = (ship,user) => {
  return async dispatch => {
    console.log("string from product "  + ship + " " + user )
    await axios.post('/api/cart',{
      "starshipId" : ship,
      "userId" : user
    })
    const {data} = await axios.get(`/api/cart/${user}`)
    console.log(data)
  }
}

//check if remove is correct

const cartReducer = (cartState = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return  action.payload
    case REMOVE_FROM_CART:
      return cartState.filter(obj => obj.id !== action.payload);
    default:
      return cartState;
  }
};

export default cartReducer;
