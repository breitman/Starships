
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchShips } from '../../store/ship';
import {putInCart} from '../../store/cart';
import {me} from '../../store/user'
require('./style/shipCard.css')



import React, { Component } from 'react'

class ShipCard extends Component {


  addingToCart(ship){
    this.props.me()
    this.props.putInCart(ship,this.props.user)
  }

  render() {
    const ship = this.props.ship
    return (
      <div className="card">
      <div className='img-container'>
        <img src={ship.imageUrl} />
      </div>
      <div className="container">
        <h4 className='center'><b>{ship.name}</b></h4>
        <div className='center'>
          <Link to={`/starships/${ship.id}`} >
            <p>Model: {ship.model} </p>
            <p>Price: {ship.price} </p>
          </Link>
          <button onClick={()=>this.addingToCart(ship.id)} className="button button2">Add to Cart</button>
        </div>
      </div>
    </div>
    )
  }
}
const mapStateToProps = state =>{
  return {
    user : state.user
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    putInCart: (shipId,user) => dispatch(putInCart(shipId,user.id)),
    me : ()=> dispatch(me())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShipCard)
