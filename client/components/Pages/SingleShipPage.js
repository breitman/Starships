import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSingleShip } from '../../store/ship';
import { deleteSingleReview } from '../../store/review';
import {putInCart, changingQuantity} from '../../store/cart/thunk'
require('../style/singleShip.css')

const reviewList = (reviews, props) => {
  if (!reviews) {return <h2>There are no reviews registered in the database</h2>}
  return reviews.map(review => (
    <div key={review.id}>
      <ul>
      <li>
        <h3>reviewer: {review.userId}</h3>
        <p>review content: {review.content}</p>
        <p>review rate: {review.rate}</p>
        {
          !(props.user.id === review.userId)? <div></div>
          :(<div>
            <button type="submit" onClick={() => props.deleteReview(review.id)}>
                delete this review
            </button>
          </div>)}
      </li>
      </ul>


  </div>
    ))
}

class SingleShipPage extends Component {

  constructor() {
    super();
    this.state = {
      quantity : 0,
      isNum : true
    }
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchSingleShip(id);
  }

  async onSubmitHandler(evt){
    evt.preventDefault()
    await this.props.putInCart(this.props.singleShip.id,this.props.user.id,this.state.quantity)
    // await this.props.changingQuantity(this.props.singleShip.id,this.user.id,this.state.quantity)
  }

  onChangeHandler(evt){
    if (!(Number(evt.target.value) % 1 === 0)){
      this.setState({
        isNum : false
      })
    } else {
      this.setState({
        isNum:true,
        quantity : Number(evt.target.value)
      })
    }
  }

  render() {
    const singleShip = this.props.singleShip;
    return (
      <div>
        {/* <h3>{singleShip.name}</h3>
        <h3>{singleShip.price}</h3>

        <hr />
        <img src={singleShip.imageUrl} />

        <hr />
        <p>Manufacturer: {singleShip.manufacturer}</p>
        <p>Model: {singleShip.model}</p>

        <hr />
        <p>Quantity:</p>
        <button onClick={() => {
          if(this.state.quantity > 0){
            this.setState({quantity:this.state.quantity-1})
          }}}> -</button>
        <h6>{this.state.quantity}</h6>
        <button onClick={() => {this.setState({quantity:this.state.quantity+1})}} >+</button>

        <hr />
        <button onClick={() => this.props.putInCart(singleShip.name, this.state.quantity)}>Add To Cart</button>
        <hr />
        reviews */}

        <div>
          {/* Picture */}
          <div className='single-ship-container'>

          {/* Picture of ship */}
            <div className='single-ship-pic '>
            <div className='single-ship-img-holder '>
            <img src={singleShip.imageUrl} />
            </div>
            </div>


            <div className='single-ship-info'>
              {/* Name of ship  */}
              <div className='single-ship-name'>
                <h2>{singleShip.name}</h2>
              </div>

              <div className='center'>
              <p>Manufacturer: {singleShip.manufacturer}</p>
              <p>Model: {singleShip.model}</p>
              <p>Price: ${singleShip.price} </p>
              </div>

              <div className='center single-ship-adding '>
              <form onChange={this.onChangeHandler} onSubmit={this.onSubmitHandler}>
              { this.state.isNum ? "" : <p className='single-ship-adding-invalid '> Quantity must be a valid number </p>}
                <input name='quantity' placeholder='Quantity'/>
                <button> Add To Cart </button>
              </form>
              </div>

            </div>
          </div>


        </div>
          <hr />
        <div>
        <h1>Reviews</h1>
          <ul>
            {reviewList(singleShip.reviews, this.props)}
          </ul>
        <Link to={`/starships/${singleShip.id}/addreview`}>
          <p>Add review</p>
        </Link>
        </div>

      </div>
    )

  }
}


const mapStateToProps = state => {
  return {
    singleShip: state.ship.singleShip,
    user : state.user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchSingleShip: shipId => (dispatch(fetchSingleShip(shipId))),

    putInCart : (shipId,userId,quantity)=> (dispatch(putInCart(shipId,userId,quantity))),
    deleteReview: (reviewId) => dispatch(deleteSingleReview(reviewId, ownProps)),

    // changingQuantity : (shipId,userId,quantity)=>(dispatch(changingQuantity(shipId,userId,quantity)))
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(SingleShipPage);
