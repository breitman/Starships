import React, { Component } from 'react'
require('./style/CartItems.css')
class CartItems extends Component {
  render() {
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
        <p> {ship.quantity}</p>
      </div>
      </div>

   
        <div className='remove-btn'>
        <button className="remove-button">Remove</button>
        </div>
        <hr />
      </div>
    )
  }
}

export default CartItems