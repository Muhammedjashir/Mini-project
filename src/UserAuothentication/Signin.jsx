import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);
    const response = await axios.get("http://localhost:4100/user");
    const findUser = response.data.find(
      (item) => item.email === input.email && item.password === input.password
    );
    if (!findUser) {
      alert("User not found, please create an account.");
      navigate("/signup");
    } else {
      localStorage.setItem("id", findUser.id);
      alert("Signin Successfully");
      navigate("/");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-8 border border-gray-300 rounded-lg shadow-md bg-gray-50">
      <h1 className="text-2xl text-center text-gray-700 mb-6">Signin</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 font-semibold text-gray-600">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={input.email}
            placeholder="Email ID"
            required
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 font-semibold text-gray-600">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={input.password}
            placeholder="Password"
            required
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-green-500 text-white font-bold rounded hover:bg-white hover:text-black transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signin;
