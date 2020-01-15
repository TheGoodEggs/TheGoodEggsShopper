// import React, {Component} from 'react'
// import Axios from 'axios'

// export default class Register extends Component {
//   handleChange(event) {
//     this.setState({
//       [event.target.name]: event.target.value
//     })
//   }

//   handleSubmit(event) {
//     event.preventDefault() //prevent page refresh
//     // const response = await Axios.post("/api/users", this.state);

//     this.state = {
//       //clear form
//       firstName: '',
//       lastName: '',
//       email: '',
//       password: '',
//       address: '',
//       phone: ''
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h2>Register</h2>
//         <form>onSubmit={props.handleSubmit}</form>
//         <input
//           type="text"
//           name="firstName"
//           placeholder="First Name"
//           value={props.state.firstName}
//           onChange={props.handleChange}
//         />
//         <input
//           type="text"
//           name="lastName"
//           placeholder="Last Name"
//           value={props.state.lastName}
//           onChange={props.handleChange}
//         />
//         <input
//           type="text"
//           name="email"
//           placeholder="Email"
//           value={props.state.email}
//           onChange={props.handleChange}
//         />
//         <input
//           type="text"
//           name="password"
//           placeholder="Password"
//           //   value={props.state.password}     //not storing password?
//           //   onChange={props.handleChange}
//         />
//         <input
//           type="text"
//           name="address"
//           placeholder="Address"
//           value={props.state.address}
//           onChange={props.handleChange}
//         />
//         <input
//           type="text"
//           name="phone"
//           placeholder="Phone"
//           value={props.state.phone}
//           onChange={props.handleChange}
//         />
//       </div>
//     )
//   }
// }
