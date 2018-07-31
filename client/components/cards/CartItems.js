import React, { Component } from 'react'
import { connect } from 'react-redux';

import {removeShip,changingQuantity} from '../../store/cart/thunk'

require('./style/CartItems.css')

class CartItems extends Component {
  constructor(props){
    super(props)
    this.state = {
      quantity : ''
    }
    this.removeHandler = this.removeHandler.bind(this)
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }
  onSubmitHandler(evt){
    evt.preventDefault()
    if ((Number(this.state.quantity) % 1) === 0 ){
      const quantity = Number(this.state.quantity)
      const userId = this.props.user.id 
      const shipId = this.props.ship.starship.id 
      
      this.props.changingQuantity(shipId,userId,quantity)

      this.setState({
        quantity : ''
      })

    }else {
      alert(`Must input a number in quantity for: ${this.props.ship.starship.name}` )
    }
  }


  onChangeHandler(evt){
    this.setState({
      [evt.target.name] : (evt.target.value)
    })
  }
  
  removeHandler(evt) {
    evt.preventDefault()
    this.props.removeShip(this.props.ship.starship.id,this.props.userId)
  }

  render() {
    console.log(this.state)
    const ship = this.props.ship
    const shipInfo = this.props.ship.starship
    
    return (
      <div className='CartItems-container '>
      <hr />
  
          <div className='CartItems-pic-info'>
          <div className='cartitems-picture '>
              <img src={shipInfo.imageUrl}/>
          </div>
          <div className='caritem-info '>
          <p className='color'>Name: {shipInfo.name}</p>
          <p className='color'>Model: {shipInfo.model}</p>
          <p className='color'>manufacturer: {shipInfo.manufacturer}</p>
          </div>
          </div>

          <div className='cartItem-price'> 
          <p className='color'> ${shipInfo.price}</p>
          <div className='remove-btn'>
        <button onClick={this.removeHandler} className="remove-button">Remove</button>
        </div>
          </div>

          <div className='cartItem-quantity '>
          <form onChange={this.onChangeHandler} onSubmit={this.onSubmitHandler}>
            <p className='color'>Quantity: {ship.quantity}</p>
            <input name='quantity' value={this.state.quantity}/>

              <button> Confirm Quantity </button>
          </form>
          </div>

        

          <hr />
      </div>

    )
  }
}

const MapStateToProps = state => {
  return {
    user : state.user
  }
}

const MapDispatchToProps = dispatch => {
  return {
    removeShip : (shipId,userId)=> (dispatch(removeShip(shipId,userId))),
    changingQuantity : (shipId,userId,quantity) => (dispatch(changingQuantity(shipId,userId,quantity)))
  }
}

export default  connect(MapStateToProps,MapDispatchToProps)(CartItems)
