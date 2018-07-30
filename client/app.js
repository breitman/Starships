import React from 'react'
import {Navbar} from './components'
import Routes from './routes'
import {StripeProvider} from 'react-stripe-elements'; //wrap in this when ready but breaks app when not fully setup

const App = () => {
  return (
    <div>
        <Navbar />
        <Routes />
    </div>
  )
}

// import React, {Component} from 'react';
// import {Elements, StripeProvider} from 'react-stripe-elements';
// import CheckoutForm from './components/Pages/CheckoutForm';

// class App extends Component {
//   render() {
//     return (
//       <StripeProvider apiKey="pk_test_LwL4RUtinpP3PXzYirX2jNfR">
//         <div className="example">
//           <h1>React Stripe Elements Example</h1>
//           <Elements>
//             <CheckoutForm />
//           </Elements>
//         </div>
//       </StripeProvider>
//     );
//   }
// }

export default App;