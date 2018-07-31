import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import user from './user';
import ship from './ship';
import review from './review';
import cart from './cart/reducer';
import wishReducer from './wishList';

const reducer = combineReducers({
  
  user, ship, review, cart, wishReducer, 

});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)


const store = createStore(reducer, middleware)

// Init the session service

export default store
export * from './user'
