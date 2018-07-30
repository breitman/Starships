import { React, Component } from 'react';
import { connect } from 'react-redux';
import { removeShip } from '../../store/cart/thunk';
require('./style/CartItems.css');

class WishListItems extends Component {
  constructor(props) {
    super(props);
    this.removeHandler = this.removeHandler.bind(this);
  }

  removeHandler(event) {
    event.preventDefault();
    this.props.removeShip(this.props.ship.starship.id, this.props.userId);
  }

  render() {
    const shipInfo = this.props.ship.starship;

    return (
      <div>
        <hr />
        <div className='container-ships'>
          <div className='container-ships-item '>
            <div className='container-ships-img'>
              <img src={shipInfo.imageUrl} />
            </div>

            <div className='container-ships-info '>
              <p>Name: {shipInfo.name}</p>
              <p>Model: {shipInfo.model}</p>
              <p>manufacturer: {shipInfo.manufacturer}</p>
            </div>

          </div>
          <div className='container-ships-price'>
            <p> ${shipInfo.price}</p>
          </div>
        </div>

        <div className='remove-btn'>
          <button onClick={this.removeHandler} className="remove-button">Remove</button>
        </div>
        <hr />
      </div>
    )
  }
}

export const MapDispatchToProps = dispatch => {
  return {
    removeShip: (shipId, userId) => (dispatch(removeShip(shipId, userId)))
  }
}

export default connect(null, MapDispatchToProps)(WishListItems);