import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const Navigate=useNavigate()
    const [state,setState]=useState([])
    
  return (
    <div >
      <h1 >its home page</h1>
    </div>
  )
}

export default Home
