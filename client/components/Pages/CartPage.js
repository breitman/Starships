import { connect } from 'react-redux';
import React, { Component } from 'react'
import CartItem from '../cards/CartItems'
import { getCart, getSubtotal } from '../../store/cart/thunk'
import CheckoutSummaryCard from '../cards/CheckoutSummaryCard'

require('../style/cart.css')
import Summary from '../forms/summary'


class CartPage extends Component {

  // constructor(props){
  //   super(props)
  //   this.state={
  //     userCart : {}
  //   }
  // }

  componentDidMount() {
    this.props.getCart(this.props.user.id)
    this.setState({
      userCart : this.props.cart
    })
  }

  render() {
    const user = this.props.user
    console.log(user)

    const shipCount = (this.props.shipCount)
    const subtotal = (this.props.subtotal)
    const Usercart = this.props.cart

    console.log(this.props.cart)
    return (
      <div className='cart'>
      <div className='products'>
            <h1 className='color center' > Your Cart </h1>

          <div className='list-item-cal'>
            <hr />

            <div className='list-item'>
            <p className='color'>Item</p>
            </div>

            <div className='list-price'>
            <p className='color'>Price</p>
            </div>

            <div className='list-quantity '>
            <p className='color'>Quantity</p>
            </div>
            <hr />
            {this.props.isLoggedIn ?
              <div className='ship-list '>
                {
                  Usercart.map((item, index) => {
                    return (
                      <CartItem userId={this.props.user.id} key={index} ship={item} />
                    )
                  })
                }
              </div>
              : <h1>Hello</h1>
            }
          </div>
        </div>
        <CheckoutSummaryCard isCheckout={true}subtotal={subtotal} shipCount={shipCount}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: !!state.user.id,
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
