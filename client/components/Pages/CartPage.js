import { connect } from 'react-redux';
import React, { Component } from 'react'
import CartItem from '../cards/CartItems'
import { getCart, getSubtotal } from '../../store/cart/thunk'
import CheckoutSummaryCard from '../cards/CheckoutSummaryCard'

require('../style/cart.css')
import Summary from '../forms/summary'

const showLocalStorage = () => {
  console.log('local Storage') 
  let cartObj = {}
  for(var i =0; i < localStorage.length; i++){
    cartObj[localStorage.key(i)] = localStorage.getItem(localStorage.key(i))
  }
  return cartObj
}
const gettingGuestShip =(objArr,ships) =>{
  const result = ships.filter((ship,index)=>{
    return objArr.includes(ship.id + "")
  })
  return result
}

const guestSummaryFunc = (ships,guestCart, GuestShip) =>{
  let totalCount = 0;
  let totalPrice = 0;
  ships.forEach((ship)=>{

      totalCount += Number(guestCart[ship])
      console.log(GuestShip)
      totalPrice += GuestShip[ship - 1].price * Number(guestCart[ship])
  })
  return {
    totalCount,
    totalPrice
  }
}



class CartPage extends Component {

  // constructor(props){
  //   super(props)
  //   this.state={
  //     userCart : {}
  //   }
  // }

  componentDidMount() {
    this.props.getCart(this.props.user.id)
    
  }

  


  

  render() {
    console.log('this is cart page object',showLocalStorage())
    const ships = this.props.ships
    
    const guestCart = showLocalStorage()
    const guestUserCart =  Object.keys(showLocalStorage())
    const GuestShip = gettingGuestShip(guestUserCart,ships)
    
    

    // console.log(guestSummary)
    const user = this.props.user
    const shipCount = (this.props.shipCount)
    const subtotal = (this.props.subtotal)
    const Usercart = this.props.cart

    const guestSubTotal = guestSummaryFunc(guestUserCart,guestCart, GuestShip)
    console.log(localStorage)
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
              : <div className='ship-list'>

              {
                GuestShip.map((ship,index)=>{
                  ship.quantity = Number(guestCart[ship.id])
                  ship.starship = ship
                  return (
                    <CartItem key={index} ship={ship}/>
                  )
                })
              }
              
              </div>
            }
          </div>
        </div>
        {this.props.isLoggedIn ?
          <CheckoutSummaryCard isCheckout={true} subtotal={subtotal} shipCount={shipCount}/>

        :
       <CheckoutSummaryCard isCheckout={true} subtotal={guestSubTotal.totalPrice} shipCount={guestSubTotal.totalCount}/>


        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('this is state',state)
  return {
    ships : state.ship.ships,
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
