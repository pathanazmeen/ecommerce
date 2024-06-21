import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Navigation from './Navigation/Navigation'
import Signup from './Signup/Signup'
import Login from './Login/Login'
import Home from './Home/Home'
import Cart from './Cart/Cart'
import Addproduct from './Addproduct/Addproduct'
export default function App() {
  return (
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>}  />
          <Route path='/add-product' element={<Addproduct/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      
      </BrowserRouter>
  )
}
