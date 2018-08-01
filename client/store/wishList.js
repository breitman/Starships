import axios from 'axios';
import { INSPECT_MAX_BYTES } from 'buffer';

//actions
export const GET_WISH_LIST = 'GET_WISH_LIST';
export const ADD_TO_WISH_LIST = 'ADD_TO_WISH_LIST';
export const DELETE_WISH = 'DELETE_WISH';

//action creators
export const fetchWishList = wishes => ({ type: GET_WISH_LIST, payload: wishes });

export const addToWishList = wish => ({ type: ADD_TO_WISH_LIST, payload: wish });

// export const deleteWish = shipId => ({ type: DELETE_WISH, payload: shipId });


//thunk creators
export const fetchWishes = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/wishlist`);
      dispatch(fetchWishList(data));
    } catch (error) {
      console.log(error)
    }
  }
}

export const addWish = (shipId) => {
  return async dispatch => {
    try {
      const {data} = await axios.post('/api/wishlist',{shipId});
      // dispatch(addWish(data));
    } catch (error) {
      console.log(error)
    }

  }
}

export const removeWish = shipId => {
  return async dispatch => {
    try {
      await axios.delete(`/api/wishlist/${shipId}`);
      const {data} = await axios.get(`/api/wishlist`)
      dispatch(fetchWishes(data));
    } catch (error) {
      console.log(error)
    }
  }
}

//reducer
const wishReducer = (wishState = [], action) => {
  switch(action.type) {
    case GET_WISH_LIST:
      return action.payload;
    case ADD_TO_WISH_LIST:
      return [...wishState, action.payload];
    case DELETE_WISH:
      return wishState.filter(ship => ship.id !== action.payload);
    default:
      return wishState;
  }
}

export default wishReducer;