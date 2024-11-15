import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  const NewUser={
      ...formdata,
      cart:[],
      order:[]
  }

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/signin");
    console.log(formdata);
    await axios.post("http://localhost:4100/user", NewUser);
  };

  return (
    <div className="max-w-md mx-auto p-8 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-2xl text-center mb-6">Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block mb-2 font-semibold text-gray-700">Username</label>
          <input
            type="text"
            name="name"
            value={formdata.name}
            placeholder="Username"
            pattern="^[A-Za-z0-9]{3,16}$"
            onBlur={() => setFocus({ ...focus, errName: true })}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
          />
          <span className={`text-red-500 text-sm mt-1 ${focus.errName && !formdata.name.match(/^[A-Za-z0-9]{3,16}$/) ? "block" : "hidden"}`}>
            Username should be 3-16 characters
          </span>
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-semibold text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formdata.email}
            placeholder="Email ID"
            onBlur={() => setFocus({ ...focus, errEmail: true })}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
          />
          <span className={`text-red-500 text-sm mt-1 ${focus.errEmail && !formdata.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/) ? "block" : "hidden"}`}>
            Enter a valid email ID
          </span>
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-semibold text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formdata.password}
            placeholder="Password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,16}"
            onBlur={() => setFocus({ ...focus, errPass: true })}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
          />
          <span className={`text-red-500 text-sm mt-1 ${focus.errPass && !formdata.password.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,16}/) ? "block" : "hidden"}`}>
            Password must be 8-16 characters, include uppercase, digit, and special character
          </span>
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-semibold text-gray-700">Confirm Password</label>
          <input
            type="password"
            name="cpassword"
            value={formdata.cpassword}
            placeholder="Confirm Password"
            pattern={formdata.password}
            onBlur={() => setFocus({ ...focus, errCpass: true })}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
          />
          <span className={`text-red-500 text-sm mt-1 ${focus.errCpass && formdata.cpassword !== formdata.password ? "block" : "hidden"}`}>
            Passwords do not match
          </span>
        </div>

        <button type="submit" className="w-full py-3 bg-green-500 text-white font-bold rounded hover:bg-white hover:text-black transition duration-300">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;
