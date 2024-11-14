import React from "react"
import Main from "./Main/Main"
import Signup from "./Main/UserAuothentication/Signup"
import Singin from "./Main/UserAuothentication/Signin"
import { Route,Routes } from "react-router-dom"

function App() {
  

  return (
    
      <div>
       <Routes>
          <Route path="/"element={<Main/>}/>
          <Route path="singup" element={<Signup/>}/>
          <Route path='singin'element={<Singin/>}/>
        </Routes>
      </div>
     
  )
}

export default App
