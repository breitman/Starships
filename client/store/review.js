import axios from 'axios';

const GET_REVIEWS = 'GET_REVIEWS';
const ADD_REVIEWS = 'ADD_REVIEW';
const DELETE_REVIEW = 'DELETE_REVIEW';
export const START_LOADING = 'START_LOADING';

//action creators
export const getReviews = reviews => ({type: GET_REVIEWS, payload: reviews });
export const deleteReview = review => ({ type: DELETE_REVIEW, payload: review });
export const startLoading = () => ({ type: START_LOADING });
export const addReview = (REVIEW) => ({
  type: ADD_REVIEWS,
  payload: REVIEW
})
//thunk creator
export const fetchReviews = (shipId) => {
  return async dispatch => {
  const res = await axios.get(`/api/reviews/${shipId}`);
  dispatch(getReviews(res.data));
  }
}

export const addReviews = (reviewData, ownProps) => async (dispatch) => {
  try {
    const response = await axios.post(`/api/reviews/${ownProps.match.params.id}`, reviewData)
    return dispatch(addReview(response.data))
  } catch (error) {
    console.log(error)
  }
}

export const deleteSingleReview = (reviewId, ownProps) => async (dispatch) => {

  try {
    const response = await axios.delete(`/api/reviews/${reviewId}`)
    
    return dispatch(deleteReview(response.data))
  } catch (error) {
    console.log(error)
  }
}

const initialState = {
  reviews: [],
  review: {},
  isLoading: false
}

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
        isLoading: false
      };
    case ADD_REVIEWS:
      return {
        ...state,
        reviews: action.payload
      }
    case DELETE_REVIEW:
      return {
        ...state,
        review: action.payload
      }

    case START_LOADING:
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
}

export default reviewReducer;
