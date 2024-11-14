// src/Signup.js
import React, { useState } from "react";
import './singup.css'
import axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";

function Signup() {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const [focus, setFocus] = useState({
    errName: false,
    errEmail: false,
    errPass: false,
    errCpass: false,
  });

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    Navigate('/singin')
    console.log(formdata);
    await axios.post("http://localhost:4100/user", formdata);
  };
  const Navigate = useNavigate()

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="name"
            value={formdata.name}
            placeholder="Username"
            pattern="^[A-Za-z0-9]{3,16}$"
            onBlur={() => setFocus({ ...focus, errName: true })}
            onChange={handleChange}
            required
          />
          <span className={focus.errName && !formdata.name.match(/^[A-Za-z0-9]{3,16}$/) ? "visible" : ""}>
            Username should be 3-16 characters
          </span>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formdata.email}
            placeholder="Email ID"
            onBlur={() => setFocus({ ...focus, errEmail: true })}
            onChange={handleChange}
            required
          />
          <span className={focus.errEmail && !formdata.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/) ? "visible" : ""}>
            Enter a valid email ID
          </span>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formdata.password}
            placeholder="Password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,16}"
            onBlur={() => setFocus({ ...focus, errPass: true })}
            onChange={handleChange}
            required
          />
          <span className={focus.errPass && !formdata.password.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,16}/) ? "visible" : ""}>
            Password must be 8-16 characters, include uppercase, digit, and special character
          </span>
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="cpassword"
            value={formdata.cpassword}
            placeholder="Confirm Password"
            pattern={formdata.password}
            onBlur={() => setFocus({ ...focus, errCpass: true })}
            onChange={handleChange}
            required
          />
          <span className={focus.errCpass && formdata.cpassword !== formdata.password ? "visible" : ""}>
            Passwords do not match
          </span>
        </div>

        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
