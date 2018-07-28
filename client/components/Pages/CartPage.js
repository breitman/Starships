
import { connect } from 'react-redux';
import React, { Component } from 'react'
import CartItem from '../cards/CartItems'
require('../style/cart.css')

import {getCart} from '../../store/cart/thunk'

class CartPage extends Component {
  componentDidMount(){
  this.props.getCart(this.props.user.id)
  }

  render() {
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
              Usercart.map((item,index)=>{
                return (
                  <CartItem key={index} ship={item}/>
                )
              })
            }
                {/* <CartItem /> */}
            </div>



      </div>
        
      </div>
      <div className='total'>
        <div className='summary'>
        <h3> Summary (1 item) </h3>


        <div className='container'>
        <p className='inline-block'> Subtotal </p>
        <p className='inline-block right'>$20</p>
        </div>

        <div className='container'>
        <p className='inline-block'> Shipping </p>
        <p className='inline-block right'>$20</p>
        </div>


        <div className='container'>
        <p className='inline-block'> Est. Taxes </p>
        <p className='inline-block right'>$20</p>
        </div>

        <hr />
        <div className='container'>
        <p className='inline-block'><b>Total</b></p>
        <p className='inline-block right'>$20</p>
        </div>

        <div className='checkout'>
        <button className="button button2">Checkout</button>
        </div>
        </div>
      </div>
        
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart : state.cart,
    user : state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCart : userid => (dispatch(getCart(userid)))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(CartPage)
