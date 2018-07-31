import { connect } from 'react-redux';
import React, { Component } from 'react'
import {CartItem, CartItemForGuest} from '../cards/CartItems'
import {getCart, getSubtotal} from '../../store/cart/thunk'
require('../style/cart.css')

const showLocalStorage = () => {
  console.log('local Storage') 
  let cartObj = {}
  for(var i =0; i < localStorage.length; i++){
    cartObj[localStorage.key(i)] = localStorage.getItem(localStorage.key(i))
  }
  return cartObj
}

class CartPage extends Component {

  componentDidMount() {
    this.props.getCart(this.props.user.id)
  }

  render() {
    const user = this.props.user
    console.log(user)
    const shipCount = (this.props.shipCount)
    const subtotal = (this.props.subtotal)
    const Usercart = this.props.cart
    console.log(showLocalStorage())
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
            
            {/*(Object.keys(user).length === 0)?<table> {showLocalStorage()}</table> :(Usercart.map((item,index)=>{
              return (
                <CartItem userId={this.props.user.id} key={index} ship={item}/>
              )
            })) 
          */}
            {Usercart.map((item,index)=>{
              return (
                <CartItem userId={this.props.user.id} key={index} ship={item}/>
              )
            })}
              
            
            </div>



      </div>
        
      </div>
      <div className='total'>
        <div className='summary'>
        <h3> Summary ({shipCount} Ships) </h3>


        <div className='container'>
        <p className='inline-block'> Subtotal </p>
        <p className='inline-block right'>${subtotal}</p>
        </div>

        <div className='container'>
        <p className='inline-block'> Shipping </p>
        <p className='inline-block right'>$0</p>
        </div>


        <div className='container'>
        <p className='inline-block'> Est. Taxes </p>
        <p className='inline-block right'>$0</p>
        </div>

        <hr />
        <div className='container'>
        <p className='inline-block'><b>Total</b></p>
        <p className='inline-block right'>${subtotal}</p>
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
    cart : state.cart.cart,
    user : state.user,
    subtotal : state.cart.subtotal,
    shipCount : state.cart.shipCount
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCart : userId => (dispatch(getCart(userId))),
    getSubtotal : userCart => (dispatch(getSubtotal(userCart))),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartPage)
