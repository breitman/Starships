import React from 'react'



class ReviewForm extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      content: '',
      rate: '',
      userId: this.props.user.id,
      starshipId:this.props.ship.id
    };
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    
    this.setState({

      [event.target.name]: event.target.value,
      
    })
  }
  
  render() {
    return (
      <div>

        <form onSubmit={evt => this.props.handleSubmit(evt, this.state)}>
          <label>
            <label htmlFor="content">Review content:</label>
            <input name="content" type = "text" value = {this.state.content || ''} onChange={this.handleInputChange} />
            <label htmlFor="rate">Review rate:</label>
            <input name="rate" type = "text" value = {this.state.rate || ''} onChange={this.handleInputChange} />
            <h1>{!this.state.content ? "name required": "name is done"}</h1>
            <h1>{!this.state.rate ? "rate required": "rate is done"}</h1>
            <button type="submit">Add review</button>
          </label>
        </form>
      </div>
    )
  }
}

export default ReviewForm;