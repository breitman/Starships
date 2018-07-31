
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchShips } from '../../store/ship';
import {putInCart} from '../../store/cart/thunk';
import {me} from '../../store/user';
import {addWish} from '../../store/wishList';
import './style/shipCard.css'



import React, { Component } from 'react'

class ShipCard extends Component {


  addingToCart(shipId){
    this.props.me()
    this.props.putInCart(shipId, this.props.user)
    alert('Added to Cart')
  }

  addingToWishList(shipId){
    this.props.me()
    this.props.putInWishList(shipId, this.props.user)
  }

  render() {
    const ship = this.props.ship
    return (
      <div className='card'>
    <Link to={`/starships/${ship.id}`} >
        <div className='shipName'>
        <h2><b>{ship.name}</b></h2>
        </div>

        <div className='img-holder'>
        <img src={ship.imageUrl} />
        </div>

        <div className='ship-info' >
          <p>Model : {ship.model}</p>
          <p> Price : {ship.price} </p>
        </div>
      </Link>

        <div className='ship-info'>
        <button onClick={()=>this.addingToCart(ship.id)}  className="button button2">Add to cart</button>

        <button onClick={()=>this.addingToWishList(ship.id)}  className="button button2">Add to wishlist</button>
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
    putInCart: (shipId, user) => dispatch(putInCart(shipId, user.id)),
    me : ()=> dispatch(me()),
    putInWishList: (shipId, user) => dispatch(addWish(shipId, user.id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShipCard)
