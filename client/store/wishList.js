import axios from 'axios';

//actions
export const GET_WISH_LIST = 'GET_WISH_LIST';
export const ADD_TO_WISH_LIST = 'ADD_TO_WISH_LIST';
export const DELETE_WISH = 'DELETE_WISH';

//action creators
export const fetchWishList = wishes => ({ type: GET_WISH_LIST, payload: wishes });

export const addToWishList = wishes => ({ type: ADD_TO_WISH_LIST, payload: wishes });

export const deleteWish = shipId => ({ type: DELETE_WISH, payload: shipId });


//thunk creators
export const fetchWishes = (userId) => {
  return async dispatch => {
  const res = await axios.get(`/api/wishlist/${userId}`);
  dispatch(fetchWishList(res.data));
  }
}

export const addWish = (shipId, userId) => {
  return async dispatch => {
    const res = await axios.post('/api/wishlist', {
      starshipId: shipId,
      userId
    });
    dispatch(addWish(res.data));
  }
}

export const removeWish = shipId => {
  return async dispatch => {
    await axios.delete(`/api/wishlist/${shipId}`);
    dispatch(removeWish(shipId));
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
      return wishState.filter(wish => {})
    default:
      return wishState;
  }
}

export default wishReducer;