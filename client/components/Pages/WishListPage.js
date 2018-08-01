import { connect } from 'react-redux';
import React, { Component } from 'react';
import WishListItems from '../cards/WishListItems';
import { fetchWishes } from '../../store/wishList';
require('../style/wishListPage.css');

class WishListPage extends Component {

  componentDidMount() {
    this.props.fetchWishes();
  }

  render() {
    const Wishes = this.props.wishList
    console.log(Wishes)
    return (
      <div className='wish'>
      <h1 className='center'> Wishlist </h1>
      <div className='title'>
      <hr />
        <div className='wish-picture '> 
        <h3> Pictures </h3>
        </div>
        
        <div className='wish-info '>
          <h3> information </h3>
        </div>
      <hr />
      </div>

        <div> 
          {
            Wishes.map((ship,index)=>{
              return(
                <WishListItems key={index} ship={ship}/>
              )
            })
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('state.wishReducer', state)
  
  return {
    wishList: state.wishReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchWishes: () => (dispatch(fetchWishes()))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WishListPage);


// <div className='ship-list '>
