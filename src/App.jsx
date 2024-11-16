import React from "react"

import Signup from "./UserAuothentication/Signup"
import Singin from "./UserAuothentication/Signin"
import { Route,Routes } from "react-router-dom"
import Header from "./Main/Header"
import Produts from "../Pages/Produts"
import Cart from "../Pages/Cart"
import Detail from "../Pages/Detail"

function App() {
  

  return (
    
      <div>
       <Routes>
          <Route path="/"element={<Header/>}/>
          <Route path="signup" element={<Signup/>}/>
          <Route path='signin'element={<Singin/>}/>
          <Route path="products"element={<Produts/>}/>
          <Route path="cart" element = {<Cart/>}/>
          <Route path='detail/:id'element = {<Detail/>}/>
        </Routes>
      </div>
     
  )
}

export default App
