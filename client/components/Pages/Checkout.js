import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm'
import {connect} from 'react-redux'
import { getCart} from '../../store/cart/thunk'

class Checkout extends Component {

    componentDidMount(){
        this.props.getCart(this.props.user.id)
    }

    render() {
        console.log(this.props)
        return (
        <StripeProvider apiKey="pk_test_LwL4RUtinpP3PXzYirX2jNfR">
            <div className="example">
            <h1>Checkout</h1>
            <Elements>
                <CheckoutForm subtotal={this.props.subtotal} shipCount={this.props.shipCount}/>
            </Elements>
            </div>
        </StripeProvider>
        );
    }
}

const mapStateToProps = state => {
    return{
        user: state.user,
        cart: state.cart.cart,
        subtotal: state.cart.subtotal,
        shipCount: state.cart.shipCount
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCart: userId => dispatch(getCart(userId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Checkout)
