
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup, UserHome} from './components'
import {me} from './store'

// import AddReview from './components/Pages/AddReview'
// import EditReview from './components/Pages/EditReview'
import ShipList from './components/Pages/ShipList'
import CartPage from './components/Pages/CartPage'
import WishListPage from './components/Pages/WishListPage'
import Checkout from './components/Pages/Checkout'
// import SingleUserPage from './components/Pages/SingleUserPage'
import SingleShipPage from './components/Pages/SingleShipPage'
import AddReview from './components/forms/AddReview'
import HomePage from './components/Pages/HomePage';

import CheckoutForm from './components/Pages/Checkout';

//Profile
import SingleUserPage from './components/Pages/SingleUserPage'
/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const { isLoggedIn } = this.props

    return (
      <Switch>

        {/* Routes placed here are available to all visitors */}
        <Route exact path='/' component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route exact path='/home' component={HomePage} />
        <Route exact path="/starships" component={ShipList} />
        <Route exact path='/starships/:id' component={SingleShipPage}/>
        <Route path="/cart" component={CartPage} />
        <Route path='/checkout' component={Checkout} />
        {isLoggedIn &&(
          <Switch>
            <Route exact path='/account' component={SingleUserPage} />
            <Route exact path='/home' component={HomePage} />
            <Route exact path="/starships" component={ShipList} />
            <Route exact path='/starships/:id' component={SingleShipPage}/>
            <Route exact path='/starships/:id/addreview' component={AddReview}/>
            <Route path="/cart" component={CartPage} />
            <Route path='/checkout' component={CheckoutForm} />
            <Route path='/wishlist' component={WishListPage} />
          </Switch>
        )}


        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route path='/users/:userId' component={UserHome} />
          
        </Switch>
        {/* Displays our Login component as a fallback */}
        <Redirect to= '/home'/>
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}

// <Route path='/checkout' component={Checkout} />
// <Route path='/users/:userId' component={SingleUserPage} />
//<Route path="/cart" component={Cart} />


// <Route exact path='/starships/:id/AddReview' component={AddReview}/>
// <Route exact path='/starships/:id/:reviewId' component={AddReview}/>
