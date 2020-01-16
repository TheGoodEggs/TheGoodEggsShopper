import React from 'react'

import {Navbar, AllProductsContainer, Wishlist} from './components'
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
