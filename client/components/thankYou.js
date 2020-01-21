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
        <p>Your order has been placed, confirmation email coming soon!</p>
        <p>Have an EGGCELLENT day</p>
      </div>
    )
  }
}

export default ThankYou
