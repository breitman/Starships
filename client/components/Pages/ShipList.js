import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchShips } from '../../store/ship';
import ShipCard from '../cards/ShipCard';

//possibly want to render ship cards on this page instead
//add isLoading

class ShipList extends Component {
  componentDidMount() {
    this.props.fetchShips();
  }
  render() {
    const { ships, putInCart, sessionUser} = this.props;

    return (
      <div>
        <h1>StarShips</h1>
          <ul>
            {ships.map(ship => (
                  <ShipCard ship={ship} key={ship.id} sessionUser={sessionUser}/>
            ))}
          </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ships: state.ship.ships,
    sessionUser: state.session.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchShips: () => dispatch(fetchShips()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShipList);
