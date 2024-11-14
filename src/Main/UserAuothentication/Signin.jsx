
import React, { useState } from 'react';
import './Signin.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Singin() {
  const [input, setInput] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };
const Navigate = useNavigate()
  const handleSubmit =async (e) => {
    e.preventDefault();
    console.log(input);
    const response = await axios.get("http://localhost:4100/user")
    const findUser = response.data.find((item)=>item.email==input.email&&item.password==input.password)
    if(!findUser){
      alert('User not found create an a Account')
     Navigate('/singup')
    }else{
      localStorage.setItem('id',findUser.id)
      alert("singin Successfully")
      Navigate('/')
    }
  };

  return (
    <div className="signin-container">
      <h1>Signin</h1>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email"
            name="email"
            id="email"
            value={input.email}
            placeholder="Email ID"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password"
            name="password"
            id="password"
            value={input.password}
            placeholder="Password"
            required
          />
        </div>

        <button  type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Singin;
