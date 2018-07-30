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
      <div>
        <hr />
      <div className='container-ships'>
      <div className='container-ships-item '>
        <div className='container-ships-img'>
          <img src={shipInfo.imageUrl}/>
        </div>

        <div className='container-ships-info '>
          <p>Name: {shipInfo.name}</p>
          <p>Model: {shipInfo.model}</p>
          <p>manufacturer: {shipInfo.manufacturer}</p>
        </div>
  
      </div>
      <div className='container-ships-price'>
        <p> ${shipInfo.price}</p>
      </div>
      <div className='container-ships-quantity'>
      {/* user can change quantity */}

      <form onChange={this.onChangeHandler} onSubmit={this.onSubmitHandler}>
      <p>Quantity: {ship.quantity}</p>
      <input name='quantity' value={this.state.quantity}/>

        <button> Confirm Quantity </button>
      </form>
      </div>

      </div>

        <div className='remove-btn'>
        <button onClick={this.removeHandler} className="remove-button">Remove</button>
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
