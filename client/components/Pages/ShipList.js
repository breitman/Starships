import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchShips } from '../../store/ship';
import ShipCard from '../cards/ShipCard';
require('../cards/style/shipCard.css')

class ShipList extends Component {
  componentDidMount() {
    this.props.fetchShips();
  }
  render() {
    const { ships, putInCart } = this.props;

    return (
      <div>
        <div className='center'>
        <h1>StarShips</h1>
        </div>
        <div className='card-holder'>
          {
            ships.map((ship)=>{
              return (
                <ShipCard key={ship.id} ship={ship}/>
              )
            })
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ships: state.ship.ships
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchShips: () => dispatch(fetchShips()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShipList);
