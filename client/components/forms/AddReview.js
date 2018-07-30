import React from 'react'
import {connect} from 'react-redux';
import {addReviews} from '../../store/review'
import ReviewForm from './ReviewForm'

const AddReviewForm = ({handleSubmit, ship, user}) => (
  <React.Fragment>
    <h1>Add a new Review</h1>
    <ReviewForm handleSubmit={handleSubmit} ship={ship} user={user} />
  </React.Fragment>


)

const mapStateToprops = (state) => ({
  ship: state.ship.singleShip,
  user: state.user
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  
   handleSubmit: async (event, reviewData) =>{

    event.preventDefault();
    const starshipAction = await dispatch(addReviews(reviewData, ownProps));
    const theId = starshipAction.payload.starshipId
    ownProps.history.push(`/starships/${theId}`)
  }
  
})

const AddReview = connect(mapStateToprops, mapDispatchToProps)(AddReviewForm)
export default AddReview;