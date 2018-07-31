import { connect } from 'react-redux';
import React, { Component } from 'react'
import CartItem from '../cards/CartItems'
import { getCart, getSubtotal } from '../../store/cart/thunk'
import CheckoutSummaryCard from '../cards/CheckoutSummaryCard'

require('../style/cart.css')

class CartPage extends Component {

  componentDidMount() {
    this.props.getCart(this.props.user.id)
  }

  render() {
    const shipCount = (this.props.shipCount)
    const subtotal = (this.props.subtotal)
    const Usercart = this.props.cart
    return (
      <div className='cart'>
        <div className='products'>
          <h1> Your Cart </h1>

          <div className='list-item-cal'>
            <hr />

            <div className='list-item'>
              <p>Item</p>
            </div>

            <div className='list-price'>
              <p>Price</p>
            </div>

            <div className='list-quantity '>
              <p>Quantity</p>
            </div>
            <hr />

            <div className='ship-list '>
              {
                Usercart.map((item, index) => {
                  return (
                    <CartItem userId={this.props.user.id} key={index} ship={item} />
                  )
                })
              }
            </div>
          </div>
        </div>
        <CheckoutSummaryCard isCheckout={true}subtotal={subtotal} shipCount={shipCount}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart.cart,
    user: state.user,
    subtotal: state.cart.subtotal,
    shipCount: state.cart.shipCount
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCart: userId => (dispatch(getCart(userId))),
    getSubtotal: userCart => (dispatch(getSubtotal(userCart))),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartPage)
