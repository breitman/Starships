import { connect } from 'react-redux';
import React, { Component } from 'react';
import WishListItems from '../cards/WishListItems';
import { fetchWishes } from '../../store/wishList';
require('../style/wishListPage.css');

class WishListPage extends Component {

  componentDidMount() {
    this.props.fetchWishes(this.props.user.id);
  }

  render() {
    console.log('props', this.props.wishList)
    //const userWishList = this.props.wishList;

    return (
      <div className='cart'>
        <div className='products'>
            <h1> Your Wish List </h1>

            <div className='list-item-cal'>
            <hr />

              <div className='list-item'>
              <p>Item</p>
              </div>

              <div className='list-price'>
              <p>Price</p>
              </div>

            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('state.wishReducer', state)
  return {
    wishList: state.wishReducer.wishList,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchWishes: userId => (dispatch(fetchWishes(userId)))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WishListPage);


// <div className='ship-list '>
