
import {removeWish} from '../../store/wishList'
import React, { Component } from 'react'
import {connect} from 'react-redux'
require('../style/wishListPage.css')

class WishListItems extends Component {
  constructor(props){
    super(props)
    this.removeHandler = this.removeHandler.bind(this)
  }

  removeHandler(evt){
    evt.preventDefault()
    this.props.removeWish(this.props.ship.starship.id)
  }
  render() {
    const ship = this.props.ship.starship
    return (
      <div>
        <h1> {ship.name} </h1>
        <button onClick={this.removeHandler}> Remove </button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeWish : (shipId) => (dispatch(removeWish(shipId)))
  }
}

export default connect(null,mapDispatchToProps)(WishListItems)