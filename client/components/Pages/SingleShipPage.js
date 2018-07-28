import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSingleShip } from '../../store/ship';

const reviewList = (reviews) => {
  if (!reviews) {return <h2>There are no reviews registered in the database</h2>}
  //ternary is not working, fix it later. (if student.campus.name === 'null')
  return reviews.map(review => (
    <div key={review.id}>

      <li>
        {/* We should fix this because it must need authority*/}
        <Link to={`/starships/${review.starshipId}/${review.id}`}>
          <p>Edit review</p>
        </Link>
        <h3>reviewer: {review.userId}</h3>
        <p>review content: {review.content}</p>
        <p>review rate: {review.rate}</p>
      </li>
    
  </div>
    ))
}

class SingleShipPage extends Component {

  constructor() {
    super();
    this.state = {
      quantity : 0,
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchSingleShip(id);
  }

  render() {
    const singleShip = this.props.singleShip;

    return (
      <div>
        <h3>{singleShip.name}</h3>
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
        <h1>Reviews</h1>
          <ul>
            {reviewList(singleShip.reviews)}
          </ul>
        <Link to={`/starships/${singleShip.id}/addreview`}>
          <p>Add review</p>
        </Link>
          
      </div>
    )

  }
}


const mapStateToProps = state => {
  return {
    singleShip: state.ship.singleShip
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleShip: shipId => (dispatch(fetchSingleShip(shipId))),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleShipPage);
