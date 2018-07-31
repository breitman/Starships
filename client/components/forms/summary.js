import React, { Component } from 'react'
require('../style/cart.css')
export default class Summary extends Component {

  render() {
        const shipCount = this.props.shipCount
        const subtotal = this.props.subtotal
    return (
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
    )
    }
}
