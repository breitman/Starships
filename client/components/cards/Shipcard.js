
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
    console.log(this.props)
    const ship = this.props.ship

    return (
      <div className='card'>
    <Link to={`/starships/${ship.id}`} >
        <div className='shipName'>
        <h2 className='color'><b>{ship.name}</b></h2>
        </div>

        <div className='img-holder'>
        <img src={ship.imageUrl} />
        </div>

        <div className='ship-info' >
          <h4 className='color'>Model : {ship.model}</h4>
          <h4 className='color'> Price : {ship.price} </h4>
        </div>
      </Link>

        <div className='ship-info'>
        <button onClick={()=>this.addingToCart(ship.id)}  className="button button2">Add to cart</button>
        <button onClick={()=>{
          let qty =  JSON.parse(localStorage.getItem(ship.id))
          if(qty) {
            localStorage.setItem(ship.id, qty + 1);
          } else {
            localStorage.setItem(ship.id, 1);
          }
        }}  className="button button2">Add to cart</button>

        <button onClick={()=>this.addingToWishList(ship.id)}  className="button button2">Add to wishlist</button>
        </div>

      </div>


    )
  }
}
const mapStateToProps = state =>{
  console.log(state)
  if(state.user) {
    return {
      user : state.user
    }
  } else {
    return {
      user : state.session.user
    }
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
