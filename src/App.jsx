import React from "react"

import Signup from "./Main/UserAuothentication/Signup"
import Singin from "./Main/UserAuothentication/Signin"
import { Route,Routes } from "react-router-dom"
import Header from "./Main/Header"

function App() {
  

  return (
    
      <div>
       <Routes>
          <Route path="/"element={<Header/>}/>
          <Route path="signup" element={<Signup/>}/>
          <Route path='signin'element={<Singin/>}/>
        </Routes>
      </div>
     
  )
}

export default App
