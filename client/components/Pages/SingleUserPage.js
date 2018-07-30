import React, { Component } from 'react'
import {connect} from 'react-redux'
import {me,updatingUser} from '../../store/user'
require('../style/singleUser.css')

 class SingleUserPage extends Component {
        constructor(props){
            super(props)
            this.state ={
                firstName : '',
                lastName : '',
                email : '',
                address : '',
                state : '',
                country: ''
            }
            this.onChangeHandler = this.onChangeHandler.bind(this)
            this.onSubmitHandler = this.onSubmitHandler.bind(this)
        }
        componentDidMount(){
            this.props.me()
            this.setState(this.props.user)
        }

        onSubmitHandler(evt){
            evt.preventDefault()
            this.props.updatingUser(this.props.user.id,this.state)
            
            function delayedAlert() {
                var timeoutID = window.setTimeout(window.alert, 1000, 'Data Saved!');
            }
            delayedAlert()
        }
        onChangeHandler(evt){
            this.setState({
                [evt.target.name] : evt.target.value
            })
        }
render() {
    return (
        <form onChange={this.onChangeHandler} onSubmit={this.onSubmitHandler}>
        <div className='form-container'>
        <label>First Name</label>
        <input type="text"  name="firstName" value={this.state.firstName ? this.state.firstName : ""}/>
        <hr />
        <label>Last Name</label>
        <input type="text" name="lastName" value={this.state.lastName ? this.state.lastName : ""}/>
<hr />
        <label>Email</label>
        <input type="text" name="email" value={this.state.email ? this.state.email : ""}/>
<hr />
        <label>Address</label>
        <input type="text" name="address" value={this.state.address ? this.state.address : ""}/>
<hr />
        <label>State</label>
        <input type="text"  name="state" value={this.state.state ? this.state.state : ""}/>
<hr />
        <label>Country</label>
        <input type="text"  name="country" value={this.state.country ? this.state.country : ""}/>
<hr />
        </div>
        <div className='submit-btn'>
        <button className="button button4">Submit</button>
        </div>
        </form>
    )
  }
}

const mapStateToProps = state =>{
    return {
        user : state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        me : ()=>(dispatch(me())),
        updatingUser : (userId,userData)=> (dispatch(updatingUser(userId,userData)))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SingleUserPage)