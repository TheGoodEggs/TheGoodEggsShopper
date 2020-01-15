import React from 'react'

import {Navbar, AllProducts, AllProductsContainer} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <AllProductsContainer />
    </div>
  )
}

export default App
