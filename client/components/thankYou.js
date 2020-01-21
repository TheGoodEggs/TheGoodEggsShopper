import React, {Component} from 'react'

class ThankYou extends Component {
  // flipAbout(event) {
  //   event.preventDefault()
  //   this.setState({...this.state, about: !this.state.about})
  // }
  //if about clicked, render about stuff, else, render null

  render() {
    return (
      <div>
        <h2>Thank you!</h2>
        <h3>Your order has been placed, confirmation email coming soon!</h3>
        <h3>Have an EGGCELLENT day</h3>
      </div>
    )
  }
}

export default ThankYou
