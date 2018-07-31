//to be rendered top right of checkout page and on top right of checkout success page

import React from 'react';
import { Link } from 'react-router-dom'
require('../style/cart.css');

const SummaryCard = (props) => {
  const shipCount = props.shipCount;
  const subtotal = props.subtotal;
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
        {props.isCheckout ? <Link to='/checkout' className="button button2">Checkout</Link> : null}

        </div>
        </div>
      </div>


  )
}

export default SummaryCard;
