
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'
import { getCart, getCartCount } from '../store/cart/thunk'
import { me } from '../store/user'
import {Dropdown, Menu} from 'semantic-ui-react'

require('./style/navbar.css')

import React, { Component } from 'react'

class Navbar extends Component {

  constructor(){
    super();
    this.state = {
      quantity : 0
    }
  }
  componentDidMount() {
    this.props.me()
    this.props.getCart(this.props.user.id)
    this.setState({
      quantity: this.props.shipCount
    })
  }

  render() {
    return this.props.isLoggedIn ?
      <div className='navbar' >
        <ul>
          <Menu>
            <Menu.Item as={Link} to='/home'>Home</Menu.Item>
            <Menu.Item as ={Link} to='/starships'>All Ships</Menu.Item>
            <Menu.Item  position='right' icon='shopping cart' as ={Link} to='/cart'>Cart</Menu.Item>
            <Dropdown icon='user' position='right' text='Account' className='link item'>
              <Dropdown.Menu  position='right' className='dropdown'>
                <Dropdown.Item as={Link} text='Settings' to='/account' />
                <Dropdown.Item text='Wish List' as={Link} to='/wishlist'/>
                <Dropdown.Item onClick={this.props.handleClick} text='Logout' />
              </Dropdown.Menu>
            </Dropdown>
          </Menu>
        </ul>
      </div>
      :
      <div className='navbar'>
        <ul>
          <Menu>
            <Menu.Item as={Link} to='/home'>Home</Menu.Item>
            <Menu.Item as ={Link} to='/starships'>All Ships</Menu.Item>
            <Menu.Item as ={Link} to='/cart' position='right'>Cart</Menu.Item>
            <Dropdown icon='user' text='Account' className='link item' position='right'>
              <Dropdown.Menu className='dropdown'>
                <Dropdown.Item as={Link} text='Log In' to='/login' />
                <Dropdown.Item text='Sign Up' as={Link} to='/signup'/>
              </Dropdown.Menu>
            </Dropdown>

          </Menu>
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
    user: state.user,
    ships: state.cart,
    shipCount: state.cart.shipCount
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    },
    getCart: userId => (dispatch(getCart(userId))),
    me: () => (dispatch(me())),
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
