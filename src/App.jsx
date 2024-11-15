import React from "react"

import Signup from "./Main/UserAuothentication/Signup"
import Singin from "./Main/UserAuothentication/Signin"
import { Route,Routes } from "react-router-dom"
import Header from "./Main/Header"
import Produts from "./Main/UserAuothentication/Pages/Produts"
import Cart from "./Main/UserAuothentication/Pages/Cart"
import Detail from "./Main/UserAuothentication/Pages/Detail"

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
