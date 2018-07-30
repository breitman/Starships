import axios from 'axios';

const GET_SHIPS = 'GET_SHIPS';
const GET_SINGLE_SHIP = 'GET_SINGLE_SHIP';
const DELETE_SHIP = 'DELETE_SHIP';
export const START_LOADING = 'START_LOADING';


//action creators
export const getShips = ships => ({type: GET_SHIPS, payload: ships });

export const deleteShip = ship => ({ type: DELETE_SHIP, payload: ship });

export const getSingleShip = singleShip => ({ type: GET_SINGLE_SHIP, payload: singleShip });

export const startLoading = () => ({ type: START_LOADING });


//thunk creator
export const fetchShips = () => {
  return async dispatch => {
  const res = await axios.get('/api/ships');
  const ships = res.data;
  const action = getShips(ships)
  dispatch(action);
  }
}

export const fetchSingleShip = ShipId => {
  return async dispatch => {
    const res = await axios.get(`/api/ships/${ShipId}`);
    const ship = res.data;
    const action = getSingleShip(ship);
    dispatch(action);
  }
}


const initialState = {
  ships: [],
  singleShip: {},
  isLoading: false
}


const shipReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SHIPS:
      return {
        ...state,
        ships: action.payload,
        isLoading: false
      };
    case GET_SINGLE_SHIP:
      return {
        ...state,
        singleShip: action.payload,
        isLoading: false
      };
    case START_LOADING:
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
}

export default shipReducer;
