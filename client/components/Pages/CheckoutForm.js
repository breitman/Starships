import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import CheckoutSummaryCard from '../cards/CheckoutSummaryCard'
import {Link} from 'react-router-dom'

class CheckoutForm extends Component {
    constructor(props) {
        super(props);
        this.state = {complete: false};
        this.submit = this.submit.bind(this);
    }

        async submit(ev) {
            console.log(this.props.subtotal)
            ev.preventDefault();
            let {token} = await this.props.stripe.createToken({name: "Name"});
            let response = await fetch("/charge", {
            method: "POST",
            headers: {"Content-Type": "text/plain"},
            body: token.id
            });

            if (response.ok) this.setState({complete: true});
        }

    render() {
        if (this.state.complete){
            return (
                <div>
                    <h1>Purchase Complete</h1>
                    <Link to='/home' >Back To Shopping</Link>
                </div>
            )
        }
        return (
        <div className="checkout">
            <p>Would you like to complete the purchase?</p>
            <CheckoutSummaryCard isCheckout={false} subtotal={this.props.subtotal} shipCount={this.props.shipCount}/>
            <CardElement />
            <button onClick={this.submit}>Confirm Purchase</button>
        </div>
        );
    }
}

export default injectStripe(CheckoutForm);
