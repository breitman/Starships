import React from 'react'
import {Navbar} from './components'
import Routes from './routes'
// import {StripeProvider} from 'react-stripe-elements'; //wrap in this when ready but breaks app when not fully setup

const App = () => {
  return (
    <div>
        <Navbar />
        <Routes />
    </div>
  )
}
export default App
