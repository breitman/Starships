import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm'

class Checout extends Component {
    render() {
        return (
        <StripeProvider apiKey="pk_test_LwL4RUtinpP3PXzYirX2jNfR">
            <div className="example">
            <h1>React Stripe Elements Example</h1>
            <Elements>
                <CheckoutForm />
            </Elements>
            </div>
        </StripeProvider>
        );
    }
    }

export default Checout 