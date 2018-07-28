
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {getCart} from '../store'

require('./style/navbar.css')

import React, { Component } from 'react'

class Navbar extends Component {
  componentDidMount(){
  console.log(this.props.user)
  }
  render() {
    console.log("this is count",this.props.shipCount)
    return this.props.isLoggedIn ?
      <div className='navbar'>
        <ul>
          <li><Link className="active" to="/home">Home</Link></li>
          <li><Link to="/starships">All Ships</Link></li>
          <li><Link to="/account">Me</Link></li>
          <li><button type='submit' onClick={this.props.handleClick}>Logout</button></li>
          <li className='right'><Link to="/account">Account</Link></li>
          <li className='right'><Link to="/cart">Cart (0)</Link></li>
        </ul>
      </div>
      :
      <div className='navbar'>
        <ul>
          <li><Link className="active" to="/home">Home</Link></li>
          <li><Link to="/starships">All Ships</Link></li>
          <li className='right'><Link to="/account">Account</Link></li>
          <li className='right'><Link to="/cart">Cart (0)</Link></li>
          <li className='right'><Link to='/login'>Login</Link></li>
          <li className='right'><Link to='/signup'>Sign Up</Link></li>
        </ul>
      </div>
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    user : state.user,
    shipCount : state.cart.shipCount
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    },
    getCart : userId => (dispatch(getCart(userId))),
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
