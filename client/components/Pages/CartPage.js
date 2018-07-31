import { connect } from 'react-redux';
import React, { Component } from 'react'
import {CartItem, CartItemForGuest} from '../cards/CartItems'
import {getCart, getSubtotal} from '../../store/cart/thunk'
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

            <div className='ship-list '>
            {console.log((Object.keys(user).length === 0))}
            { !user.id ?<h1>guset cart </h1> :(Usercart.map((item,index)=>{
              return (
                <CartItem userId={this.props.user.id} key={index} ship={item}/>
              )
            })) 
              }
              
            
            </div>



      </div>
        
      </div>
            <Summary subtotal={subtotal} shipCount={shipCount} Usercart={Usercart}/>
      {/* <div className='total'>
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
      </div> */}
        
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
