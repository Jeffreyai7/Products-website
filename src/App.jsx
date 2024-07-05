import {Routes, Route} from 'react-router-dom'

import React, { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import ProductList from './components/ProductlList'
import Details from './components/Details'
import Cart from './components/Cart'
import Default from './components/Default'
import Modal from './components/Modal'

function App() {

  
  return (
    <>
      <Navbar/>
        <Routes>
          <Route path='/' element={<ProductList/>} />
          <Route path='/details' element={<Details/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='*' element={<Default/>} />
        </Routes>
        <Modal/>
    </>
  )
}

export default App
