import React from 'react'
import store from './store'
import {Navbar, Wishlist} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <Wishlist />
    </div>
  )
}

export default App
