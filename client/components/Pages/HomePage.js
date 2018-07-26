import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchShips} from '../../store/ship'
import {ShipCard} from '../cards/Shipcard'

class HomePage extends Component {

  constructor(){
    super();
    this.state = {
      ships : []
    }
  }

  async componentDidMount(){
    await this.props.fetchAllShips();
  }

  render(){
    console.log(this.props.ships)
    const featuredShips = this.props.ships.filter(ship => ship.isFeatured);
    return (
      <div>
        <h3>StarShips</h3>
        <p>Shop for the best starships in the Galaxy today!</p>
        <h5>Featured StarShips</h5>
        {featuredShips.map((ship) => (
          <ShipCard ship={ship} />
        ))}
        <Link to='/starships' >View All</Link>
      </div>
    )
  }

}

const mapStateToProps = state => {
  console.log(state)
  return {
    ships: state.ship.ships
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllShips: () => dispatch(fetchShips()),
    putInCart: (product, quantity) => dispatch(addToCart(product, quantity))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
